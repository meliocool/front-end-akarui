import useChangeUrl from "@/hooks/useChangeUrl";
import orderServices from "@/services/order.service";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState } from "react";

const useTransaction = () => {
  const router = useRouter();

  const { currentLimit, currentPage, currentSearch } = useChangeUrl();

  const [selectedId, setSelectedId] = useState("");

  const getAdminTransaction = async () => {
    let params = `limit=${currentLimit}&page=${currentPage}&search=${currentSearch}`;

    const result = await orderServices.getOrders(params);
    const { data } = result;
    return data;
  };

  const {
    data: dataTransactions,
    isLoading: isLoadingTransactions,
    isRefetching: isRefetchingTransactions,
    refetch: refetchTransactions,
  } = useQuery({
    queryKey: ["AdminTransaction", currentPage, currentLimit, currentSearch],
    queryFn: () => getAdminTransaction(),
    enabled: router.isReady && !!currentPage && !!currentLimit,
  });

  return {
    isLoadingTransactions,
    dataTransactions,
    isRefetchingTransactions,
    refetchTransactions,

    selectedId,
    setSelectedId,
  };
};

export default useTransaction;
