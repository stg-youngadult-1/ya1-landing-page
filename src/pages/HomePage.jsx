import React from 'react';

// import ImageList from "./ImageList";

export default function HomePage() {

    const menuItems = [
        {title: "환영합니다!!", img: "/img/welcome.jpg"},
        {title: "부서", img: "/img/department.jpg"},
        {title: "소그룹", img: "/img/smallgroup.jpg"},
        {title: "타임라인", img: "/img/timeline.jpg"},
        {title: "새가족 단톡", img: "/img/chat.jpg"},
        {title: "행사", img: "/img/event.jpg"},
    ];

    return (
        <div className="flex justify-center items-center min-h-screen bg-blue-300 p-4">
            <div className="w-full max-w-md bg-blue-200 rounded-3xl shadow-lg p-4">
                {/* 상단 아이콘 & 로고 */}
                <div className="flex justify-between items-center">
                    <div className="bg-white w-6 h-6 flex items-center justify-center rounded-full shadow">＊</div>
                    <div className="bg-white w-6 h-6 flex items-center justify-center rounded-full shadow">🔗</div>
                </div>

                <div className="flex flex-col items-center mt-4">
                    <img src="/img/logo.png" alt="Logo" className="w-16 h-16 rounded-full"/>
                    <h2 className="mt-2 text-lg font-bold">시광교회 청년1부</h2>
                    <p className="text-sm text-gray-700">새가족 소개</p>
                </div>

                {/* 메인 이미지 */}
                <div className="mt-4 relative rounded-2xl overflow-hidden">
                    <img
                        src="/img/main.jpg"
                        alt="Main"
                        className="w-full h-48 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-sm p-2">
                        복음은 그리스도 안에서 우리를 한 ‘가족’으로 초대합니다!
                    </div>
                </div>

                {/* 메뉴 리스트 */}
                <div className="mt-4 space-y-3">
                    {menuItems.map((item, idx) => (
                        <button
                            key={idx}
                            className="w-full flex items-center bg-blue-500 text-white rounded-full p-3 shadow hover:bg-blue-600 transition"
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-10 h-10 rounded-full object-cover mr-3"
                            />
                            <span className="flex-1 text-left">{item.title}</span>
                            <span className="text-lg">⋮</span>
                        </button>
                    ))}
                </div>

                {/* 즐겨찾기 */}
                <div className="mt-6 text-center text-sm text-blue-800 font-semibold">
                    청년부 즐겨찾기
                </div>
                <div className="mt-3 w-full flex items-center bg-white rounded-full p-3 shadow hover:bg-gray-100">
                    <img src="/img/fav.png" alt="즐겨찾기" className="w-10 h-10 rounded-full object-cover mr-3"/>
                    <span className="flex-1 text-left">청1 즐겨찾기 모음</span>
                </div>
            </div>
        </div>
    );
}