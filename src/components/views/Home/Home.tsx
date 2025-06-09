import { Skeleton } from "@nextui-org/react";
import HomeEventList from "./HomeEventList";
import HomeSlider from "./HomeSlider";
import useHome from "./useHome";
import Image from "next/image";
import HomeCategoryList from "./HomeCategoryList";

const Home = () => {
  const {
    dataBanners,
    dataFeaturedEvents,
    dataLatestEvents,
    dataCategories,
    isLoadingCategories,
    isLoadingBanners,
    isLoadingFeaturedEvents,
    isLoadingLatestEvents,
  } = useHome();
  return (
    <div>
      <HomeSlider
        banners={dataBanners?.data}
        isLoadingBanners={isLoadingBanners}
      />
      <HomeEventList
        title="Featured Events"
        events={dataFeaturedEvents?.data}
        isLoading={isLoadingFeaturedEvents}
        urlMore="/event?isFeatured=true"
      />
      <Skeleton
        isLoaded={!isLoadingBanners}
        className="mb-16 h-[20vw] w-full rounded-2xl px-6 lg:px-0"
      >
        <Image
          src="/images/banner/AKARUIBANNER.png"
          alt="banner"
          className="h-[20vw] w-full rounded-2xl object-cover object-center"
          width={1920}
          height={1080}
        />
      </Skeleton>
      <HomeEventList
        title="Latest Events"
        events={dataLatestEvents?.data}
        isLoading={isLoadingLatestEvents}
      />
      <HomeCategoryList
        categories={dataCategories?.data}
        isLoading={isLoadingCategories}
      />
    </div>
  );
};

export default Home;
