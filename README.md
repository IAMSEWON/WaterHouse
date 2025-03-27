# gsap.set()

💡 애니메이션 없이 요소의 속성을 즉시 설정
set()은 애니메이션 없이 특정 속성을 즉시 적용하는 기능입니다.


gsap.set(".box", { x: 100, opacity: 0.5 });

📌 설명
•	.box 요소를 x: 100px로 이동.
•	opacity: 0.5로 설정 (투명도 50%).
•	애니메이션 없이 즉시 적용됨!

# gsap.to()

gsap.to(".box", { x: 300, opacity: 1, duration: 2 });

📌 설명
	•	.box 요소를 x: 300px로 2초 동안 이동.
	•	opacity: 1 (완전히 보이게 만듦).
	•	현재 상태에서 설정한 값으로 변함!

# gsap.fromTo()

gsap.fromTo(".box", 
  { x: 0, opacity: 0 },  // 시작 상태
  { x: 300, opacity: 1, duration: 2 } // 끝 상태
);

📌 설명
	•	처음에는 x: 0, opacity: 0 (완전히 숨김).
	•	2초 동안 x: 300으로 이동하면서 opacity: 1로 변화.
	•	from()과 to()를 합친 느낌!

# scrollTrigger

gsap.to(".box", {
  x: 500,
  scrollTrigger: {
    trigger: ".box", // 이 요소가 화면에 나타날 때 애니메이션 시작
    start: "top 80%", // 박스의 top이 화면의 80% 지점에 닿으면 시작
    end: "top 20%", // 박스의 top이 화면의 20% 지점에 닿으면 종료
    scrub: true, // 스크롤 속도에 따라 부드럽게 실행
    markers: true, // 개발용 마커 표시 (디버깅용)
    scrub: 1.2, // 스크롤에 따라 애니메이션이 부드럽게 따라감
    pin: true, // 요소를 스크롤 시 고정
    pinSpacing: true, // 고정 후 주변 요소와의 간격 유지
  }
});

📌 설명
	•	.box 요소가 스크롤될 때 x: 500px으로 이동.
	•	start: "top 80%" → 박스의 top이 화면의 80% 지점에 닿으면 시작.
	•	end: "top 20%" → 박스의 top이 화면의 20% 지점에 닿으면 애니메이션 종료.
	•	scrub: true → 스크롤 속도에 따라 자연스럽게 애니메이션 진행.
	•	markers: true → 애니메이션 범위를 시각적으로 확인할 수 있음.
	•	pin: true → 요소를 스크롤 시 고정.
	•	pinSpacing: true → 고정 후 주변 요소와의 간격 유지.
