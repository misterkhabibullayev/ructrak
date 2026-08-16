import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Images } from "../utils/images";
import LanguageThemeToggle from "./LanguageThemeToggle";
import { HeaderBottom } from "./HeaderBottom";

function Header() {
    const { t } = useTranslation();

    return (
        <header className='py-3.5 dark:bg-slate-950 transition-all duration-300'>
            <div className='w-full container1'>
                <div className='flex items-center justify-between'>
                    <div>
                        <Link to='/' className='flex items-center gap-2.5'>
                            <Images.logoImage className="text-black dark:text-white transition-all duration-300" />
                            <div className='w-0.5 h-5.75 bg-[#FEC80B]'></div>
                            <p className='font-FiraSans font-normal text-[14px] leading-[110%] text-[#000000] max-w-48 dark:text-white transition-all duration-300'>
                                {t("header.tagline")}
                            </p>
                        </Link>
                    </div>
                    <div className="flex items-center gap-8">
                        <div>
                            <div className="flex items-center justify-end">
                                <button className='cursor-pointer dark:text-white transition-all duration-300'>
                                    {t("header.workTime")}{" "}
                                    <span className='text-[#FEC80B]'>▼</span>
                                </button>
                            </div>
                            <p className="font-FiraSans font-normal text-[15px] leading-[110%] text-[#A1A1A1]">{t("header.address")}</p>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="flex flex-col items-end">
                                <div className="flex items-end gap-0.5 dark:text-white transition-all duration-300">
                                    <span>{t("header.forRegions")}</span>
                                    <a href='tel:8 (800) 77-77-210'>
                                        8 (800) 77-77-210
                                    </a>
                                </div>
                                <div className="flex items-end gap-0.5 dark:text-white transition-all duration-300">
                                    <span>{t("header.nizhnyNovgorod")}</span>
                                    <a href='tel:8 (831) 225-00-55'>
                                        8 (831) 225-00-55
                                    </a>
                                </div>
                            </div>
                            <div className="">
                                <LanguageThemeToggle />
                                
                            </div>
                            <div>
                                <button className='w-11.5 h-11.5 flex items-center justify-center bg-[#FEC80B] rounded-full'>
                                    <Images.telephoneIcon />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-px bg-[#FEC80B] mt-2.5 mb-4">

            </div>
            <HeaderBottom />
        </header>
    );
}
export default Header;
