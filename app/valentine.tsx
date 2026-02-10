"use client";
import { useRef, useState } from "react";
import "./styles.css";
import Image from "next/image";

export default function Valentine() {
    const [swapped, setSwapped] = useState(false);
    const [approved, setApproved] = useState(false);

    const swap = () => {
        setSwapped((s) => !s);
    };

    const No = () => {
        return (
            <button
                className="no"
                // onMouseEnter={swap}
                onMouseOver={swap}
                onClick={swap}>
                No 🙃
            </button>
        );
    };

    const Yes = () => {
        return (
            <button className="yes" onClick={() => setApproved(true)}>
                Yes 💖
            </button>
        );
    };

    const Question = () => {
        return (
            <>
                <h1>Asha, Will you be my Valentine? 💘</h1>
                <Image src="/lizard.gif" alt="test" width={400} height={300} />
                <div className="buttons">
                    {swapped ? (
                        <>
                            <Yes />
                            <No />
                        </>
                    ) : (
                        <>
                            <>
                                <No />
                                <Yes />
                            </>
                        </>
                    )}
                </div>
            </>
        );
    };

    const Approved = () => {
        return (
            <>
                <h1>See you Thursday!!❤️🎉</h1>
                <Image
                    src="/rio-rio-movie.gif"
                    alt="test"
                    width={800}
                    height={300}
                />
            </>
        );
    };

    return <div className="page">{approved ? <Approved /> : <Question />}</div>;
}
