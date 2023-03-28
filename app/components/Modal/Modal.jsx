"use client";

import Icon from "../Icons";

export default function Modal(params) {
    const { isOpen, onClose, children } = params;

    const handleClose = (event) => {
        event.preventDefault();
        event.stopPropagation();
        onClose() && onClose;
    };

    return isOpen ? (
        <div className="fixed modal inset-0 flex items-center justify-center z-10 bg-[rgba(0,0,0,0.5)]">
            <div className="flex flex-col px-4 pt-7 bg-white rounded w-5/6 h-96">
                <div className="flex justify-between ">
                    <h2 className="text-xl">Filters</h2>
                    <a onClick={handleClose}>
                        <Icon name="cross" />
                    </a>
                </div>
                {children}
            </div>
        </div>
    ) : null;
}
