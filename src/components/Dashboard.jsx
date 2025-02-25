import Sidebar from "./Sidebar";
import Header from "./Header";
import RevenueCard from "./RevenueCard";
import AvailableTruck from "./AvailableTruck";
import ShippingPerformance from "./ShippingPerformance";
import ParcelList from "./ParcelList";
//import TaskList from "./TaskList";
import PendingTasks from "./PendingTasks";


const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="grid grid-cols-3 gap-4 p-4">
          <RevenueCard />
          <AvailableTruck />
          <ShippingPerformance />
        </div>
        <div className="grid grid-cols-2 gap-4 p-4">
          <ParcelList />
          
          <PendingTasks />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
