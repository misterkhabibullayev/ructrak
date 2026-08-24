import { Trans, useTranslation } from "react-i18next";
import { Images } from "../utils/images";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

function RequestCall({ request, closeRequest }) {
  const { t } = useTranslation();
  const location = useLocation();
  const prevPathname = useRef(location.pathname);

  useEffect(() => {
    if (prevPathname.current !== location.pathname) {
      closeRequest();
      prevPathname.current = location.pathname;
    }
  }, [location.pathname, closeRequest]);
  return (
    <div className="fixed inset-0 z-52 flex items-center justify-center">
      <div onClick={closeRequest} className="fixed inset-0 bg-black/50" />
      <div className="w-125 relative z-10 bg-white dark:bg-slate-900 pt-13 px-5 pb-9 rounded-lg">
        <button
          onClick={closeRequest}
          aria-label={t("requestModal.close")}
          className="absolute top-2.25 right-2.25"
        >
          <Images.closeIcon className="text-black dark:text-white" />
        </button>
        <div className={`mb-13.25 ${request === "call" ? "block" : "hidden"}`}>
          <h2 className="font-FiraSans font-medium text-[32px] leading-[120%] text-black dark:text-white text-center mb-2">
            {t("requestModal.modalTitleZakaz")}
          </h2>
          <p className="font-FiraSans font-normal text-[16px] leading-[160%] text-black dark:text-white text-center">
            {t("requestModal.modalP")}
          </p>
        </div>
        <div className={`mb-11 ${request === "kp" ? "block" : "hidden"}`}>
          <h2 className="font-FiraSans font-medium text-[32px] leading-[120%] text-black dark:text-white text-center mb-2">
            {t("requestModal.modalTitleKommer")}
          </h2>
        </div>
        <div className={`mb-4 ${request === "variant" ? "block" : "hidden"}`}>
          <h2 className="font-FiraSans font-medium text-[32px] leading-[120%] text-black dark:text-white text-center">
            {t("requestModal.uvedam")}
          </h2>
        </div>
        <div
          className={`items-center ${request === "variant" ? "flex" : "hidden"}`}
        >
          <div className="w-28 h-20.5">
            <img
              src=""
              alt="stokda qolmagan mashina rasmi"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center justify-center flex-1 h-20.5 border border-black/50 dark:border-white/50">
            <div>title</div>
          </div>
        </div>
        <form action="" className="max-w-87.5 mx-auto">
          <div className="flex flex-col gap-6.25 mb-14">
            <div
              className={`flex flex-col ${request === "call" || request === "kp" ? "block" : "hidden"}`}
            >
              <label
                htmlFor="nameInput"
                className="font-FiraSans font-normal text-[14px] text-black dark:text-white mb-1"
              >
                {t("requestModal.inputLabel1")}
              </label>
              <input
                type="text"
                id="nameInput"
                placeholder={t("requestModal.inputPlacholder1")}
                className="py-2.75 px-3.25 outline-none border border-black/50 dark:border-white/50 rounded text-black dark:text-white placeholder:transition-all placeholder:duration-300 focus:placeholder-transparent focus:border-[#fec80b] focus:shadow-InputHover transition-all duration-300"
              />
              <span className="hidden font-FiraSans font-normal text-[14px] leading-[110%] text-[#FF3939]">
                {t("requestModal.inputError")}
              </span>
            </div>
            <div
              className={`flex flex-col ${request === "variant" || request === "kp" ? "block" : "hidden"}`}
            >
              <label
                htmlFor="emailInput"
                className="font-FiraSans font-normal text-[14px] text-black dark:text-white mb-1"
              >
                {t("requestModal.emailInputLabel")}
              </label>
              <input
                type="email"
                id="emailInput"
                placeholder="your@mail.com"
                className="py-2.75 px-3.25 outline-none border border-black/50 dark:border-white/50 rounded text-black dark:text-white placeholder:transition-all placeholder:duration-300 focus:placeholder-transparent focus:border-[#fec80b] focus:shadow-InputHover transition-all duration-300"
              />
              <span className="hidden font-FiraSans font-normal text-[14px] leading-[110%] text-[#FF3939]">
                {t("requestModal.inputError")}
              </span>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="phoneInput"
                className="font-FiraSans font-normal text-[14px] text-black dark:text-white mb-1"
              >
                {t("requestModal.inputLabel2")}
              </label>
              <input
                type="tel"
                id="phoneInput"
                placeholder="+998"
                className="py-2.75 px-3.25 outline-none border border-black/50 dark:border-white/50 rounded text-black dark:text-white placeholder:transition-all placeholder:duration-300 focus:placeholder-transparent focus:border-[#fec80b] focus:shadow-InputHover transition-all duration-300"
              />
              <span className="hidden font-FiraSans font-normal text-[14px] leading-[110%] text-[#FF3939]">
                {t("requestModal.inputError")}
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <input
                type="checkbox"
                defaultChecked
                id="chekedInput"
                className="custom-checkbox"
              />
              <label
                htmlFor="chekedInput"
                className="select-none whitespace-normal text-black dark:text-white font-FiraSans font-normal text-[14px] leading-[110%]"
              >
                <Trans
                  i18nKey="requestModal.agreeText"
                  components={[
                    <Link
                      key="privacy-link"
                      to="/privacy-policy"
                      className="text-blue-600 hover:text-blue-700 font-FiraSans font-normal text-[14px] leading-[110%]"
                    />,
                  ]}
                />
              </label>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex items-center justify-center p-4 bg-[#FEC80B] hover:bg-[#FFD43A] transition-all duration-300 rounded"
            >
              <span className={`${request === "call" ? "block" : "hidden"}`}>
                {t("requestModal.submitBtnCall")}
              </span>
              <span className={`${request === "kp" ? "block" : "hidden"}`}>
                {t("requestModal.submitBtnKp")}
              </span>
              <span className={`${request === "variant" ? "block" : "hidden"}`}>
                {t("requestModal.submitBtnVariant")}
              </span>
            </button>
          </div>
          <div
            className={`flex-col items-center m-5 ${request === "call" ? "flex" : "hidden"}`}
          >
            <div className="flex gap-0.5 dark:text-white transition-all duration-300">
              <span className="font-FiraSans font-normal text-[15px] leading-[110%] text-black dark:text-white whitespace-nowrap">
                {t("header.forRegions")}
              </span>
              <a
                href="tel:8 (800) 77-77-210"
                className="font-FiraSans font-normal text-[15px] leading-[110%] text-black dark:text-white whitespace-nowrap"
              >
                8 (800) 77-77-210
              </a>
            </div>
            <div className="flex items-end gap-0.5 dark:text-white transition-all duration-300">
              <span className="font-FiraSans font-normal text-[15px] leading-[110%] text-black dark:text-white whitespace-nowrap">
                {t("header.nizhnyNovgorod")}
              </span>
              <a
                href="tel:8 (831) 225-00-55"
                className="font-FiraSans font-normal text-[15px] leading-[110%] text-black dark:text-white whitespace-nowrap"
              >
                8 (831) 225-00-55
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default RequestCall;
