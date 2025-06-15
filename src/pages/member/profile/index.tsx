import DashboardLayout from "@/components/layouts/DashboardLayout";
import Profile from "@/components/views/Member/Profile";

const ProfileMemberPage = () => {
  return (
    <DashboardLayout
      title="Profile"
      description="Manage your Profile"
      type="member"
    >
      <Profile />
    </DashboardLayout>
  );
};

export default ProfileMemberPage;
