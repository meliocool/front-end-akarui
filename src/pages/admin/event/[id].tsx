import DetailEvent from "@/components/views/Admin/DetailEvent";
import DashboardLayout from "@/components/layouts/DashboardLayout";

const AdminDetailEventPage = () => {
  return (
    <DashboardLayout
      title="Event Details"
      description="Manage Information for this Event"
      type="admin"
    >
      <DetailEvent />
    </DashboardLayout>
  );
};

export default AdminDetailEventPage;
