import React, { useState } from 'react'

const Work = () => {
    const [active, setactive] = useState("all");
    const [filterpro, setfilterpro] = useState(productList);

    const filterProduct = (items) => {
        setactive(items);
        if (items === "all") {
            setfilterpro(productList);
        } else {
            const filterItem = productList.filter((item) => item.category === items);
            setfilterpro(filterItem);
        }
    };
    console.log(active);
    return (
        <div className='flex-col column-gap-4 py-11 work'>
            <div className='flex-col items-center justify-center gap-3 mt-11'>
                <h1 className='flex items-center justify-center text-5xl service_title font-semibold'>My Recent Works </h1>
            </div>
            <div className='flex items-center justify-center mt-11'>
                <div className=' work_item flex items-center justify-center gap-10 bg-slate-300 rounded-full w-[400px] h-[50px] '>
                    <button className={`font-bold ${active === "all" ? "green-200" : ""}`} onClick={() => filterProduct('all')}> {""}All{""}</button>
                    <button
                        className={` text-xl font-bold   ${active === " women's clothing " ? "green-500 " : " "
                            } `}
                        onClick={() => filterProduct("women's clothing")}
                    >
                        {" "}
                        App{" "}
                    </button>
                    <button
                        className={` text-xl font-bold   ${active === " Men's clothing " ? "green-500 " : " "
                            } `}
                        onClick={() => filterProduct("men's clothing")}
                    >
                        {" "}
                        Men{" "}
                    </button>
                    <button>UX/UI</button>
                </div>
            </div>
            <div>

            </div>

        </div>
    )
}

export default Work
