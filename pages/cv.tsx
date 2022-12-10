import type { NextPage } from "next";
import { useLayoutEffect } from "react";

const Cv: NextPage = () => {
    useLayoutEffect(() => {
        window.location.href =
            "https://drive.google.com/file/d/1FGuepCdDyQIiT6unxTDd6sdDdV1869xM/view?usp=sharing";
    }, []);
    return <div className="p-4"></div>;
};

export default Cv;
