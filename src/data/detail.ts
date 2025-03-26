
const dummyImages = ["/images/detail/detail_01.png", "/images/detail/detail_02.png", "/images/detail/detail_03.png", "/images/detail/detail_04.png", "/images/detail/detail_05.png", "/images/detail/detail_06.png"];


export const detailData: Array<{
    title: string;
    description: string;
    image: string;
    modalImages: string[];
}> = [
        {
            title: "한 폭의 그림 같은  중정",
            description: "사계절의 아름다움을 생생하게 만끽할 수있는 인왕산의 장엄한 풍경이 손님을 맞이합니다.",
            image: "/images/detail/detail_01.png",
            modalImages: dummyImages,
        },
        {
            title: "자연과 공간을 연결한 다이닝 룸",
            description: "한옥의 전형에서 벗어난 공간, 자연과 교류하는 시선, 공간에 알맞는 가구 큐레이션으로 풍성한 시간을 제안합니다.",
            image: "/images/detail/detail_02.png",
            modalImages: dummyImages,
        },
        {
            title: "햇살을 가득 들인 침실",
            description: "한 폭의 그림 같은 장면을 마주할 때는 마치 선물 같은 기쁨이, 능선을 바라보고 멈춰 있는 시간에는 여유와 편안함이 찾아옵니다.",
            image: "/images/detail/detail_03.png",
            modalImages: dummyImages,
        },
        {
            title: "정화와 이완이 이루어지는 욕실",
            description: "하루의 끝과 시작을 보내는 곳인 만큼 고요한 빛과 단정한 질감이 어우러지도록 정갈하게 완성했습니다.",
            image: "/images/detail/detail_04.png",
            modalImages: dummyImages,
        },
        {
            title: "아늑한 시간을 위한 서브룸",
            description: "고요한 휴식과 몰입을 위한 공간으로 편안한 쉼을 제공합니다.",
            image: "/images/detail/detail_05.png",
            modalImages: dummyImages,
        },
        {
            title: "더 워터하우스 스페이스 플랜",
            description: "",
            image: "/images/detail/detail_06.png",
            modalImages: [],
        },
    ]