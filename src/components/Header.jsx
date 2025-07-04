import React, { useState } from 'react'
import { CgSmartphone } from 'react-icons/cg'
import { IoLocationSharp } from 'react-icons/io5'
import { RiMenu2Fill } from 'react-icons/ri'
import { GiArcher, GiChest } from 'react-icons/gi'
import { BsHeartFill, BsLightning, BsPeopleFill, BsWhatsapp } from 'react-icons/bs'
import { FaSalesforce, FaFire } from 'react-icons/fa'
import { PiTelegramLogo } from 'react-icons/pi'
import { TbWorld } from 'react-icons/tb'
import { BiHeadphone, BiKnife, BiNews, BiPlus, BiRightArrowAlt, BiSearch, BiX } from 'react-icons/bi'
import { SiPoetry } from 'react-icons/si'
import logo from '../img/packman.svg'
import { LuLaptop, LuPcCase, LuTv } from 'react-icons/lu'
import { AiFillFire } from 'react-icons/ai'

const Header = () => {
    const [activeLang, setActiveLang] = useState('RU')
    const [openMenu, SetOpenMenu] = useState(false)
    const [openMenu2, SetOpenMenu2] = useState(false)
    const [MobileMenu, SetMobileMenu] = useState(false)

    return (
        <header className="box-border">
            {/* TOP BAR */}
            <div className="hidden lg:block bg-[#F4F4F4] text-[#343A3F] text-sm">
                <div className="container mx-auto flex justify-between py-2 mb-4">
                    <div className="flex gap-12">
                        <p className="flex gap-1 items-center">
                            <IoLocationSharp size={20} /> Сайлент-Хилл
                        </p>
                        <a href="tel:+75555553750" className="flex gap-1 items-center">
                            <CgSmartphone size={20} /> +7 555 555-37-50
                        </a>
                    </div>
                    <div className="flex items-center gap-3">
                        <h3>Ежедневно</h3>
                        <h3>9:00 — 21:00</h3>
                    </div>
                    <div className="flex items-center gap-4">
                        <h3>Доставка</h3>
                        <h3>Оплата</h3>
                        <h3>Контакты</h3>
                    </div>
                </div>
            </div>

            {/* MIDDLE PART */}
            <div className="container hidden lg:flex gap-8 items-center">
                <div className="p-5 bg-MainColor rounded-full">
                    <img src={logo} alt="logo" />
                </div>

                <div className="">
                    <div className="container flex items-center justify-between">
                        <div className="flex items-center gap-6">
                            <div className="flex flex-grow w-3xl items-center gap-4">
                                <button className="cursor-pointer flex items-center gap-2 px-9 py-3 bg-MainColor text-white rounded-lg">
                                    <RiMenu2Fill size={24} />
                                </button>
                                <div className="relative w-full max-w-1.5xl mr-2">
                                    <input
                                        type="search"
                                        placeholder="Поиск товара..."
                                        className="w-full bg-white outline-none px-6 py-3.5 border border-gray-200 rounded-lg"
                                    />
                                    <button
                                        className="absolute top-1/2 -translate-y-1/2 bg-MainColor right-1 bg-MainBlue text-white px-5 py-3 rounded-md"
                                    >
                                        Найти
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-8">
                            <div className="flex gap-2.5">
                                <a href="https://web.telegram.org/a/" className="p-3 bg-gray-100 rounded-lg">
                                    <PiTelegramLogo size={24} />
                                </a>
                                <a href="https://www.whatsapp.com/?lang=ru_RU" className="p-3 bg-gray-100 rounded-lg">
                                    <BsWhatsapp size={24} />
                                </a>
                            </div>

                            <div className="flex items-center gap-2">
                                <TbWorld size={32} className="text-gray-500" />
                                <div className="flex gap-2 items-center">
                                    <button
                                        onClick={() => setActiveLang('RU')}
                                        className={`transition duration-200 ${activeLang === 'RU' ? 'text-black font-semibold' : 'opacity-50'}`}
                                    >
                                        RU
                                    </button>
                                    <span>|</span>
                                    <button
                                        onClick={() => setActiveLang('EN')}
                                        className={`transition duration-200 ${activeLang === 'EN' ? 'text-black font-semibold' : 'opacity-50'}`}
                                    >
                                        EN
                                    </button>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="p-3 border border-gray-200 rounded-lg">
                                    <BsHeartFill size={24} />
                                </div>
                                <div className="p-3 border border-gray-200 rounded-lg">
                                    <GiArcher size={24} />
                                </div>
                                <div className="p-3 border border-gray-200 rounded-lg">
                                    <GiChest size={24} />
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* NAVIGATION MENU */}
                    <nav className="container text-sm mx-auto flex justify-between items-center mt-4">
                        <div className="flex gap-4 flex-wrap">
                            <button onClick={() => { SetOpenMenu(!openMenu); SetOpenMenu2(false); }}
                                className="py-2.5 cursor-pointer px-4 flex items-center rounded-lg bg-gray-100 gap-2.5">
                                <FaFire size={20} className="text-MainColor/50" /> Акции
                            </button>
                            <buttun onClick={() => { SetOpenMenu2(!openMenu2); SetOpenMenu(false); }} className="cursor-pointer py-2.5 px-4 flex items-center rounded-lg bg-gray-100 gap-2.5">
                                <BsLightning size={20} className="text-MainColor/50" /> Горячее предложение
                            </buttun>
                            <div className="py-2.5 px-4 flex items-center rounded-lg bg-gray-100 gap-2.5">
                                <GiChest size={20} className="text-MainColor/50" /> Подарочные наборы
                            </div>
                            <div className="py-2.5 px-4 flex items-center rounded-lg bg-gray-100 gap-2.5">
                                <SiPoetry size={20} className="text-MainColor/50" /> События
                            </div>
                            <div className="py-2.5 px-4 flex items-center rounded-lg bg-gray-100 gap-2.5">
                                <FaFire size={20} className="text-MainColor/50" /> Наши бренды
                            </div>
                            <div className="py-2.5 px-4 flex items-center rounded-lg bg-gray-100 gap-2.5">
                                <FaSalesforce size={20} className="text-MainColor/50" /> Акции
                            </div>
                        </div>

                        <button className="px-6 py-2.5 bg-gray-100 text-MainColor flex items-center gap-3.5 rounded-lg">
                            <BiPlus size={16} /> Собрать компьютер
                        </button>
                    </nav></div></div>
                    {/* responsive TOP PART*/}
            <div className=" bg-[#F4F4F4] text-[#343A3F] text-sm">
                <div className="flex lg:hidden container mx-auto  justify-between py-2 mb-4">
                    <div className="flex gap-2 items-center">
                        <button
                            onClick={() => setActiveLang('RU')}
                            className={`transition duration-200 ${activeLang === 'RU' ? 'text-black font-semibold' : 'opacity-50'}`}
                        >
                            RU
                        </button>
                        <span>|</span>
                        <button
                            onClick={() => setActiveLang('EN')}
                            className={`transition duration-200 ${activeLang === 'EN' ? 'text-black font-semibold' : 'opacity-50'}`}
                        >
                            EN
                        </button>
                    </div>

                    <a href="tel:+75555553750" className="flex gap-1 items-center">
                        <CgSmartphone size={20} /> +7 555 555-37-50
                    </a>
                </div>
            </div>

            {/* Responsive MIDDLE PART */}
            <div className="flex lg:hidden flex-col gap-5 items-center">
                <div className="flex container justify-between items-center">
                    <div className="flex gap-1.5">
                        <button onClick={() => SetMobileMenu(true)} className="cursor-pointer flex items-center gap-2  p-3 bg-MainColor text-white rounded-lg">
                            <RiMenu2Fill size={24} />
                        </button>
                        <div className="p-3 border border-gray-200 rounded-lg">
                            <GiArcher size={24} />
                        </div>
                    </div>
                    <div className="p-5 bg-MainColor rounded-full">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="flex gap-1.5">
                        <div className="p-3 border border-gray-200 rounded-lg">
                            <BsHeartFill size={24} />
                        </div>
                        <div className="p-3 border border-gray-200 rounded-lg">
                            <GiChest size={24} />
                        </div>
                    </div>

                </div>
                <div className="relative w-full max-w-1.5xl mr-2">
                    <input
                        type="search"
                        placeholder="Поиск товара..."
                        className="w-full bg-white outline-none px-6 py-3.5 border border-gray-200 rounded-lg"
                    />
                    <button
                        className="absolute top-1/2 -translate-y-1/2 bg-MainColor right-1 bg-MainBlue text-white px-5 py-3 rounded-md"
                    >
                        <BiSearch size={24}></BiSearch>
                    </button>
                </div>

            </div>
            {/* Modal Aksiya  */}
            {openMenu && (
                <div className="fixed inset-0 z-50 bg-white overflow-y-auto px-4 py-6 md:absolute md:top-[180px] md:left-[195px] md:max-w-[892px] md:rounded-lg md:shadow-xl md:px-0 md:py-7">
                    <button
                        className="absolute top-4 right-4 text-gray-500 hover:text-red-500 md:hidden"
                        onClick={() => SetOpenMenu(false)}
                    >
                        ✕
                    </button>

                    <div className="flex flex-col md:flex-row gap-10">
                        <ul className="flex flex-col w-full md:w-auto">
                            <li className="px-7 py-5 border-b border-gray-200 hover:bg-gray-100 cursor-pointer flex justify-between items-center">
                                <div className="flex gap-4 items-center">
                                    <CgSmartphone size={24} className="text-MainColor" />
                                    <h3>Смартфоны и гаджеты</h3>
                                </div>
                                <BiRightArrowAlt size={24} className="text-MainColor" />
                            </li>
                            <li className="px-7 py-5 border-b border-gray-200 hover:bg-gray-100 cursor-pointer flex justify-between items-center">
                                <div className="flex gap-4 items-center">
                                    <LuLaptop size={24} className="text-MainColor" />
                                    <h3>Ноутбуки и компьютеры</h3>
                                </div>
                                <BiRightArrowAlt size={24} className="text-MainColor" />
                            </li>
                            <li className="px-7 py-5 border-b border-gray-200 hover:bg-gray-100 cursor-pointer flex justify-between items-center">
                                <div className="flex gap-4 items-center">
                                    <LuTv size={24} className="text-MainColor" />
                                    <h3>Телевизоры и цифровое ТВ</h3>
                                </div>
                                <BiRightArrowAlt size={24} className="text-MainColor" />
                            </li>
                            <li className="px-7 py-5 border-b border-gray-200 hover:bg-gray-100 cursor-pointer flex justify-between items-center">
                                <div className="flex gap-4 items-center">
                                    <BiHeadphone size={24} className="text-MainColor" />
                                    <h3>Аудиотехника</h3>
                                </div>
                                <BiRightArrowAlt size={24} className="text-MainColor" />
                            </li>
                            <li className="px-7 py-5 border-b border-gray-200 hover:bg-gray-100 cursor-pointer flex items-center gap-4">
                                <AiFillFire size={24} className="text-MainColor" />
                                <h3>Акции</h3>
                            </li>
                            <li className="px-7 py-5 border-b border-gray-200 hover:bg-gray-100 cursor-pointer flex items-center gap-4">
                                <BiNews size={24} className="text-MainColor" />
                                <h3>Новинки</h3>
                            </li>
                        </ul>

                        <div className="flex-1">
                            <h2 className="text-2xl font-bold mb-4">Смартфоны</h2>
                            <ul className="flex flex-col gap-3">
                                <li className="hover:text-MainColor">Apple iPhone <span className="text-sm opacity-30">123</span></li>
                                <li className="hover:text-MainColor">Смартфоны <span className="text-sm opacity-30">227</span></li>
                                <li className="hover:text-MainColor">iPhone 16 <span className="text-sm opacity-30">120</span></li>
                                <li className="hover:text-MainColor">Складные <span className="text-sm opacity-30">30</span></li>
                                <li className="hover:text-MainColor">realme <span className="text-sm opacity-30">120</span></li>
                                <li className="hover:text-MainColor">Huawei Mate X6 <span className="text-sm opacity-30">100</span></li>
                                <li className="hover:text-MainColor">Кнопочные <span className="text-sm opacity-30">17</span></li>
                                <li className="hover:text-MainColor">Домашние <span className="text-sm opacity-30">123</span></li>
                                <li className="hover:text-MainColor">Samsung <span className="text-sm opacity-30">27</span></li>
                            </ul>
                        </div>

                        <div className="flex-1">
                            <h2 className="text-2xl font-bold mb-4">Гаджеты</h2>
                            <ul className="flex flex-col gap-3">
                                <li className="hover:text-MainColor">Смарт-часы <span className="text-sm opacity-30">15</span></li>
                                <li className="hover:text-MainColor">Смарт-кольца <span className="text-sm opacity-30">34</span></li>
                                <li className="hover:text-MainColor">Наушники <span className="text-sm opacity-30">21</span></li>
                                <li className="hover:text-MainColor">Гарнитуры <span className="text-sm opacity-30">12</span></li>
                                <li className="hover:text-MainColor">Портативное аудио <span className="text-sm opacity-30">42</span></li>
                                <li className="hover:text-MainColor">Умные гаджеты <span className="text-sm opacity-30">46</span></li>
                                <li className="hover:text-MainColor">Очки VR <span className="text-sm opacity-30">49</span></li>
                                <li className="hover:text-MainColor">Для блогеров <span className="text-sm opacity-30">32</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal texnologiya */}
            {openMenu2 && (
                <div className="fixed inset-0 z-50 bg-white overflow-y-auto px-4 py-6 md:absolute md:top-[180px] md:left-[320px] md:max-w-[757px] md:rounded-lg md:shadow-xl md:px-0 md:py-7">
                    <button
                        className="absolute top-4 right-4 text-gray-500 hover:text-red-500 md:hidden"
                        onClick={() => SetOpenMenu2(false)}
                    >
                        ✕
                    </button>

                    <div className="flex flex-col md:flex-row gap-10">
                        <ul className="flex flex-col w-full md:w-auto">
                            <li className="px-7 py-5 border-b border-gray-200  hover:bg-gray-100 cursor-pointer flex justify-between items-center">
                                <div className="flex gap-4 items-center">
                                    <BsPeopleFill size={24} className="text-MainColor" />
                                    <h3>Кому</h3>
                                </div>
                                <BiRightArrowAlt size={24} className="text-MainColor" />
                            </li>
                            <li className="px-7 py-5 border-b border-gray-200  hover:bg-gray-100 cursor-pointer flex justify-between items-center">
                                <div className="flex gap-4 items-center">
                                    <BiKnife size={24} className="text-MainColor" />
                                    <h3>Повод</h3>
                                </div>
                                <BiRightArrowAlt size={24} className="text-MainColor" />
                            </li>
                            <li className="px-7 py-5 border-b border-gray-200  hover:bg-gray-100 cursor-pointer flex justify-between items-center">
                                <div className="flex gap-4 items-center">
                                    <LuPcCase size={24} className="text-MainColor" />
                                    <h3>Наполнение</h3>
                                </div>
                                <BiRightArrowAlt size={24} className="text-MainColor" />
                            </li>
                        </ul>

                        <div className="flex-1">
                            <h2 className="text-2xl font-bold mb-4">Кому</h2>
                            <ul className="flex flex-col gap-3">
                                <li className="hover:text-MainColor">Для мужчин <span className="text-sm opacity-30">123</span></li>
                                <li className="hover:text-MainColor">Для женщин <span className="text-sm opacity-30">227</span></li>
                                <li className="hover:text-MainColor">Папе <span className="text-sm opacity-30">120</span></li>
                                <li className="hover:text-MainColor">Сотрудникам <span className="text-sm opacity-30">30</span></li>
                                <li className="hover:text-MainColor">realme <span className="text-sm opacity-30">120</span></li>
                                <li className="hover:text-MainColor">Мужу <span className="text-sm opacity-30">100</span></li>
                                <li className="hover:text-MainColor">Корпоративный <span className="text-sm opacity-30">17</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
            {/* Mobile Menu  */}
            {MobileMenu && (
                <>
                    {/* Overlay background */}
                    <div
                        onClick={() => SetMobileMenu(false)}
                        className="fixed inset-0 bg-black/30 z-40"
                    ></div>

                    {/* Slide-in menu */}
                    <div className="fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white shadow-lg z-50 transform transition-transform duration-300 translate-x-0">
                        <nav className="text-sm p-4 flex flex-col justify-between h-full relative">
                            {/* X Close Button */}
                            <button
                                onClick={() => SetMobileMenu(false)}
                                className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition"
                            >
                                <BiX size={28} />
                            </button>

                            <div className="flex flex-col gap-4 mt-10">
                                <button
                                    onClick={() => {
                                        SetOpenMenu(!openMenu);
                                        SetOpenMenu2(false);
                                    }}
                                    className="py-2.5 px-4 flex items-center rounded-lg bg-gray-100 gap-2.5"
                                >
                                    <FaFire size={20} className="text-MainColor/50" /> Акции
                                </button>
                                <button
                                    onClick={() => {
                                        SetOpenMenu2(!openMenu2);
                                        SetOpenMenu(false);
                                    }}
                                    className="py-2.5 px-4 flex items-center rounded-lg bg-gray-100 gap-2.5"
                                >
                                    <BsLightning size={20} className="text-MainColor/50" /> Горячее предложение
                                </button>
                                <div className="py-2.5 px-4 flex items-center rounded-lg bg-gray-100 gap-2.5">
                                    <GiChest size={20} className="text-MainColor/50" /> Подарочные наборы
                                </div>
                                <div className="py-2.5 px-4 flex items-center rounded-lg bg-gray-100 gap-2.5">
                                    <SiPoetry size={20} className="text-MainColor/50" /> События
                                </div>
                                <div className="py-2.5 px-4 flex items-center rounded-lg bg-gray-100 gap-2.5">
                                    <FaFire size={20} className="text-MainColor/50" /> Наши бренды
                                </div>
                                <div className="py-2.5 px-4 flex items-center rounded-lg bg-gray-100 gap-2.5">
                                    <FaSalesforce size={20} className="text-MainColor/50" /> Акции
                                </div>
                            </div>

                            <button className="mt-8 px-6 py-2.5 bg-gray-100 text-MainColor flex items-center gap-3.5 rounded-lg">
                                <BiPlus size={16} /> Собрать компьютер
                            </button>
                        </nav>
                    </div>
                </>
            )}
        </header>
    )
}

export default Header
