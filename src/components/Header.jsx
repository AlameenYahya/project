const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-white shadow-sm">
      <h1 className="text-lg font-medium text-gray-600">Good to have you, Abdullahi!</h1>
      <div className="flex items-center gap-4">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search" 
            className="border border-gray-300 rounded-md px-4 py-1 text-sm"
          />
          <i className="fas fa-search absolute right-3 top-1.5 text-gray-400"></i>
        </div>
        <i className="fas fa-bell text-gray-500"></i>
        <div className="flex items-center gap-2">
          <img src="https://placehold.co/40" alt="Profile" className="rounded-full w-8 h-8" />
          <div className="text-sm">
            <p className="font-medium text-gray-600">Abdullahi Garba</p>
            <p className="text-gray-400">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
