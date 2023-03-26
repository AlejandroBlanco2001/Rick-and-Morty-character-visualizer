"use client";

import Icon from "../Icons";

const InputSelection = (params) => {
    return (
        <label>
            <div className="relative">
                <select
                    defaultValue={""}
                    className="border text-[#a0a7b2] border-gray-300 rounded-lg w-80 h-14 pl-5"
                >
                    <option className="" value="" disabled>
                        {params.placeholder}
                    </option>
                    {params.options.map((option) => {
                        return (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        );
                    })}
                </select>
            </div>
        </label>
    );
};

export default InputSelection;
