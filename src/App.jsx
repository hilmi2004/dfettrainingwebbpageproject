import { motion } from "framer-motion";
import './App.css';
import Landingpage from "./components/Landingpage.jsx";
import Landingpageback from "./components/landingpageback.jsx";
import Services from "./components/Services.jsx";
import Softwarepro from "./components/Softwarepro.jsx";
import Journey from "./components/Journey.jsx";
import Hire from "./components/Hire.jsx";
import Projects from "./components/Projects.jsx";
import Idea from "./components/Idea.jsx";
import Footer from "./components/Footer.jsx";


const sectionVariants = {
    hidden: { opacity: 0, y: 50 }, // Start slightly lower and invisible
    visible: { opacity: 1, y: 0 }, // Fade in and move to normal position
};

const transition = { duration: 0.8, ease: "easeInOut" }; // Smooth transition

function App() {
    return (
        <div>
            {/* Each section animates when it comes into view */}
            <motion.div
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                transition={transition}
                viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of the section is visible
            >
                <Landingpage />
            </motion.div>

            <motion.div
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                transition={transition}
                viewport={{ once: true, amount: 0.2 }}
            >
                <Landingpageback />
            </motion.div>

            <motion.div
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                transition={transition}
                viewport={{ once: true, amount: 0.2 }}
            >
                <Services />
            </motion.div>

            <motion.div
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                transition={transition}
                viewport={{ once: true, amount: 0.2 }}
            >
                <Softwarepro />
            </motion.div>

            <motion.div
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                transition={transition}
                viewport={{ once: true, amount: 0.2 }}
            >
                <Journey />
            </motion.div>

            <motion.div
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                transition={transition}
                viewport={{ once: true, amount: 0.2 }}
            >
                <Hire />
            </motion.div>

            <motion.div
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                transition={transition}
                viewport={{ once: true, amount: 0.2 }}
            >
                <Projects />
            </motion.div>

            <motion.div
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                transition={transition}
                viewport={{ once: true, amount: 0.2 }}
            >
                <Idea />
            </motion.div>

            <motion.div
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                transition={transition}
                viewport={{ once: true, amount: 0.2 }}
            >
                <Footer />
            </motion.div>



        </div>
    );
}

export default App;
