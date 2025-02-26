const parcels = [
  {
    id: 1,
    name: "Sharon Gali",
    email: "sharongali@gmail.com",
    truck: "Channel 45",
    trackingId: "823882jnrsj...",
    status: "Delivered",
  },
  {
    id: 2,
    name: "Bello Opeyemi",
    email: "bellopeyemi@gmail.com",
    truck: "Toyota2003",
    trackingId: "823882jnrsj...",
    status: "In Progress",
  },
  {
    id: 3,
    name: "Rosso Antico",
    email: "rossoantico@gmail.com",
    truck: "Chaingah34",
    trackingId: "823882jnrsj...",
    status: "In Progress",
  },
  {
    id: 4,
    name: "Bello Opeyemi",
    email: "bellopeyemi@gmail.com",
    truck: "Toyota2003",
    trackingId: "823882jnrsj...",
    status: "Delivered",
  },
  {
    id: 5,
    name: "TBF Bakery",
    email: "tbfbakery@gmail.com",
    truck: "Channel 45",
    trackingId: "823882jnrsj...",
    status: "Delivered",
  },
];

const ParcelList = () => {
  return (
    <div className="bg-white p-4 shadow rounded-lg border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 ">
        <div>
          <h2 className="text-lg font-medium text-gray-600">Parcels</h2>
          <p className="text-gray-400 text-sm">List of all parcels with their details.</p>
        </div>
        <button className="text-blue-500 border border-blue-500 px-4 py-1 rounded hover:bg-blue-500 hover:text-white transition">
          View full report
        </button>
      </div>

      {/* Scrollable Container */}
      <div className="overflow-x-auto">
        <div className="min-w-[400px]">
          {/* Table Header */}
          <div className="grid grid-cols-[0.8fr_0.8fr_0.8fr_0.8fr_40px] items-center border-b border-gray-100 py-2 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <span>Customers</span>
            </div>
            <span>Truck Names</span>
            <span>Tracking ID</span>
            <span>Status</span>
            <span className="text-right">Edit</span>
          </div>

          {/* Table Body */}
          <div className="space-y-0 gap-1">
            {parcels.map((parcel) => (
              <div
                key={parcel.id}
                className="grid grid-cols-[0.7fr_0.7fr_0.7fr_0.7fr_30px] items-center border-b border-gray-100 last:border-b-0 py-3 h-14"
              >
                {/* Checkbox and Customer */}
                <div className="flex items-center gap-1 overflow-hidden">
                  <input type="checkbox" className="w-4 h-4" />
                  <div className="flex items-center gap-1 truncate">
                    <i className="fas fa-user-circle text-gray-400 text-xl"></i>
                    <div className="truncate">
                      <p className="font-medium text-gray-600 truncate">{parcel.name}</p>
                      <p className="text-gray-400 text-sm truncate">{parcel.email}</p>
                    </div>
                  </div>
                </div>

                {/* Truck Name */}
                <span className="text-gray-600 truncate text-sm gap-1">{parcel.truck}</span>

                {/* Tracking ID */}
                <span className="text-gray-600 truncate text-sm gap-1">{parcel.trackingId}</span>

                {/* Status */}
                <span
                  className={`px-3 py-1 gap-1 rounded-full text-xs font-medium text-white w-max truncate ${
                    parcel.status === "Delivered" ? "bg-green-500" : "bg-yellow-500"
                  }`}
                >
                  {parcel.status}
                </span>

                {/* Edit Icon */}
                <div className="flex items-center justify-end">
                  <i className="fas fa-edit text-gray-400 cursor-pointer hover:text-blue-500"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParcelList;
