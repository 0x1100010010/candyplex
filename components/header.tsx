import React, { Component } from 'react'
import {Themer} from './themer'

export const Header = () => {
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
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                </svg>
                                Config

                            </a>
                        </div>
                    </div>

                    <Themer></Themer>
                </div>
            </div>

        )
    }
