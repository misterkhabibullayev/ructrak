import { useTranslation } from "react-i18next";
import { Images } from "../utils/images";
import { Link } from "react-router-dom";

export function HeaderBottom() {
    const { t } = useTranslation();
    return (
        <>
            <div className='container1'>
                <div className='flex items-center justify-between'>
                    <div className="flex items-center gap-10">
                        <button className='py-2.25 px-4 bg-[#FEC80B] flex items-center gap-4 rounded cursor-pointer'>
                            <Images.burgerIcon />
                            <span className='font-FiraSans font-normal text-[18px] leading-[110%] text-black flex items-center justify-center'>
                                {t("header.catalog")}
                            </span>
                        </button>
                        <div>
                            <nav className='text-black dark:text-white transition-all duration-300 flex items-center gap-7.5 font-FiraSans font-normal text-[16px] leading-[130%]'>
                                <button className="flex items-center gap-1">
                                    {t("header.aboutUs")}
                                    <span className='text-[#FEC80B]'>▼</span>
                                </button>
                                <button className="flex items-center gap-1">
                                    {t("header.media")}
                                    <span className='text-[#FEC80B]'>▼</span>
                                </button>
                                <Link to='/service' className=''>
                                    {t("header.service")}
                                </Link>
                                <Link to='/news' className=''>
                                    {t("header.news")}
                                </Link>
                                <Link to='/contacts' className=''>
                                    {t("header.contacts")}
                                </Link>
                            </nav>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center border border-[#FEC80B] rounded-[40px] px-3 py-1">
                            <input
                                type='search'
                                placeholder={t("header.searchPlaceholder")}
                                className='bg-transparent text-gray-900 placeholder:text-black dark:text-white dark:placeholder:text-white outline-none min-w-65'
                            />
                            <Images.searchIcon className='text-black dark:text-white transition-all duration-300' />
                        </div>
                        <div>
                            <Link
                                to='/cart'
                                className='text-black dark:text-white transition-all duration-300'
                            >
                                <Images.cartIcon />
                            </Link>
                        </div>
                        <div>
                            <Link
                                to='/favorites'
                                className='text-black dark:text-white transition-all duration-300'
                            >
                                <Images.favoritesIcon />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
