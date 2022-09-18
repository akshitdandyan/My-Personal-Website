import type { NextPage } from "next";
import Head from "next/head";
import AriseIn from "../components/Framer/AriseIn";
import DiveIn from "../components/Framer/DiveIn";
import {
    BackendIcon,
    CppIcon,
    DevicesIcon,
    DjangoIcon,
    ExpressIcon,
    FastApiIcon,
    FlaskIcon,
    GraphQlIcon,
    HeartIcon,
    JavascriptIcon,
    MongoDbIcon,
    NextJsIcon,
    NodeJsIcon,
    PostgresIcon,
    PreactIcon,
    PythonIcon,
    ReactIcon,
    ReduxIcon,
    RestApiIcon,
    SvelteIcon,
    TypescriptIcon,
} from "../components/icons/Heart";

const Resume: NextPage = () => {
    return (
        <div>
            <Head>
                <title>AKSHIT DANDYAN | Resume</title>
            </Head>
            <div className="bg-gradient p-4">
                <h1 className="text-5xl font-bold ">Akshit Dandyan</h1>

                <div className="mt-4">
                    <h2 className="text-2xl font-bold">
                        Full Stack Software Developer
                    </h2>
                    <p className="mt-2 text-sm">
                        I finished my high school in March of 2020. After
                        scrolling instagram for a month, I dived deep in
                        programming sea. I took admission in Chitkara University
                        and I completed basics of DS {"&"} algo in my first year
                        of graduation along with working on my development
                        skills. I found myself interested in building new
                        softwares that can impact human lives rather than
                        solving questions for stars on various platforms. At the
                        end of first year, I was able to build full stack web
                        apps that were actually being used in real world. Then I
                        also explored cross platform development and polished my
                        skills on React Native and Flutter.
                    </p>
                </div>

                <div className="flex justify-center items-center  mt-4">
                    <div className="text-2xl ">
                        Programming languages {"&"} Tech Stack I Love To Use
                    </div>
                    <div className="ml-2">
                        <HeartIcon height={24} width={24} />
                    </div>
                </div>

                <div className="flex items-center mt-4">
                    <AriseIn>
                        <div>
                            <div>
                                <JavascriptIcon height={40} width={40} />
                            </div>
                            <div className="text-center text-yellow-300">
                                Javascript
                            </div>
                        </div>
                    </AriseIn>
                    <AriseIn duration={1.5}>
                        <div className="ml-6">
                            <div>
                                <TypescriptIcon height={40} width={40} />
                            </div>
                            <div className="text-center text-blue-300">
                                Typescript
                            </div>
                        </div>
                    </AriseIn>
                    <AriseIn duration={2}>
                        <div className="ml-6">
                            <div>
                                <PythonIcon height={40} width={40} />
                            </div>
                            <div className="text-center text-yellow-300">
                                Python
                            </div>
                        </div>
                    </AriseIn>
                    <AriseIn duration={2.5}>
                        <div className="ml-6">
                            <div>
                                <CppIcon height={40} width={40} />
                            </div>
                            <div className="text-center text-sky-400">Cpp</div>
                        </div>
                    </AriseIn>
                </div>

                <div className="flex justify-center items-center w-max mt-4">
                    <div className="text-lg">Frontend</div>
                    <div className="ml-2">
                        <DevicesIcon height={24} width={24} />
                    </div>
                </div>

                <div className="flex items-center justify-evenly mt-4">
                    <AriseIn>
                        <div>
                            <div>
                                <ReactIcon height={80} width={80} />
                            </div>
                            <div className="text-center text-sky-400">
                                ReactJs
                            </div>
                        </div>
                    </AriseIn>
                    <AriseIn duration={1.5}>
                        <div>
                            <div>
                                <ReduxIcon height={80} width={80} />
                            </div>
                            <div className="text-center text-purple-400">
                                Redux
                            </div>
                        </div>
                    </AriseIn>
                    <AriseIn duration={2}>
                        <div>
                            <div>
                                <NextJsIcon height={80} width={80} />
                            </div>
                            <div className="text-center ">NextJs</div>
                        </div>
                    </AriseIn>
                    <AriseIn duration={2.5}>
                        <div>
                            <div>
                                <PreactIcon height={80} width={80} />
                            </div>
                            <div className="text-center text-purple-300">
                                Preact
                            </div>
                        </div>
                    </AriseIn>
                    <AriseIn duration={3}>
                        <div>
                            <div>
                                <SvelteIcon height={80} width={80} />
                            </div>
                            <div className="text-center text-orange-600">
                                Svelte
                            </div>
                        </div>
                    </AriseIn>
                </div>

                <div className="flex justify-center items-center flex-col mt-4">
                    <div className="relative top-6">
                        <RestApiIcon />
                    </div>
                    <DiveIn>
                        <div>
                            I use REST Api and GraphQL to communicate between my
                            server and client applications.
                        </div>
                    </DiveIn>
                    <div className="relative bottom-4">
                        <GraphQlIcon />
                    </div>
                </div>

                <div className="flex justify-center items-center w-max mt-4">
                    <div className="text-lg">Backend</div>
                    <div className="ml-2">
                        <BackendIcon height={24} width={24} />
                    </div>
                </div>

                <div className="flex items-center justify-evenly mt-4">
                    <AriseIn>
                        <div>
                            <div>
                                <NodeJsIcon height={80} width={80} />
                            </div>
                            <div className="text-center text-green-400">
                                NodeJs
                            </div>
                        </div>
                    </AriseIn>
                    <AriseIn duration={1.5}>
                        <div>
                            <div>
                                <ExpressIcon height={80} width={80} />
                            </div>
                            <div className="text-center ">ExpressJs</div>
                        </div>
                    </AriseIn>
                    <AriseIn duration={2}>
                        <div>
                            <div>
                                <DjangoIcon height={80} width={80} />
                            </div>
                            <div className="text-center text-green-400">
                                Django
                            </div>
                        </div>
                    </AriseIn>
                    <AriseIn duration={2.5}>
                        <div>
                            <div>
                                <FlaskIcon height={80} width={80} />
                            </div>
                            <div className="text-center">Flask</div>
                        </div>
                    </AriseIn>
                    <AriseIn duration={3}>
                        <div>
                            <div>
                                <FastApiIcon height={80} width={80} />
                            </div>
                            <div className="text-center">FastAPI</div>
                        </div>
                    </AriseIn>
                </div>

                <div className="flex items-center justify-evenly mt-4">
                    <AriseIn>
                        <div>
                            <div>
                                <MongoDbIcon height={180} width={180} />
                            </div>
                            <div className="text-center text-green-400">
                                MongoDb
                            </div>
                        </div>
                    </AriseIn>
                    <AriseIn duration={1.5}>
                        <div>
                            <div>
                                <PostgresIcon height={180} width={180} />
                            </div>
                            <div className="text-center ">PostgreSql</div>
                        </div>
                    </AriseIn>
                </div>
            </div>
        </div>
    );
};

export default Resume;
