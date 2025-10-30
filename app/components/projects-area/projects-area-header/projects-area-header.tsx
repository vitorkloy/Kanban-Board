import { Button } from "@/components/ui/button";
import { MdOutlineSortByAlpha } from "react-icons/md";
import { SortingDropDown } from "../../drop-downs/sorting-dropdown";

export default function ProjectsAreaHeader() {
    return (
        <div className="flex items-center justify-between items-center">
            <div className="flex gap-3 items-center">
                <span className="text-2xl font-bold">Projects</span>

                {/* <AllProjectsDiolog */}
            </div> 
            {/* sorting label, icon, and drop down */}
            <div className="flex items-center gap-2">
                {/* Sort label and icon */}
                <div className="flex items-center gap-1">
                    <MdOutlineSortByAlpha className="text-xl text-gray-500" />
                    <span className="text-gray-500 text-sm">Sort</span>
                </div>

                {/* sorting drop down */}
                <SortingDropDown />
                <Button className="rounded-3xl px-4">Add task</Button>
            </div>
        </div>
    );
}