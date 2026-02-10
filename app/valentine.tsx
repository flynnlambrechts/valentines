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
                <div className="img-wrap">
                    <Image
                        src="/valentines/lizard.gif"
                        alt="test"
                        fill
                        sizes="50vw"
                        priority
                    />
                </div>
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
                <div className="img-wrap">
                    <Image
                        src="/valentines/rio-rio-movie.gif"
                        alt="test"
                        fill
                        sizes="50vw"
                        priority
                    />
                </div>
            </>
        );
    };

    return <div className="page">{approved ? <Approved /> : <Question />}</div>;
}
