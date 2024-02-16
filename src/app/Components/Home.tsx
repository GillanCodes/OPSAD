'use client';
import { useCallback, useEffect } from "react";

var previousPos:number = 0;
var scrollDiff:number;

export default function Home() {

    const arrowClick = () => {
        const win:Window = window;
        win.scroll({
            top: (win.innerHeight - 100),
            left: 0,
            behavior: "smooth"
        });
    }

    function scrollDiff(curentPos:number, oldPos:number) {
        var pos = curentPos - oldPos
        return pos > 0
    }

    const onScroll = useCallback((event:Event) => {
        const win:Window = window;
        if (previousPos == 0 && scrollDiff(win.scrollY, previousPos)) arrowClick();
        previousPos = win.scrollY;
    }, [])

    useEffect(() => {
        const win:Window = window;
        win.addEventListener("scroll", onScroll, {passive: true});
        return () => {
            win.removeEventListener("scroll", onScroll);
        }
    }, [])

    return (
        <div className="home">
            <div className="container">
                <div className="_color_shape">
                    <div className="texts">
                        <div className="content">
                            <h1 className="__title">OdsAv</h1>
                            <h2 className="__subtitle">Opératrice de saisie et Assistante Virtuelle</h2>
                        </div>
                    </div> 
                    <div className="arrow">
                        <img src="/icons/down_arrow.png" alt="\/" onClick={arrowClick} className="arrow-icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}
