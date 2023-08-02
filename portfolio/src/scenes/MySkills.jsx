import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";


const MySkills = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section id="skills" className="pt-10 pb-24">

            <div className="md:flex md:justify-between md:gap-16 mt-32">
                <motion.div
                    className="md:w-1/3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <p className="font-playfair font-semibold text-4xl mb-5">
                        MY <span className="text-red">SKILLS</span>
                    </p>
                    <LineGradient width="w-1/3" />
                    <p className="mt-10 mb-7">
                        As an inquisitive problem solver I enjoy crafting solid and scalable frontend user
                        interfaces powered by the use of various backend frameworks & technologies.

                    </p>
                </motion.div>
                <div className="mt-16 md:mt-0">
                    {isAboveMediumScreens ? (
                        <div
                            className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                            before:w-full  before:h-full before:border-2 before:border-blue before:z-[-1]"
                        >
                            <img
                                alt="skills"
                                className="z-10"
                                src="assets/skills-image.png"
                            />
                        </div>
                    ) : (
                        <img
                            alt="skills"
                            className="z-10"
                            src="assets/skills-image.png"
                        />
                    )}

                </div>
            </div>
            {/*skills that kills*/}
            <div className="md:flex md:justify-between mt-16 gap-32">
                <motion.dv
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">01</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">Academic</p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5">
                        Julian has completed extensive coursework in computer science subjects
                        such as data structures & alogrithms, database management, software engineering,
                        discrete mathematics, linear algebra, project management, and operating systems.
                    </p>
                </motion.dv>




                <motion.dv
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">02</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">Backend</p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5">
                        I have deep familiarity in constructing software within the Node.js & express.js framework
                        as well as managing relation database systems which include various MySQL database programs and
                        NoSQL database programs such as MongoDB. Supplementaly, I have independently developed projects
                        primarily in Java within Java Swing UI framework and have engaged in collaborative team projects
                        where in which I've applied the Agile development methodology.



                    </p>
                </motion.dv>





                <motion.dv
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">03</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">Frontend</p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5">

                    </p>
                </motion.dv>



            </div>
        </section>
    )

}

export default MySkills;