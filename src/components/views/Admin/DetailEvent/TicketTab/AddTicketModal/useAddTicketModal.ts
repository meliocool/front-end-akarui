import { ToasterContext } from "@/contexts/ToasterContext";
import ticketServices from "@/services/ticket.service";
import { ITicket } from "@/types/Ticket";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  price: yup.string().required("Please input a price for this ticket!"),
  name: yup.string().required("Please input a name for this ticket!"),
  description: yup
    .string()
    .required("Please input a description for this ticket!"),
  quantity: yup.string().required("Please input a quantity for this ticket!"),
});

const useAddTicketModal = () => {
  const router = useRouter();
  const { setToaster } = useContext(ToasterContext);
  const {
    control,
    handleSubmit: handleSubmitForm,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const addTicket = async (payload: ITicket) => {
    const result = await ticketServices.addTicket(payload);
    return result;
  };

  const {
    mutate: mutateAddTicket,
    isPending: isPendingMutateAddTicket,
    isSuccess: isSuccessMutateAddTicket,
  } = useMutation({
    mutationFn: addTicket,
    onError: (error) => {
      setToaster({
        type: "error",
        message: error.message,
      });
    },
    onSuccess: () => {
      setToaster({
        type: "success",
        message: "Ticket added successfully!",
      });
      reset();
    },
  });

  const handleAddTicket = (data: ITicket) => {
    data.events = `${router.query.id}`;
    data.price = Number(data.price);
    data.quantity = Number(data.quantity);
    mutateAddTicket(data);
  };

  return {
    control,
    errors,
    reset,
    handleSubmitForm,
    handleAddTicket,
    isPendingMutateAddTicket,
    isSuccessMutateAddTicket,
  };
};

export default useAddTicketModal;
