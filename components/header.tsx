import React, { Component } from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

export default class Header extends Component {
    render() {
        return (
            <div className="navbar flex justify-between mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
                <div>
                    <a className="btn btn-ghost px-2 mx-2" href="https://github.com/bashforger/candyplex" target="_blank">
                        <span className="text-lg font-bold">
                            Candyplex
                        </span>
                    </a>
                </div>
                <div>
                    <div className="flex-none hidden px-2 mx-2 lg:flex">
                        <div className="flex items-stretch">
                            <a className="btn btn-ghost btn-sm rounded-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 mr-2 stroke-current">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                </svg>
                                Config

                            </a>
                        </div>
                    </div>
                    <div className="dropdown dropdown-left ">
                        <button tabindex="0" className="btn btn-square btn-ghost m-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                        <ul tabindex="0" class="p-1 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a>Item 1</a>
                            </li>
                            <li>
                                <a>Item 2</a>
                            </li>
                            <li>
                                <a>Item 3</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

        )
    }
}
