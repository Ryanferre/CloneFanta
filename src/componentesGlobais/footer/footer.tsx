
import { useContext, useEffect, useState } from "react"
import ContextArmValue from "../../Contex/Contex.tsx"
import { useRef } from "react";

const Footer= ()=>{
    const { RotateImg, settTime, BackColorText }= useContext(ContextArmValue)
    const [ RouterGo, setRouterGo ]= useState<number>(360)//define rotacao dos slides iniciando em -360
    const [ desableClick, setClick]= useState(false)
    const botaoRefGo = useRef<HTMLButtonElement>(null);
    const botaoRefBack = useRef<HTMLButtonElement>(null);

    //simular click usando o scroll do mouse

    useEffect(()=>{
        const handleScroll = (event: WheelEvent) => {
            if (event.deltaY > 0) {
              //Scroll para baixo ⬇️"
              if (botaoRefGo.current) {
                  botaoRefGo.current.click();
              }
            } else {
              //"Scroll para cima ⬆️
              if (botaoRefBack.current) {
                  botaoRefBack.current.click();
              }
            }
          };

          window.addEventListener("wheel", handleScroll, { passive: false, capture: true });
          return () => window.removeEventListener("wheel", handleScroll);
    }, [])

    const Go= ()=>{
        setRouterGo((e)=> e + 80)
        setClick(true)

        setTimeout(()=>{
            setClick(false)
        }, 1200)
    }

    const Back= ()=>{
        setRouterGo((e)=> e - 80)

        setClick(true)

        setTimeout(()=>{
            setClick(false)
        }, 1200)
    }

    useEffect(()=>{
        const TimeReset= setTimeout(() => {
            settTime('1s')
        }, 500);

        return ()=> clearTimeout(TimeReset)
    }, [RouterGo])

    

    return(
        <section className="flex items-start h-[370px] overflow-hidden w-[360px] absolute top-[265px] -left-[200px]" style={{display: `${RotateImg}`, zIndex: '2'}}>
                 <svg className="relative top-20" style={{transition: "2.5s", transform: `rotate(${RouterGo}deg)`}}  version="1.0" xmlns="http://www.w3.org/2000/svg" width="max-width" height="380px" viewBox="0 0 2700 2700"preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,2700.000000) scale(0.100000,-0.100000)" fill={BackColorText} stroke="none">
                    <path d="M13362 25333 l3 -468 135 0 135 0 3 468 2 467 -140 0 -140 0 2 -467z"/>
                    <path d="M12226 25533 l-38 -4 6 -42 c3 -23 19 -175 36 -337 17 -162 33 -296 34 -298 8 -8 86 12 86 22 0 15 -58 570 -65 624 -4 23 -9 41 -13 40 -4 -1 -24 -3 -46 -5z"/>
                    <path d="M14716 25501 c-11 -72 -68 -633 -64 -636 10 -9 88 -15 88 -7 0 5 16 157 35 338 19 180 34 328 32 329 -1 1 -21 5 -44 8 -41 5 -42 5 -47 -32z"/>
                    <path d="M10968 25333 c-16 -2 -28 -6 -28 -7 0 -11 141 -660 144 -663 2 -3 22 1 45 7 35 9 40 14 36 33 -3 12 -32 150 -65 307 -33 157 -62 295 -65 308 -5 22 -11 23 -67 15z"/>
                    <path d="M15965 25318 c-3 -13 -32 -151 -65 -308 -33 -157 -62 -295 -65 -307 -4 -19 1 -24 36 -33 23 -6 43 -10 45 -7 5 5 145 660 142 662 -2 2 -22 6 -45 10 -39 6 -43 5 -48 -17z"/>
                    <path d="M9760 25006 c-19 -7 -35 -20 -34 -27 2 -23 195 -613 204 -623 9 -9 80 11 80 22 1 15 -205 642 -210 641 -3 0 -21 -6 -40 -13z"/>
                    <path d="M17092 24702 c-56 -174 -102 -320 -102 -324 0 -11 71 -31 80 -22 5 5 52 144 106 309 53 165 99 306 101 312 5 12 -10 20 -62 37 -19 5 -28 -18 -123 -312z"/>
                    <path d="M8580 24554 c-19 -8 -36 -16 -38 -19 -4 -4 257 -594 269 -609 9 -10 79 15 79 29 0 12 -258 597 -268 607 -4 4 -23 0 -42 -8z"/>
                    <path d="M18359 24525 c-11 -25 -72 -161 -135 -302 -62 -142 -114 -262 -114 -268 0 -14 70 -39 79 -29 13 15 273 605 269 609 -2 3 -21 11 -41 20 l-38 16 -20 -46z"/>
                    <path d="M7355 24155 c-62 -37 -110 -71 -110 -79 0 -19 447 -796 458 -796 13 0 227 125 227 133 0 8 -446 785 -459 799 -3 4 -55 -22 -116 -57z"/>
                    <path d="M19301 23821 c-127 -220 -231 -403 -231 -408 0 -8 214 -133 227 -133 9 0 463 784 463 799 0 5 -35 29 -77 54 -43 25 -94 54 -114 66 l-37 22 -231 -400z"/>
                    <path d="M6388 23289 c-16 -11 -28 -25 -28 -30 0 -5 88 -130 196 -279 l196 -270 34 26 c19 15 34 28 34 31 0 9 -391 543 -398 543 -4 0 -19 -10 -34 -21z"/>
                    <path d="M20375 23041 c-107 -148 -195 -272 -195 -274 0 -3 15 -16 34 -31 l34 -26 196 270 c108 149 196 274 196 279 0 9 -52 51 -64 51 -3 0 -93 -121 -201 -269z"/>
                    <path d="M5407 22492 c-15 -15 -27 -31 -27 -35 0 -11 440 -497 449 -497 4 0 20 13 35 29 l28 29 -226 251 c-125 138 -228 251 -230 251 -1 0 -14 -13 -29 -28z"/>
                    <path d="M21335 22270 l-227 -252 28 -29 c15 -16 31 -29 35 -29 10 0 449 487 449 498 0 4 -13 21 -29 36 l-29 28 -227 -252z"/>
                    <path d="M4506 21591 l-28 -29 252 -227 252 -227 29 28 c16 15 29 31 29 35 0 10 -487 449 -498 449 -4 0 -21 -13 -36 -29z"/>
                    <path d="M22225 21419 c-121 -110 -231 -211 -245 -224 l-25 -25 32 -31 31 -32 252 228 252 227 -28 29 c-15 16 -33 29 -38 28 -6 0 -110 -90 -231 -200z"/>
                    <path d="M3711 20611 c-12 -16 -21 -32 -21 -35 0 -5 535 -396 543 -396 3 0 16 15 31 34 l26 34 -270 196 c-149 108 -274 196 -279 196 -6 0 -19 -13 -30 -29z"/>
                    <path d="M22985 20449 c-143 -105 -263 -193 -267 -197 -4 -4 6 -22 21 -41 l28 -34 272 197 c149 108 271 199 271 202 0 14 -43 64 -53 63 -7 0 -129 -86 -272 -190z"/>
                    <path d="M2867 19683 c-25 -43 -54 -94 -66 -114 l-22 -37 400 -231 c220 -127 403 -231 408 -231 8 0 133 214 133 227 0 9 -784 463 -799 463 -5 0 -29 -35 -54 -77z"/>
                    <path d="M23673 19532 c-216 -125 -393 -230 -393 -235 0 -13 125 -227 133 -227 5 0 188 104 408 231 l400 231 -22 37 c-12 20 -41 71 -66 114 -25 42 -50 77 -56 77 -7 -1 -189 -103 -404 -228z"/>
                    <path d="M2447 18423 c-8 -21 -12 -41 -9 -45 10 -9 595 -268 607 -268 14 0 39 70 29 79 -10 8 -598 271 -607 271 -3 0 -12 -17 -20 -37z"/>
                    <path d="M24227 18326 c-164 -73 -300 -136 -303 -139 -9 -9 19 -77 31 -77 12 0 597 259 607 268 7 8 -21 82 -31 82 -3 0 -140 -61 -304 -134z"/>
                    <path d="M2001 17259 c-25 -69 -50 -55 297 -167 174 -56 320 -102 324 -102 11 0 31 71 22 80 -5 5 -144 52 -309 106 -165 53 -306 99 -312 101 -7 3 -17 -6 -22 -18z"/>
                    <path d="M24670 17178 c-168 -55 -309 -103 -314 -108 -9 -9 11 -80 24 -80 8 0 632 200 638 205 5 4 -25 79 -34 81 -5 1 -146 -43 -314 -98z"/>
                    <path d="M1666 16019 c-4 -23 -5 -44 -2 -46 2 -3 141 -33 308 -69 166 -35 313 -66 325 -69 19 -4 24 1 33 36 6 23 10 43 7 45 -3 3 -651 144 -662 144 -1 0 -5 -19 -9 -41z"/>
                    <path d="M24986 15989 c-176 -38 -321 -71 -323 -73 -3 -2 1 -22 7 -45 9 -35 14 -40 33 -36 12 3 159 34 325 69 167 36 306 66 308 69 9 9 -9 87 -20 86 -6 -1 -155 -32 -330 -70z"/>
                    <path d="M1468 14768 c-3 -23 -4 -44 -3 -46 3 -3 636 -72 661 -72 10 0 30 78 22 86 -2 1 -136 17 -298 34 -162 17 -314 33 -336 36 l-42 6 -4 -44z"/>
                    <path d="M25185 14774 c-165 -18 -308 -33 -318 -33 -16 -1 -18 -6 -12 -43 4 -24 9 -44 10 -46 4 -4 666 65 669 70 2 2 1 22 -2 46 -3 35 -7 42 -26 41 -11 -1 -156 -16 -321 -35z"/>
                    <path d="M1200 13500 l0 -140 468 2 467 3 0 135 0 135 -467 3 -468 2 0 -140z"/>
                    <path d="M24864 13627 c-2 -7 -3 -69 -2 -138 l3 -124 468 -3 467 -2 0 140 0 140 -465 0 c-374 0 -467 -3 -471 -13z"/>
                    <path d="M1775 12314 c-165 -18 -303 -33 -307 -33 -5 -1 1 -81 7 -88 2 -4 669 67 673 71 1 2 0 22 -4 45 -8 50 28 49 -369 5z"/>
                    <path d="M24856 12309 c-4 -23 -5 -43 -4 -45 4 -4 671 -75 673 -71 1 1 5 21 8 44 l5 42 -42 6 c-52 7 -607 65 -622 65 -6 0 -14 -19 -18 -41z"/>
                    <path d="M1985 11099 c-176 -37 -322 -69 -323 -69 -4 0 8 -83 13 -88 2 -3 657 137 662 142 7 6 -17 86 -25 85 -4 0 -151 -32 -327 -70z"/>
                    <path d="M24670 11129 c-6 -23 -10 -43 -7 -45 5 -5 660 -145 662 -142 2 2 6 22 10 45 6 39 5 43 -17 48 -13 3 -151 32 -308 65 -157 33 -295 62 -307 65 -19 4 -24 -1 -33 -36z"/>
                    <path d="M2295 9908 c-170 -55 -311 -102 -313 -103 -8 -6 28 -80 39 -79 23 2 613 195 623 204 11 11 -12 80 -27 79 -7 0 -151 -45 -322 -101z"/>
                    <path d="M24360 9974 c-7 -20 -8 -39 -4 -44 10 -9 600 -202 623 -204 11 -1 47 73 39 79 -6 5 -630 205 -638 205 -5 0 -14 -16 -20 -36z"/>
                    <path d="M2795 8784 c-126 -57 -261 -117 -298 -133 l-68 -30 16 -38 c9 -20 17 -39 20 -41 4 -4 594 256 609 269 13 11 -16 79 -34 78 -8 0 -118 -48 -245 -105z"/>
                    <path d="M23931 8854 c-7 -20 -9 -39 -5 -43 15 -13 605 -273 609 -269 3 2 11 21 20 41 l16 38 -46 20 c-25 11 -161 72 -302 135 -142 62 -262 114 -268 114 -6 0 -17 -16 -24 -36z"/>
                    <path d="M3180 7700 c-217 -126 -394 -234 -392 -240 6 -25 125 -220 134 -220 14 0 798 454 798 463 0 16 -125 227 -135 226 -5 0 -188 -103 -405 -229z"/>
                    <path d="M23343 7820 c-35 -60 -63 -113 -63 -117 0 -9 784 -463 799 -463 5 0 29 35 54 78 25 42 54 93 66 113 l22 37 -400 231 c-220 127 -403 231 -408 231 -4 0 -36 -50 -70 -110z"/>
                    <path d="M3967 6631 c-142 -104 -263 -193 -269 -199 -11 -11 25 -72 43 -72 5 0 130 88 279 196 l270 196 -26 34 c-15 19 -29 34 -33 33 -3 0 -122 -85 -264 -188z"/>
                    <path d="M22736 6786 l-26 -34 270 -196 c149 -108 274 -196 279 -196 9 0 51 52 51 64 0 5 -535 396 -543 396 -3 0 -16 -15 -31 -34z"/>
                    <path d="M4727 5663 l-249 -225 28 -29 c15 -16 32 -29 36 -29 11 0 498 439 498 449 0 8 -53 61 -61 60 -2 0 -116 -102 -252 -226z"/>
                    <path d="M21987 5862 c-15 -15 -27 -31 -27 -34 0 -9 488 -448 498 -448 4 0 21 13 36 29 l28 29 -251 226 c-137 124 -252 226 -254 226 -2 0 -15 -13 -30 -28z"/>
                    <path d="M5601 4795 c-122 -134 -221 -248 -221 -253 0 -4 13 -21 29 -36 l29 -28 227 252 227 252 -28 29 c-15 16 -31 29 -35 29 -4 0 -107 -110 -228 -245z"/>
                    <path d="M21136 5011 l-28 -29 227 -252 227 -252 29 28 c16 15 29 32 29 36 0 11 -439 498 -449 498 -4 0 -20 -13 -35 -29z"/>
                    <path d="M6556 4020 c-108 -149 -196 -274 -196 -279 0 -9 52 -51 64 -51 5 0 396 535 396 543 0 3 -15 16 -34 31 l-34 26 -196 -270z"/>
                    <path d="M20211 4261 l-34 -28 197 -272 c108 -149 199 -271 202 -271 12 0 64 42 64 51 0 8 -358 508 -384 536 -8 9 -19 5 -45 -16z"/>
                    <path d="M7468 3325 c-126 -217 -228 -398 -228 -404 0 -5 35 -29 78 -54 42 -25 93 -54 113 -66 l37 -22 231 400 c127 220 231 403 231 408 0 8 -214 133 -227 133 -5 0 -110 -178 -235 -395z"/>
                    <path d="M19178 3657 c-59 -34 -108 -66 -108 -70 0 -5 104 -188 231 -408 l231 -400 37 22 c20 12 71 41 114 66 42 25 77 49 77 54 0 18 -455 799 -465 798 -5 0 -58 -28 -117 -62z"/>
                    <path d="M8797 3048 c-8 -18 -69 -156 -136 -306 -68 -151 -121 -275 -119 -277 2 -3 21 -11 41 -20 l38 -16 20 46 c11 25 72 161 135 302 62 142 114 262 114 268 0 9 -54 35 -73 35 -4 0 -13 -15 -20 -32z"/>
                    <path d="M18138 3067 c-16 -6 -28 -16 -28 -22 0 -12 258 -597 268 -607 4 -3 24 1 45 9 27 11 36 20 32 32 -21 66 -267 596 -277 598 -7 0 -25 -4 -40 -10z"/>
                    <path d="M9920 2626 c-20 -54 -193 -592 -194 -605 -1 -11 73 -47 79 -39 4 6 205 630 205 638 0 8 -53 30 -72 30 -5 0 -13 -11 -18 -24z"/>
                    <path d="M17018 2638 c-16 -5 -28 -13 -28 -18 0 -8 200 -632 205 -638 3 -3 69 20 77 27 13 11 -196 636 -212 638 -8 1 -27 -3 -42 -9z"/>
                    <path d="M11080 2337 c0 -2 -32 -152 -70 -332 -39 -181 -69 -329 -68 -330 2 -2 22 -6 45 -10 39 -6 43 -5 48 17 3 13 32 151 65 308 33 157 62 295 65 307 4 19 -1 24 -32 32 -40 11 -53 13 -53 8z"/>
                    <path d="M15862 2329 c-26 -8 -31 -14 -27 -32 3 -12 32 -150 65 -307 33 -157 62 -295 65 -308 5 -22 9 -23 48 -17 23 4 43 8 45 10 1 1 -29 149 -68 330 -38 180 -70 330 -70 332 0 5 -22 2 -58 -8z"/>
                    <path d="M12260 2142 c0 -5 -16 -157 -35 -338 -19 -180 -34 -328 -32 -329 1 -1 21 -5 44 -8 41 -5 42 -5 47 32 11 72 68 633 64 636 -10 9 -88 15 -88 7z"/>
                    <path d="M14678 2143 c-16 -2 -28 -10 -28 -16 0 -16 58 -569 65 -623 l6 -42 42 5 c23 3 43 7 44 8 2 1 -13 149 -32 329 -19 181 -35 332 -35 337 0 9 -12 9 -62 2z"/>
                    <path d="M13367 2134 c-4 -4 -7 -216 -7 -471 l0 -463 140 0 140 0 -2 468 -3 467 -131 3 c-71 1 -133 -1 -137 -4z"/>
                    </g>
                </svg>
                <button className="Next-Previw absolute right-[-300px]" disabled={desableClick} ref={botaoRefGo} onClick={Go}>I</button>
                <button className="Back-previw absolute right-[-300px]" disabled={desableClick} ref={botaoRefBack} onClick={Back}>I</button>
        </section>
    )
}

export default Footer