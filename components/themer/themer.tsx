import { Transition, Menu } from "@headlessui/react";
import React from 'react'
import { themeState } from '../../recoil/atoms'
import { useRecoilState } from "recoil";

// interface ITHEMES = {
//     name: string;
//     title: string;
// };

const THEMES = [
    {
        name: "light",
        title: "🌝 light"
    },
    {
        name: "dark",
        title: "🌚 dark"
    },
    {
        name: "cupcake",
        title: "🧁 cupcake"
    },
    {
        name: "bumblebee",
        title: "🐝 bumblebee"
    },
    {
        name: "emerald",
        title: "✳️  Emerald"
    },
    {
        name: "corporate",
        title: "🏢 Corporate"
    },
    {
        name: "synthwave",
        title: "🌃 synthwave"
    },
    {
        name: "retro",
        title: "👴 retro"
    },
    {
        name: "cyberpunk",
        title: "🤖 cyberpunk"
    },
    {
        name: "valentine",
        title: "🌸 valentine"
    },
    {
        name: "halloween",
        title: "🎃 halloween"
    },
    {
        name: "garden",
        title: "🌷 garden"
    },
    {
        name: "forest",
        title: "🌲 forest"
    },
    {
        name: "aqua",
        title: "🐟 aqua"
    },
    {
        name: "lofi",
        title: "👓 lofi"
    },
    {
        name: "pastel",
        title: "🖍 pastel"
    },
    {
        name: "fantasy",
        title: "🧚‍♀️ fantasy"
    },
    {
        name: "Wireframe",
        title: "📝 Wireframe"
    },
    {
        name: "black",
        title: "🏴 black"
    },
    {
        name: "luxury",
        title: "💎 luxury"
    },
    {
        name: "dracula",
        title: "🧛‍♂️ dracula"
    },
    {
        name: "CMYK",
        title: "🖨 CMYK"
    }
];

export const Themer = () => {
    const [theme, setTheme] = useRecoilState( themeState);
    console.log(theme)
    return (
        <Menu as="div" className="relative inline-block">
            {({ open }) => (
                <>
                    <div>
                        <Menu.Button className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </Menu.Button>
                    </div>
                    <Transition
                        show={open}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items
                            static
                            className="focus:outline-none right-0 menu p-3 shadow-lg rounded-box rounded-box absolute w-56 mt-2"
                        >
                            {
                                THEMES.map((key) =>
                                    <Menu.Item key={key.name}>
                                        <li>
                                            <a className="p-0" onClick={() => setTheme(key.name)} >{key.title}</a>
                                        </li>
                                    </Menu.Item>)
                            }
                        </Menu.Items>
                    </Transition>
                </>
            )}
        </Menu>
    )
}


