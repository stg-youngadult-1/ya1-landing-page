import React from "react";

export default function SubtitleComponent(props) {
    return <div className="flex flex-col items-center mt-5">
        <h2 className="mt-2 text-md text-white font-bold">{props.subtitle}</h2>
    </div>;
}