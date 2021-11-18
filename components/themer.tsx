import { Transition, Menu } from "@headlessui/react";
import React, { Component } from 'react'

export default class Themer extends Component {
    render() {
        return (
            <Menu as="div" className="relative inline-block">
                {({ open }) => (
                    <>
                        <div>
                            <Menu.Button className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
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
                                <Menu.Item>
                                    <li><a>Item 1</a></li>
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </>
                )}
            </Menu>
        )
    }
}


