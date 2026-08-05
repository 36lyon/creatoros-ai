import Sidebar from "./Sidebar";
import Header from "./Header";
import UserMenu from "./UserMenu";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({
  children,
}: MainLayoutProps) {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      {/* Sidebar */}
      <Sidebar />

      {/* Right Side */}
      <div className="flex-1 flex flex-col">

        {/* Header */}
        <Header />

        {/* User Menu */}
        <div className="flex justify-end px-8 pt-4">
          <UserMenu />
        </div>

        {/* Main Content */}
        <main className="flex-1 p-8 overflow-auto">
          {children}
        </main>

      </div>

    </div>
  );
}