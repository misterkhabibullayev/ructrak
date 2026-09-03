import { useTranslation } from "react-i18next";

export default function ContactPInfo() {
  const { t } = useTranslation();
  return (
    <>
      <section className="mb-16 md:mb-30">
        <div>
          <h1 className="font-FiraSans font-medium text-[24px] md:text-[32px] leading-[130%] text-black dark:text-white mb-8 pt-4">{t("contactPage.title")}</h1>
          <div className="flex flex-col md:flex-row items-center">
            <div className="py-4 px-2 md:p-8 bg-[#FEC80B] w-full md:w-auto">
              <address className="max-w-70 font-FiraSans font-normal text-[16px] md:text-[18px] leading-[150%] text-black not-italic mb-10">
                {t("contactPage.adress")}
              </address>
              <address className="not-italic flex flex-col mb-10">
                <span className="">
                  <b className="font-FiraSans font-bold text-[16px] md:text-[18px] leading-[150%]">
                    {t("contactPage.tel1")}
                  </b>{" "}
                  <a
                    href="tel:8 (831) 225-00-55"
                    className="font-FiraSans font-normal text-[16px] md:text-[18px] leading-[150%]"
                  >
                    8 (831) 225-00-55
                  </a>
                </span>
                <span>
                  <b className="font-FiraSans font-bold text-[16px] md:text-[18px] leading-[150%]">
                    {t("contactPage.tel2")}
                  </b>{" "}
                  <a
                    href="tel:8 (800)-511-05-25"
                    className="font-FiraSans font-normal text-[16px] md:text-[18px] leading-[150%]"
                  >
                    8 (800)-511-05-25
                  </a>
                </span>
                <span>
                  <b className="font-FiraSans font-bold text-[16px] md:text-[18px] leading-[150%]">
                    {t("contactPage.email")}
                  </b>{" "}
                  <a
                    href="mailto:info@rtrf.ru"
                    className="font-FiraSans font-normal text-[16px] md:text-[18px] leading-[150%]"
                  >
                    info@rtrf.ru
                  </a>
                </span>
              </address>
              <div>
                <p className="font-FiraSans font-bold text-[16px] md:text-[18px] leading-[150%]">
                  {t("contactPage.remonplan")}
                </p>
                <a
                  href="tel:8 (831) 225-00-55"
                  className="font-FiraSans font-normal text-[16px] md:text-[18px] leading-[150%]"
                >
                  8 (831) 225-00-55
                </a>
              </div>
            </div>
            <div className="flex-1 w-full md:w-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17837.237299501296!2d60.6161839557784!3d41.5578149603997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dfc9c80878ac9b%3A0xf6030e79bea9e3b9!2sLimon%20IT%20kompaniyasi!5e1!3m2!1suz!2s!4v1788457882337!5m2!1suz!2s"
                // width={600}
                // height={333}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="border-0 w-full h-63.25 md:h-83.25"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
