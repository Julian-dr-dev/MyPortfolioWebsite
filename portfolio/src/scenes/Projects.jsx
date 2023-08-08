import React from "react";
import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, description, githubUrl }) => {
    const overlayStyles =
        "relative mt-10 p-5 bg-grey hover:bg-opacity-90 transition duration-500 text-deep-blue rounded";
    const projectTitle = title.split(" ").join("-").toLowerCase();

    return (
        <motion.div variants={projectVariant} className={overlayStyles}>
            <p className="text-xl font-playfair font-semibold">{title}</p>
            <p className="mt-3">{description}</p>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded">
                    GitHub Repository
                </button>
            </a>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="pt-48 pb-48">
            {/* HEADINGS */}
            <motion.div
                className="md:w-2/5 mx-auto text-center"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
            >
                <div>
                    <p className="font-playfair font-semibold text-4xl">
                        <span className="text-red">PRO</span>JECTS
                    </p>
                    <div className="flex justify-center mt-5">
                        <LineGradient width="w-2/3" />
                    </div>
                </div>
                <p className="mt-10 mb-10">Check out what I've been working on!</p>
            </motion.div>

            {/* PROJECTS */}
            <div className="flex justify-center mt-10">
                <motion.div
                    className="flex flex-col items-center"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    {/* ROW 1 */}


                    <Project
                        title="Project 1"
                        description="This is the description for Project 1."
                        githubUrl="https://github.com/Julian-dr-dev"
                    />
                    <Project
                        title="Project 2"
                        description="This is the description for Project 2."
                        githubUrl="https://github.com/Julian-dr-dev"
                    />

                    {/* ROW 2 */}
                    <Project
                        title="Project 3"
                        description="This is the description for Project 3."
                        githubUrl="https://github.com/Julian-dr-dev"
                    />
                    <Project
                        title="Project 4"
                        description="This is the description for Project 4."
                        githubUrl="https://github.com/Julian-dr-dev"
                    />
                    <Project
                        title="Project 5"
                        description="This is the description for Project 5."
                        githubUrl="https://github.com/Julian-dr-dev"
                    />

                    {/* ROW 3 */}
                    <Project
                        title="Project 6"
                        description="This is the description for Project 6."
                        githubUrl="https://github.com/Julian-dr-dev"
                    />


                </motion.div>
            </div>
        </section>
    );
};

export default Projects;

