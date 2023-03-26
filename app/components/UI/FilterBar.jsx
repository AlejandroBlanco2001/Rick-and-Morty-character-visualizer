"use client";

import React, { useState } from "react";
import ModalFilters from "../Modal/ModalFilters";
import Icon from "../Icons";
import InputText from "./InputText";
import InputSelection from "./InputSelection";

export default function FilterBar() {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);

    const closeModal = () => setIsOpen(false);

    return (
        <div className="mt-10 flex flex-col justify-center items-center">
            <div className="flex gap-4">
                <InputText placeholder="name" icon="search" />
                <div className="invisible hidden lg:flex gap-4 lg:visible">
                    <InputSelection
                        icon="dropdown"
                        placeholder="Species"
                        options={[
                            { value: "human", label: "Human" },
                            { value: "alien", label: "Alien" },
                            { value: "humanoid", label: "Humanoid" },
                            {
                                value: "mythological",
                                label: "Mythological",
                            },
                            { value: "animal", label: "Animal" },
                            { value: "robot", label: "Robot" },
                            {
                                value: "poopybutthole",
                                label: "Poopybutthole",
                            },
                        ]}
                    />
                    <InputSelection
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
            <ModalFilters isOpen={modalIsOpen} onClose={closeModal} />
        </div>
    );
}
