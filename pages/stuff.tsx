import type { NextPage } from "next";
import Link from "next/link";

const Stuff: NextPage = () => {
    return (
        <div className="p-4">
            <Link
                className="hover:text-blue-300 duration-200"
                target="_blank"
                href="https://www.canva.com/design/DAFNk-CWQHE/bOF3MnpZULCU3VheTEG8Nw/view?utm_content=DAFNk-CWQHE&utm_campaign=designshare&utm_medium=link&utm_source=publishpresent"
            >
                Dashbud Pitchdeck Canva
            </Link>
            <br />
            <Link
                className="hover:text-blue-300 duration-200"
                target="_blank"
                href="https://drive.google.com/file/d/1KKKV6pLR3ynvKAg-NvJDdzh9PfsAitME/view?usp=sharing"
            >
                Dashbud Pitchdeck Pdf
            </Link>
        </div>
    );
};

export default Stuff;
