import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import EmailButton from "./EmailButton";
import { ArrowDownIcon, ChevronDown, Globe } from "lucide-react";

interface MenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const menuItems = [
    "About",
    "Reservation",
    "Contact",
    "오시는 길"
];


const Menu: React.FC<MenuProps> = ({ isOpen, onClose }) => {
    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!menuRef.current) return;

        console.log("isOpen", isOpen);

        if (isOpen) {
            gsap.fromTo(
                menuRef.current,
                { xPercent: 100 },
                { xPercent: 0, duration: 0.6, ease: "power3.out" }
            );
            document.body.style.overflow = "hidden"; // 스크롤 막기
        } else {
            gsap.fromTo(
                menuRef.current,
                { xPercent: 0 },
                { xPercent: 100, duration: 0.6, ease: "power3.in" }
            );
            // gsap.to(menuRef.current, { xPercent: 100, duration: 0.6, ease: "power3.in" });
            document.body.style.overflow = "auto"; // 스크롤 다시 활성화
        }

        return () => {
            document.body.style.overflow = "auto"; // 컴포넌트 언마운트 시 초기화
        };
    }, [isOpen]);

    return (
        <div
            ref={menuRef}
            className="fixed top-0 right-0 w-full h-full z-50 flex flex-col overflow-hidden pl-2 pr-2 bg-black"
        >
            <Image
                src="/images/main/main_image_01.png"
                alt="메뉴 배경 이미지"
                layout="fill"
                objectFit="cover"
                quality={80}
                className="absolute top-0 left-0 -z-10 opacity-80"
            />
            {/* <div className="absolute inset-0 bg-[#262727]/80"></div> */}
            <div className="flex items-center justify-between w-full mt-[calc(4rem)]">
                <h1 className="text-3xl font-bold">THE WATERHOUSE</h1>
                <button
                    onClick={onClose}
                    className=""
                >
                    <Image src="/images/menu_close.png" alt="메뉴 닫기 버튼" width={43} height={43} />
                </button>
            </div>
            <ul className="text-white text-3xl space-y-[26px] z-20 mt-[calc(4.375rem)] font-normal">
                {menuItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <div className="mt-[calc(3.625rem)]">
                <EmailButton />
            </div>
            {/* 가로 라인 */}
            <div className="w-full h-[0.75px] bg-white mt-[calc(3.313rem)]" />
            {/* 인스타그램, 페이스북 */}
            <div className="flex flex-col items-start mt-[calc(1.625rem)] space-y-2">
                <button>Instagram</button>
                <button>FaceBook</button>
            </div>
            {/* 언어 설정 */}
            <button className="flex flex-row items-center justify-center mt-[calc(1.625rem)] gap-1">
                <Globe width={20} height={20} className="text-white" />
                <div className="text-[16px] font-bold ml-1">EN</div>
                {/* 화살 아래아이콘 lucide-react */}
                <ChevronDown width={20} height={20} className="text-white" />
            </button>
        </div>
    );
};

export default Menu;