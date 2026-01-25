import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-indigo-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button
            type={type}
            className={`
                inline-flex items-center justify-center
                rounded-xl
                text-base font-semibold
                ${bgColor} ${textColor}
                
                shadow-sm
                transition-all duration-200
                hover:brightness-110 hover:shadow-md
                active:scale-[0.97]
                focus:outline-none
                focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
                ${className}
            `}
            {...props}
        >
            {children}
        </button>
    );
}
