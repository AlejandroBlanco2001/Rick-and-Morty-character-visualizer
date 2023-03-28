"use client";

import React, { useState } from "react";
import Modal from "../Modal/Modal";
import Icon from "../Icons";
import InputText from "./InputText";
import InputSelection from "./InputSelection";
import { useGlobalContext } from "../../Context/FilterContext";
import Filter from "../Modal/Filter";

export default function FilterBar() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const { dispatch } = useGlobalContext();

    const openModal = () => setIsOpen(true);

    const closeModal = () => setIsOpen(false);

    const handleFilter = (e) => {
        console.log(e);
        const { name, value } = e.target;
        switch (name) {
            case "name":
                dispatch({
                    type: "SET_NAME",
                    payload: value,
                });
                break;
            case "species":
                dispatch({
                    type: "SET_SPECIES",
                    payload: value,
                });
                break;
            case "gender":
                dispatch({
                    type: "SET_GENDER",
                    payload: value,
                });
                break;
            case "status":
                dispatch({
                    type: "SET_STATUS",
                    payload: value,
                });
                break;
            default:
                break;
        }
    };

    return (
        <div className="mt-10 flex flex-col justify-center items-center">
            <div className="flex gap-4">
                <InputText
                    onChange={handleFilter}
                    placeholder="name"
                    icon="search"
                    name="name"
                />
                <div className="invisible hidden lg:flex gap-4 lg:visible">
                    <InputSelection
                        name="species"
                        onChange={handleFilter}
                        icon="dropdown"
                        placeholder="Species"
                        options={[
                            { value: "human", label: "Human" },
                            { value: "alien", label: "Alien" },
                            { value: "humanoid", label: "Humanoid" },
                            { value: "mythological", label: "Mythological" },
                            { value: "animal", label: "Animal" },
                            { value: "robot", label: "Robot" },
                            { value: "poopybutthole", label: "Poopybutthole" },
                            { value: "unknown", label: "Unknown" },
                        ]}
                    />
                    <InputSelection
                        name="gender"
                        onChange={handleFilter}
                        icon="dropdown"
                        placeholder="Gender"
                        options={[
                            { value: "female", label: "Female" },
                            { value: "male", label: "Male" },
                            { value: "genderless", label: "Genderless" },
                            { value: "unknown", label: "Unknown" },
                        ]}
                    />
                    <InputSelection
                        name="status"
                        onChange={handleFilter}
                        icon="dropdown"
                        placeholder="Status"
                        options={[
                            { value: "alive", label: "Alive" },
                            { value: "dead", label: "Dead" },
                            { value: "unknown", label: "Unknown" },
                        ]}
                    />
                </div>
            </div>
            <button
                className="lg:invisible advance-filters mt-5 bg-[#E3F2FD] w-80 h-14"
                onClick={openModal}
            >
                <div className="relative">
                    <div className="absolute inset-y-0 left-4">
                        <Icon name="filter" />
                    </div>
                    <span className="top-5 text-[#2196F3] font-normal text-base tracking-wider">
                        ADVANCE FILTERS
                    </span>
                </div>
            </button>
            <Modal isOpen={modalIsOpen} onClose={closeModal}>
                <Filter></Filter>
            </Modal>
        </div>
    );
}
