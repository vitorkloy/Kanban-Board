import { Card } from "@/components/ui/card";
import ProjectsAreaHeader from "./projects-area-header/projects-area-header";
import ProjectsAreaBoards from "./projects-area-tasks-boards/projects-area-boards";

export default function ProjectArea() {
    return (
        <Card className="shadow-none p-7 rounded-3xl px-7 flex flex-col gap-8">
            <ProjectsAreaHeader />
            <ProjectsAreaBoards />
        </Card>
    );
}