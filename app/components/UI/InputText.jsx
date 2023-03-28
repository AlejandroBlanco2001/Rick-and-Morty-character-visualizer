"use client";

import Icon from "../Icons";
import { useGlobalContext } from "@/app/Context/FilterContext";

export default function InputText(params) {
    
    const {onChange, placeholder} = params;

    const {state} = useGlobalContext()

    return (
        <label>
            <div className="relative">
                <div className="absolute inset-y-5 left-3 ">
                    <Icon name="search" />
                </div>
                <input
                    name="name"
                    value={localStorage.getItem(name.toLowerCase()) || ""}
                    className="border border-gray-300 rounded-lg w-80 h-14 pl-10"
                    placeholder={`Filter by ${placeholder}...`}
                    onChange={onChange}
                ></input>
            </div>
        </label>
    );
}
