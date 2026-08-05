export default function RecentProjects() {
  const projects = [
    {
      title: "The Last Lion",
      type: "Movie Script",
    },
    {
      title: "Kingdom of Ash",
      type: "Storyboard",
    },
    {
      title: "Alien Planet",
      type: "Character Pack",
    },
  ];

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">

      <h2 className="text-2xl font-bold text-white mb-6">
        🕒 Recent Projects
      </h2>

      <div className="space-y-4">

        {projects.map((project, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-gray-800 rounded-xl p-4 hover:bg-gray-700 transition"
          >
            <div>
              <h3 className="text-white font-semibold">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {project.type}
              </p>
            </div>

            <button className="text-purple-400 hover:text-purple-300">
              Open →
            </button>
          </div>
        ))}

      </div>

    </div>
  );
}