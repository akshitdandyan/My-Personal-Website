import { motion } from "framer-motion";
import { useId } from "react";

type Props = {
    duration?: number;
    delay?: number;
    children: React.ReactNode;
};

const AriseIn: React.FC<Props> = ({ duration, delay, children }) => {
    console.log("show");
    const id = useId();
    return (
        <motion.div
            key={id}
            id={id}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
                initial: { opacity: 0, y: 100 },
                animate: { opacity: 1, y: 0 },
            }}
            transition={{
                duration: duration ? duration : 1,
                delay: delay ? delay : 0,
            }}
        >
            {children}
        </motion.div>
    );
};

export default AriseIn;
