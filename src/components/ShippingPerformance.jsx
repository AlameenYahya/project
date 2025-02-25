import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { month: 'Jan', best: 42, average: 48, poor: 10 },
  { month: 'Feb', best: 40, average: 0, poor: 20 },
  { month: 'Mar', best: 60, average: 0, poor: 33 },
  { month: 'Apr', best: 50, average: 0, poor: 28 },
  { month: 'Jun', best: 45, average: 0, poor: 25 },
  { month: 'Jul', best: 42, average: 0, poor: 20 },
  { month: 'Aug', best: 30, average: 0, poor: 12 },
  { month: 'Sep', best: 35, average: 0, poor: 10 },
  { month: 'Oct', best: 38, average: 0, poor: 10 },
];

const ShippingPerformance = () => {
  return (
    <div className="bg-white p-4 shadow rounded-lg border border-gray-200 text-sm">
      {/* Header */}
      <div className="flex justify-between items-start mb-2">
        <div>
          <h2 className="text-lg font-medium text-gray-600">Shipping Performance</h2>
          <p className="text-gray-400 text-sm">Performance of your shipping matters each month.</p>
        </div>
        <i className="fas fa-ellipsis-v text-gray-400"></i>
      </div>

      {/* Stacked Horizontal Bar Chart */}
      <ResponsiveContainer width="100%" height={230}>
        <BarChart
          layout="vertical"
          data={data}
          barSize={12}
          margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
        >
          {/* Horizontal X-Axis */}
          <XAxis
            type="number"
            domain={[0, 100]}
            ticks={[0, 20, 40, 60, 80, 100]}
            tickFormatter={(tick) => `${tick}%`}
            axisLine={false}
            tickLine={false}
            stroke="#9ca3af"
            fontSize={12}
          />

          {/* Vertical Y-Axis */}
          <YAxis
            dataKey="month"
            type="category"
            axisLine={false}
            tickLine={false}
            width={35}
            fontSize={12}
            stroke="#9ca3af"
          />

          {/* Tooltip and Legend */}
          <Tooltip />
          <Legend
            verticalAlign="top"
            align="left"
            iconSize={10}
            wrapperStyle={{ paddingBottom: 10 }}
          />

          {/* Stacked Bars */}
          <Bar dataKey="best" stackId="a" fill="#d5f2f5" name="Best" radius={[8, 0, 0, 8]} />
          <Bar dataKey="average" stackId="a" fill="#f4ae65" name="Average" />
          <Bar dataKey="poor" stackId="a" fill="#f7c7d2" name="Poor" radius={[0, 8, 8, 0]} />
          
        </BarChart>
        
      </ResponsiveContainer>
    </div>
  );
};

export default ShippingPerformance;
