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
                <button className="mt-3 bg-blue-500 text-blue px-4 py-2 rounded underline">
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
                        title="Full stack social media app"
                        description="A fullstack instagram-esque desktop app using Node, React,
                            MongoDB etc to render a fully  functional user interface enabling users
                            to customize account profiles, post pictures,as well as like & comment on
                            other posts. Includes user registration and login authentication."
                        githubUrl="https://github.com/Julian-dr-dev"
                    />
                    <Project
                        title="Java Tank Game"
                        description="A java game built within the Java Swing UI framework using multiple java classes and APIs.
                        Graphically intuitive and interactive tank game with a multiplayer feature and an entire developer
                        created game environment. Includes multi-life, split screen, collision functionality & an additional AI tank.."
                        githubUrl="https://github.com/Julian-dr-dev"
                    />


                    <Project
                        title="Java Lazarus Game"
                        description="Single-player game with another entirely developer created game environment powered by many
                         user created Java APIs. Numerous animated java classes with the implementation of an intricate use of
                         inheritance and hierarchy. Makes use of the java swing tool kit to launch virtual machine game and menu
                         panel to enhance user interface."
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

