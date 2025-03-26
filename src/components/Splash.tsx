import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import NavBar from "./NavBar";

type SplashProps = {
    animation: boolean;
    isMenu: boolean;
    onMenuHandler: () => void;
    onMenuTextStart: () => void;
    onComplete: () => void;
}

export default function Splash({ animation, isMenu, onComplete, onMenuTextStart, onMenuHandler }: SplashProps) {

    const containerRef = useRef<HTMLDivElement>(null);


    useEffect(() => {

        if (!animation) return;

        const tl = gsap.timeline();

        // 이미지 페이드 인 → 페이드 아웃
        tl.fromTo(
            ".logoImage",
            { opacity: 0 },
            { opacity: 1, duration: 2, ease: "power2.out" }
        ).to(".logoImage", { opacity: 0, duration: 2, ease: "power2.in" })
            .to(".logoImage", { display: "none" }, ">")

            // 텍스트 페이드 인
            .fromTo(
                ".brandName",
                { opacity: 0 },
                {
                    opacity: 1, duration: 2, ease: "power2.out", onComplete: () => {

                        containerRef.current?.classList.remove("items-center");

                    }
                },
                "-=1" // 이미지 페이드 아웃이 끝나기 1초 전에 텍스트 페이드 인 시작
            )
            .to(".brandName", { opacity: 0, duration: 2, ease: "power2.in" })
            .to(".brandName", { display: "none" }, ">")

            // 네비게이션 네임 페이드 인
            // 네비게이션 네임이 중앙에 있다가 폰트가 작아지면서 왼쪽으로 이동
            .fromTo(
                ".nav-wrap",
                { opacity: 0 },
                {
                    opacity: 1, duration: 2, ease: "power2.out",
                    onStart: onMenuTextStart,
                },
                ">" // 끝난 후 실행
            )
            .to(".nav-name", { fontSize: "1.063rem", left: "25%", duration: 1, ease: "power2.out" })
            .to(".nav-menu", { display: "block", opacity: 1, duration: 1, ease: "power2.out", onComplete: () => onComplete() })
    }, [animation]);


    if (!animation) return (
        <div ref={containerRef} className="flex items-center justify-center bg-black mt-[76px] z-20">
            <div className="nav-wrap fixed w-full flex items-center">
                <button className="nav-name text-[1.063rem] left-1/4 font-bold absolute -translate-x-1/2 text-center w-full">
                    <h1 className="text-white">THE WATERHOUSE</h1>
                </button>
                {/* 메뉴 버튼 */}
                <button className="nav-menu text-2xl absolute right-[15px]" onClick={() => onMenuHandler()}>
                    <Image
                        src={isMenu ? "/images/menu_close.png" : "/images/menu_bar.png"}
                        alt="로고 이미지"
                        width={33}
                        height={13}
                    />
                </button>
            </div>
        </div>

    );



    return (
        <div ref={containerRef} className="flex items-center justify-center bg-black h-fit z-20">
            <Image
                src="/images/logo.png"
                alt="로고 이미지"
                className="logoImage absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                width={200}
                height={100}
            />
            <div className="brandName absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center flex-col w-full">
                <h1 className="text-3xl text-white font-bold">THE WATERHOUSE</h1>
                <h4 className="text-white">Retreat of Creative Inspiration</h4>
            </div>
            <NavBar animation isMenu={isMenu} onMenuHandler={onMenuHandler} />
        </div>
    )
}