export default function Exports() {
  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold">
        📦 Export Studio
      </h1>

      <p className="text-gray-400 mt-3">
        Prepare your complete production package.
      </p>


      <div className="mt-8 grid md:grid-cols-2 gap-5 max-w-3xl">


        <div className="bg-gray-900 p-6 rounded-xl">

          <h2 className="text-xl font-bold">
            🎬 Script Export
          </h2>

          <p className="text-gray-400 mt-2">
            Export screenplay and story documents.
          </p>

          <button className="mt-5 bg-purple-600 px-5 py-2 rounded-xl">
            Export Script
          </button>

        </div>



        <div className="bg-gray-900 p-6 rounded-xl">

          <h2 className="text-xl font-bold">
            🎥 Storyboard Export
          </h2>

          <p className="text-gray-400 mt-2">
            Export scenes and camera plans.
          </p>

          <button className="mt-5 bg-purple-600 px-5 py-2 rounded-xl">
            Export Storyboard
          </button>

        </div>



        <div className="bg-gray-900 p-6 rounded-xl">

          <h2 className="text-xl font-bold">
            🎭 Character Sheets
          </h2>

          <p className="text-gray-400 mt-2">
            Export character profiles.
          </p>

          <button className="mt-5 bg-purple-600 px-5 py-2 rounded-xl">
            Export Characters
          </button>

        </div>



        <div className="bg-gray-900 p-6 rounded-xl">

          <h2 className="text-xl font-bold">
            📁 Full Production Package
          </h2>

          <p className="text-gray-400 mt-2">
            Export all project materials together.
          </p>

          <button className="mt-5 bg-purple-600 px-5 py-2 rounded-xl">
            Export Everything
          </button>

        </div>


      </div>


    </main>
  );
}