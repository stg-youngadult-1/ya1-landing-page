import React from "react";

function LinkIcon({link}) {
    return <li className="shrink-0 snap-start">
        <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center w-16"
            title={link.title}
        >
            <div
                className="w-11 h-11 rounded-full bg-white shadow ring-1 ring-black/10 flex items-center justify-center overflow-hidden">
                <img
                    src={link.img}
                    alt={link.title}
                    className="object-cover"
                />
            </div>
            <span className="mt-1 text-[11px] leading-tight text-blue-900 line-clamp-2 text-center">
            {link.title}
          </span>
        </a>
    </li>;
}

export default function ColumnIconList({links}) {
    const icon_scroll_number = 4;

    return <div
        className="mt-3 overflow-x-auto [&::-webkit-scrollbar]:hidden"
        style={{scrollbarWidth: "none"}} // Firefox
    >
        <ul
            className={`flex gap-4 px-1 snap-x snap-mandatory ${
                links.length <= icon_scroll_number ? "justify-center" : ""
            }`}
        >
            {links.map((link, i) => (
                <LinkIcon key={i} link={link}/>
            ))}
        </ul>
    </div>;
}