import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


import ArrowIconButton from "@/components/ArrowIconButton";
import Splash from "@/components/Splash";
import Menu from "@/components/Menu";

import { AccordionMenu } from "@/components/AccordionMenu";
import Image from "next/image";
import EmailButton from "@/components/EmailButton";
import Footer from "@/components/Footer";
import Description from "@/components/Description";
import { mainData } from "@/data/main";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  const containerRef = useRef<HTMLDivElement>(null);

  // 비디오 요소
  const videoRef = useRef<HTMLVideoElement>(null);



  const [isSplashTextStart, setIsSplashTextStart] = useState(false);
  const [isSplashTextEnd, setIsSplashTextEnd] = useState(false);
  const [isSplash, setIsSplash] = useState(false);
  const [isMenu, setIsMenu] = useState(false);



  const handleSplashStart = () => {
    setIsSplashTextStart(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };


  const handleSplashEnd = () => {
    setIsSplashTextEnd(true);
  };

  const handleSplashComplete = () => {
    setIsSplash(true);
  };

  const handleMenuToggle = () => {
    setIsMenu(!isMenu);
  };

  // 비디오 fadeIn 애니메이션
  const handleMainScrollStart = () => {
    if (!videoRef.current) return;


    const gt = gsap.timeline();

    gt.fromTo(videoRef.current, {
      opacity: 0,
    }, {
      opacity: 1,
      duration: 2,
      ease: "power2.out"
    })
  }


  // 백그라운드 opacity 애니메이션
  const handleMainScrollEnd = () => {
    if (!videoRef.current) return;
    handleSplashComplete();

    // 2초 지연 후에 애니메이션 실행
    // 지연 호출을 변수에 저장
    gsap.delayedCall(1, () => {
      const gt = gsap.timeline();
      gt.fromTo(
        videoRef.current,
        { opacity: 1 },
        { opacity: 0.3, duration: 2, ease: "power2.out" }
      ).to(
        '.main-first-section',
        { opacity: 1, duration: 2, ease: "power2.out" },
        "<"
      ).to(
        '.main-first-section-text',
        { y: '0', duration: 2, ease: "power2.out" },
        "<"
      )
    });
  };


  const handleSectionScroll = () => {
    if (!containerRef.current) return;


    // const gt = gsap.timeline();

    const sections = containerRef.current.querySelectorAll(".description-section");


    // 모든 section의 opacity를 0.5로 설정
    sections.forEach((section) => {
      gsap.set(section, {
        // opacity: 0,
      });

      // section 안의 .description-wrap의 x값을 -50%로 설정
      gsap.set(section.querySelector(".description-wrap"), {
        // x: "-50%",
        // bottom:"-100%"
      });
    });

    gsap.set(".desc-0", {
      // opacity: 1,
      zIndex: 5
    });
    gsap.set(".desc-1", {
      // opacity: 1,
      zIndex: 4
    });
    gsap.set(".desc-2", {
      // opacity: 1,
      zIndex: 3
    });
    gsap.set(".desc-3", {
      // opacity: 1,
      zIndex: 2
    });
    gsap.set(".desc-4", {
      // opacity: 1,
      zIndex: 1
    });

    gsap.set([".desc-1", ".desc-2", ".desc-3", ".desc-4"], {
      position: "absolute",
      top: 0,
      left: 0,
      opacity: 0,
    });

    // scrollTrigger로 애니메이션 설정
    gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-ani-wrap",
        start: "top top", // .scroll-ani-wrap의 top이 화면 top에 도달할 때
        end: "1700% bottom", // .scroll-ani-wrap의 bottom이 화면 bottom에 도달할 때
        scrub: 1.2,
        pin: true, // .scroll-ani-wrap을 고정시킴
        pinSpacing: true,
      }
    })
      .to(".desc-0 .dim", { opacity: 1 }, ">")
      .to(".desc-0 .txt-wrap", { y: "-100%" })
      .to(".desc-0", { opacity: 0 })
      .to(".desc-0", { display: "none" })
      .to(".desc-1", { opacity: 1 }, "<-1")
      .to(".desc-1 .dim", { opacity: 1 })
      .to(".desc-1 .txt-wrap", { y: "-100%" })
      .to(".desc-1", { opacity: 0 })
      .to(".desc-1", { display: "none" })
      .to(".desc-2", { opacity: 1 }, "<-1")
      .to(".desc-2 .dim", { opacity: 1 })
      .to(".desc-2 .txt-wrap", { y: "-100%" })
      .to(".desc-2", { opacity: 0 })
      .to(".desc-2", { display: "none" })
      .to(".desc-3", { opacity: 1 }, "<-1")
      .to(".desc-3 .dim", { opacity: 1 })
      .to(".desc-3 .txt-wrap", { y: "-100%" })
      .to(".desc-3", { opacity: 0 })
      .to(".desc-3", { display: "none" })
      .to(".desc-4", { opacity: 1 }, "<-1")
      .to(".desc-4 .dim", { opacity: 1 })
      .to(".desc-4 .txt-wrap", { y: "-100%" });

  }




  useEffect(() => {
    if (!isSplashTextStart) return;

    handleMainScrollStart();

  }, [isSplashTextStart]);


  useEffect(() => {
    if (!isSplashTextEnd) return;

    handleMainScrollEnd();

  }, [isSplashTextEnd]);

  useEffect(() => {
    if (!isSplash) return;

    handleSectionScroll();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isSplash]);


  useEffect(() => {

    window.addEventListener("resize", () => { console.log('hello') });

    return () => {
      window.removeEventListener("resize", ScrollTrigger.update);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-dvh bg-black">
      <Splash animation={true} isMenu={isMenu} onMenuTextStart={handleSplashStart} onComplete={handleSplashEnd} onMenuHandler={() => handleMenuToggle()} />
      <Menu isOpen={isMenu} onClose={handleMenuToggle} />

      <video ref={videoRef} className="fixed top-0 left-0 w-full h-full z-0 object-cover" width="1920" height="1080" loop controls={false} preload="none" playsInline muted >
        <source src="/videos/sample_video_04.mp4" type="video/mp4" />
        <track
          src="/videos/sample_video_04.mp4"
          kind="subtitles"
          srcLang="en"
          label="English"
        />배경 이미지
      </video>

      {isSplash && (
        <div className="main-first-section flex flex-col flex-1 overflow-y-auto z-10 opacity-0">
          <div className="flex flex-col gap-[72px] mx-[10px]">
            <div className="main-first-section-text flex flex-col mt-[50%] translate-y-1/2 gap-[72px]">
              <div className=" whitespace-pre-line text-[15.5px] leading-7 tracking-[-5%] font-normal text-white">
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
                href={{
                  pathname: "/Detail",
                  query: {
                    image: "/images/main/jeogjae_architect.png"
                  }
                }}
              />
            </div>
            <AccordionMenu />
            <EmailButton className="mt-[10%] mb-[60%] mx-2" />
          </div>
          <div ref={containerRef} className="flex flex-col w-full scroll-ani-wrap bg-black">
            {mainData.map((item, index) => (
              <div key={item.title} className={`description-section desc-${index} h-screen`}>
                <Description {...item} index={index} />
              </div>
            ))}
          </div>
          {/* <EmailButton className="mt-[56px] mb-[218px] mx-3" /> */}
          {/* 지도 이미지 */}
          <div className="flex flex-col">
            <Image
              width={1920}
              height={1080}
              src="/images/main_map.png"
              alt="위치"
              className="z-50"
            />
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}