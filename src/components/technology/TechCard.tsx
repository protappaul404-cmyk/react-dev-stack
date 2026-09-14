

import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
import type { ITechnology } from "../../types/technologyType";

interface ITechCardProps {
    technology: ITechnology;
    selectedTechnologies: ITechnology[];
    setSelectedTechnologies: Dispatch<SetStateAction<ITechnology[]>>;
};

const getBadgeColor = (badge: string) => {
    switch (badge) {
        case "Popular":
            return "bg-blue-50 text-blue-500";

        case "Versatile":
            return "bg-green-50 text-green-500";

        case "Fast":
            return "bg-orange-50 text-orange-500";

        case "Top SQL":
            return "bg-blue-50 text-blue-500";

        case "Essential":
            return "bg-cyan-50 text-cyan-500";

        case "Cache":
            return "bg-red-50 text-red-500";

        case "Ubiquitous":
            return "bg-yellow-50 text-yellow-600";

        case "Robust":
            return "bg-sky-50 text-sky-500";

        case "Modern":
            return "bg-teal-50 text-teal-500";

        case "Containers":
            return "bg-blue-50 text-blue-500";

        default:
            return "bg-gray-50 text-gray-500";
    }
};

const TechCard = ({
    technology,
    selectedTechnologies,
    setSelectedTechnologies,
}: ITechCardProps) => {

    const isSelected = selectedTechnologies.some(
        (tech) => tech.id === technology.id
    );

    const handleAdd = () => {
        const alreadySelectedCategory = selectedTechnologies.some(
            (tech) => tech.id === technology.id
        );
        if (alreadySelectedCategory) {
            toast.error(
                `You have already selected a ${technology.name} technology.`
            );

            return;
        }
        setSelectedTechnologies((previousTechnologies) => [
            ...previousTechnologies,
            technology,
        ]);

        toast.success(`${technology.name} added to your stack!`);
    };

    return (
        <div
            className={`group flex h-85 flex-col justify-between overflow-hidden rounded-2xl bg-base-100 p-5 transition-all duration-300 hover:-translate-y-1
                ${isSelected
                    ? "border-2 border-[#f43f5e] shadow-[0_8px_20px_-6px_rgba(244,63,94,0.25)]"
                    : "border border-base-200 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] hover:shadow-[0_8px_20px_-6px_rgba(6,81,237,0.15)]"
                }
            `}
        >
            <div>
                {/* Technology icon + badge */}
                <div className="mb-4 flex items-start justify-between">

                    {/* Technology icon */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-transparent">
                        <img
                            src={technology.icon}
                            alt={`${technology.name} icon`}
                            className="h-10 w-10 transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>

                    {/* Technology badge */}
                    <span
                        className={`badge badge-md rounded-full border-none px-3 py-3 font-semibold ${getBadgeColor(
                            technology.badge
                        )}`}
                    >
                        {technology.badge}
                    </span>
                </div>

                {/* Technology name */}
                <h2 className="mb-2 text-xl font-extrabold text-base-content">
                    {technology.name}
                </h2>

                {/* Technology description */}
                <p className="mb-6 line-clamp-3 text-[13px] leading-relaxed text-base-content/60">
                    {technology.description}
                </p>
            </div>

            <div>
                {/* Technology information */}
                <div className="mb-5 flex items-center justify-between text-[11px] font-medium text-base-content/60">

                    {/* Category */}
                    <span className="rounded-md bg-base-200/60 px-3 py-1.5 font-semibold">
                        {technology.category}
                    </span>

                    {/* Difficulty */}
                    <span className="px-1">
                        {technology.difficulty}
                    </span>

                    {/* Rating */}
                    <span className="flex items-center gap-1 font-bold text-amber-500">
                        ★ {technology.rating}
                    </span>
                </div>

                {/* Add technology button */}
                <button
                    type="button"
                    onClick={handleAdd}
                    className={`btn w-full rounded-xl shadow-md transition-all duration-200
                        ${isSelected
                            ? "cursor-default bg-[#7c4f86] text-white hover:bg-[#de91f3]"
                            : "btn-neutral hover:scale-[1.02]"
                        }
                    `}
                >
                    {isSelected && (
                        <span className="text-lg font-bold">
                            ✓
                        </span>
                    )}
                    {isSelected ? "Added to Stack" : "Add to Stack"}
                </button>
            </div>
        </div>
    );
};

export default TechCard;
