export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold">
        CreatorOS AI
      </h1>

      <p className="text-gray-400 mt-3">
        From Idea to Screen — AI Filmmaking Workspace
      </p>


      <div className="grid md:grid-cols-3 gap-6 mt-10">


        <a
          href="/projects"
          className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800"
        >
          📁
          <h2 className="text-xl font-bold mt-3">
            Projects
          </h2>

          <p className="text-gray-400">
            Create and manage productions.
          </p>

        </a>


        <div className="bg-gray-900 p-6 rounded-xl">
          🎬
          <h2 className="text-xl font-bold mt-3">
            AI Screenwriter
          </h2>

          <p className="text-gray-400">
            Generate scripts and stories.
          </p>

        </div>


        <div className="bg-gray-900 p-6 rounded-xl">
          🎥
          <h2 className="text-xl font-bold mt-3">
            Storyboard Studio
          </h2>

          <p className="text-gray-400">
            Plan your scenes visually.
          </p>

        </div>

<a
  href="/characters"
  className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800"
>
  🎭

  <h2 className="text-xl font-bold mt-3">
    Characters
  </h2>

  <p className="text-gray-400">
    Build AI characters.
  </p>

</a>


        <div className="bg-gray-900 p-6 rounded-xl">
          🎨
          <h2 className="text-xl font-bold mt-3">
            Assets
          </h2>

          <p className="text-gray-400">
            Manage images and files.
          </p>

        </div>


      <a
  href="/screenwriter"
  className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800"
>
  🎬

  <h2 className="text-xl font-bold mt-3">
    AI Screenwriter
  </h2>

  <p className="text-gray-400">
    Generate scripts and stories.
  </p>

</a>


      </div>


    </main>
  );
}