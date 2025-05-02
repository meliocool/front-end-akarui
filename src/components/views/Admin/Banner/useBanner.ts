import useChangeUrl from "@/hooks/useChangeUrl";
import bannerServices from "@/services/banner.service";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState } from "react";

const useBanner = () => {
  const [selectedId, setSelectedId] = useState<string>("");
  const router = useRouter();

  const { currentLimit, currentPage, currentSearch } = useChangeUrl();

  const getBanners = async () => {
    let params = `limit=${currentLimit}&page=${currentPage}`;
    if (currentSearch) {
      params += `&search=${currentSearch}`;
    }
    const result = await bannerServices.getBanners(params);
    const { data } = result;
    return data;
  };

  const {
    data: dataBanners,
    isLoading: isLoadingBanners,
    isRefetching: isRefetchingBanners,
    refetch: refetchBanners,
  } = useQuery({
    queryKey: ["Banners", currentPage, currentLimit, currentSearch],
    queryFn: () => getBanners(),
    enabled: router.isReady && !!currentPage && !!currentLimit,
  });

  return {
    isLoadingBanners,
    dataBanners,
    isRefetchingBanners,
    refetchBanners,

    selectedId,
    setSelectedId,
  };
};

export default useBanner;
