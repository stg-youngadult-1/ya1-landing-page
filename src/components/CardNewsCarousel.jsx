import React, {useRef, useMemo} from "react";

/**
 * props.items = [
 *  {tag:"DIGITAL DESIGN", title:"Creating Usability with Motion: The UX in Motion Manifesto", author:"Issara Willenskomer", href:"#", gradient:"from-rose-500 via-orange-400 to-amber-300"},
 *  ...
 * ]
 */
export default function CardNewsCarousel({items = []}) {
    const trackRef = useRef(null);
    const prefix = process.env.STATIC_IMG_ROOT || '';

    const joinUrl = (prefix, p) => {
        if (!prefix) return p;
        return `${String(prefix).replace(/\/+$/, '')}/${String(p).replace(/^\/+/, '')}`;
    };

    const scrollByCard = (dir = 1) => {
        const el = trackRef.current;
        if (!el) return;
        const first = el.querySelector("[data-card]");
        const step = first ? first.clientWidth + 16 : el.clientWidth * 0.9; // 카드+gap 만큼
        el.scrollBy({left: dir * step, behavior: "smooth"});
    };

    const dots = useMemo(() => items.map((_, i) => i), [items]);

    return (
        <div className="relative">
            {/*/!* 좌우 버튼 *!/*/}
            {/*<button*/}
            {/*    onClick={() => scrollByCard(-1)}*/}
            {/*    className="hidden md:flex absolute -left-2 top-1/2 -translate-y-1/2 z-10 h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow hover:bg-white"*/}
            {/*    aria-label="이전"*/}
            {/*>*/}
            {/*    ‹*/}
            {/*</button>*/}
            {/*<button*/}
            {/*    onClick={() => scrollByCard(1)}*/}
            {/*    className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow hover:bg-white"*/}
            {/*    aria-label="다음"*/}
            {/*>*/}
            {/*    ›*/}
            {/*</button>*/}

            {/* 트랙 */}
            <div
                ref={trackRef}
                className="flex gap-2 overflow-x-auto scroll-smooth snap-x snap-mandatory -mx-4 px-4"
                style={{scrollbarWidth: "none"}}
            >


                <div
                    data-card
                    className="snap-start shrink-0 rounded-2xl p-3 text-white  transition hover:translate-y-[-2px]
             w-[100%] sm:w-[100%] md:w-[100%] overflow-hidden aspect-[5/6]"
                >
                    <div
                        className={`rounded-2xl p-5 h-full min-w-0  flex flex-col justify-end shadow-md hover:shadow-lg`}
                        style={{
                            backgroundImage: `url('${joinUrl(prefix, "/img/banner_1.png")}')`,
                            backgroundSize: "auto 100%",
                            backgroundPosition: "center"
                        }}
                    >
                    </div>
                </div>
                <div
                    data-card
                    className="snap-start shrink-0 rounded-2xl p-3 text-white  transition hover:translate-y-[-2px]
             w-[100%] sm:w-[100%] md:w-[100%] overflow-hidden aspect-[5/6]"
                >
                    <div
                        className={`rounded-2xl p-5 h-full min-w-0  flex flex-col justify-end shadow-md hover:shadow-lg`}
                        style={{
                            backgroundImage: `url('${joinUrl(prefix, "/img/banner_2.png")}')`,
                            backgroundSize: "auto 100%",
                            backgroundPosition: "center"
                        }}
                    >
                    </div>
                </div>
                <div
                    data-card
                    className="snap-start shrink-0 rounded-2xl p-3 text-white  transition hover:translate-y-[-2px]
             w-[100%] sm:w-[100%] md:w-[100%] overflow-hidden aspect-[5/6]"
                >
                    <div
                        className={`rounded-2xl p-5 h-full min-w-0  flex flex-col justify-end shadow-md hover:shadow-lg`}
                        style={{
                            backgroundImage: `url('${joinUrl(prefix, "/img/banner_3.png")}')`,
                            backgroundSize: "auto 100%",
                            backgroundPosition: "center"
                        }}
                    >
                    </div>
                </div>


                {items.map((it, idx) => (
                    <div
                        key={idx}
                        data-card
                        className="snap-start shrink-0 rounded-2xl p-3 text-white  transition hover:translate-y-[-2px]
             w-[100%] sm:w-[100%] md:w-[100%] overflow-hidden aspect-[5/6]"
                        style={{backgroundImage: "linear-gradient(135deg,var(--tw-gradient-stops))"}}
                    >
                        <div
                            className={`bg-gradient-to-br ${it.gradient || "from-fuchsia-500 via-purple-500 to-sky-500"} rounded-2xl p-5 h-full min-w-0  flex flex-col justify-end shadow-md hover:shadow-lg`}>
                            <p className="uppercase tracking-wide text-xs/5 opacity-90">{it.tag}</p>

                            <h3
                                className="mt-2 text-xl font-bold leading-snug whitespace-normal break-words hyphens-auto overflow-hidden"
                                style={{
                                    display: "-webkit-box",
                                    WebkitLineClamp: 3,
                                    WebkitBoxOrient: "vertical",
                                }}
                            >
                                {it.title}
                            </h3>

                            <p className="mt-3 text-sm/5 opacity-90">{it.author}</p>
                            <div className="mt-6 flex justify-end">
                                <span className="text-2xl opacity-90">→</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* 인디케이터 (간단 점) */}
            {/*<div className="mt-2 flex justify-center gap-1.5">*/}
            {/*    {dots.map((d) => (*/}
            {/*        <span key={d} className="h-1.5 w-1.5 rounded-full bg-white/70"></span>*/}
            {/*    ))}*/}
            {/*</div>*/}
        </div>
    );
}
