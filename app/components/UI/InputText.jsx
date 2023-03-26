"use client";

import Icon from "../Icons";

const InputText = (params) => {
    return (
        <label>
            <div className="relative">
                <div className="absolute inset-y-5 left-3 ">
                    <Icon name="search" />
                </div>
                <input
                    className="border border-gray-300 rounded-lg w-80 h-14 pl-10"
                    placeholder={`Filter by ${params.placeholder}...`}
                ></input>
            </div>
        </label>
    );
};

export default InputText;
