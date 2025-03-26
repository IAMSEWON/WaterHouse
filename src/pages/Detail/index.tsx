"use client"
import Image from "next/image";

import NavBar from "@/components/NavBar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { detailData } from "@/data/detail";
import Modal from "@/components/Modal";
import { Swipe } from "@/components/Swipe";
import Footer from "@/components/Footer";



export default function Detail() {

    const [isOpenImageModal, setIsOpenImageModal] = useState(false);
    const [isMenu, setIsMenu] = useState(false);

    const [modalImages, setModalImages] = useState<string[]>([]);


    const handleSetModalImages = (images: string[]) => {
        setModalImages(images);
        setIsOpenImageModal(true);
    };

    const handleMenuToggle = () => {
        setIsMenu(!isMenu);
    };


    const router = useRouter();
    const { query } = router;

    useEffect(() => {
        const tl = gsap.timeline();


        tl.fromTo('.detail-wrap', {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 1,
            ease: "power2.out"
        }).
            fromTo(
                '.main-title-text',
                {
                    y: 50, // 시작 위치 (위쪽으로)
                    opacity: 0, // 시작 투명도
                },
                {
                    y: 0, // 최종 위치 (원래 위치)
                    opacity: 1, // 최종 투명도
                    duration: 1, // 애니메이션 지속 시간
                    ease: "power3.out", // 이징 (부드럽게)
                }
            ).fromTo(
                '.main-desc-text',
                {
                    y: 50, // 시작 위치 (위쪽으로)
                    opacity: 0, // 시작 투명도
                },
                {
                    y: 0, // 최종 위치 (원래 위치)
                    opacity: 1, // 최종 투명도
                    duration: 1, // 애니메이션 지속 시간
                    ease: "power3.out", // 이징 (부드럽게)
                }, "<"
            )
            .fromTo(
                '.book-button',
                {
                    y: 0, // 시작 위치 (위쪽으로)
                    opacity: 0, // 시작 투명도
                },
                {
                    y: 50, // 최종 위치 (원래 위치)
                    opacity: 1, // 최종 투명도
                    duration: 1, // 애니메이션 지속 시간
                    ease: "power3.out", // 이징 (부드럽게)
                }, "<"
            );

    }, []);

    return (
        <>
            <div className="detail-wrap flex relative flex-col z-30">
                <NavBar isMenu={isMenu} onMenuHandler={handleMenuToggle} />
                <div className="h-lvh flex relative flex-col">

                    {/* TOP 그라디언트 블랙 */}
                    <div className="absolute inset-0 z-10 bg-gradient-to-b bg-gradient-from-b from-black via-transparent to- 
                black opacity-100 h-120" />
                    <div className="absolute inset-0 z-10 bg-gradient-to-b bg-gradient-from-b from-black via-transparent to- 
                black opacity-80 h-100" />
                    {/* 메인 이미지 */}
                    <Image
                        src={query.image as string}
                        alt="로고 이미지"
                        width={1920}
                        height={1080}
                        className="z-0 absolute"
                    />
                    <div className="flex z-20 flex-1 items-center justify-center flex-col mt-[132px]">
                        <h1 className="main-title-text text-2xl font-bold text-center flex-1">머무름 이상의 경험</h1>
                        <div className="flex flex-col gap-16 items-center justify-end mb-10 mx-4">
                            <button className="book-button w-[120px] border border-white rounded-full px-3 py-1 font-bold text-lg">Book Now</button>
                            <p className="main-desc-text flex-1 text-center flex-shrink-0 text-[15px] leading-6 font-semibold">커다란 창 밖에 펼쳐진 풍경은 마치 한 폭의 작품을 감상하는 듯 한 느낌을 주며, 시선과 시점을 고려한 설계로 웅장한 능선과 계절의 아름다움을 더욱 풍성하게 만끽할 수 있습니다. 아티스트와 디자이너들의 감각적 조화는 영감 깃든 시간을
                                형성합니다.</p>
                        </div>
                    </div>

                    {/* BOTTOM 그라디언트 블랙 */}
                    <div className="absolute inset-0 z-10 bg-gradient-to-t bg-gradient-from-t from-black via-transparent to- 
                black opacity-100 h-200" />
                    <div className="absolute inset-0 z-10 bg-gradient-to-t bg-gradient-from-t from-black via-transparent to- 
                black opacity-80 h-120" />
                </div>
                <div className="flex flex-col">
                    {
                        detailData.map((item, index) => {
                            return (
                                <div key={`${item.title}-${index}`} className={index === detailData.length - 1 ? "flex flex-col z-20 pt-20 gap-10" : "flex h-lvh flex-col z-20 py-20 gap-10"}>
                                    <div className="flex flex-col gap-6 mx-7">
                                        <h1 className="font-semibold text-[21px] text-white">{item.title}</h1>
                                        <p className="text-[12px] leading-6 font-normal">{item.description}</p>
                                    </div>
                                    <div className="relative">
                                        <Image
                                            src={item.image}
                                            alt="배경"
                                            width={1920}
                                            height={1080}
                                            className="z-0"
                                        />
                                        {item.modalImages.length > 0 && <button className="absolute right-6 bottom-6" onClick={() => handleSetModalImages(item.modalImages)}>

                                            <Image
                                                src={'/images/detail/detail_image_button.png'}
                                                alt="배경"
                                                width={34}
                                                height={34}
                                            />
                                        </button>}
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
            <Footer />
            {/* 이미지 모달 */}
            <Modal isOpen={isOpenImageModal} onClose={() => setIsOpenImageModal(false)} >
                <Swipe images={modalImages} />
            </Modal>
        </>
    )
}