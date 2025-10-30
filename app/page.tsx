"use-client";

import { useTheme } from "next-themes"

import Navbar from "./components/nav-bar";;
import ProjectsArea from "./components/projects-area/project-area";

export default function Home() {
  const { theme } = useTheme();

  const bgColor = theme === "dark" ? "bg-black" : "bg-gray-200";

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-[3fr_1fr] px-6 mt-8 gap-4">
        <ProjectArea />
      </div>
    </div>
  );
}
