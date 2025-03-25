import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ArrowIconButton from "@/components/ArrowIconButton";
import Splash from "@/components/Splash";
import Menu from "@/components/Menu";

import { AccordionMenu } from "@/components/AccordionMenu";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  const containerRef = useRef<HTMLDivElement>(null);
  const [isSplash, setIsSplash] = useState(false);
  const [isMenu, setIsMenu] = useState(false);

  const handleSplashComplete = () => {
    setIsSplash(true);
  };
  const handleMenuToggle = () => {
    setIsMenu(!isMenu);
  };

  useEffect(() => {
    if (!containerRef.current) return;
    const gt = gsap.timeline();

    const sections = containerRef.current.querySelectorAll(".description-section");

    sections.forEach((section) => {
      gt.to(section, {
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "200% bottom",
          scrub: true,
          pin: true,
          pinSpacing: false,
          markers: true,
        },
      }).to(".title-wrap", {
        y: "-50%",
      })

    })


    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isSplash]);

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Splash animation={false} isMenu={isMenu} onComplete={handleSplashComplete} onMenuHandler={() => handleMenuToggle()} />
      <Menu isOpen={isMenu} onClose={handleMenuToggle} />
      {!isSplash && (
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="flex flex-col gap-[72px] mx-[10px]">
            <div className="mt-[353px] whitespace-pre-line text-[15.5px] leading-7 tracking-[-5%] font-normal text-white">
              더 워터하우스
              <br />
              물, 가장 자연스러운 움직임
              <br />
              <br />
              <br />
              가장 자연스러운 서울의 모습이 남아있는 북촌
              <br />
              한옥마을에 인왕산의 사계절을 자연스럽게
              <br />
              품은 집을 짓다.
              <br />
              <br />
              <br />
              더 워터하우스는 흐르는 물처럼 잔잔하고 유연한
              <br />
              정취 속에서 나만의 흐름을 찾을 수 있는 곳입니다.
              장소의 본질을 고민한 더 워터하우스는 여러 창작자들의 조화로운 감각으로 엮은 영감의 공간을 선보입니다.
            </div>
            <ArrowIconButton
              text="Book Now"
              onClick={() => console.log("Book Now clicked")}
            />
            <AccordionMenu onValueChange={(value) => {

              ScrollTrigger.refresh()
            }} />
          </div>
          {/* <div ref={containerRef} className="flex flex-col w-full">
            {mainData.map((item, index) => (
              <div key={item.title} className="description-section h-screen">
                <Description {...item} index={index} />
              </div>
            ))}
          </div> */}
        </div>
      )}
      {/* 지도 이미지 */}
      <Image
        width={1920}
        height={1080}
        src="/images/main_map.png"
        alt="위치"
      />
    </div>
  );
}