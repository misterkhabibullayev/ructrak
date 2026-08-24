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
      <div className="relative z-10 bg-white dark:bg-slate-900 pt-13 px-5 pb-9 rounded-lg">
        <button
          onClick={closeRequest}
          aria-label={t("requestModal.close")}
          className="absolute top-2.25 right-2.25"
        >
          <Images.closeIcon className="text-black dark:text-white" />
        </button>
        <div className={request === "call" ? "block" : "hidden"}>
          <h2>{t("requestModal.modalTitleZakaz")}</h2>
          <p>{t("requestModal.modalP")}</p>
        </div>
        <div className={request === "kp" ? "block" : "hidden"}>
          <h2>{t("requestModal.modalTitleKommer")}</h2>
        </div>
        <div className={request === "variant" ? "block" : "hidden"}>
          <h2>{t("requestModal.uvedam")}</h2>
        </div>
        <div className={request === "variant" ? "block" : "hidden"}>
          <div>
            <img src="" alt="stokda qolmagan mashina rasmi" />
          </div>
          <div>title</div>
        </div>
        <form action="">
          <div className="flex flex-col gap-6.25 mb-14">
            <div
              className={`${request === "call" || request === "kp" ? "block" : "hidden"}`}
            >
              <label htmlFor="nameInput">{t("requestModal.inputLabel1")}</label>
              <input
                type="text"
                id="nameInput"
                placeholder={t("requestModal.inputPlacholder1")}
              />
            </div>
            <div
              className={`${request === "variant" || request === "kp" ? "block" : "hidden"}`}
            >
              <label htmlFor="emailInput">
                {t("requestModal.emailInputLabel")}
              </label>
              <input type="email" id="emailInput" placeholder="your@mail.com" />
            </div>
            <div className="">
              <label htmlFor="phoneInput">
                {t("requestModal.inputLabel2")}
              </label>
              <input type="tel" id="phoneInput" placeholder="+998" />
            </div>
            <div>
              <input type="checkbox" />
              <label htmlFor="">
                <Trans
                  i18nKey="requestModal.agreeText"
                  components={[
                    <Link
                      key="privacy-link"
                      to="/privacy-policy"
                      className="text-blue-600"
                    />,
                  ]}
                />
              </label>
            </div>
          </div>
          <div>
            <button type="submit" className="w-full flex items-center justify-center p-4 bg-[#FEC80B] hover:bg-[#FFD43A] transition-all duration-300 rounded">
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
