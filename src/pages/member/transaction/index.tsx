import DashboardLayout from "@/components/layouts/DashboardLayout";
import Transaction from "@/components/views/Member/Transaction";

const TransactionMemberPage = () => {
  return (
    <DashboardLayout
      title="Transaction"
      description="List of all Transactions"
      type="member"
    >
      <Transaction />
    </DashboardLayout>
  );
};

export default TransactionMemberPage;
