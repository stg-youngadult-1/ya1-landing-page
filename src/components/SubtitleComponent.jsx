import React from "react";

export default function SubtitleComponent(props) {
    return <div className="flex flex-col items-start mt-5 px-5">
        <h2 className="mt-2 -mb-2 px-7 pt-1 pb-3 rounded-t-lg bg-[#4fb4c5] text-md text-white font-bold">{props.subtitle}</h2>
    </div>;
}