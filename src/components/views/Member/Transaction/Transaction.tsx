import DataTable from "@/components/ui/DataTable";
import { Chip, useDisclosure } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { Key, ReactNode, useCallback, useEffect } from "react";
import { COLUMN_LIST_TRANSACTION } from "./Transaction.constants";
import useTransaction from "./useTransaction";
import useChangeUrl from "@/hooks/useChangeUrl";
import DropdownAction from "@/components/commons/DropdownAction";
import { convertIDR } from "@/utils/currency";

const Banner = () => {
  const { push, isReady, query } = useRouter();
  const {
    dataTransactions,
    isLoadingTransactions,
    isRefetchingTransactions,
    refetchTransactions,
  } = useTransaction();

  const { setUrl } = useChangeUrl();

  useEffect(() => {
    if (isReady) {
      setUrl();
    }
  }, [isReady]);

  const renderCell = useCallback(
    (transaction: Record<string, unknown>, columnKey: Key) => {
      const cellValue = transaction[columnKey as keyof typeof transaction];
      switch (columnKey) {
        case "status":
          return (
            <Chip
              color={
                cellValue === "completed"
                  ? "success"
                  : cellValue === "pending"
                    ? "warning"
                    : "danger"
              }
              size="sm"
              variant="flat"
              className="capitalize"
            >
              {cellValue as ReactNode}
            </Chip>
          );
        case "total":
          return convertIDR(Number(cellValue));
        case "actions":
          return (
            <DropdownAction
              onPressButtonDetail={() =>
                push(`/member/transaction/${transaction._id}`)
              }
              hideButtonDelete
            />
          );
        default:
          return cellValue as ReactNode;
      }
    },
    [push],
  );
  return (
    <section>
      {Object.keys(query).length > 0 && (
        <DataTable
          columns={COLUMN_LIST_TRANSACTION}
          data={dataTransactions?.data || []}
          emptyContent="No Transactions Yet"
          isLoading={isLoadingTransactions || isRefetchingTransactions}
          renderCell={renderCell}
          totalPages={dataTransactions?.pagination.totalPages}
        />
      )}
    </section>
  );
};

export default Banner;
