import LandingPageLayout from "@/components/layouts/LandingPageLayout";
import Event from "@/components/views/Event";

// const inter = Inter({ subsets: ["latin"] });

const EventPage = () => {
  return (
    <LandingPageLayout title="Event">
      <Event />
    </LandingPageLayout>
  );
};

export default EventPage;
