
import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import Link from "next/link";

type ArrowIconButtonProps = {
    text: string;
    href: Url;
    className?: string;
}

export default function ArrowIconButton({ text, href, className }: ArrowIconButtonProps) {

    return (

        <Link href={href} className="flex flex-row gap-3 items-center">
            <div className={`text-[17px] ${className}`}>{text}</div>
            <Image
                src="/images/more_arrow.png"
                alt="로고 이미지"
                width={55}
                height={9.5}
            />
        </Link>
    )
}