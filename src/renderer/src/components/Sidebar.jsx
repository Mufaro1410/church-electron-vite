import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
    const [open, setOpen] = useState(true);
    const [ind, setInd] = useState(0);

    const navigate = useNavigate()

    
    const Menus = [
        { title: "Home", src: "Chart_fill" },
        { title: "Members", src: "User" },
        { title: "Finance", src: "Chat", gap: false },
        { title: "Events ", src: "Calendar" },
        { title: "Reports", src: "Chart" },
        { title: "Settings", src: "Setting" },
        { title: "Logout", src: "Folder" },
    ];

    function navigation(index, Menu) {
        setInd(index);
        (Menu.title !== 'Logout') ? navigate(Menu.title.toLowerCase()) : navigate("/")
    }

  return (
    <div className="">
        <div
            className={` ${
            open ? "w-72" : "w-20 "
            } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
        >
            <img
                src="/assets/images/control.png"
                className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
                border-2 rounded-full  ${!open && "rotate-180"}`}
                onClick={() => setOpen(!open)}
            />
            <div className="flex gap-x-4 items-center">
                <img
                    src="/assets/images/umc-logo.jpg"
                    className={` h-20 cursor-pointer duration-500 ${
                    open && "rotate-[360deg]"
                    }`}
                />
                <h1
                    className={`text-white origin-left font-medium text-xl duration-200 ${
                    !open && "scale-0"
                    }`}
                >
                    St Peters UMC
                </h1>
            </div>
            <ul className="pt-6">
            {Menus.map((Menu, index) => (
                <li
                    key={index}
                    className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                    ${Menu.gap ? "mt-9" : "mt-2"} ${index === ind && "bg-light-white"}`}
                    onClick={() => {navigation(index, Menu)}}
                >
                    <img src={`/assets/images/${Menu.src}.png`} />
                    <span className={`${!open && "hidden"} origin-left duration-200`}>
                        {Menu.title}
                    </span>
                </li>
            ))}
            </ul>
        </div>
    </div>
    );
}