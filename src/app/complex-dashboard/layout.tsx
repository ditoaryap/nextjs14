// import UserAnalytics from "@/components/UserAnalytics";
// import RevenueMetrics from "@/components/RevenueMetrics";
// import Notifications from "@/components/Notifications";

export default function Dashboardlayout({
  children,
  users,
  revenue,
  notifications,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <div>
      <div>{children}</div>
      <div className="flex">
        <div className="flex-col">
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div className="flex flex-1">{notifications}</div>
      </div>
    </div>
  );
}
