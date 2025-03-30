import DashboardLayout from "@/components/layouts/DashboardLayout";
import Events from "@/components/views/Admin/Events";

const AdminEventPage = () => {
  return (
    <DashboardLayout
      title="Event"
      description="List of All Events, Create New Events, and Manage existing Events"
      type="admin"
    >
      <Events />
    </DashboardLayout>
  );
};

export default AdminEventPage;
