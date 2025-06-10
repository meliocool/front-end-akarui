import LandingPageLayout from "@/components/layouts/LandingPageLayout";
import DetailEvent from "@/components/views/DetailEvent";

// const inter = Inter({ subsets: ["latin"] });

const DetailEventPage = () => {
  return (
    <LandingPageLayout title="DetailEvent">
      <DetailEvent />
    </LandingPageLayout>
  );
};

export default DetailEventPage;
