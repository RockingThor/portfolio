import { CopyIcon, CopyrightIcon } from "lucide-react";
import React from "react";

const Copyright = () => {
    return (
        <div className="flex flex-row gap-1 mb-[3rem]">
            <CopyrightIcon className=" text-zinc-500" />{" "}
            <p className="text-zinc-400">All rights reserved.</p>
        </div>
    );
};

export default Copyright;
