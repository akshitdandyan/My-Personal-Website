import type { NextPage } from "next";
import Spline from "@splinetool/react-spline";
import { useState } from "react";
import SectionOne from "../components/info-sections/SectionOne";
import Image from "next/image";
import SectionTwo from "../components/info-sections/SectionTwo";
import SectionThree from "../components/info-sections/SectionThree";

let i = 0;
const Render: NextPage = () => {
    const [showLoader, setShowLoader] = useState(true);
    const [section, setSection] = useState(1);

    return (
        <div>
            <div
                className="w-screen h-screen overflow-x-hidden overflow-y-auto flex justify-evenly items-center "
                style={{
                    background: "#1D1E20",
                }}
            >
                <div className="fixed top-0 left-0 bg-yellow-100 p-2 text-black rounded-b-md">
                    🏗️ Website is under construction.
                </div>
                <div className="fixed top-0 right-0 flex p-2">
                    <div className="link link-underline link-underline-black hover:text-blue-400">
                        <a href="mailto:dandyanakshit@gmail.com">Email</a>
                    </div>
                    <div className="ml-4 link link-underline link-underline-black hover:text-blue-400">
                        <a
                            target={"_blank"}
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/akshitdandyan/"
                        >
                            Linkedin
                        </a>
                    </div>
                    <div className="ml-4 link link-underline link-underline-black hover:text-blue-400">
                        <a
                            target={"_blank"}
                            rel="noreferrer"
                            href="https://drive.google.com/file/d/1FGuepCdDyQIiT6unxTDd6sdDdV1869xM/view?usp=sharing"
                        >
                            Resume
                        </a>
                    </div>
                </div>
                {showLoader ? (
                    <div className="fixed z-50 w-screen h-screen bg-black flex justify-center items-center flex-col">
                        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-600"></div>
                        <p className="text-white text-lg mt-2">Just a sec</p>
                    </div>
                ) : (
                    ""
                )}
                {/* show message for mobile view */}
                <div className="fixed z-50 w-screen h-screen bg-black flex justify-center items-center flex-col sm:hidden">
                    <p className="text-white text-lg mt-2 p-2 text-center">
                        This website is not optimized for mobile view yet.
                        Please switch to desktop view.
                    </p>
                </div>
                <div
                    style={{
                        maxWidth: "450px",
                    }}
                >
                    <div
                        onClick={() => setSection((s) => s - 1)}
                        className="mb-4 text-sm flex justify-between items-center gap-2 rounded-full bg-gray-600 opacity-25 duration-200 hover:opacity-75 active:shadow-none active:scale-95 shadow-lg cursor-pointer px-6 py-2 w-max"
                    >
                        <div>Show Previous </div>
                        <Image
                            src={"/icons/arrow.png"}
                            width={20}
                            height={20}
                            alt="arrow icon"
                        />
                    </div>
                    {section === 1 ? (
                        <SectionOne />
                    ) : section === 2 ? (
                        <SectionTwo />
                    ) : section === 3 ? (
                        <SectionThree />
                    ) : (
                        ""
                    )}

                    <div
                        onClick={() => setSection((s) => s + 1)}
                        className="mt-4 text-sm flex justify-between items-center gap-2 rounded-full bg-gray-600 opacity-25 duration-200 hover:opacity-75 active:shadow-none active:scale-95 shadow-lg cursor-pointer px-6 py-2 w-max"
                    >
                        <div>Show Next </div>
                        <Image
                            src={"/icons/arrow.png"}
                            width={20}
                            height={20}
                            alt="arrow icon"
                            className="transform rotate-180"
                        />
                    </div>
                </div>
                <div
                    className=" overflow-hidden relative rounded-lg"
                    style={{
                        width: 700,
                        height: 500,
                        boxShadow: "0px 10px 60px 20px rgba(0,0,0,0.2)",
                    }}
                >
                    <Spline
                        scene="/scene.splinecode"
                        className="absolute -top-24"
                        height={700}
                        width={700}
                        onLoad={() => {
                            i++;
                            if (i === 2) {
                                setShowLoader(false);
                            }
                        }}
                    />

                    {section === 2 ? (
                        <div
                            style={{
                                background: "#1D1E20",
                            }}
                            className="absolute top-0 left-0 h-full w-full flex justify-center items-center"
                        >
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/a8RpgNGhmZI"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    ) : section === 3 ? (
                        <div
                            style={{
                                background: "#1D1E20",
                            }}
                            className="absolute top-0 left-0 h-full w-full flex justify-center items-center"
                        >
                            <div
                                style={{
                                    background: "url('/assets/projects.png')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    width: 650,
                                    height: 450,
                                }}
                            ></div>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </div>
    );
};

export default Render;
