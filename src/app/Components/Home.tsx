'use client';

import { useEffect } from "react";

export default function Home() {

    const arrowClick = () => {
        const win:Window = window;
        win.scroll({
            top: win.innerHeight,
            left: 0,
            behavior: "smooth"
        });
    }

    return (
        <div className="home">
            <div className="container">
                <div className="_color_shape">
                    <div className="texts">
                        <h1 className="__title">ADSOD</h1>
                        <h2 className="__subtitle">Assistante Virtuel et Opératice de saisie</h2>
                    </div> 
                    <div className="arrow">
                        <p onClick={arrowClick}>\/</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
