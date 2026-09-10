import { useTranslation } from "react-i18next";
import { contactdata } from "../data/contactData";

export default function ContactsCard() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  return (
    <>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-6">
          {contactdata.map((item, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={index * 100}
              key={item.id}
              className="h-100 border border-[#EBEBEB] dark:border-[#868585] rounded-lg shadow-xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="w-35 h-35 rounded-full overflow-hidden mx-auto border border-[#EBEBEB] dark:border-[#868585]">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="font-FiraSans font-medium text-[20px] md:text-[24px] leading-[120%] text-black dark:text-white mt-3 mb-1 text-center">
                  {item.name}
                </h2>
                <p className="font-FiraSans font-normal text-[16px] leading-[130%] text-[#A1A1A1] text-center">
                  {item.position[currentLang]}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <a
                  href={`tel:${item.tel}`}
                  className="font-FiraSans font-normal text-[16px] leading-[130%] text-black dark:text-white hover:text-gray-400 transition-all duration-300"
                >
                  {item.tel}
                </a>
                <a
                  href={`mailto:${item.email}`}
                  target="_blank"
                  className="font-FiraSans font-normal text-[16px] leading-[130%] text-black dark:text-white hover:text-gray-400 transition-all duration-300"
                >
                  {item.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
