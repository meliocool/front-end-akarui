import DashboardLayout from "@/components/layouts/DashboardLayout";
import DetailTransaction from "@/components/views/Admin/DetailTransaction";

const DetailTransactionAdminPage = () => {
  return (
    <DashboardLayout
      title="Detail Transaction"
      description="Transaction Details"
      type="admin"
    >
      <DetailTransaction />
    </DashboardLayout>
  );
};

export default DetailTransactionAdminPage;
