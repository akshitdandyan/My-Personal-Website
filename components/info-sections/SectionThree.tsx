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
                        I am interested in building softwares more than solving
                        questions. From my first semester till now, I have
                        worked on several industry level projects. Some of them
                        are listed below.
                    </p>
                    <ul className="mt-4">
                        <li className="hover:text-blue-200 duration-200 mt-4 link link-underline link-underline-black">
                            <a
                                href="https://duckchat.club"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Duckchat - Anonymously chat with strangers
                            </a>
                        </li>
                        <li className="hover:text-blue-200 duration-200 mt-4 link link-underline link-underline-black">
                            <a
                                href="https://connector.ga"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Connector - Share links & files instantly
                                between devices
                            </a>
                        </li>
                        <li className="hover:text-blue-200 duration-200 mt-4 link link-underline link-underline-black">
                            <a
                                href="https://knotify.live"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Knotify - Integrate to manage your product
                                updates
                            </a>
                        </li>
                        <li className="hover:text-blue-200 duration-200 mt-4 link link-underline link-underline-black">
                            <a
                                href="https://csecrew.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Cse Crew - All your academics stuff managed in
                                one place
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </AriseIn>
    );
};

export default SectionThree;
