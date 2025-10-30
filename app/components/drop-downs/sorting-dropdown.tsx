"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import { IoMdArrowDown } from "react-icons/io";
import { IoMdArrowUp } from "react-icons/io";

const options = ["A-Z", "Z-A"];

export function SortingDropDown() {
    // selection option state
    const [selectedOption, setSelectedOption] = React.useState(options[0]);

    //jsx
    <DropdownMenu>
        {/* trigger button */}
        <DropdownMenuTrigger asChild>
            <Button variant="ghost">
                {/* optional rendering of the icons based on the selected option state */}
                {selectedOption === "A-Z" ? (
                    <IoMdArrowDown className="text-sm" /> 
                ) : (
                    <IoMdArrowUp className="text-sm" />
                )
                }
            </Button>
        </DropdownMenuTrigger>
        {/* drop down content options */}
        <DropdownMenuContent className="w-20">
            {options.map((option, index) => (
                <DropdownMenuItem
                    key={index}
                    className="h-9"
                    // the check will be based on the condition of the selected options tate is equal to
                    //the option in the array
                    checked={selectedOption === option}
                    // when the user clicks on the option, update the selected option state with the item clicked
                    onCheckedChange={() => setSelectedOption(option)}
                >
                    {option}
                </DropdownMenuItem>
            ))}
        </DropdownMenuContent>
    </DropdownMenu>
}