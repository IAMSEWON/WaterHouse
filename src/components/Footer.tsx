function Footer() {
    return (
        <div className="h-[457px] flex flex-col mt-[74px] mx-3">
            <div className="flex flex-col gap-2 pb-[45px] text-[14px]">
                <button className="text-start">About</button>
                <button className="text-start">Contact</button>
                <button className="text-start">Instagram</button>
                <button className="flex flex-row gap-2 items-center">
                    <h1>Terms and Conditions </h1>
                    <h1 className="text-[11.5px]"> 이용약관</h1>
                </button>
                <button className="flex flex-row gap-2 items-center">
                    <h1>Privacy Policy</h1>
                    <h1 className="text-[11.5px]">개인정보정책</h1>
                </button>
            </div>
            <div className="pb-[55px] text-[14px]">
                <h1>+82-2-1234-1234</h1>
                <h1>info@thewaterhouse.kr</h1>
                <h1>서울특별시 종로구 삼청로 35-83, 더 워터하우스</h1>
            </div>
            <div className="flex flex-col gap-2 text-[14px]">
                <h1>2020 LOG HOTEL GROUP Inc.All rights reserved.</h1>
                <h1 className="text-4xl font-bold">THE WATERHOUSE</h1>
            </div>
        </div>
    )
}


export default Footer;
