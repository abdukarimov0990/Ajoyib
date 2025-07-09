import React, { useState } from 'react'
import { CgLock, CgSmartphone } from 'react-icons/cg'
import { IoFlame, IoLocationSharp } from 'react-icons/io5'
import { RiMenu2Fill, RiSpeaker3Fill } from 'react-icons/ri'
import { GiArcher, GiChest } from 'react-icons/gi'
import { BsClockFill, BsFillTvFill, BsHeartFill, BsLightning, BsPeopleFill, BsWhatsapp } from 'react-icons/bs'
import { FaSalesforce, FaFire } from 'react-icons/fa'
import { PiPhone, PiTelegramLogo } from 'react-icons/pi'
import { TbWorld } from 'react-icons/tb'
import { BiHeadphone, BiKnife, BiNews, BiPlus, BiRightArrow, BiRightArrowAlt, BiSearch, BiX } from 'react-icons/bi'
import { SiPoetry } from 'react-icons/si'
import logo from '../img/packman.svg'
import { LuLaptop, LuPcCase, LuTv } from 'react-icons/lu'
import { AiFillFire } from 'react-icons/ai'
import { MdNewReleases, MdOutlineKey, MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight, MdSmartphone, MdWatch } from 'react-icons/md'
import { IoIosLaptop } from 'react-icons/io'
import { RxCross2 } from 'react-icons/rx'

const Header = () => {
    const smartphones = [
        { name: 'Apple iPhone', count: 123 },
        { name: 'Смартфоны', count: 227 },
        { name: 'iPhone 16', count: 120 },
        { name: 'Складные', count: 30 },
        { name: 'realme', count: 120 },
        { name: 'Huawei Mate X6', count: 100 },
        { name: 'Кнопочные', count: 23 },
        { name: 'Домашние', count: 17 },
        { name: 'Samsung', count: 27 },
    ];

    const gadgets = [
        { name: 'Смарт-часы', count: 15 },
        { name: 'Смарт-кольца', count: 34 },
        { name: 'Наушники', count: 21 },
        { name: 'Гарнитуры', count: 12 },
        { name: 'Портативное аудио', count: 42 },
        { name: 'Умные гаджеты', count: 46 },
        { name: 'Очки VR', count: 49 },
        { name: 'Для блогеров', count: 32 },
    ];

    const [openTexnologiya, SetopenTexnologiya] = useState(false)
    const [activeLang, setActiveLang] = useState('RU')
    const [openMenu, SetOpenMenu] = useState(false)
    const [openMobileMenu, SetopenMobileMene] = useState(false)
    const [openMobileModal, SetopenMobileModal] = useState(false)
    const [openPhone, SetopenPhone] = useState(true)
    const [openGadjet, SetopenGadjet] = useState(false)

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
                                <button onClick={() => SetOpenMenu(prev => !prev)} className="cursor-pointer flex items-center gap-2 px-9 py-3 bg-MainColor text-white rounded-lg">
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
                            <button
                                className="py-2.5 cursor-pointer px-4 flex items-center rounded-lg bg-gray-100 gap-2.5">
                                <FaFire size={20} className="text-MainColor/50" /> Акции
                            </button>
                            <button className="cursor-pointer py-2.5 px-4 flex items-center rounded-lg bg-gray-100 gap-2.5">
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
                        <button
                            onClick={() => {
                                SetopenMobileMene(prev => !prev);
                                SetopenPhone(false);
                                SetopenGadjet(false);
                                SetopenMobileModal(false)
                            }}
                            className={`cursor-pointer flex items-center gap-2 p-3 rounded-lg transition-colors duration-200 ${openMobileMenu ? 'bg-[#f3f3f3] text-black' : 'bg-MainColor text-white'
                                }`}
                        >
                            {openMobileMenu ? <RxCross2 size={24} /> : <RiMenu2Fill size={24} />}
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
            {
                openMenu && (
                    <div className="py-8 z-20 absolute left-[200px] flex mt-6 pr-11 shadow-2xl shadow-[#9D9D9D59] bg-white rounded-lg ">
                        <ul className='flex flex-col gap-5'>
                            <li onClick={() => SetopenTexnologiya(prev => !prev)} className='px-8 transition-all ease-in-out duration-100 group py-3 bg-white hover:bg-[#F3F3F3] w-[338px] justify-between flex items-center'>
                                <div className="flex gap-4 items-center">
                                    <CgSmartphone size={24} className='text-MainColor/50'></CgSmartphone>
                                    <h3 className='font-normal text-base'>Смартфоны и гаджеты</h3>
                                </div>
                                <MdOutlineKeyboardArrowRight size={24} className='transition-all ease-in-out duration-100 group-hover:text-MainColor/50' />
                            </li>
                            <li className='px-8 transition-all ease-in-out duration-100 group py-3 bg-white hover:bg-[#F3F3F3] w-[338px] justify-between flex items-center'>
                                <div className="flex gap-4 items-center">
                                    <IoIosLaptop size={24} className='text-MainColor/50'></IoIosLaptop>
                                    <h3 className='font-normal text-base'>Ноутбуки и компьютеры</h3>
                                </div>
                                <MdOutlineKeyboardArrowRight size={24} className='transition-all ease-in-out duration-100 group-hover:text-MainColor/50' />
                            </li>
                            <li className='px-8 transition-all ease-in-out duration-100 group py-3 bg-white hover:bg-[#F3F3F3] w-[338px] justify-between flex items-center'>
                                <div className="flex gap-4 items-center">
                                    <BsFillTvFill size={24} className='text-MainColor/50'></BsFillTvFill>
                                    <h3 className='font-normal text-base'>Телевизоры и цифровое ТВ</h3>
                                </div>
                                <MdOutlineKeyboardArrowRight size={24} className='transition-all ease-in-out duration-100 group-hover:text-MainColor/50' />
                            </li>
                            <li className='px-8 transition-all ease-in-out duration-100 group py-3 bg-white hover:bg-[#F3F3F3] w-[338px] justify-between flex items-center'>
                                <div className="flex gap-4 items-center">
                                    <RiSpeaker3Fill size={24} className='text-MainColor/50'></RiSpeaker3Fill>
                                    <h3 className='font-normal text-base'>Аудиотехника</h3>
                                </div>
                                <MdOutlineKeyboardArrowRight size={24} className='transition-all ease-in-out duration-100 group-hover:text-MainColor/50' />
                            </li>
                            <li className='px-8 transition-all ease-in-out duration-100 group py-3 bg-white hover:bg-[#F3F3F3] w-[338px] justify-between flex items-center'>
                                <div className="flex gap-4 items-center">
                                    <IoFlame size={24} className='text-MainColor/50'></IoFlame>
                                    <h3 className='font-normal text-base'>Акции</h3>
                                </div>
                            </li>
                            <li className='px-8 transition-all ease-in-out duration-100 group py-3 bg-white hover:bg-[#F3F3F3] w-[338px] justify-between flex items-center'>
                                <div className="flex gap-4 items-center">
                                    <MdNewReleases size={24} className='text-MainColor/50'></MdNewReleases>
                                    <h3 className='font-normal text-base'>Новинки</h3>
                                </div>
                            </li>
                        </ul>
                        {openTexnologiya && <div className="flex gap-12 px-10">
                            {/* Smartphones */}
                            <div>
                                <h3 className="text-3xl font-semibold mb-4">Смартфоны</h3>
                                <ul className="space-y-4 pt-4">
                                    {smartphones.map((item, idx) => (
                                        <li key={idx} className="flex items-center justify-between group hover:text-blue-600 cursor-pointer">
                                            <div className="flex text-base items-center gap-2">

                                                {item.name}
                                            </div>
                                            <span className="text-sm group-hover:text-blue-600 text-gray-400">{item.count}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <MdOutlineKeyboardArrowRight size={24} className='h-full'></MdOutlineKeyboardArrowRight>
                            {/* Gadgets */}
                            <div>
                                <h3 className="text-3xl font-semibold mb-4">Гаджеты</h3>
                                <ul className="space-y-4 pt-4">
                                    {gadgets.map((item, idx) => (
                                        <li key={idx} className="flex group items-center justify-between hover:text-blue-600 cursor-pointer">
                                            <div className="flex items-center text-base gap-2">
                                                {item.name}
                                            </div>
                                            <span className="text-sm group-hover:text-blue-600 text-gray-400">{item.count}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        }
                    </div>
                )
            }
            {
                openMobileMenu && (
                    <div className="py-8 container h-screen z-10 absolute w-full bg-white">
                        <div className="flex mb-6 items-center justify-between">
                            <div className="flex gap-2 flex-col">
                                <p className="flex gap-1 items-center">
                                    <IoLocationSharp className='text-gray-300' size={16} /> Сайлент-Хилл
                                </p>
                                <div className="flex items-center gap-3">
                                    <BsClockFill className='text-gray-300' size={16}></BsClockFill>
                                    <h3>Ежедневно</h3>
                                    <h3>9:00 — 21:00</h3>
                                </div>
                            </div>
                            <div className="flex gap-2.5">
                                <a href="https://web.telegram.org/a/" className="p-3 bg-gray-100 rounded-lg">
                                    <PiTelegramLogo size={24} />
                                </a>
                                <a href="https://www.whatsapp.com/?lang=ru_RU" className="p-3 bg-gray-100 rounded-lg">
                                    <BsWhatsapp size={24} />
                                </a>
                            </div>
                        </div>
                        <ul className='flex mb-6 flex-col gap-2.5 '>
                            <button onClick={() => SetopenMobileModal(true)} className="py-3 px-3 cursor-pointer flex items-center rounded-lg bg-gray-100 justify-between w-full">
                                <div className="flex items-center gap-4">
                                    <RiMenu2Fill size={24} className="text-MainColor/50" /> Каталог
                                </div>
                                <MdOutlineKeyboardArrowRight size={24} />
                            </button>
                            <button className="py-3 px-3 cursor-pointer flex items-center rounded-lg bg-gray-100 justify-between w-full">
                                <div className="flex items-center gap-4">
                                    <FaFire size={24} className="text-MainColor/50" /> Акции
                                </div>
                            </button>
                            <button className="py-3 px-3 cursor-pointer flex items-center rounded-lg bg-gray-100 justify-between w-full">
                                <div className="flex items-center gap-4">
                                    <BsLightning size={24} className="text-MainColor/50" /> Горячее предложение
                                </div>
                                <MdOutlineKeyboardArrowRight size={24} />
                            </button>
                            <button className="py-3 px-3 cursor-pointer flex items-center rounded-lg bg-gray-100 justify-between w-full">
                                <div className="flex items-center gap-4">
                                    <GiChest size={24} className="text-MainColor/50" /> Подарочные наборы
                                </div>
                                <MdOutlineKeyboardArrowRight size={24} />
                            </button>
                            <button className="py-3 px-3 cursor-pointer flex items-center rounded-lg bg-gray-100 justify-between w-full">
                                <div className="flex items-center gap-4">
                                    <SiPoetry size={24} className="text-MainColor/50" /> События
                                </div>
                                <MdOutlineKeyboardArrowRight size={24} />
                            </button>
                            <button className="py-3 px-3 cursor-pointer flex items-center rounded-lg bg-gray-100 justify-between w-full">
                                <div className="flex items-center gap-4">
                                    <FaFire size={24} className="text-MainColor/50" /> Наши бренды
                                </div>
                            </button>
                        </ul>
                        <button className="px-6 w-full justify-center font-semibold mb-10 py-2.5 bg-gray-100 text-MainColor flex items-center gap-3.5 rounded-lg">
                            <BiPlus size={16} /> Собрать компьютер
                        </button>
                        <ul className='space-y-4'>
                            <li className='border-b pb-2 border-gray-300'>Доставка</li>
                            <li className='border-b pb-2  border-gray-300'>Оплата</li>
                            <li className='border-b pb-2 border-gray-300'>Контакты</li>
                        </ul>
                    </div>
                )
            }
            {
                openMobileModal && (
                    <div className="py-8 container h-screen z-10 absolute w-full bg-white ">
                        <div onClick={() => SetopenMobileModal(false)} className="flex cursor-pointer gap-7 mb-6">
                            <MdOutlineKeyboardArrowLeft size={32} />
                            <h3 className='text-xl'>Каталог</h3>
                        </div>
                        <ul className='flex flex-col gap-5'>
                            <li onClick={() => SetopenPhone(true)} className=' transition-all ease-in-out duration-100 group py-3 px-2 rounded-lg bg-[#F3F3F3] w-full justify-between flex items-center'>
                                <div className="flex gap-4 items-center">
                                    <CgSmartphone size={24} className='text-MainColor/50'></CgSmartphone>
                                    <h3 className='font-normal text-base'>Смартфоны и гаджеты</h3>
                                </div>
                                <MdOutlineKeyboardArrowRight size={24} className='transition-all ease-in-out duration-100 group-hover:text-MainColor/50' />
                            </li>
                            <li className=' transition-all ease-in-out duration-100 group py-3 px-2 rounded-lg bg-[#F3F3F3] w-full justify-between flex items-center'>
                                <div className="flex gap-4 items-center">
                                    <IoIosLaptop size={24} className='text-MainColor/50'></IoIosLaptop>
                                    <h3 className='font-normal text-base'>Ноутбуки и компьютеры</h3>
                                </div>
                                <MdOutlineKeyboardArrowRight size={24} className='transition-all ease-in-out duration-100 group-hover:text-MainColor/50' />
                            </li>
                            <li className=' transition-all ease-in-out duration-100 group py-3 px-2 rounded-lg bg-[#F3F3F3] w-full justify-between flex items-center'>
                                <div className="flex gap-4 items-center">
                                    <BsFillTvFill size={24} className='text-MainColor/50'></BsFillTvFill>
                                    <h3 className='font-normal text-base'>Телевизоры и цифровое ТВ</h3>
                                </div>
                                <MdOutlineKeyboardArrowRight size={24} className='transition-all ease-in-out duration-100 group-hover:text-MainColor/50' />
                            </li>
                            <li className=' transition-all ease-in-out duration-100 group py-3 px-2 rounded-lg bg-[#F3F3F3] w-full justify-between flex items-center'>
                                <div className="flex gap-4 items-center">
                                    <RiSpeaker3Fill size={24} className='text-MainColor/50'></RiSpeaker3Fill>
                                    <h3 className='font-normal text-base'>Аудиотехника</h3>
                                </div>
                                <MdOutlineKeyboardArrowRight size={24} className='transition-all ease-in-out duration-100 group-hover:text-MainColor/50' />
                            </li>
                            <li className=' transition-all ease-in-out duration-100 group py-3 px-2 rounded-lg bg-[#F3F3F3] w-full justify-between flex items-center'>
                                <div className="flex gap-4 items-center">
                                    <IoFlame size={24} className='text-MainColor/50'></IoFlame>
                                    <h3 className='font-normal text-base'>Акции</h3>
                                </div>
                                <MdOutlineKeyboardArrowRight size={24} className='transition-all ease-in-out duration-100 group-hover:text-MainColor/50' />
                            </li>
                            <li className=' transition-all ease-in-out duration-100 group py-3 px-2 rounded-lg bg-[#F3F3F3] w-full justify-between flex items-center'>
                                <div className="flex gap-4 items-center">
                                    <MdNewReleases size={24} className='text-MainColor/50'></MdNewReleases>
                                    <h3 className='font-normal text-base'>Новинки</h3>
                                </div>
                                <MdOutlineKeyboardArrowRight size={24} className='transition-all ease-in-out duration-100 group-hover:text-MainColor/50' />
                            </li>
                        </ul>
                    </div>
                )
            }
            {
                openPhone && (
                    <div className="py-8 container h-screen z-10 absolute w-full bg-white">
                        <div onClick={() => SetopenPhone(false)} className="flex cursor-pointer gap-7 mb-6">
                            <MdOutlineKeyboardArrowLeft size={32} />
                            <h3 className='text-xl'>Смартфоны</h3>
                        </div>
                        <ul className="space-y-2.5">
                            {smartphones.map((item, idx) => (
                                <li onClick={item.name === "Смартфоны" ? () => SetopenGadjet(true) : undefined}
                                    key={idx} className="flex px-2 bg-[#f3f3f3] py-3 rounded-lg items-center justify-between group">
                                    <div className="">
                                        <div className="flex gap-2 items-center">
                                            <div className="flex text-base items-center gap-2">
                                                {item.name}
                                            </div>
                                            <span className="text-sm group-hover:text-blue-600 text-gray-400">{item.count}</span>
                                        </div>
                                    </div>
                                    {
                                        item.name == "Смартфоны" && <MdOutlineKeyboardArrowRight size={24} className='transition-all ease-in-out duration-100 group-hover:text-MainColor/50' />
                                    }
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            }
            {
                openGadjet && (
                    <div className="py-8 container h-screen z-10 absolute w-full bg-white">
                        <div onClick={() => SetopenGadjet(false)} className="flex cursor-pointer gap-7 mb-6">
                            <MdOutlineKeyboardArrowLeft size={32} />
                            <h3 className='text-xl'>Гаджеты</h3>
                        </div>
                        <ul className="space-y-2.5">
                            {gadgets.map((item, idx) => (
                                <li onClick={item.name === "Смартфоны" ? () => SetopenGadjet(true) : undefined}
                                    key={idx} className="flex px-2 bg-[#f3f3f3] py-3 rounded-lg items-center justify-between group">
                                    <div className="">
                                        <div className="flex gap-2 items-center">
                                            <div className="flex text-base items-center gap-2">
                                                {item.name}
                                            </div>
                                            <span className="text-sm group-hover:text-blue-600 text-gray-400">{item.count}</span>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            }
        </header>
    )
}

export default Header
