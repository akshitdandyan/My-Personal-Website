import type { NextPage } from "next";
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";

const Home: NextPage = () => {
    return (
        <div className="w-screen h-screen overflow-hidden">
            <Head>
                <title>Akshit Dandyan | Know me</title>
                <meta name="description" content="Get to know Akshit Dandyan" />
            </Head>
            <motion.div
                animate={{
                    x: -2000,
                    display: "none",
                }}
                transition={{
                    duration: 4,
                    delay: 5,
                }}
                className="h-screen w-screen flex justify-center items-center"
            >
                <div>
                    <motion.h1
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            duration: 2,
                        }}
                        className="text-5xl font-bold text-white"
                    >
                        Hello, I{"'"}m Akshit Dandyan
                    </motion.h1>
                    <motion.p
                        initial={{
                            opacity: 0,
                            x: -1000,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 2,
                            delay: 1,
                        }}
                    >
                        Let{"'"}s see what I have achieved so far.
                    </motion.p>
                </div>
            </motion.div>
            <motion.div
                initial={{
                    y: 1000,
                }}
                animate={{
                    y: 0,
                }}
                transition={{
                    delay: 5,
                    duration: 4,
                }}
                className="flex flex-col items-center justify-center h-screen bg-img1 "
            >
                <main className="flex flex-col items-center justify-center w-full flex-1  text-center bg-black bg-opacity-50">
                    <motion.h1
                        initial={{ opacity: 1, y: -500 }}
                        animate={{ opacity: 0.2, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-6xl font-bold"
                    >
                        AKSHIT DANDYAN
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: -500 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="mt-3 text-2xl"
                    >
                        What would you like to explore about me first?
                    </motion.p>
                    <div className="flex justify-evenly w-screen mt-6 flex-wrap">
                        <Link href={"/resume"}>
                            <motion.div
                                animate={{
                                    background: [
                                        "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,0.4) 50%, rgba(0,108,130,1) 100%)",
                                        "linear-gradient(45deg, rgba(0,35,36,1) 0%, rgba(14,145,31,0.4) 50%, rgba(52,0,130,1) 100%)",
                                        "linear-gradient(90deg, rgba(82,21,21,1) 0%, rgba(218,23,23,0.4) 50%, rgba(203,9,192,1) 100%)",
                                        "linear-gradient(180deg,  rgba(21,82,80,1) 0%, rgba(23,31,218,0.4) 53%, rgba(9,203,50,1) 100%)",
                                        "linear-gradient(360deg, rgba(2,0,36,1) 0%, rgba(9,9,121,0.4) 50%, rgba(0,108,130,1) 100%)",
                                    ],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 6,
                                }}
                                className="w-80  hover:-translate-y-1 hover:bg-black backdrop-blur-sm duration-100 cursor-pointer p-1 flex justify-center items-center rounded-lg"
                            >
                                <div className="bg-black bg-opacity-80 w-full rounded-lg p-2">
                                    <h1 className="text-2xl">Professional</h1>
                                    <p className="mt-2">
                                        Watch my skills, work experience and
                                        projects in software development, and
                                        how I started with enterpreneurship in
                                        my first year of engineering.
                                    </p>
                                </div>
                            </motion.div>
                        </Link>
                        <motion.div
                            animate={{
                                background: [
                                    "linear-gradient(0deg, rgba(206,241,239,0.2614087871476716) 0%, rgba(89,18,244,1) 100%)",
                                    "linear-gradient(359deg, rgba(206,241,239,0.2614087871476716) 0%, rgba(89,18,244,1) 100%)",
                                ],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 2,
                            }}
                            className="w-80  hover:-translate-y-1 hover:bg-black backdrop-blur-sm duration-100 cursor-pointer p-1 flex justify-center items-center rounded-lg"
                        >
                            <div className="bg-black bg-opacity-80 w-full rounded-lg p-2">
                                <h1 className="text-2xl">My Journey</h1>
                                <p className="mt-2">
                                    See how it all started from dreaming about
                                    becoming an NDA Cadet and ending up becoming
                                    a software developer at the age of 18.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </main>
            </motion.div>
        </div>
    );
};

export default Home;
