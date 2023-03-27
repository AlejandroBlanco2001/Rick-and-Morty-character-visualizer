"use client";

import InputSelection from "../UI/InputSelection";
import { useGlobalContext } from "../../Context/FilterContext";
import Icon from "../Icons";
import { useState } from "react";

export default function ModalFilters(params) {
    const { isOpen, onClose } = params;
    const [data, setData] = useState({});
    const { state, dispatch } = useGlobalContext();

    const handleFilter = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleClose = (event) => {
        event.preventDefault();
        event.stopPropagation();
        onClose() && onClose;
    };

    const applyFilters = (event) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch({
            type: "SET_FILTERS",
            payload: data,
        });
        onClose() && onClose;
    };

    return isOpen ? (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-[rgba(0,0,0,0.5)]">
            <div className="flex flex-col px-4 pt-7 bg-white rounded w-5/6 h-96">
                <div className="flex justify-between ">
                    <h2 className="text-xl">Filters</h2>
                    <a onClick={handleClose}>
                        <Icon name="cross" />
                    </a>
                </div>
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
            </div>
        </div>
    ) : null;
}
