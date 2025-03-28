import Image from "next/image";
import Menu from "./Menu";
import { useEffect } from "react";

type NavBarProps = {
    animation?: boolean;
    isMenu: boolean;
    onMenuHandler: () => void;
}

function NavBar({ animation = false, isMenu, onMenuHandler }: NavBarProps) {


    // 스크롤이 top 0이면  nav-wrap backdrop-blur-none
    // top > 10 이면  nav-wrap backdrop-blur-[2px]
    const handleNavBlur = () => {
        if (window.scrollY > 100) {
            document.querySelector('.nav-wrap')?.classList.add('backdrop-blur-[2px]');
        } else {
            document.querySelector('.nav-wrap')?.classList.remove('backdrop-blur-[2px]');
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleNavBlur);
        return () => {
            window.removeEventListener('scroll', handleNavBlur);
        }
    }, []);


    if (!animation) {
        return (
            <>

                <div className="nav-wrap fixed w-full flex items-center h-[96px] z-50 backdrop-blur-sm">
                    <button className="nav-name text-[1.063rem]  font-bold absolute left-1/4 -translate-x-1/2 text-center w-full">
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
                <Menu isOpen={isMenu} onClose={onMenuHandler} />
            </>
        )
    }

    return (
        <>
            <div className="nav-wrap fixed w-full flex items-center h-[96px]">
                <button className="nav-name text-4xl font-bold absolute left-1/2 -translate-x-1/2 text-center w-full">
                    <h1 className="text-white">THE WATERHOUSE</h1>
                </button>
                {/* 메뉴 버튼 */}
                <button className="nav-menu text-2xl absolute hidden opacity-0 right-[15px]" onClick={() => onMenuHandler()}>
                    <Image
                        src={isMenu ? "/images/menu_close.png" : "/images/menu_bar.png"}
                        alt="로고 이미지"
                        width={33}
                        height={13}
                    />
                </button>
            </div>
            <Menu isOpen={isMenu} onClose={onMenuHandler} />
        </>
    )
}

export default NavBar;
