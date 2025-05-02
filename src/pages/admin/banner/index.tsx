import Banner from "@/components/views/Admin/Banner";
import DashboardLayout from "@/components/layouts/DashboardLayout";

const AdminBannerPage = () => {
  return (
    <DashboardLayout
      title="Banner"
      description="List of All Banners, Create New Banner, and Manage existing Banners"
      type="admin"
    >
      <Banner />
    </DashboardLayout>
  );
};

export default AdminBannerPage;
