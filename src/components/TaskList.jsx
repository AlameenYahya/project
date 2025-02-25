const TaskList = () => {
  return (
    <div className="bg-white p-4 shadow rounded-lg border border-gray-200">
      <h2 className="text-lg font-medium mb-2">Pending Tasks</h2>
      <p className="text-gray-400 text-sm mb-4">List of all employees with their tasks.</p>

      <div className="space-y-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="flex justify-between items-center border-b py-2">
            <div className="flex items-center gap-3">
              <img src="https://via.placeholder.com/40" alt="Employee" className="rounded-full w-8 h-8" />
              <div>
                <p className="font-medium">Sarah Kate</p>
                <p className="text-gray-400 text-sm">General Manager</p>
              </div>
            </div>
            <button className="text-blue-500 text-sm">View details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
