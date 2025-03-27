import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import EmailButton from "./EmailButton";
import { ChevronDown, Globe } from "lucide-react";

interface MenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const menuItems = ["About", "Reservation", "Contact", "오시는 길"];

const Menu: React.FC<MenuProps> = ({ isOpen, onClose }) => {
    const [isFirstRender, setIsFirstRender] = useState(true);

    useEffect(() => {
        const tl = gsap.timeline();
        // 처음 렌더링 이후로만 애니메이션 실행
        if (isFirstRender) {
            setIsFirstRender(false);
            return;
        }

        if (isOpen) {
            tl.set(".menu-wrap", { display: "flex" })
                .fromTo(
                    ".menu-wrap",
                    { xPercent: 100, opacity: 0 },
                    { xPercent: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
                    "<"
                )
            document.body.style.overflow = "hidden";
        } else {
            tl.fromTo(
                ".menu-wrap",
                { opacity: 1 },
                { opacity: 0, duration: 0.6, ease: "power3.in" }
            ).set(".menu-wrap", { display: "none" }, ">")

            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <div
            className="menu-wrap fixed top-0 right-0 w-full h-full z-50 flex-col overflow-hidden pl-3 pr-2 bg-black hidden"
        >
            <Image
                src="/images/main/main_image_01.png"
                alt="메뉴 배경 이미지"
                layout="fill"
                objectFit="cover"
                quality={80}
                className="absolute top-0 left-0 -z-10 opacity-30"
            />
            <div className="flex items-center justify-between w-full flex-shrink my-14">
                <h1 className="text-3xl font-bold text-white">THE WATERHOUSE</h1>
                <button onClick={onClose}>
                    <Image src="/images/menu_close.png" alt="메뉴 닫기 버튼" width={43} height={43} />
                </button>
            </div>
            <ul className="text-white text-3xl space-y-[26px] z-20 font-normal flex-grow justify-center flex flex-col">
                {menuItems.map((item, index) => (
                    <li className="font-normal" key={index}>{item}</li>
                ))}
            </ul>
            <div className="mt-[calc(3.625rem)] flex-grow">
                <EmailButton />
            </div>
            <div className="w-full h-[0.75px] bg-white" />
            <div className="flex flex-col items-start mt-[calc(1.625rem)] space-y-2">
                <button className="text-white text-[18px]">Instagram</button>
                <button className="text-white text-[18px]">FaceBook</button>
            </div>
            <button className="flex flex-row items-center justify-center gap-1 flex-grow">
                <Globe width={20} height={20} className="text-white" />
                <div className="text-[16px] font-bold ml-1 text-white">EN</div>
                <ChevronDown width={20} height={20} className="text-white" />
            </button>
        </div>
    );
};

export default Menu;