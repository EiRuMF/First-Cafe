import ProfilePhoto from "./ProfilePhoto";
import EditProfile from "./EditProfile";
import OrderHistory from "./OrderHistory";

function ProfilePage() {
  const user = {
    name: "John Doe",
    email: "johndoe@gmail.com",
    photo: "https://i.pravatar.cc/150?img=3",
  };

  const orders = [
    {
      id: "#ORD-001",
      date: "12 Feb 2026",
      total: "Rp 85.000",
      status: "Completed",
    },
    {
      id: "#ORD-002",
      date: "10 Feb 2026",
      total: "Rp 45.000",
      status: "Completed",
    },
  ];

  const handleEdit = () => {
    console.log("Edit clicked");
  };

  return (
    <div className="p-4 w-full space-y-6 pb-24">
      <ProfilePhoto user={user} />
      <EditProfile onEdit={handleEdit} />
      <OrderHistory orders={orders} />
    </div>
  );
}

export default ProfilePage;
