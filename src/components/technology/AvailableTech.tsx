
import type { Dispatch, SetStateAction } from "react";
import type { ITechnology } from "../../types/technologyType";
import TechCard from "./TechCard";
// call type for Props
interface IAvailableProps {
    technologies: ITechnology[];
    selectedTechnologies: ITechnology[];
    setSelectedTechnologies: Dispatch<SetStateAction<ITechnology[]>>;
}

const AvailableTech = ({
    technologies,
    selectedTechnologies,
    setSelectedTechnologies,
}: IAvailableProps) => {
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {technologies.map((technology) => (
                <TechCard
                    key={technology.id}
                    technology={technology}
                    selectedTechnologies={selectedTechnologies}
                    setSelectedTechnologies={setSelectedTechnologies}
                />
            ))}
        </div>
    );
};

export default AvailableTech;
