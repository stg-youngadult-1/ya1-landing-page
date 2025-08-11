import React from 'react';
import ButtonComponent from "../components/ButtonComponent";

// import ImageList from "./ImageList";

export default function HomePage() {
    const prefix = process.env.STATIC_IMG_ROOT || '';
    console.log(prefix)

    const joinUrl = (prefix, p) => {
        if (!prefix) return p;
        return `${String(prefix).replace(/\/+$/, '')}/${String(p).replace(/^\/+/, '')}`;
    };

    const menuItems = [
        {title: "환영합니다!!", img: joinUrl(prefix, "/img/img_2.jpeg")},
        {title: "부서", img: joinUrl(prefix, "/img/channels4_profile.jpg")},
        {title: "소그룹", img: joinUrl(prefix, "/img/img_6.jpeg")},
        {title: "타임라인", img: joinUrl(prefix, "/img/img_3.jpeg")},
        {title: "새가족 단톡", img: joinUrl(prefix, "/img/img_4.jpeg")},
        {title: "행사"},
    ];

    const starItems = [
        {title: "청1 즐겨찾기 모음", img: joinUrl(prefix, "/img/sm_star.png")},
        {title: "시광교회 청1 신문팀 아카이브", img: joinUrl(prefix, "/img/sm_heart.png")},
        {title: "청1 구글포토", img: joinUrl(prefix, "/img/sm_photo.png")},
        // {title: "", img: joinUrl(prefix, "/img/")},
    ]

    return (
        <div className="flex justify-center items-center min-h-screen bg-sky-600/90 md:px-4 md:py-10">
            <div className="w-full min-h-screen bg-blue-300 md:max-w-lg md:rounded-3xl  md:shadow-lg p-4">
                {/*상단 아이콘 & 로고 */}
                <div className="flex justify-between items-center flex-row-reverse">
                    {/*<div className="bg-white w-6 h-6 flex items-center justify-center rounded-full shadow">＊</div>*/}
                    <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full shadow text-lg ">
                        <i className="fi fi-rr-link-alt h-5"></i>
                    </div>
                </div>

                <div className="flex flex-col items-center -mt-2">
                    <img src="/img/channels4_profile.jpg" alt="Logo" className="w-24 h-24 rounded-full"/>
                    <h2 className="mt-2 text-lg text-white font-bold">시광교회 청년1부</h2>
                    {/*<p className="text-sm text-gray-200">새가족 소개</p>*/}
                </div>


                <div className="flex flex-col items-center mt-5">
                    <h2 className="mt-2 text-md text-white font-bold">새가족 소개</h2>
                </div>

                {/* 메인 이미지 */}
                <div className="mt-4 relative rounded-3xl overflow-hidden shadow-md/20">
                    <img
                        src={joinUrl(prefix, "/img/img_1.jpeg")}
                        alt="Main"
                        className="w-full h-full object-cover"
                    />
                    <div
                        className="h-1/2 absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-black/0 text-white text-md p-3 flex items-end">
                        복음은 그리스도 안에서 우리를 한 ‘가족’으로 초대합니다!
                    </div>
                </div>

                {/* 메뉴 리스트 */}
                <div className="mt-4 space-y-3">
                    {menuItems.map((item, idx) => (
                        <ButtonComponent key={idx} item={item}/>
                    ))}
                </div>


                <div className="flex flex-col items-center mt-5">
                    <h2 className="mt-2 text-md text-white font-bold">청년1부 즐겨찾기</h2>
                </div>

                {/* 즐겨찾기 */}
                <div className="mt-6 text-center text-sm text-blue-800 font-semibold">
                    <div className="mt-4 space-y-3">
                        {starItems.map((item, idx) => (
                            <ButtonComponent key={idx} item={item}/>
                        ))}
                    </div>
                    {/*    청년부 즐겨찾기*/}
                    {/*</div>*/}
                    {/*<div className="mt-3 w-full flex items-center bg-white rounded-full p-3 shadow hover:bg-gray-100">*/}
                    {/*    <img src="/img/fav.png" alt="즐겨찾기" className="w-10 h-10 rounded-full object-cover mr-3"/>*/}
                    {/*    <span className="flex-1 text-left">청1 즐겨찾기 모음</span>*/}
                </div>
            </div>
        </div>
    );
}