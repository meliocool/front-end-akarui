import DetailCategory from "@/components/views/Admin/DetailCategory";
import DashboardLayout from "@/components/layouts/DashboardLayout";

const AdminDetailCategoryPage = () => {
  return (
    <DashboardLayout
      title="Category Details"
      description="Manage Information for this Category"
      type="admin"
    >
      <DetailCategory />
    </DashboardLayout>
  );
};

export default AdminDetailCategoryPage;
