import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import {motion} from "framer-motion";
const data = [
  { month: 'Jan', revenue1: 3000, revenue2: 2500 },
  { month: 'Feb', revenue1: 4500, revenue2: 3500 },
  { month: 'Mar', revenue1: 5000, revenue2: 4200 },
  { month: 'Apr', revenue1: 4700, revenue2: 3900 },
  { month: 'May', revenue1: 5200, revenue2: 4400 },
  { month: 'Jun', revenue1: 5800, revenue2: 4800 },
];

const RevenueCard = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 20}}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut"}}
    className="bg-white p-4 shadow rounded-lg border border-gray-200 hover:scale-105 ">
      {/* Header */}
      <div className="flex justify-between items-start mb-2">
        <div>
          <h2 className="text-lg font-medium text-gray-600">Total Revenue</h2>
          <p className="text-gray-400 text-sm">This shows the profits you’ve made in 6 months.</p>
        </div>
        <i className="fas fa-ellipsis-v text-gray-400"></i>
      </div>

      {/* Total Amount */}
      <motion.h3
      initial={{ scale: 0.8, opacity: 0}}
      animate={{ scale: 1, opacity: 1}}
      transition={{ duration: 0.6, delay: 0.3}}
      className="text-3xl font-bold mb-4 text-gray-600">$30,492,000.00</motion.h3>

      {/* Line Chart */}
      <motion.div
      initial={{ opacity: 0, scale: 0.9}}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.4}} >
      <ResponsiveContainer width="90%" height={150}>
        <LineChart data={data}>
          <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#9ca3af', margin:{ left: 5} }} axisLine={false} tickLine={false} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#111827',
              borderRadius: '6px',
              color: '#ffffff',
              fontSize: '12px',
              border: 'none',
            }}
            itemStyle={{ color: '#ffffff' }}
            cursor={{ stroke: '#e5e7eb', strokeWidth: 1 }}
          />
          <Line type="monotone" dataKey="revenue1" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="revenue2" stroke="#60a5fa" strokeWidth={2} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
      </motion.div>
    </motion.div>
  );
};

export default RevenueCard;
