import React from "react";

export default function ButtonComponent({item}) {
    return <button
        className="h-17 w-full flex items-center bg-[#3e9ce6] text-white rounded-full p-3 shadow-md/20 hover:bg-blue-500 transition"
        onClick={() => window.open(item.href, "_blank")}
    >
        {
            item.img &&
            <img
                src={item.img}
                alt={item.title}
                className="w-11 h-11 rounded-full object-cover mr-3"
            />
        }
        <span className="flex-1 text-left">{item.title}</span>
        <span className="text-lg">⋮</span>
    </button>;
}