import { motion } from "framer-motion";

type Props = {
    children: React.ReactNode;
};

const DiveIn: React.FC<Props> = ({ children }) => {
    return (
        <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
                initial: { opacity: 0, x: 200 },
                animate: { opacity: 1, x: 0 },
            }}
            transition={{
                stiffness: 100,
                damping: 20,
            }}
        >
            {children}
        </motion.div>
    );
};

export default DiveIn;
