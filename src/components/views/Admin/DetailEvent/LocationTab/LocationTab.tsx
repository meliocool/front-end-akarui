import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Select,
  SelectItem,
  Skeleton,
  Spinner,
} from "@nextui-org/react";
import useLocationTab from "./useLocationTab";
import { Controller } from "react-hook-form";
import { useEffect } from "react";
import { IEvent, IEventForm, IRegency } from "@/types/Event";

interface PropTypes {
  dataEvent: IEvent;
  onUpdate: (data: IEventForm) => void;
  dataDefaultRegion: string;
  isPendingDefaultRegion: boolean;
  isPendingUpdate: boolean;
  isSuccessUpdate: boolean;
}

const LocationTab = (props: PropTypes) => {
  const {
    dataEvent,
    onUpdate,
    dataDefaultRegion,
    isPendingDefaultRegion,
    isPendingUpdate,
    isSuccessUpdate,
  } = props;
  const {
    controlUpdateLocation,
    handleSubmitUpdateLocation,
    errorsUpdateLocation,
    resetUpdateLocation,
    setValueUpdateLocation,

    handleSearchRegion,
    searchRegency,
    dataRegion,
  } = useLocationTab();

  useEffect(() => {
    if (dataEvent) {
      setValueUpdateLocation("address", `${dataEvent?.location?.address}`);
      setValueUpdateLocation("isOnline", `${dataEvent?.isOnline}`);
      setValueUpdateLocation("region", `${dataEvent?.location?.region}`);
      setValueUpdateLocation(
        "latitude",
        `${dataEvent?.location?.coordinates[0]}`,
      );
      setValueUpdateLocation(
        "longitude",
        `${dataEvent?.location?.coordinates[1]}`,
      );
    }
  }, [dataEvent]);

  useEffect(() => {
    if (isSuccessUpdate) {
      resetUpdateLocation();
    }
  }, [isSuccessUpdate]);

  return (
    <Card className="w-full p-4 lg:w-1/2">
      <CardHeader className="flex-col items-center">
        <h1 className="w-full text-xl font-bold">Event Location</h1>
        <p className="w-full text-small text-default-400">
          Manage the location of this event
        </p>
      </CardHeader>
      <CardBody>
        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmitUpdateLocation(onUpdate)}
        >
          <Skeleton
            isLoaded={!!dataEvent?.location?.address}
            className="rounded-lg"
          >
            <Controller
              name="address"
              control={controlUpdateLocation}
              render={({ field }) => (
                <Input
                  {...field}
                  label="Address"
                  labelPlacement="outside"
                  variant="bordered"
                  isInvalid={errorsUpdateLocation.address !== undefined}
                  errorMessage={errorsUpdateLocation.address?.message}
                />
              )}
            />
          </Skeleton>
          <Skeleton
            isLoaded={!!dataEvent?.isOnline !== undefined}
            className="rounded-lg"
          >
            <Controller
              name="isOnline"
              control={controlUpdateLocation}
              render={({ field }) => (
                <Select
                  {...field}
                  label="Online / Offline"
                  variant="bordered"
                  labelPlacement="outside"
                  isInvalid={errorsUpdateLocation.isOnline !== undefined}
                  errorMessage={errorsUpdateLocation.isOnline?.message}
                  disallowEmptySelection
                  defaultSelectedKeys={[dataEvent?.isOnline ? "true" : "false"]}
                >
                  <SelectItem key="true" value="true">
                    Online
                  </SelectItem>
                  <SelectItem key="false" value="false">
                    Offline
                  </SelectItem>
                </Select>
              )}
            />
          </Skeleton>
          <div className="mb-2 flex flex-col gap-4">
            <Skeleton
              isLoaded={
                !!dataEvent?.location?.region && !isPendingDefaultRegion
              }
              className="rounded-lg"
            >
              {!isPendingDefaultRegion ? (
                <Controller
                  name="region"
                  control={controlUpdateLocation}
                  render={({ field: { onChange, ...field } }) => (
                    <Autocomplete
                      {...field}
                      defaultItems={
                        dataRegion?.data.data && searchRegency !== ""
                          ? dataRegion?.data.data
                          : []
                      }
                      defaultInputValue={dataDefaultRegion}
                      label="City"
                      labelPlacement="outside"
                      variant="bordered"
                      onInputChange={(search) => handleSearchRegion(search)}
                      isInvalid={errorsUpdateLocation.region !== undefined}
                      errorMessage={errorsUpdateLocation.region?.message}
                      onSelectionChange={(value) => onChange(value)}
                      placeholder="Search a Regency Here"
                    >
                      {(regency: IRegency) => (
                        <AutocompleteItem key={`${regency.id}`}>
                          {regency.name}
                        </AutocompleteItem>
                      )}
                    </Autocomplete>
                  )}
                />
              ) : (
                <div className="h-14 w-full" />
              )}
            </Skeleton>
            <div className="flex flex-row gap-2">
              <Skeleton
                isLoaded={!!dataEvent?.location?.coordinates[0]}
                className="rounded-lg"
              >
                <Controller
                  name="latitude"
                  control={controlUpdateLocation}
                  render={({ field }) => (
                    <Input
                      {...field}
                      label="Latitude"
                      labelPlacement="outside"
                      variant="bordered"
                      isInvalid={errorsUpdateLocation.latitude !== undefined}
                      errorMessage={errorsUpdateLocation.latitude?.message}
                    />
                  )}
                />
              </Skeleton>
              <Skeleton
                isLoaded={!!dataEvent?.location?.coordinates[1]}
                className="rounded-lg"
              >
                <Controller
                  name="longitude"
                  control={controlUpdateLocation}
                  render={({ field }) => (
                    <Input
                      {...field}
                      label="Longitude"
                      labelPlacement="outside"
                      variant="bordered"
                      isInvalid={errorsUpdateLocation.longitude !== undefined}
                      errorMessage={errorsUpdateLocation.longitude?.message}
                    />
                  )}
                />
              </Skeleton>
            </div>
          </div>
          <Button
            color="primary"
            className="mt-2 disabled:bg-default-500"
            type="submit"
            disabled={isPendingUpdate || !dataEvent?._id}
          >
            {isPendingUpdate ? (
              <Spinner size="sm" color="white" />
            ) : (
              "Save Changes"
            )}
          </Button>
        </form>
      </CardBody>
    </Card>
  );
};

export default LocationTab;
