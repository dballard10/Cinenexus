import { useState } from "react";
import CardGrid from "@/components/CardGrid";
import GenreList from "@/components/GenreList";
import { Navigation } from "@/components/Navigation";
import CollapseButton from "@/components/CollapseButton";
import Platforms from "@/components/Platforms";

const HomePage = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <Navigation />
      <header className="bg-white/5 backdrop-blur-lg border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-white">Home</h1>
        </div>
      </header>
      <main className="flex h-full">
        <aside
          className={`bg-gray-900 text-white p-3 transition-all duration-300 
            ${isCollapsed ? "w-16" : "w-32"}`}
        >
          <CollapseButton toggleCollapse={toggleCollapse} />
          {!isCollapsed && <GenreList />}
        </aside>
        <div className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4">
            <Platforms />
            <CardGrid />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
