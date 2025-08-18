import React from 'react';
import ButtonComponent from "../components/ButtonComponent";
import SubtitleComponent from "../components/SubtitleComponent";
import ColumnIconList from "../components/ColumnIconList";
import CardNewsCarousel from "../components/CardNewsCarousel";
import Subdivision from "../components/Subdivision";


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

    const cardNews = [
        {
            tag: "DIGITAL DESIGN",
            title: "Creating Usability with Motion: The UX in Motion Manifesto",
            author: "Issara Willenskomer",
            href: "#",
            gradient: "from-rose-500 via-orange-400 to-amber-300",
        },
        {
            tag: "DIGITAL DESIGN",
            title: "Product Vision for Product Managers",
            author: "Eugen Eşanu",
            href: "#",
            gradient: "from-indigo-500 via-fuchsia-500 to-pink-500",
        },
        {
            tag: "EDITOR'S PICK",
            title: "When Companies Question the Value of Design",
            author: "Alan Cooper",
            href: "#",
            gradient: "from-pink-500 via-rose-500 to-orange-400",
        },
        {
            tag: "SELF HELP",
            title: "The Most Important Skill Nobody Taught You",
            author: "Zat Rana",
            href: "#",
            gradient: "from-sky-500 via-cyan-500 to-blue-500",
        },
        {
            tag: "DIGITAL DESIGN",
            title: "5 Things To Do Differently About Your Product’s UX",
            author: "Eugen Eşanu",
            href: "#",
            gradient: "from-emerald-500 via-teal-500 to-lime-500",
        },
        {
            tag: "ART",
            title: "Leonardo Da Vinci was the best UX Designer in history",
            author: "Flavio Lamenza",
            href: "#",
            gradient: "from-blue-500 via-cyan-500 to-emerald-500",
        },
    ];

    const starItems = [
        {title: "청1 즐겨찾기 모음", img: joinUrl(prefix, "/img/sm_star.png"), href: "https://separated-garden-7c6.notion.site/1-18e942e21857807095fec59d41d5f077"},
        {title: "시광교회 청1 신문팀 아카이브", img: joinUrl(prefix, "/img/sm_heart.png"), href: "https://separated-garden-7c6.notion.site/1-19c942e2185780439af8fefd071cafcb?pvs=74"},
        {title: "청1 구글포토", img: joinUrl(prefix, "/img/sm_photo.png"), href: "https://separated-garden-7c6.notion.site/1-240942e21857809fad42c8a05f95b867"},
        // {title: "", img: joinUrl(prefix, "/img/")},
    ]

    const starLinks = [
        {title: "시광 홈페이지", href: "https://seetheglory.or.kr/", img: joinUrl(prefix, "/img/sm_homepage.png")},
        {title: "유튜브 채널", href: "https://www.youtube.com/@seetheglory", img: joinUrl(prefix, "/img/sm_youtube.png")},
        {title: "인스타그램", href: "https://seetheglory.or.kr/", img: joinUrl(prefix, "/img/sm_instagram.png")},
    ];

    return (
        <div className="flex justify-center items-center min-h-screen bg-[#dcdcdc]/60 md:px-4 md:py-10">
            <div className="w-full min-h-screen bg-[#f3f3f3] md:max-w-lg md:rounded-3xl  md:shadow-lg p-4">


                {/*상단 아이콘 & 로고 */}
                <div className="flex justify-between items-center flex-row-reverse">
                    {/*<div className="bg-white w-6 h-6 flex items-center justify-center rounded-full shadow">＊</div>*/}
                    <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full shadow text-lg ">
                        <i className="fi fi-rr-link-alt h-5"></i>
                    </div>
                </div>

                <div className="flex flex-col items-center -mt-2">
                    <img src={joinUrl(prefix, "/img/channels4_profile.jpg")} alt="Logo"
                         className="w-24 h-24 rounded-full"/>
                    <h2 className="mt-2 text-lg text-black font-bold ">시광교회 청년1부</h2>
                    {/*<p className="text-sm text-gray-200">새가족 소개</p>*/}
                </div>

                <SubtitleComponent subtitle={"환영합니다"}/>

                <Subdivision>
                    <CardNewsCarousel items={cardNews}/>
                </Subdivision>


                {/*<SubtitleComponent subtitle={"새가족 소개"}/>*/}

                {/*<Subdivision>*/}
                {/*    /!* 메인 이미지 *!/*/}
                {/*    <div className="mt-4 relative rounded-3xl overflow-hidden shadow-md/20">*/}
                {/*        <img*/}
                {/*            src={joinUrl(prefix, "/img/img_1.jpeg")}*/}
                {/*            alt="Main"*/}
                {/*            className="w-full h-full object-cover"*/}
                {/*        />*/}
                {/*        <div*/}
                {/*            className="h-1/2 absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-black/0 text-white text-md p-3 flex items-end">*/}
                {/*            복음은 그리스도 안에서 우리를 한 ‘가족’으로 초대합니다!*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*    /!* 메뉴 리스트 *!/*/}
                {/*    <div className="mt-4 space-y-3">*/}
                {/*        {menuItems.map((item, idx) => (*/}
                {/*            <ButtonComponent key={idx} item={item}/>*/}
                {/*        ))}*/}
                {/*    </div>*/}
                {/*</Subdivision>*/}

                <SubtitleComponent subtitle={"청년1부 즐겨찾기"}/>

                <Subdivision>
                    {/* 즐겨찾기 */}
                    <div className="mt-2 space-y-3">
                        {starItems.map((item, idx) => (
                            <ButtonComponent key={idx} item={item}/>
                        ))}
                    </div>
                </Subdivision>


                <SubtitleComponent subtitle={"링크"}/>
                <Subdivision>
                    <ColumnIconList links={starLinks}/>
                </Subdivision>
            </div>
        </div>
    );
}