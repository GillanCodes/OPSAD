'use client';
import { useCallback, useEffect } from "react";

var previousPos:number = 0;
var scrollDiff:number;

export default function Home() {

    const arrowClick = () => {
        const win:Window = window;
        win.scroll({
            top: win.innerHeight,
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
        console.log(previousPos)
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
                        <h1 className="__title">ADSOD</h1>
                        <h2 className="__subtitle">Assistante Virtuelle et Opératrice de saisie</h2>
                    </div> 
                    <div className="arrow">
                        <p onClick={arrowClick}>\/</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
