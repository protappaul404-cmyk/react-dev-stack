
import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
import type { ITechnology } from "../../types/technologyType";

interface ISelectedTechCardProps {
    technology: ITechnology;
    setSelectedTechnologies: Dispatch<SetStateAction<ITechnology[]>>;
}

const SelectedTechCard = ({
    technology,
    setSelectedTechnologies,
}: ISelectedTechCardProps) => {
    const handleRemove = () => {
        setSelectedTechnologies((previousTechnologies) =>
            previousTechnologies.filter(
                (tech) => tech.id !== technology.id
            )
        );

        toast.success(`${technology.name} removed from your stack!`);
    };

    return (
        <div className="flex items-center gap-4 rounded-xl border border-base-200 bg-base-100 p-3 shadow-sm transition-all hover:shadow-md">

            {/* Technology icon */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-base-200">
                <img
                    src={technology.icon}
                    alt={`${technology.name} icon`}
                    className="h-7 w-7"
                />
            </div>

            {/* Technology information */}
            <div className="min-w-0 flex-1">

                {/* Technology name */}
                <h3 className="truncate text-[15px] font-bold text-base-content">
                    {technology.name}
                </h3>

                {/* Technology category */}
                <p className="truncate text-xs text-base-content/60">
                    {technology.category}
                </p>
            </div>

            {/* Remove technology button */}
            <button
                type="button"
                onClick={handleRemove}
                className="btn btn-circle btn-ghost btn-sm text-error/80 hover:bg-error/10 hover:text-error"
                aria-label={`Remove ${technology.name} from stack`}
                title={`Remove ${technology.name}`}
            >
                ✕
            </button>
        </div>
    );
};

export default SelectedTechCard;
