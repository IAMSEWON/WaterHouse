import Image from "next/image";
import ArrowIconButton from "./ArrowIconButton";

type DescriptionProps = {
    title: string;
    descriptionTitle: string;
    titleImage?: string;
    backgroundImage: string;
    description: string;
    moreLink: string;
    index: number;
};

export default function Description({
    title,
    titleImage,
    descriptionTitle,
    backgroundImage,
    description,
}: DescriptionProps) {
    return (
        <div className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
            {/* 배경 이미지 */}
            <Image
                width={1920}
                height={1080}
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                src={backgroundImage}
                alt="배경 이미지"
            />
            {/* 어둡게 오버레이 */}
            <div className="dim absolute inset-0 bg-black/60 z-10 opacity-0"></div>

            {/* 중앙 컨텐츠 */}
            <div className="z-20 text-white txt-wrap h-full">
                <div className="title-wrap w-full h-full flex items-center justify-center text-center">
                    {titleImage ? (
                        <Image
                            width={200}
                            height={200}
                            src={titleImage}
                            alt="로고 이미지"
                            className="mb-4"
                        />
                    ) : (
                        <h1 className="text-white text-[27px] font-bold">{title}</h1>
                    )}
                </div>
                <div className="description-wrap h-full flex flex-col mx-5 gap-8 py-20">
                    <div className="flex flex-col flex-1">
                        <h1 className="text-[27px] font-bold mt-4">{descriptionTitle}</h1>
                        <h4 className="mt-2">{description}</h4>
                    </div>
                    <ArrowIconButton
                        text="MORE"

                        href={""}
                    />
                </div>
            </div>
        </div>
    );
}