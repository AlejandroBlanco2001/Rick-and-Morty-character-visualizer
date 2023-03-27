"use client";

export default function InputSelection(params) {
    return (
        <label>
            <div className="relative">
                <select
                    name={params.name}
                    defaultValue={""}
                    className="border text-[#a0a7b2] border-gray-300 rounded-lg w-full h-14 lg:w-80 lg:h-14 lg:pl-5"
                    onChange={params.onChange}
                >
                    <option className="" value="">
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
}
