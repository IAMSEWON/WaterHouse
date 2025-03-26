import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


function AccordionReserve() {
    return (
        <div className="overflow-x-auto shadow-md rounded-lg text-white">
            <table className="min-w-full text-left table-auto">
                <tbody>
                    <tr>
                        <td className="pl-4 py-3 border-t-[0.3px] border-b-[0.3px] font-normal">체크인</td>
                        <td className="px-4 py-3 border-t-[0.3px] border-b-[0.3px] font-normal">15:00</td>
                    </tr>
                    <tr>
                        <td className="pl-4 py-3 border-b-[0.3px] font-normal">체크아웃</td>
                        <td className="px-4 py-3 border-b-[0.3px] font-normal">11:00</td>
                    </tr>
                    <tr>
                        <td className="pl-4 py-3 border-b-[0.3px] font-normal">기준 인원</td>
                        <td className="px-4 py-3 border-b-[0.3px] font-normal">4인 (최대 인원 4인)</td>
                    </tr>
                    <tr>
                        <td className="pl-4 py-3 border-b-[0.3px] font-normal">객실타입</td>
                        <td className="px-4 py-3 border-b-[0.3px] font-normal">독채</td>
                    </tr>
                    <tr>
                        <td className="pl-4 py-3 border-b-[0.3px] font-normal">객실면적</td>
                        <td className="px-4 py-3 border-b-[0.3px] font-normal">39.5</td>
                    </tr>
                    <tr>
                        <td className="pl-4 py-3 border-b-[0.3px] font-normal">객실구성</td>
                        <td className="px-4 py-3 border-b-[0.3px] font-normal">객실 2개, 화장실 2개</td>
                    </tr>
                    <tr>
                        <td className="pl-4 py-3 font-normal">침대</td>
                        <td className="px-4 py-3 font-normal">킹 사이즈 침대 1개,<br /> 더블 사이즈 침대 1개</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

function AccordionPrice() {
    return (
        <div className="flex flex-col gap-8 overflow-x-auto text-white">
            <table className="min-w-full text-left table-auto">
                <thead>
                    <tr>
                        <th className="pl-3 py-3 border-b-[0.3px] font-normal">날짜</th>
                        <th className="px-4 py-3 border-b-[0.3px] font-normal">주중(일-목)</th>
                        <th className="px-4 py-3 border-b-[0.3px] font-normal">주말(금-토)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="pl-3 py-3 border-b-[0.3px] font-normal">4인 기준</td>
                        <td className="px-4 py-3 border-b-[0.3px] font-normal">550,000원</td>
                        <td className="px-4 py-3 border-b-[0.3px] font-normal">800,000원</td>
                    </tr>
                </tbody>
            </table>
            <ul className="flex flex-col gap-4">
                <li className="flex items-center">
                    <span className="mr-2">•</span>
                    만 2세 이상의 아동은 성인 인원과 동일합니다.
                </li>
                <li className="flex items-start">
                    <span className="mr-2">•</span>
                    최대인원은 유아 및 아동포함인원이며, 최대 인원 초과 시<br />
                    입실이 불가합니다.(예약 인원 외 방문객 출입 불가)
                </li>
                <li className="flex items-start">
                    <span className="mr-2">•</span>
                    수기별, 기간별 요금이 다를 수 있습니다. 캘린더를 통해 입장<br />
                    선택 후 정확한 요금을 확인해주세요.
                </li>
            </ul>
        </div>
    )
}

function AccordionAmenities() {
    return (
        <ul className="flex flex-col gap-4 text-white">
            <li className="flex items-start">
                <span className="mr-2">•</span>
                WIFI/블루투스  스피커/에어컨/공기청정기/인덕션<br />
                미니냉장고/발뮤다 전기포트/정수기
            </li>
            <li className="flex items-center">
                <span className="mr-2">•</span>
                차도구 세트/핸드드립세트/와인 오프너
            </li>
            <li className="flex items-start">
                <span className="mr-2">•</span>
                샴푸/컨디셔너/바디워시/핸드워시/핸드로션/바쓰솔트/<br />
                로브/타월/헤어드라이어
            </li>
        </ul>
    )
}

function AccordionLocation() {
    return (
        <div className="flex flex-col gap-4 text-white">
            <div className="">
                서울특별시 종로구 삼청로 35-83, 더 워터하우스<br />
                주차공간은 마련되어 있지 않습니다. 근처 유료주차장을<br />
                안내해드리고 있습니다.
            </div>

            <div>
                <h1>TAXI</h1>
                <div>
                    북촌 한옥마을 ‘차 마시는뜰(차뜰)’에서 하차 <br />
                    ‘서울 서울 서울’까지 직진 후 왼쪽 방향으로 73m 직진
                </div>
            </div>
        </div>
    )
}




export function AccordionMenu() {
    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger>예약안내</AccordionTrigger>
                <AccordionContent>
                    <AccordionReserve />
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>가격안내</AccordionTrigger>
                <AccordionContent>
                    <AccordionPrice />
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>시설 및 어메니티</AccordionTrigger>
                <AccordionContent>
                    <AccordionAmenities />
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger>오시는 길</AccordionTrigger>
                <AccordionContent>
                    <AccordionLocation />
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
