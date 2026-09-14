
import type { Dispatch, SetStateAction } from "react";
import type { ITechnology } from "../../types/technologyType";
import { toast } from "react-toastify";
import SelectedTechCard from "./SelectedTechCard";

interface ISelectedTechProps {
    selectedTechnologies: ITechnology[];
    setSelectedTechnologies: Dispatch<SetStateAction<ITechnology[]>>;
}

const SelectedTech = ({
    selectedTechnologies,
    setSelectedTechnologies,
}: ISelectedTechProps) => {
    const isEmpty = selectedTechnologies.length === 0;
    const handleRemoveAll = () => {
        setSelectedTechnologies([]);
        toast.success("All technologies removed from your stack!");
    };

    return (
        <div className="sticky top-6 rounded-2xl border border-base-200 bg-base-100/50 p-6 shadow-sm">

            {/* Section title */}
            <h2 className="mb-1 text-xl font-bold">
                Your Stack
            </h2>

            {isEmpty ? (
                <>
                    {/* Empty stack message */}
                    <p className="mb-6 text-sm text-base-content/60">
                        No technologies selected yet.
                    </p>

                    {/* Empty state */}
                    <div className="flex items-center justify-center rounded-xl border border-dashed border-base-300 p-8">
                        <p className="text-sm text-base-content/40">
                            Your stack is empty.
                        </p>
                    </div>
                </>
            ) : (
                <>
                    {/* Selected technology count + message */}
                    <div className="mb-6 flex items-center gap-2">
                        <span className="rounded-full bg-[#f43f5e]/10 px-2.5 py-1 text-sm font-bold text-[#f43f5e]">
                            {selectedTechnologies.length}
                        </span>

                        <p className="text-sm text-base-content/60">
                            Technology Selected.
                        </p>
                    </div>

                    {/* Selected technologies list */}
                    <div className="flex flex-col gap-3">
                        {selectedTechnologies.map((tech) => (
                            <SelectedTechCard
                                key={tech.id}
                                technology={tech}
                                setSelectedTechnologies={
                                    setSelectedTechnologies
                                }
                            />
                        ))}
                    </div>
                    <button
                        type="button"
                        onClick={handleRemoveAll}
                        className="btn btn-outline btn-error mt-5 w-full rounded-xl"
                    >
                        Remove All
                    </button>
                </>
            )}
        </div>
    );
};

export default SelectedTech;
