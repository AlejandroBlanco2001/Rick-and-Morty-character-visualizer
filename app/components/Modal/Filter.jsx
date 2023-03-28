import React, { useState } from "react";
import { useGlobalContext } from "@/app/Context/FilterContext";
import InputSelection from "../UI/InputSelection";

export default function Filter() {
    const [data, setData] = useState({});
    const { dispatch } = useGlobalContext();

    const handleFilter = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const applyFilters = (event) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch({
            type: "SET_FILTERS",
            payload: data,
        });
    };

    return (
        <>
            <div className="mt-5 flex flex-col gap-4">
                <InputSelection
                    name="species"
                    icon="dropdown"
                    placeholder="Species"
                    onChange={handleFilter}
                    options={[
                        { value: "human", label: "Human" },
                        { value: "alien", label: "Alien" },
                        { value: "humanoid", label: "Humanoid" },
                        { value: "mythological", label: "Mythological" },
                        { value: "animal", label: "Animal" },
                        { value: "robot", label: "Robot" },
                        { value: "poopybutthole", label: "Poopybutthole" },
                    ]}
                />
                <InputSelection
                    name="gender"
                    icon="dropdown"
                    placeholder="Gender"
                    onChange={handleFilter}
                    options={[
                        { value: "female", label: "Female" },
                        { value: "male", label: "Male" },
                        { value: "genderless", label: "Genderless" },
                        { value: "unknown", label: "Unknown" },
                    ]}
                />
                <InputSelection
                    name="status"
                    icon="dropdown"
                    placeholder="Status"
                    onChange={handleFilter}
                    options={[
                        { value: "alive", label: "Alive" },
                        { value: "dead", label: "Dead" },
                        { value: "unknown", label: "Unknown" },
                    ]}
                />
            </div>
            <button
                onClick={applyFilters}
                className="mt-10 text-[#2196F3] bg-[#E3F2FD] h-10 font-normal text-base tracking-wider"
            >
                <span>APPLY</span>
            </button>
        </>
    );
}
