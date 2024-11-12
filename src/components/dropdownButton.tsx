"use client"

import { Fragment } from "react";

import { Menu, Transition } from "@headlessui/react";

interface DropdownItem {
  title: string;
  onClick?: () => void;
}

interface DropdownButtonProps {
  items: DropdownItem[];
}

export default function DropdownButton({ items }: DropdownButtonProps) {
  return (
    <>
      <div className="flex justify-end">
        <Menu as="div" className="relative inline-block">
          <Menu.Button className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700">
            <span>Edit</span>
            <svg className="hi-mini hi-chevron-down inline-block w-4 h-4 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="opacity-0 scale-90"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-90"
          >
            <Menu.Items className="absolute right-0 origin-top-right z-50 mt-2 w-64 shadow-xl rounded-lg dark:shadow-gray-900 focus:outline-none">
              <div className="bg-white ring-1 ring-black ring-opacity-5 rounded-lg divide-y divide-gray-100 dark:bg-gray-800 dark:divide-gray-700 dark:ring-gray-700">
                <div className="p-2.5 space-y-1">
                  {items && items.map((item, index) => (
                    <Menu.Item key={index}>
                      {({ active }) => (
                        <a
                          href="#"
                          className={`group text-sm font-medium flex items-center justify-between space-x-2 px-2.5 py-2 rounded-lg border border-transparent ${
                            active ? "text-rose-800 bg-rose-50 dark:text-white dark:bg-gray-700/75 dark:border-transparent" : "text-gray-700 hover:text-rose-800 hover:bg-rose-50 active:border-rose-100 dark:text-gray-200 dark:hover:text-white dark:hover:bg-gray-700/75 dark:active:border-gray-600"
                          }`}
                        >
                          <span className="grow" onClick={item.onClick}>{item.title}</span>
                          
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </>
  );
}
