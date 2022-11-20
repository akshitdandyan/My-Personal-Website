import type { NextPage } from "next";
import { useLayoutEffect } from "react";

const Cv: NextPage = () => {
    useLayoutEffect(() => {
        window.location.href =
            "https://drive.google.com/file/d/1mEuer95CS8G6eWaS2Qbkul9kD-pcDBjj/view?usp=sharing";
    }, []);
    return <div className="p-4"></div>;
};

export default Cv;
