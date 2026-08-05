import Link from "next/link";

interface ToolCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
  available?: boolean;
}

export default function ToolCard({
  title,
  description,
  icon,
  href,
  available = true,
}: ToolCardProps) {
  if (!available) {
    return (
      <div className="bg-gray-900 rounded-2xl p-6 opacity-50 border border-gray-800">
        <h2 className="text-2xl font-bold">
          {icon} {title}
        </h2>

        <p className="text-gray-400 mt-3">
          {description}
        </p>

        <p className="text-yellow-400 mt-4 font-semibold">
          Coming Soon
        </p>
      </div>
    );
  }

  return (
    <Link
      href={href}
      className="block bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-purple-500 hover:bg-gray-800 transition-all"
    >
      <h2 className="text-2xl font-bold">
        {icon} {title}
      </h2>

      <p className="text-gray-400 mt-3">
        {description}
      </p>
    </Link>
  );
}