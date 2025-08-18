import React from "react";

export default function Subdivision({ children, className = "" }) {
    return (
        <div
            className={`relative z-10 bg-white rounded-2xl shadow-md p-4 ${className}`}
        >
            {children}
        </div>
    );
}
