"use client";

import { useGlobalContext } from "@/app/Context/FilterContext";

export default function InputSelection(params) {

    const {name, onChange, placeholder, options} = params;

    const {state} = useGlobalContext()

    return (
        <label>
            <div className="relative">
                <select
                    name={name}
                    className="border text-[#a0a7b2] border-gray-300 rounded-lg w-full h-14 lg:w-80 lg:h-14 lg:pl-5"
                    onChange={onChange}
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
