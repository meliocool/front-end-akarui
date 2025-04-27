import { DELAY } from "@/constants/list.constants";
import useDebounce from "@/hooks/useDebounce";
import eventServices from "@/services/event.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schemaUpdateLocation = yup.object().shape({
  isOnline: yup
    .string()
    .required("Please select if it will be online or offline"),
  address: yup.string().required("Please provide an address!"),
  region: yup.string().required("Please select a region"),
  latitude: yup.string().required("Please input a latitude coordinate"),
  longitude: yup.string().required("Please input a longitude coordinate"),
});

const useLocationTab = () => {
  const debounce = useDebounce();
  const [searchRegency, setSearchRegency] = useState("");
  const {
    control: controlUpdateLocation,
    handleSubmit: handleSubmitUpdateLocation,
    formState: { errors: errorsUpdateLocation },
    reset: resetUpdateLocation,
    setValue: setValueUpdateLocation,
  } = useForm({
    resolver: yupResolver(schemaUpdateLocation),
  });

  const { data: dataRegion } = useQuery({
    queryKey: ["region", searchRegency],
    queryFn: () => eventServices.searchLocationByRegency(`${searchRegency}`),
    enabled: searchRegency !== "",
  });

  const handleSearchRegion = (region: string) => {
    debounce(() => setSearchRegency(region), DELAY);
  };

  return {
    controlUpdateLocation,
    handleSubmitUpdateLocation,
    errorsUpdateLocation,
    resetUpdateLocation,
    setValueUpdateLocation,

    handleSearchRegion,
    searchRegency,
    dataRegion,
  };
};

export default useLocationTab;
