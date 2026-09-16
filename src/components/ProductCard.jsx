import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Images } from "../utils/images";
import RequestCall from "./RequestCallModal";

export default function ProductCard({
  item,
  handleProductOpen,
  setRequest,
  request,
  activeProduct,
  closeRequest,
  isListGrid,
}) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  return (
    <>
      <div
        key={item.id}
        className={`rounded-lg overflow-hidden p-0.5 bg-white dark:bg-slate-950 transition-all duration-300 ${!isListGrid ? "flex justify-between" : ""}`}
      >
        <div
          className={`aspect-4/3 overflow-hidden rounded-t-lg relative ${!isListGrid ? "w-[20%] rounded-lg aspect-square" : ""}`}
        >
          <Link to={item.slug}>
            <img
              src={item.media.mainImage}
              alt={item.title[currentLang]}
              className="w-full h-full object-cover"
            />
          </Link>
          <div
            className={`absolute top-0 left-0 ${item.inStock ? "hidden" : "flex"} w-full h-full items-center justify-center bg-white/65 dark:bg-black/65`}
          >
            <span className="font-FiraSans font-normal text-lg leading-[120%] text-black dark:text-white">
              {t("catFilPage.notAvailable")}
            </span>
          </div>
          <div
            className={`absolute top-1 right-1 ${item.inStock ? "flex" : "hidden"}`}
          >
            <button>
              <Images.favoritesIcon className="hover:scale-105" />
            </button>
          </div>
        </div>
        <div
          className={`py-4 px-3 ${!isListGrid ? "flex-1 flex justify-between" : ""}`}
        >
          <Link to={item.slug}>
            <h2 className="font-FiraSans font-normal text-base leading-[120%] text-black dark:text-white text-center xl:text-left line-clamp-2 min-h-10">
              {item.title[currentLang]}
            </h2>
          </Link>
          <p
            className={`flex items-center font-FiraSans font-medium text-base md:text-[22px] leading-[120%] text-black dark:text-white mt-2.5 md:mt-3.5 mb-2 md:mb-2.75 justify-center xl:justify-normal ${!isListGrid ? "hidden" : ""}`}
          >
            {item.price.isPriceOnRequest || !item.price.amount ? (
              t("recommendedSection.cena")
            ) : (
              <>
                {new Intl.NumberFormat().format(item.price.amount)}{" "}
                <Images.rubleIcon />
              </>
            )}
          </p>
          <div
            className={`flex-col md:flex-row justify-between items-center ${item.inStock ? "flex" : "hidden"} ${!isListGrid ? "flex-col md:flex-col! justify-center! gap-3!" : "md:flex-row"}`}
          >
            <p
              className={`flex items-center font-FiraSans font-medium text-base md:text-[22px] leading-[120%] text-black dark:text-white mt-2.5 md:mt-3.5 mb-2 md:mb-2.75 justify-center xl:justify-normal ${!isListGrid ? "flex" : "hidden"}`}
            >
              {item.price.isPriceOnRequest || !item.price.amount ? (
                t("recommendedSection.cena")
              ) : (
                <>
                  {new Intl.NumberFormat().format(item.price.amount)}{" "}
                  <Images.rubleIcon />
                </>
              )}
            </p>
            <div className={`flex items-center justify-between gap-3 pr-3 w-full`}>
              <Link
                to={item.slug}
                className="w-full text-center py-3.25 px-3.25 bg-[#FEC80B] rounded font-FiraSans font-normal text-base leading-[110%] text-black hover:bg-[#FFD43A] transition-all duration-300"
              >
                {t("recommendedSection.podrobne")}
              </Link>
              <button className={`${!isListGrid ? "hidden" : "block"}`}>
                <Images.cartIcon className="text-black dark:text-white" />
              </button>
            </div>
            <button
              onClick={() => setRequest("kp")}
              className="text-black dark:text-white flex items-center gap-1 font-FiraSans font-normal text-base lg:text-lg mt-3 md:mt-0 whitespace-nowrap"
            >
              {t("recommendedSection.poluchit")}
              <Images.arrowIcon className="hidden min-[456px]:block" />
            </button>
          </div>
          <div className={`${item.inStock ? "hidden" : "block"}`}>
            <button
              onClick={() => handleProductOpen(item.id)}
              className="flex gap-2 items-center justify-center w-full py-3.25 px-3.25 bg-[#FEC80B] rounded font-FiraSans font-normal text-base leading-[110%] text-black hover:bg-[#FFD43A] transition-all duration-300"
            >
              {t("catFilPage.someone")}
              <Images.mailIcon />
            </button>
          </div>
        </div>
      </div>
      <RequestCall
        request={request}
        activeProduct={activeProduct}
        closeRequest={closeRequest}
      />
    </>
  );
}
