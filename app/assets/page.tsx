export default function Assets() {
  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold">
        🎨 Assets Manager
      </h1>

      <p className="text-gray-400 mt-3">
        Organize all your AI-generated production assets.
      </p>


      <div className="mt-8 max-w-xl space-y-5">

        <input
          className="w-full bg-gray-900 p-4 rounded-xl"
          placeholder="Asset Name"
        />


        <select className="w-full bg-gray-900 p-4 rounded-xl">

          <option>
            Asset Type
          </option>

          <option>
            Image
          </option>

          <option>
            Video
          </option>

          <option>
            Character Reference
          </option>

          <option>
            Background
          </option>

        </select>


        <textarea
          className="w-full bg-gray-900 p-4 rounded-xl h-32"
          placeholder="Describe your asset..."
        />


        <button className="bg-purple-600 px-8 py-3 rounded-xl">
          Generate Asset
        </button>


      </div>


      <div className="mt-10 bg-gray-900 p-6 rounded-xl max-w-xl">

        <h2 className="text-2xl font-bold">
          Asset Library
        </h2>

        <p className="text-gray-400 mt-3">
          Your images, videos, and production files will appear here.
        </p>

      </div>


    </main>
  );
}