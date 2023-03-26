"use client";

import InputSelection from "../UI/InputSelection";
import Icon from "../Icons";

const ModalFilters = (params) => {
    const { isOpen, onClose } = params;

    const handleClose = (event) => {
        event.preventDefault();
        event.stopPropagation();
        onClose() && onClose;
    };

    return isOpen ? (
        <div className="fixed inset-0 flex items-center justify-center z-10">
            <div className="bg-white">
                <div className="flex justify-between ">
                    <h2>Filters</h2>
                    <a onClick={handleClose}>
                        <Icon name="cross" />
                    </a>
                </div>
                <div className="flex flex-col">
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
        </div>
    ) : null;
};

export default ModalFilters;
