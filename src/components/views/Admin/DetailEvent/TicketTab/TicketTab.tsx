import DropdownAction from "@/components/commons/DropdownAction";
import DataTable from "@/components/ui/DataTable";
import { convertIDR } from "@/utils/currency";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  useDisclosure,
} from "@nextui-org/react";
import { Fragment, Key, ReactNode, useCallback, useState } from "react";
import { TICKET_LIST_EVENT } from "./TicketTab.constants";
import useTicketTab from "./useTicketTab";
import AddTicketModal from "./AddTicketModal/AddTicketModal";
import DeleteTicketModal from "./DeleteTicketModal";
import { ITicket } from "@/types/Ticket";
import UpdateTicketModal from "./UpdateTicketModal/UpdateTicketModal";

const TicketTab = () => {
  const { dataTicket, refetchTicket, isPendingTicket, isRefetchingTicket } =
    useTicketTab();
  const addTicketModal = useDisclosure();
  const deleteTicketModal = useDisclosure();
  const updateTicketModal = useDisclosure();

  const [selectedDataTicket, setSelectedDataTicket] = useState<ITicket | null>(
    null,
  );

  const renderCell = useCallback(
    (ticket: Record<string, unknown>, columnKey: Key) => {
      const cellValue = ticket[columnKey as keyof typeof ticket];
      switch (columnKey) {
        case "price":
          return `${convertIDR(cellValue as number)}`;
        case "actions":
          return (
            <DropdownAction
              onPressButtonDetail={() => {
                setSelectedDataTicket(ticket as ITicket);
                updateTicketModal.onOpen();
              }}
              onPressButtonDelete={() => {
                setSelectedDataTicket(ticket as ITicket);
                deleteTicketModal.onOpen();
              }}
            />
          );
        default:
          return cellValue as ReactNode;
      }
    },
    [],
  );

  return (
    <Fragment>
      <Card className="w-full p-4">
        <CardHeader className="flex items-center justify-between">
          <div className="flex flex-col items-center">
            <h1 className="w-full text-xl font-bold">Event Tickets</h1>
            <p className="w-full text-small text-default-400">Manage Tickets</p>
          </div>
          <Button color="primary" onPress={addTicketModal.onOpen}>
            Add New Ticket
          </Button>
        </CardHeader>
        <CardBody className="pt-0">
          <DataTable
            columns={TICKET_LIST_EVENT}
            data={dataTicket || []}
            emptyContent="Event is Empty"
            isLoading={isPendingTicket || isRefetchingTicket}
            //   onClickButtonTopContent={addEventModal.onOpen}
            renderCell={renderCell}
            showSearch={false}
            showLimit={false}
            totalPages={1}
          />
        </CardBody>
      </Card>
      <AddTicketModal {...addTicketModal} refetchTicket={refetchTicket} />
      <DeleteTicketModal
        {...deleteTicketModal}
        selectedDataTicket={selectedDataTicket}
        setSelectedDataTicket={setSelectedDataTicket}
        refetchTicket={refetchTicket}
      />
      <UpdateTicketModal
        {...updateTicketModal}
        selectedDataTicket={selectedDataTicket}
        setSelectedDataTicket={setSelectedDataTicket}
        refetchTicket={refetchTicket}
      />
    </Fragment>
  );
};

export default TicketTab;
