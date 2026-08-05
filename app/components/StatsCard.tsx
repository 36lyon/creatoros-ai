interface StatsCardProps {
  title: string;
  value: string;
  icon: string;
}

export default function StatsCard({
  title,
  value,
  icon,
}: StatsCardProps) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-purple-500 transition-all">

      <div className="text-4xl mb-4">
        {icon}
      </div>

      <h3 className="text-gray-400 text-sm uppercase">
        {title}
      </h3>

      <p className="text-4xl font-bold text-white mt-2">
        {value}
      </p>

    </div>
  );
}