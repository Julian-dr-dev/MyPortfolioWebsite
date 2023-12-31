import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";


const AboutMe = () => {
    return (
        <section id="AboutMe" className="pt-10 pb-24">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px' }}>
            <div style={{ flex: 1, paddingRight: '20px' }}>



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
                        ABOUT <span className="text-red">ME</span>
                    </p>
                    <LineGradient width="w-1/3" />
                    <p className="mt-10 mb-7">
                        Julian Maximilian Martinez is an inquisitive problem solver and life long learner with a deep for building
                        software using computational technologies. He will be graduating with a bachelors degree in computer
                        science from Sacramento State University in 2024. His interests include backend web development, cloud architecture,
                        machine learning & artificial intelligence as well as financial analysis using machine learning and large scale
                        data analysis.


                    </p>
                </motion.div>



            </div>
            <div style={{ flex: 1, textAlign: 'left' }}>
                <img src="yoBrush.png" alt="AboutMe" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
        </div>
        </section>
    );


}
export default AboutMe;