"use client"

import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { useSidebar } from "../context/SidebarContext";

export default function DashboardComponent() {
    // const [isSidebarOpen, toggleSidebar] = useState(false);
    const { isSidebarOpen, toggleSidebar } = useSidebar();

    return (
        <>
            <nav
                id="page-sidebar"
                aria-label="Main Sidebar Navigation"
                className={`flex flex-col fixed top-0 left-0 bottom-0 w-64 h-full text-gray-200 bg-gray-800 border-r border-gray-800 z-50 transition-transform duration-500 ease-out dark
                    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                {/* Sidebar Header */}
                <div className="h-16 flex-none flex items-center justify-between lg:justify-center px-4 w-full dark:bg-gray-600 dark:bg-opacity-25">
                    {/* Brand */}
                    <Link to="/dashboard/homepage" className="group inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300">
                        <span>ENTNT</span>
                    </Link>
                    {/* END Brand */}

                    {/* Close Sidebar on Mobile */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => toggleSidebar()}
                            type="button"
                            className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
                        >
                        <svg className="hi-mini hi-x-mark inline-block w-5 h-5 -mx-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" /></svg>

                        </button>
                    </div>
                    {/* END Close Sidebar on Mobile */}
                </div>
                {/* END Sidebar Header */}

                {/* Sidebar Navigation */}
                <div className="overflow-y-auto">
                    <div className="p-4 w-full">
                        <nav className="space-y-1">
                            <Link to="/dashboard" className="group flex items-center space-x-2 px-2.5 text-sm font-medium rounded-lg text-gray-900 border border-rose-100 bg-rose-50 dark:text-white dark:bg-gray-700/75 dark:border-transparent">
                                <span className="flex-none flex items-center text-rose-500 dark:text-gray-300">
                                    <svg className="hi-outline hi-home inline-block w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>
                                </span>
                                <span className="py-2 grow">Dashboard</span>
                            </Link>
                            
                            <div className="px-3 pt-5 pb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">Account</div>
                            <Link to="#" className="group flex items-center space-x-2 px-2.5 text-sm font-medium rounded-lg text-gray-800 border border-transparent hover:text-gray-900 hover:bg-rose-50 active:border-rose-100 dark:text-gray-200 dark:hover:text-white dark:hover:bg-gray-700/75 dark:active:border-gray-600">
                                <span className="flex-none flex items-center text-gray-400 group-hover:text-rose-500 dark:text-gray-500 dark:group-hover:text-gray-300">
                                    <svg className="hi-outline hi-user-circle inline-block w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </span>
                                <span className="py-2 grow">Profile</span>
                            </Link>
                            <Link to="#" className="group flex items-center space-x-2 px-2.5 text-sm font-medium rounded-lg text-gray-800 border border-transparent hover:text-gray-900 hover:bg-rose-50 active:border-rose-100 dark:text-gray-200 dark:hover:text-white dark:hover:bg-gray-700/75 dark:active:border-gray-600">
                                <span className="flex-none flex items-center text-gray-400 group-hover:text-rose-500 dark:text-gray-500 dark:group-hover:text-gray-300">
                                    <svg className="hi-outline hi-cog-8-tooth inline-block w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </span>
                                <span className="py-2 grow">Settings</span>
                            </Link>
                            <Link to="#" className="group flex items-center space-x-2 px-2.5 text-sm font-medium rounded-lg text-gray-800 border border-transparent hover:text-gray-900 hover:bg-rose-50 active:border-rose-100 dark:text-gray-200 dark:hover:text-white dark:hover:bg-gray-700/75 dark:active:border-gray-600">
                                <span className="flex-none flex items-center text-gray-400 group-hover:text-rose-500 dark:text-gray-500 dark:group-hover:text-gray-300">
                                    <svg className="hi-outline hi-lock-closed inline-block w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
                                </span>
                                <span className="py-2 grow">Log out</span>
                            </Link>
                        </nav>
                    </div>
                </div>
                {/* END Sidebar Navigation */}
            </nav>
            {/* Page Sidebar */}

            {/* Page Header */}
            <header
                id="page-header"
                className={`flex flex-none items-center h-16 bg-white shadow-sm fixed top-0 right-0 left-0 z-30 dark:bg-gray-800 ${isSidebarOpen ? "lg:pl-64" : ""
                    }`}
            >
                <div className="flex justify-between max-w-10xl mx-auto px-4 lg:px-8 w-full">
                    {/* Left Section */}
                    <div className="flex items-center space-x-2">
                        {/* Toggle Sidebar on Desktop */}
                        <div className="hidden lg:block">
                            <button
                                onClick={toggleSidebar}
                                type="button"
                                className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
                            >
                                <svg className="hi-solid hi-menu-alt-1 inline-block w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                            </button>
                        </div>
                        {/* END Toggle Sidebar on Desktop */}

                        {/* Toggle Sidebar on Mobile */}
                        <div className="lg:hidden">
                            <button
                                onClick={() => toggleSidebar()}
                                type="button"
                                className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
                            >
                                <svg className="hi-solid hi-menu-alt-1 inline-block w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                            </button>
                        </div>
                        {/* END Toggle Sidebar on Mobile */}

                        {/* Search */}
                        <div className="hidden lg:block">
                            <form>
                                <input type="text" className="block border placeholder-gray-400 py-2 leading-5 text-sm w-full rounded-lg border-gray-200 focus:border-rose-500 focus:ring focus:ring-rose-500 focus:ring-opacity-50 dark:bg-gray-900/25 dark:border-gray-700 dark:focus:border-rose-500" id="search" name="search" placeholder="Search.." />
                            </form>
                        </div>
                        <div className="lg:hidden">
                            <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700">
                                <svg className="hi-solid hi-search inline-block w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
                            </button>
                        </div>
                        {/* END Search */}
                    </div>
                    {/* END Left Section */}

                    {/* Center Section */}
                    <div className="flex items-center lg:hidden">
                        <Link to="#" className="group inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300">
                            <span className="hidden sm:inline">ENTNT</span>
                        </Link>
                    </div>
                    {/* END Center Section */}

                    {/* Right Section */}
                    <div className="flex items-center space-x-2">
                        {/* Notifications */}
                        <Link to="#" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700">
                            <svg className="hi-outline hi-bell-alert inline-block w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" /></svg>
                        </Link>
                        {/* END Notifications */}

                        {/* User Dropdown */}
                        <Menu as="div" className="relative inline-block">
                            {/* Dropdown Toggle Button */}
                            <Menu.Button className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700">
                                <svg className="hi-mini hi-user-circle inline-block w-5 h-5 sm:hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z" clipRule="evenodd" /></svg>
                                <span className="hidden sm:inline">John</span>
                                <svg className="hi-mini hi-chevron-down w-5 h-5 opacity-40 hidden sm:inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>
                            </Menu.Button>
                            {/* END Dropdown Toggle Button */}

                            {/* Dropdown */}
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="opacity-0 scale-90"
                                enterTo="opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-90"
                            >
                                <Menu.Items className="absolute right-0 origin-top-right z-10 mt-2 w-48 shadow-xl rounded-lg dark:shadow-gray-900 focus:outline-none">
                                    <div className="bg-white ring-1 ring-black ring-opacity-5 rounded-lg divide-y divide-gray-100 dark:bg-gray-800 dark:divide-gray-700 dark:ring-gray-700">
                                        <div className="p-2.5 space-y-1">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        to="#"
                                                        className={`group text-sm font-medium flex items-center justify-between space-x-2 px-2.5 py-2 rounded-lg border border-transparent ${active ? "text-rose-800 bg-rose-50 dark:text-white dark:bg-gray-700/75 dark:border-transparent" : "text-gray-700 hover:text-rose-800 hover:bg-rose-50 active:border-rose-100 dark:text-gray-200 dark:hover:text-white dark:hover:bg-gray-700/75 dark:active:border-gray-600"
                                                            }`}
                                                    >
                                                        <svg className="flex-none hi-mini hi-inbox inline-block w-5 h-5 opacity-25 group-hover:opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M1 11.27c0-.246.033-.492.099-.73l1.523-5.521A2.75 2.75 0 015.273 3h9.454a2.75 2.75 0 012.651 2.019l1.523 5.52c.066.239.099.485.099.732V15a2 2 0 01-2 2H3a2 2 0 01-2-2v-3.73zm3.068-5.852A1.25 1.25 0 015.273 4.5h9.454a1.25 1.25 0 011.205.918l1.523 5.52c.006.02.01.041.015.062H14a1 1 0 00-.86.49l-.606 1.02a1 1 0 01-.86.49H8.236a1 1 0 01-.894-.553l-.448-.894A1 1 0 006 11H2.53l.015-.062 1.523-5.52z" clipRule="evenodd" /></svg>
                                                        <span className="grow">Inbox</span>
                                                        <div className="font-semibold inline-flex px-1.5 py-0.5 leading-4 text-xs rounded-full border border-rose-200 text-rose-700 bg-rose-100 dark:text-rose-50 dark:bg-rose-700 dark:border-rose-700">2</div>
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        to="#"
                                                        className={`group text-sm font-medium flex items-center justify-between space-x-2 px-2.5 py-2 rounded-lg border border-transparent ${active ? "text-rose-800 bg-rose-50 dark:text-white dark:bg-gray-700/75 dark:border-transparent" : "text-gray-700 hover:text-rose-800 hover:bg-rose-50 active:border-rose-100 dark:text-gray-200 dark:hover:text-white dark:hover:bg-gray-700/75 dark:active:border-gray-600"
                                                            }`}
                                                    >
                                                        <svg className="flex-none hi-mini hi-flag inline-block w-5 h-5 opacity-25 group-hover:opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M3.5 2.75a.75.75 0 00-1.5 0v14.5a.75.75 0 001.5 0v-4.392l1.657-.348a6.449 6.449 0 014.271.572 7.948 7.948 0 005.965.524l2.078-.64A.75.75 0 0018 12.25v-8.5a.75.75 0 00-.904-.734l-2.38.501a7.25 7.25 0 01-4.186-.363l-.502-.2a8.75 8.75 0 00-5.053-.439l-1.475.31V2.75z" /></svg>
                                                        <span className="grow">Notifications</span>
                                                        <div className="font-semibold inline-flex px-1.5 py-0.5 leading-4 text-xs rounded-full border border-rose-200 text-rose-700 bg-rose-100 dark:text-rose-50 dark:bg-rose-700 dark:border-rose-700">5</div>
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                        </div>
                                        <div className="p-2.5 space-y-1">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        to="#"
                                                        className={`group text-sm font-medium flex items-center justify-between space-x-2 px-2.5 py-2 rounded-lg border border-transparent ${active ? "text-rose-800 bg-rose-50 dark:text-white dark:bg-gray-700/75 dark:border-transparent" : "text-gray-700 hover:text-rose-800 hover:bg-rose-50 active:border-rose-100 dark:text-gray-200 dark:hover:text-white dark:hover:bg-gray-700/75 dark:active:border-gray-600"
                                                            }`}
                                                    >
                                                        <svg className="flex-none hi-mini hi-user-circle inline-block w-5 h-5 opacity-25 group-hover:opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z" clipRule="evenodd" /></svg>
                                                        <span className="grow">Account</span>
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        to="#"
                                                        className={`group text-sm font-medium flex items-center justify-between space-x-2 px-2.5 py-2 rounded-lg border border-transparent ${active ? "text-rose-800 bg-rose-50 dark:text-white dark:bg-gray-700/75 dark:border-transparent" : "text-gray-700 hover:text-rose-800 hover:bg-rose-50 active:border-rose-100 dark:text-gray-200 dark:hover:text-white dark:hover:bg-gray-700/75 dark:active:border-gray-600"
                                                            }`}
                                                    >
                                                        <svg className="flex-none hi-mini hi-cog-6-tooth inline-block w-5 h-5 opacity-25 group-hover:opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" /></svg>
                                                        <span className="grow">Settings</span>
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                        </div>
                                        <div className="p-2.5 space-y-1">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        to="#"
                                                        className={`group text-sm font-medium flex items-center justify-between space-x-2 px-2.5 py-2 rounded-lg border border-transparent ${active ? "text-rose-800 bg-rose-50 dark:text-white dark:bg-gray-700/75 dark:border-transparent" : "text-gray-700 hover:text-rose-800 hover:bg-rose-50 active:border-rose-100 dark:text-gray-200 dark:hover:text-white dark:hover:bg-gray-700/75 dark:active:border-gray-600"
                                                            }`}
                                                    >
                                                        <svg className="flex-none hi-mini hi-lock-closed inline-block w-5 h-5 opacity-25 group-hover:opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" /></svg>
                                                        <span className="grow">Sign out</span>
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                        </div>
                                    </div>
                                </Menu.Items>
                            </Transition>
                            {/* END Dropdown */}
                        </Menu>
                        {/* END User Dropdown */}
                    </div>
                    {/* END Right Section */}
                </div>
            </header>
            {/* END Page Header */}

            <div className={`flex-1 transition-all duration-500 ease-out
                ${isSidebarOpen ? "ml-64" : "ml-0"}`}>
                {/* Rest of your dashboard code */}
            </div>
        </>
    );
}