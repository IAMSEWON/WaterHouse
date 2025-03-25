
import Image from "next/image";

type ArrowIconButtonProps = {
    text: string;
    onClick: () => void;
    className?: string;
}

export default function ArrowIconButton({ text, onClick, className }: ArrowIconButtonProps) {

    return (

        <button onClick={onClick} className="flex flex-row gap-3 items-center">
            <div className={`text-[17px] ${className}`}>{text}</div>
            <Image
                src="/images/more_arrow.png"
                alt="로고 이미지"
                width={55}
                height={9.5}
            />
        </button>
    )
}