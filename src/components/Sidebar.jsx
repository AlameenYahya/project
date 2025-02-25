const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 p-4 flex flex-col shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-8">
        <img src="https://via.placeholder.com/40" alt="LoadWise Logo" className="w-8 h-8" />
        <span className="text-lg font-semibold text-gray-800">LoadWise</span>
        <i className="fas fa-chevron-right text-gray-400"></i>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <h4 className="text-gray-400 text-xs uppercase mb-3">Main</h4>
        <ul className="space-y-4">
          {/* Dashboard */}
          <li className="flex items-center gap-3 text-blue-500 cursor-pointer font-medium">
            <i className="fas fa-home"></i> Dashboard
          </li>

          {/* Other menu items */}
          {[
            { name: "Shipment & Tracking", icon: "fas fa-shipping-fast" },
            { name: "Finance", icon: "fas fa-file-invoice-dollar" },
            { name: "Vehicles", icon: "fas fa-car" },
            { name: "Employees", icon: "fas fa-users" },
            { name: "Customers", icon: "fas fa-user-friends" },
          ].map((item) => (
            <li key={item.name} className="flex items-center gap-3 text-gray-600 hover:text-blue-500 cursor-pointer">
              <i className={item.icon}></i> {item.name}
            </li>
          ))}
        </ul>

        {/* Other Section */}
        <h4 className="text-gray-400 text-xs uppercase mt-6 mb-3">Other</h4>
        <ul className="space-y-4">
          <li className="flex items-center gap-3 text-gray-600 hover:text-blue-500 cursor-pointer">
            <i className="fas fa-cog"></i> Settings
          </li>
        </ul>
      </nav>

      {/* Log Out */}
      <div className="mt-auto border-t pt-4">
        <div className="flex items-center gap-3 text-red-500 cursor-pointer hover:text-red-600">
          <i className="fas fa-sign-out-alt"></i> Log Out
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
