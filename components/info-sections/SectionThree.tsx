import AriseIn from "../Framer/AriseIn";

const SectionThree: React.FC = () => {
    return (
        <AriseIn>
            <div>
                <div>
                    <h1 className="text-4xl">Projects</h1>
                </div>
                <div>
                    <p className="text-lg mt-4 text-gray-400">
                        I&apos;m a B.E. C.S.E student. I&apos;m pursuing my
                        degree from
                        <a
                            href="https://www.chitkara.edu.in/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-500"
                        >
                            {" "}
                            Chitkara University
                        </a>{" "}
                        and I am in my 5th/8 semester. I&apos;m passionate about
                        building products that help people and make their lives
                        easier.
                    </p>
                </div>
            </div>
        </AriseIn>
    );
};

export default SectionThree;
