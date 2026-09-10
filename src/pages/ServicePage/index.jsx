import { useTranslation } from "react-i18next";
import Breadcrumbs from "../../components/Breadcrumbs";
import { contactdata } from "../../data/contactData";
import FeedbackForm from "../../components/FeedbackForm";

function ServicePage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const currentContact = contactdata[0];
  return (
    <>
      <div className="container1">
        <div>
          <Breadcrumbs />
        </div>
        <h2 className="font-FiraSans font-medium text-2xl md:text-3xl leading-[120%] mb-8 mt-8 md:mt-2 text-black dark:text-white">
          {t("servicePage.title")}
        </h2>
        <div className="lg:flex gap-34">
          <div className="">
            <div className="flex gap-10 mb-10">
              <p className="font-FiraSans font-normal text-base md:text-lg leading-[120%] text-black dark:text-white">
                {t("servicePage.text")}
              </p>
              <div className="hidden md:block lg:hidden">
                {currentContact && (
                  <div
                    data-aos="fade-up"
                    key={currentContact.id}
                    className="h-90 border border-[#EBEBEB] dark:border-[#868585] bg-white dark:bg-slate-950 rounded-lg shadow-xl p-6 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-35 h-35 rounded-full overflow-hidden mx-auto border border-[#EBEBEB] dark:border-[#868585]">
                        <img
                          src={currentContact.img}
                          alt={currentContact.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h2 className="font-FiraSans font-medium text-[20px] md:text-[24px] leading-[120%] text-black dark:text-white mt-3 mb-1 text-center">
                        {currentContact.name}
                      </h2>
                      <p className="font-FiraSans font-normal text-[16px] leading-[130%] text-[#A1A1A1] text-center">
                        {currentContact.position[currentLang]}
                      </p>
                    </div>
                    <div className="flex flex-col currentContacts-center">
                      <a
                        href={`tel:${currentContact.tel}`}
                        className="font-FiraSans font-normal text-[16px] leading-[130%] text-black dark:text-white hover:text-gray-400 transition-all duration-300 text-center"
                      >
                        {currentContact.tel}
                      </a>
                      <a
                        href={`mailto:${currentContact.email}`}
                        target="_blank"
                        className="font-FiraSans font-normal text-[16px] leading-[130%] text-black dark:text-white hover:text-gray-400 transition-all duration-300"
                      >
                        {currentContact.email}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div>
              <h2 className="font-FiraSans font-medium text-2xl md:text-3xl leading-[120%] mb-8 text-black dark:text-white">
                {t("servicePage.asks")}
              </h2>
              <ul className="lg:pl-8 flex flex-col gap-6 mb-14">
                <li className="flex gap-5">
                  <span className="min-w-9.5 h-9.5 bg-[#FEC80B] rounded-full flex items-center justify-center font-FiraSans font-medium text-2xl leading-[100%] text-black">
                    1
                  </span>
                  <span className="font-FiraSans font-normal text-lg leading-[150%] text-black dark:text-white">
                    {t("servicePage.li1")}
                  </span>
                </li>
                <li className="flex gap-5">
                  <span className="min-w-9.5 h-9.5 bg-[#FEC80B] rounded-full flex items-center justify-center font-FiraSans font-medium text-2xl leading-[100%] text-black">
                    2
                  </span>
                  <span className="font-FiraSans font-normal text-lg leading-[150%] text-black dark:text-white">
                    {t("servicePage.li2")}
                  </span>
                </li>
                <li className="flex gap-5">
                  <span className="min-w-9.5 h-9.5 bg-[#FEC80B] rounded-full flex items-center justify-center font-FiraSans font-medium text-2xl leading-[100%] text-black">
                    3
                  </span>
                  <span className="font-FiraSans font-normal text-lg leading-[150%] text-black dark:text-white">
                    {t("servicePage.li3")}
                  </span>
                </li>
              </ul>
              <p className="font-FiraSans font-normal text-lg leading-[150%] text-black dark:text-white mb-8.75">
                {t("servicePage.text2")}
              </p>
              <p className="font-FiraSans font-normal text-lg leading-[150%] text-black dark:text-white mb-14 md:mb-30">
                {t("servicePage.text3")}
              </p>
              <div className="block md:hidden mb-20">
                {currentContact && (
                  <div
                    data-aos="fade-up"
                    key={currentContact.id}
                    className="h-50 border border-[#EBEBEB] dark:border-[#868585] bg-white dark:bg-slate-950 rounded-lg shadow-xl p-6 flex flex-col justify-between"
                  >
                    <div>
                      <h2 className="font-FiraSans font-medium text-[20px] md:text-[24px] leading-[120%] text-black dark:text-white mt-3 mb-1">
                        {currentContact.name}
                      </h2>
                      <p className="font-FiraSans font-normal text-[16px] leading-[130%] text-[#A1A1A1]">
                        {currentContact.position[currentLang]}
                      </p>
                    </div>
                    <div className="flex flex-col currentContacts-center">
                      <a
                        href={`tel:${currentContact.tel}`}
                        className="font-FiraSans font-normal text-[16px] leading-[130%] text-black dark:text-white hover:text-gray-400 transition-all duration-300"
                      >
                        {currentContact.tel}
                      </a>
                      <a
                        href={`mailto:${currentContact.email}`}
                        target="_blank"
                        className="font-FiraSans font-normal text-[16px] leading-[130%] text-black dark:text-white hover:text-gray-400 transition-all duration-300"
                      >
                        {currentContact.email}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            {currentContact && (
              <div
                data-aos="fade-up"
                key={currentContact.id}
                className="h-90 border border-[#EBEBEB] dark:border-[#868585] bg-white dark:bg-slate-950 rounded-lg shadow-xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="w-35 h-35 rounded-full overflow-hidden mx-auto border border-[#EBEBEB] dark:border-[#868585]">
                    <img
                      src={currentContact.img}
                      alt={currentContact.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="font-FiraSans font-medium text-[20px] md:text-[24px] leading-[120%] text-black dark:text-white mt-3 mb-1 text-center">
                    {currentContact.name}
                  </h2>
                  <p className="font-FiraSans font-normal text-[16px] leading-[130%] text-[#A1A1A1] text-center">
                    {currentContact.position[currentLang]}
                  </p>
                </div>
                <div className="flex flex-col currentContacts-center">
                  <a
                    href={`tel:${currentContact.tel}`}
                    className="font-FiraSans font-normal text-[16px] leading-[130%] text-black dark:text-white hover:text-gray-400 transition-all duration-300 text-center"
                  >
                    {currentContact.tel}
                  </a>
                  <a
                    href={`mailto:${currentContact.email}`}
                    target="_blank"
                    className="font-FiraSans font-normal text-[16px] leading-[130%] text-black dark:text-white hover:text-gray-400 transition-all duration-300"
                  >
                    {currentContact.email}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
        <FeedbackForm />
    </>
  );
}
export default ServicePage;
