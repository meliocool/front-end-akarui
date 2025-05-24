import LandingPageLayout from "@/components/layouts/LandingPageLayout";
import Home from "@/components/views/Home";

// const inter = Inter({ subsets: ["latin"] });

const HomePage = () => {
  return (
    <LandingPageLayout title="Home">
      <Home />
    </LandingPageLayout>
  );
};

export default HomePage;
