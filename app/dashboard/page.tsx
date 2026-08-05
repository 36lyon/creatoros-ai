import MainLayout from "../components/MainLayout";
import ToolCard from "../components/ToolCard";
import StatsCard from "../components/StatsCard";
import QuickActions from "../components/QuickActions";
import RecentProjects from "../components/RecentProjects";

export default function Dashboard() {
  return (
    <MainLayout>
      <div className="space-y-10">

        {/* Welcome */}
        <section>
          <h1 className="text-5xl font-bold text-white">
            Welcome Back 👋
          </h1>

          <p className="text-gray-400 mt-3 text-lg">
            Create movies, YouTube videos, shorts, animations and AI content from one place.
          </p>
        </section>

        {/* Statistics */}
        <section>

          <h2 className="text-2xl font-bold text-white mb-6">
            📊 Dashboard Statistics
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            <StatsCard
              title="Scripts"
              value="24"
              icon="🎬"
            />

            <StatsCard
              title="Characters"
              value="58"
              icon="🎭"
            />

            <StatsCard
              title="Storyboards"
              value="13"
              icon="🎥"
            />

            <StatsCard
              title="Projects"
              value="9"
              icon="📁"
            />

          </div>

        </section>

        {/* Quick Actions */}
        <QuickActions />

        {/* Recent Projects */}
        <RecentProjects />

        {/* AI Tools */}

        <section>

          <h2 className="text-2xl font-bold text-white mb-6">
            🚀 AI Studio
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

            <ToolCard
              title="AI Screenwriter"
              description="Generate Hollywood-quality movie scripts."
              icon="🎬"
              href="/screenwriter"
            />

            <ToolCard
              title="Character Creator"
              description="Create detailed AI characters."
              icon="🎭"
              href="/characters"
            />

            <ToolCard
              title="Storyboard Studio"
              description="Generate cinematic storyboards."
              icon="🎥"
              href="/storyboard"
            />

            <ToolCard
              title="Shot List Studio"
              description="Professional camera shot planning."
              icon="🎞"
              href="/shotlist"
              available={false}
            />

            <ToolCard
              title="Image Studio"
              description="Generate AI image prompts."
              icon="🖼"
              href="/images"
              available={false}
            />

            <ToolCard
              title="Voice Studio"
              description="Generate AI voice prompts."
              icon="🎙"
              href="/voices"
              available={false}
            />

          </div>

        </section>

      </div>
    </MainLayout>
  );
}