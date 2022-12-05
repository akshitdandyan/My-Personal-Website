import AriseIn from "../Framer/AriseIn";

const SectionTwo: React.FC = () => {
    return (
        <AriseIn>
            <div>
                <div>
                    <h1 className="text-4xl">Are you not into reading ?</h1>
                </div>
                <div>
                    <p className="text-lg mt-4 text-gray-400">
                        You can watch my video resume{" "}
                        <a
                            href="https://youtu.be/a8RpgNGhmZI"
                            target={"_blank"}
                            rel="noreferrer"
                            className="text-blue-500"
                        >
                            here
                        </a>
                        . It includes all the information about my skills,
                        projects and education that you can find on this
                        website.
                    </p>
                </div>
            </div>
        </AriseIn>
    );
};

export default SectionTwo;
