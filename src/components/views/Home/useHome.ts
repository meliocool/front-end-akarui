import {
  LIMIT_BANNER,
  LIMIT_CATEGORY,
  LIMIT_EVENT,
  PAGE_DEFAULT,
} from "@/constants/list.constants";
import bannerServices from "@/services/banner.service";
import categoryServices from "@/services/category.service";
import eventServices from "@/services/event.service";
import { useQuery } from "@tanstack/react-query";

const useHome = () => {
  const getBanners = async () => {
    let params = `limit=${LIMIT_BANNER}&page=${PAGE_DEFAULT}`;
    const result = await bannerServices.getBanners(params);
    const { data } = result;
    return data;
  };

  const { data: dataBanners, isLoading: isLoadingBanners } = useQuery({
    queryKey: ["Banners"],
    queryFn: getBanners,
    enabled: true,
  });

  const getCategories = async () => {
    let params = `limit=${LIMIT_CATEGORY}&page=${PAGE_DEFAULT}`;
    const result = await categoryServices.getCategories(params);
    const { data } = result;
    return data;
  };

  const { data: dataCategories, isLoading: isLoadingCategories } = useQuery({
    queryKey: ["Categories"],
    queryFn: getCategories,
    enabled: true,
  });

  const getEvents = async (params: string) => {
    const result = await eventServices.getEvents(params);
    const { data } = result;
    return data;
  };

  const currentEventQuery =
    "limit=${LIMIT_EVENT}&page=${PAGE_DEFAULT}&isPublished=true";

  const { data: dataFeaturedEvents, isLoading: isLoadingFeaturedEvents } =
    useQuery({
      queryKey: ["FeaturedEvents"],
      queryFn: () => getEvents(`${currentEventQuery}&isFeatured=true`),
      enabled: true,
    });

  const { data: dataLatestEvents, isLoading: isLoadingLatestEvents } = useQuery(
    {
      queryKey: ["LatestEvents"],
      queryFn: () => getEvents(currentEventQuery),
      enabled: true,
    },
  );

  return {
    dataBanners,
    dataFeaturedEvents,
    dataLatestEvents,
    dataCategories,
    isLoadingCategories,
    isLoadingBanners,
    isLoadingFeaturedEvents,
    isLoadingLatestEvents,
  };
};

export default useHome;
