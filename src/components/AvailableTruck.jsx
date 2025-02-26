import { motion } from 'framer-motion';

const TruckAvailability = () => {
  // Truck availability percentages
  const totalTrucks = 54 + 32 + 5;
  const availablePercentage = (54 / totalTrucks) * 100;
  const unavailablePercentage = (32 / totalTrucks) * 100;
  const faultyPercentage = (5 / totalTrucks) * 100;

  return (
    <motion.div 
    initial={{ opacity: 0, y: 20 }} 
   animate={{ opacity: 1, y: 0 }} 
   transition={{ duration: 0.6, ease: "easeOut" }}
    className="bg-white p-4 shadow rounded-lg border border-gray-200 hover:scale-105">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-medium text-gray-600">Truck Availability</h2>
        <i className="fas fa-ellipsis-v text-gray-400"></i>
      </div>
      <p className="text-gray-400 text-sm mb-4">You will see the available trucks on ground.</p>

      {/* Labels */}
      <div className="flex justify-between text-gray-500 text-xs mb-2 px-1">
        <span>Available</span>
        <span>Not Available</span>
        <span>Faulty</span>
      </div>

      {/* Stacked Progress Bar */}
      <div className="relative h-6 w-full rounded-full overflow-hidden bg-gray-200">
        <div
          className="h-full bg-blue-500"
          style={{ width: `${availablePercentage}%`, borderTopLeftRadius: '9999px', borderBottomLeftRadius: '9999px' }}
        />
        <div
          className="h-full bg-blue-400"
          style={{ width: `${unavailablePercentage}%` }}
        />
        <div
          className="h-full bg-blue-300"
          style={{ width: `${faultyPercentage}%`, borderTopRightRadius: '9999px', borderBottomRightRadius: '9999px' }}
        />
      </div>

      {/* Legends */}
      <div className="mt-4 space-y-1">
        <div className="flex justify-between items-center text-gray-600">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
            <span>Available Trucks</span>
          </div>
          <span className="font-medium">54</span>
        </div>
        <div className="flex justify-between items-center text-gray-600">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-400"></span>
            <span>Unavailable Trucks</span>
          </div>
          <span className="font-medium">32</span>
        </div>
        <div className="flex justify-between items-center text-gray-600">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-300"></span>
            <span>Faulty Trucks</span>
          </div>
          <span className="font-medium">5</span>
        </div>
      </div>
    </motion.div>
  );
};

export default TruckAvailability;
