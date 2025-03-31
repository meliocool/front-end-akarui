import categoryServices from "@/services/category.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { DateValue } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schemaUpdateInfo = yup.object().shape({
  name: yup.string().required("Please input a new name for the event!"),
  slug: yup.string().required("Please input a slug for the event!"),
  category: yup.string().required("Please select a category!"),
  startDate: yup.mixed<DateValue>().required("Please select a start date!"),
  endDate: yup.mixed<DateValue>().required("Please select a end date!"),
  isPublished: yup.string().required("Please select a status"),
  isFeatured: yup.string().required("Please choose if it will be featured"),
  description: yup
    .string()
    .required("Please input a new description for the event!"),
});

const useInfoTab = () => {
  const router = useRouter();
  const {
    control: controlUpdateInfo,
    handleSubmit: handleSubmitUpdateInfo,
    formState: { errors: errorsUpdateInfo },
    reset: resetUpdateInfo,
    setValue: setValueUpdateInfo,
  } = useForm({
    resolver: yupResolver(schemaUpdateInfo),
  });

  const { data: dataCategory } = useQuery({
    queryKey: ["Categories"],
    queryFn: () => categoryServices.getCategories(),
    enabled: router.isReady,
  });

  return {
    controlUpdateInfo,
    handleSubmitUpdateInfo,
    errorsUpdateInfo,
    resetUpdateInfo,
    setValueUpdateInfo,

    dataCategory,
  };
};

export default useInfoTab;
