import DetailBanner from "@/components/views/Admin/DetailBanner";
import DashboardLayout from "@/components/layouts/DashboardLayout";

const AdminDetailBannerPage = () => {
  return (
    <DashboardLayout
      title="Banner Details"
      description="Manage Information for this Banner"
      type="admin"
    >
      <DetailBanner />
    </DashboardLayout>
  );
};

export default AdminDetailBannerPage;
