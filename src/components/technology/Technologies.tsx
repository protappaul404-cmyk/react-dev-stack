// Technologies section Started
import { use, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import type { ITechnology } from "../../types/technologyType";
import AvailableTech from "./AvailableTech";
import SelectedTech from "./SelectedTech";

interface TechnologiesProps {
    technologiesPromise: Promise<ITechnology[]>;
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
    const technologies = use(technologiesPromise);
    const [selectedTechnologies, setSelectedTechnologies] = useState<ITechnology[]>([]);

    return (
        <section className="min-h-screen bg-[#fafafc]">
            <div className="container mx-auto max-w-7xl px-4 py-12">

                {/* Page heading */}
                <div className="mb-10">
                    <h1 className="mb-2 text-[40px] font-extrabold tracking-tight text-[#0F172A]">
                        Explore the{" "}
                        <span className="text-[#f43f5e]">
                            Technologies
                        </span>
                    </h1>

                    <p className="text-lg text-[#64748B]">
                        Pick one technology per category to build your ideal
                        stack.
                    </p>
                </div>
                <div className="flex flex-col items-start gap-8 lg:flex-row">
                    <div className="w-full lg:w-3/4">
                        <AvailableTech
                            technologies={technologies}
                            selectedTechnologies={selectedTechnologies}
                            setSelectedTechnologies={setSelectedTechnologies}
                        />
                    </div>
                    <div className="w-full lg:w-1/4">
                        <SelectedTech
                            selectedTechnologies={selectedTechnologies}
                            setSelectedTechnologies={setSelectedTechnologies}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Technologies;
