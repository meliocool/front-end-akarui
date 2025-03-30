import Category from "@/components/views/Admin/Category";
import DashboardLayout from "@/components/layouts/DashboardLayout";

const AdminCategoryPage = () => {
  return (
    <DashboardLayout
      title="Category"
      description="List of All Categories, Create New Category, and Manage existing Categories"
      type="admin"
    >
      <Category />
    </DashboardLayout>
  );
};

export default AdminCategoryPage;
