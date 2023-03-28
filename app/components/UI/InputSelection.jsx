"use client";

import { useGlobalContext } from "@/app/Context/FilterContext";
import { useEffect, useState } from "react";

export default function InputSelection(params) {
    const { name, onChange, placeholder, options } = params;
    const { state } = useGlobalContext();

    const [value, setValue] = useState(() => {
        return localStorage.getItem(name) || "";
    });

    useEffect(() => {
        const storedValue = localStorage.getItem(name) || "";
        if (storedValue !== value) {
            setValue(storedValue);
        }
    }, [name]);

    const handleSelectChange = (event) => {
        const newValue = event.target.value;
        setValue(newValue);
        localStorage.setItem(name, newValue);
        if (onChange) {
            onChange(event);
        }
    };

    return (
        <label>
            <div className="relative">
                <select
                    name={name}
                    defaultValue={
                        typeof window !== "undefined"
                            ? localStorage.getItem(name) || state[name] || ""
                            : ""
                    }
                    className="border text-[#a0a7b2] border-gray-300 rounded-lg w-full h-14 lg:w-80 lg:h-14 lg:pl-5"
                    onChange={handleSelectChange}
                >
                    <option className="" value="">
                        {placeholder}
                    </option>
                    {options.map((option) => {
                        const { value, label } = option;
                        return (
                            <option key={value} value={value}>
                                {label}
                            </option>
                        );
                    })}
                </select>
            </div>
        </label>
    );
}
