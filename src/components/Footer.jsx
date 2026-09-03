import { useTranslation } from "react-i18next";
import RequestCall from "./RequestCallModal";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MaxRuImage from "../Image/max-messenger-sign-logo.svg";
import TelegrmaImage from "../Image/telegram.svg";
import VKImage from "../Image/VK_com-logo.svg";
import RuTubeImage from "../Image/Rutube_icon.png";
import YouTubeImage from "../Image/YouTube_full-color_icon.png";
import DzenImage from "../Image/Yandex_Zen_logo_icon.png";
import { Images } from "../utils/images";
import { Link } from "react-router-dom";

export default function Footer() {
  const { t } = useTranslation();
  const [request, setRequest] = useState(null);
  const closeRequest = () => setRequest(null);

  const [openAbout, setOpenAbout] = useState(false);
  const [openMedia, setOpenMedia] = useState(false);
  return (
    <>
      <footer className="bg-black pt-15.5 pb-9.75">
        <div className="container1">
          <div className="grid grid-cols-1 md:grid-cols-13 mb-7.5">
            <div className="col-span-5 text-white">
              <div className="flex flex-col gap-4 mb-8.5 md:mb-0">
                <div className="flex flex-col gap-2">
                  <p>
                    {t("footer.phoneFax")}
                    {": "}
                    <Link to="tel:8 (831) 225-00-55">8 (831) 225-00-55</Link>
                  </p>
                  <p>
                    {t("footer.email")}
                    {": "}
                    <Link to="mailto:info@rtrf.ru">info@rtrf.ru</Link>
                  </p>
                  <p>{t("footer.address")}</p>
                </div>
                <div>
                  <button
                    onClick={() => setRequest("call")}
                    aria-label={t("footer.requestCallBtn")}
                    className="py-3.25 px-7.5 bg-[#FEC80B] text-black rounded hover:bg-[#FFD43A] transition-all duration-300 font-FiraSans font-normal text-[16px] leading-[110%]"
                  >
                    {t("footer.requestCallBtn")}
                  </button>
                  {request && (
                    <RequestCall
                      request={request}
                      closeRequest={closeRequest}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="col-span-6 mb-4 md:mb-0">
              <div>
                <button
                  onClick={() => setOpenAbout(!openAbout)}
                  className="md:mb-8 text-white opacity-90 flex items-center"
                >
                  {t("footer.aboutTitle")}
                  <span
                    className={`md:hidden transition-transform duration-500 ${
                      openAbout ? "rotate-180" : ""
                    }`}
                  >
                    <Images.downIcon />
                  </span>
                </button>

                <div className="hidden md:block">
                  <ul className="md:columns-2 md:gap-x-10">
                    <li className="mb-4 break-inside-avoid">
                      <Link
                        to="/about"
                        className="font-FiraSans font-normal text-[14px] leading-[110%] text-white opacity-90 hover:opacity-100 transition-all duration-300"
                      >
                        {t("footer.aboutCompany")}
                      </Link>
                    </li>
                    <li className="mb-4 break-inside-avoid">
                      <Link
                        to="/news"
                        className="font-FiraSans font-normal text-[14px] leading-[110%] text-white opacity-90 hover:opacity-100 transition-all duration-300"
                      >
                        {t("footer.news")}
                      </Link>
                    </li>
                    <li className="mb-4 break-inside-avoid">
                      <Link
                        to="/partners"
                        className="font-FiraSans font-normal text-[14px] leading-[110%] text-white opacity-90 hover:opacity-100 transition-all duration-300"
                      >
                        {t("footer.partners")}
                      </Link>
                    </li>
                    <li className="mb-4 break-inside-avoid">
                      <Link
                        to="/production"
                        className="font-FiraSans font-normal text-[14px] leading-[110%] text-white opacity-90 hover:opacity-100 transition-all duration-300"
                      >
                        {t("footer.production")}
                      </Link>
                    </li>
                    <li className="mb-4 break-inside-avoid">
                      <Link
                        to="/suppliers"
                        className="font-FiraSans font-normal text-[14px] leading-[110%] text-white opacity-90 hover:opacity-100 transition-all duration-300"
                      >
                        {t("footer.suppliers")}
                      </Link>
                    </li>
                    <li className="mb-4 break-inside-avoid">
                      <Link
                        to="/reviews"
                        className="font-FiraSans font-normal text-[14px] leading-[110%] text-white opacity-90 hover:opacity-100 transition-all duration-300"
                      >
                        {t("footer.reviews")}
                      </Link>
                    </li>
                    <li className="mb-4 break-inside-avoid">
                      <Link
                        to="/cert"
                        className="font-FiraSans font-normal text-[14px] leading-[110%] text-white opacity-90 hover:opacity-100 transition-all duration-300"
                      >
                        {t("footer.certificates")}
                      </Link>
                    </li>
                    <li className="mb-4 break-inside-avoid">
                      <Link
                        to="/vacancies"
                        className="font-FiraSans font-normal text-[14px] leading-[110%] text-white opacity-90 hover:opacity-100 transition-all duration-300"
                      >
                        {t("footer.vacancies")}
                      </Link>
                    </li>
                    <li className="mb-4 break-inside-avoid">
                      <Link
                        to="/leasing"
                        className="font-FiraSans font-normal text-[14px] leading-[110%] text-white opacity-90 hover:opacity-100 transition-all duration-300"
                      >
                        {t("footer.creditLeasing")}
                      </Link>
                    </li>
                    <li className="mb-4 break-inside-avoid">
                      <Link
                        to="/service"
                        className="font-FiraSans font-normal text-[14px] leading-[110%] text-white opacity-90 hover:opacity-100 transition-all duration-300"
                      >
                        {t("footer.service")}
                      </Link>
                    </li>
                    <li className="mb-4 break-inside-avoid">
                      <Link
                        to="/remont"
                        className="font-FiraSans font-normal text-[14px] leading-[110%] text-white opacity-90 hover:opacity-100 transition-all duration-300"
                      >
                        {t("footer.repair")}
                      </Link>
                    </li>
                    <li className="mb-4 break-inside-avoid">
                      <Link
                        to="/contacts"
                        className="font-FiraSans font-normal text-[14px] leading-[110%] text-white opacity-90 hover:opacity-100 transition-all duration-300"
                      >
                        {t("footer.contacts")}
                      </Link>
                    </li>
                    <li className="mb-4 break-inside-avoid">
                      <Link
                        to="/stati"
                        className="font-FiraSans font-normal text-[14px] leading-[110%] text-white opacity-90 hover:opacity-100 transition-all duration-300"
                      >
                        {t("footer.articles")}
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="md:hidden">
                  <AnimatePresence initial={false}>
                    {openAbout && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <ul className="pt-4 flex flex-col gap-4">
                          <li>
                            <Link
                              to="/about"
                              className="font-FiraSans font-normal text-[14px] leading-[110%] text-white opacity-90 hover:opacity-100 transition-all duration-300"
                            >
                              {t("footer.aboutCompany")}
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/news"
                              className="font-FiraSans font-normal text-[14px] leading-[110%] text-white opacity-90 hover:opacity-100 transition-all duration-300"
                            >
                              {t("footer.news")}
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/partners"
                              className="font-FiraSans font-normal text-[14px] leading-[110%] text-white opacity-90 hover:opacity-100 transition-all duration-300"
                            >
                              {t("footer.partners")}
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/production"
                              className="font-FiraSans font-normal text-[14px] leading-[110%] text-white opacity-90 hover:opacity-100 transition-all duration-300"
                            >
                              {t("footer.production")}
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/suppliers"
                              className="font-FiraSans font-normal text-[14px] leading-[110%] text-white opacity-90 hover:opacity-100 transition-all duration-300"
                            >
                              {t("footer.suppliers")}
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/reviews"
                              className="font-FiraSans font-normal text-[14px] leading-[110%] text-white opacity-90 hover:opacity-100 transition-all duration-300"
                            >
                              {t("footer.reviews")}
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/cert"
                              className="font-FiraSans font-normal text-[14px] leading-[110%] text-white opacity-90 hover:opacity-100 transition-all duration-300"
                            >
                              {t("footer.certificates")}
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/vacancies"
                              className="font-FiraSans font-normal text-[14px] leading-[110%] text-white opacity-90 hover:opacity-100 transition-all duration-300"
                            >
                              {t("footer.vacancies")}
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/leasing"
                              className="font-FiraSans font-normal text-[14px] leading-[110%] text-white opacity-90 hover:opacity-100 transition-all duration-300"
                            >
                              {t("footer.creditLeasing")}
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/service"
                              className="font-FiraSans font-normal text-[14px] leading-[110%] text-white opacity-90 hover:opacity-100 transition-all duration-300"
                            >
                              {t("footer.service")}
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/remont"
                              className="font-FiraSans font-normal text-[14px] leading-[110%] text-white opacity-90 hover:opacity-100 transition-all duration-300"
                            >
                              {t("footer.repair")}
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/contacts"
                              className="font-FiraSans font-normal text-[14px] leading-[110%] text-white opacity-90 hover:opacity-100 transition-all duration-300"
                            >
                              {t("footer.contacts")}
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/stati"
                              className="font-FiraSans font-normal text-[14px] leading-[110%] text-white opacity-90 hover:opacity-100 transition-all duration-300"
                            >
                              {t("footer.articles")}
                            </Link>
                          </li>
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <div className="col-span-2 mb-4 md:mb-0">
              <button
                onClick={() => setOpenMedia(!openMedia)}
                className="md:mb-8 text-white opacity-90 flex items-center"
              >
                {t("footer.mediaTitle")}
                <span
                  className={`md:hidden transition-transform duration-500 ${
                    openMedia ? "rotate-180" : ""
                  }`}
                >
                  <Images.downIcon />
                </span>
              </button>

              <div className="hidden md:block">
                <ul className="flex flex-col gap-4">
                  <li>
                    <Link
                      to="/photogallery"
                      className="font-FiraSans font-normal text-[14px] leading-[110%] text-white opacity-90 hover:opacity-100 transition-all duration-300"
                    >
                      {t("footer.photoGallery")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/video"
                      className="font-FiraSans font-normal text-[14px] leading-[110%] text-white opacity-90 hover:opacity-100 transition-all duration-300"
                    >
                      {t("footer.video")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/promo"
                      className="font-FiraSans font-normal text-[14px] leading-[110%] text-white opacity-90 hover:opacity-100 transition-all duration-300"
                    >
                      {t("footer.promoMaterials")}
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="md:hidden">
                <AnimatePresence initial={false}>
                  {openMedia && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <ul className="pt-4 flex flex-col gap-4">
                        <li>
                          <Link
                            to="/photogallery"
                            className="font-FiraSans font-normal text-[14px] leading-[110%] text-white opacity-90 hover:opacity-100 transition-all duration-300"
                          >
                            {t("footer.photoGallery")}
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/video"
                            className="font-FiraSans font-normal text-[14px] leading-[110%] text-white opacity-90 hover:opacity-100 transition-all duration-300"
                          >
                            {t("footer.video")}
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/promo"
                            className="font-FiraSans font-normal text-[14px] leading-[110%] text-white opacity-90 hover:opacity-100 transition-all duration-300"
                          >
                            {t("footer.promoMaterials")}
                          </Link>
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
            <div className="font-FiraSans font-normal text-[14px] leading-[100%] order-1 md:order-0">
              <p className="text-white opacity-90 mb-2">
                2009 - 2026 © Rus - Trucks
              </p>
              <p className="text-white opacity-90 max-w-100">
                {t("footer.disclaimer")}
              </p>
            </div>
            <div className="flex items-center gap-3 mb-10 md:mb-0 md:justify-end lg:justify-start">
              <Link
                to="https://max.ru/"
                target="_blank"
                className="text-white w-8.75 h-8.75"
              >
                <img src={MaxRuImage} alt="sl" className="w-8.75" />
              </Link>
              <Link to="https://t.me/" target="_blank" className="text-white">
                <img src={TelegrmaImage} alt="sl" className="w-8.75" />
              </Link>
              <Link to="https://vk.com/" target="_blank" className="text-white">
                <img src={VKImage} alt="sl" className="w-8.75" />
              </Link>
              <Link
                to="https://rutube.ru/"
                target="_blank"
                className="text-white"
              >
                <img src={RuTubeImage} alt="sl" className="w-8.75" />
              </Link>
              <Link
                to="https://youtube.com/"
                target="_blank"
                className="text-white"
              >
                <img src={YouTubeImage} alt="sl" className="w-8.75" />
              </Link>
              <Link
                to="https://dzen.ru/"
                target="_blank"
                className="text-white"
              >
                <img src={DzenImage} alt="sl" className="w-8.75" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
