import Image from "next/image";
import Menu from "./Menu";

type NavBarProps = {
    animation?: boolean;
    isMenu: boolean;
    onMenuHandler: () => void;
}

function NavBar({ animation = false, isMenu, onMenuHandler }: NavBarProps) {


    if (!animation) {
        return (
            <>

                <div className="nav-wrap fixed w-full flex items-center h-[96px] z-50">
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
