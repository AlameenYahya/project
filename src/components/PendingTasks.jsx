const tasks = [
    { id: 1, name: "Sarah Kate", role: "General Manager", image: "https://via.placeholder.com/40" },
    { id: 2, name: "Sarah Kate", role: "General Manager", image: "https://via.placeholder.com/40" },
    { id: 3, name: "Sarah Kate", role: "General Manager", image: "https://via.placeholder.com/40" },
    { id: 4, name: "Sarah Kate", role: "General Manager", image: "https://via.placeholder.com/40" },
    { id: 5, name: "Sarah Kate", role: "General Manager", image: "https://via.placeholder.com/40" },
  ];
  
  const PendingTasks = () => {
    return (
      <div className="bg-white p-4 rounded-lg shadow border border-gray-200 w-full">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-lg font-medium text-gray-600">Pending Tasks</h3>
            <p className="text-gray-400 text-sm">List of all employees with their tasks.</p>
          </div>
          <i className="fas fa-search text-gray-400 cursor-pointer"></i>
        </div>
  
        {/* Task List */}
        <div className="space-y-3">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex justify-between bg-gray-100 items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
            >
              {/* User Info */}
              <div className="flex items-center gap-3">
                <img src={task.image} alt={task.name} className="w-8 h-8 rounded-full" />
                <div>
                  <p className="font-medium text-gray-900">{task.name} <span className="text-blue-500 text-sm">•</span></p>
                  <p className="text-gray-400 text-sm">{task.role}</p>
                </div>
              </div>
  
              {/* View Details */}
              <button className="text-blue-500 text-sm font-medium hover:underline">View details</button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default PendingTasks;
  