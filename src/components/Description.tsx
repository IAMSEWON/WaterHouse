import Image from "next/image";

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
    index
}: DescriptionProps) {
    return (
        <div className="relative border w-full h-screen flex flex-col justify-center items-center overflow-hidden">
            {/* 배경 이미지 */}
            <Image
                width={1920}
                height={1080}
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                src={backgroundImage}
                alt="배경 이미지"
            />
            {/* 어둡게 오버레이 */}
            <div className="absolute inset-0 bg-black/50 z-10"></div>

            {/* 중앙 컨텐츠 */}
            <div className="z-20 text-center text-white">
                <div className="title-wrap absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
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
                <div className="description-wrap absolute top-full">
                    <h1 className="text-[27px] font-bold mt-4">{descriptionTitle}</h1>
                    <h4 className="mt-2">{description}</h4>
                </div>
            </div>
        </div>
    );
}