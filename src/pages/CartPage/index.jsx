import { useTranslation } from "react-i18next";
import { useCartStore } from "../../store/useCartStore";
import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../../components/Breadcrumbs";
import { Link } from "react-router-dom";
import FeedbackForm from "../../components/FeedbackForm";
import { Images } from "../../utils/images";
import { useState } from "react";
import RequestCall from "../../components/RequestCallModal";

function CartPage() {
  const { cart } = useCartStore();
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [request, setRequest] = useState(null);
  const closeRequest = () => setRequest(null);

  const { toggleCart } = useCartStore();

  return (
    <div className="bg-[#f9f9f9] dark:bg-slate-900">
      <Helmet>
        <title>{t("metaTitleDescriptions.cart")}</title>
      </Helmet>
      <div className="container1">
        <div>
          <Breadcrumbs />
        </div>
        {cart.length === 0 ? (
          <div>
            <h2 className="font-FiraSans font-normal text-lg md:text-2xl leading-[120%] text-black dark:text-white whitespace-pre-line">
              {t("cartPage.notCart")}
            </h2>
            <div className="flex items-center gap-6 my-14">
              <Link
                to={"/"}
                className="inline-block py-2.75 px-7.5 border-2 border-[#FEC80B] bg-transparent rounded text-black dark:text-white font-FiraSans font-normal text-base leading-[110%] hover:bg-[#FEC80B] hover:text-black transition-colors duration-300"
              >
                {t("cartPage.home")}
              </Link>
              <Link
                to={"/catalog"}
                className="inline-block py-2.75 px-7.5 border-2 border-[#FEC80B] bg-[#FEC80B] hover:bg-[#FFD43A] transition-colors duration-300 rounded text-black font-FiraSans font-normal text-base leading-[110%]"
              >
                {t("cartPage.catalog")}
              </Link>
            </div>
          </div>
        ) : (
          <div className="pb-10">
            <h1 className="font-FiraSans font-medium text-2xl md:text-[32px] leading-[120%] text-black dark:text-white mt-8 md:mt-2 mb-8">
              {t("breadCrumbs.cart")}
            </h1>
            <div className="grid grid-cols-1 gap-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-white dark:bg-slate-950 pr-7.5"
                >
                  <div className="aspect-4/3 overflow-hidden w-[20%]">
                    <Link to={item.slug}>
                      <img
                        loading="lazy"
                        src={item.media.mainImage}
                        alt={item.title[currentLang]}
                        className="w-full h-full object-cover"
                      />
                    </Link>
                  </div>
                  <div className="pl-7.5 pr-20 flex-1 flex items-center justify-between gap-20">
                    <div className="flex-1">
                      <Link to={item.slug}>
                        <h2 className="font-FiraSans text-base leading-[120%] text-black dark:text-white text-center xl:text-left line-clamp-2 min-h-10 mt-0! md:text-[22px] font-medium mb-8">
                          {item.title[currentLang]}
                        </h2>
                      </Link>
                      <div className="text-[#a1a1a1] flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                          <p className="font-FiraSans font-normal text-sm leading-[110%] ">
                            {item.specifications?.[0]?.name2?.[currentLang]}
                            {console.log(
                              item.specifications?.[0]?.name2?.[currentLang],
                            )}
                          </p>
                          <div className="border-b border-dashed border-[#a1a1a1] flex-1 h-2 mx-2"></div>
                          <p className="font-FiraSans font-normal text-sm leading-[110%] ">
                            {item.specifications?.[0]?.value2?.[currentLang]}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center border border-[#a2a2a2] rounded ">
                      <button className="text-[#a2a2a2] w-8 h-8 m-1 font-FiraSans text-2xl font-medium leading-[110%]">
                        -
                      </button>
                      <span className="border-l border-r border-[#a2a2a2] px-1">
                        <input
                          type="text"
                          value={1}
                          maxLength={4}
                          className="w-8 h-8 text-center text-[#a2a2a2] outline-none font-FiraSans text-base font-medium leading-[110%]"
                        />
                      </span>
                      <button className="text-[#a2a2a2] w-8 h-8 m-1 font-FiraSans text-2xl font-medium leading-[110%]">
                        +
                      </button>
                    </div>
                  </div>
                  <div
                    className={`flex-col justify-between items-center ${item.inStock ? "flex" : "hidden"}  justify-center! gap-3!" : "md:flex-row"}`}
                  >
                    {!item.price?.isPriceOnRequest &&
                      item.price?.amount > 0 && (
                        <p className="flex items-center font-FiraSans font-medium text-base md:text-[22px] leading-[120%] text-black dark:text-white whitespace-nowrap mt-2.5 md:mt-3.5 mb-2 md:mb-2.75 justify-center xl:justify-normal">
                          {new Intl.NumberFormat().format(item.price.amount)}{" "}
                          <Images.rubleIcon className="ml-1" />
                        </p>
                      )}
                    <div className="flex items-center justify-between gap-3 w-full pr-0">
                      <button
                        onClick={() => setRequest("kp")}
                        className="w-full text-center py-3.25 px-13 rounded bg-[#FEC80B] font-FiraSans font-normal text-base leading-[110%] text-black hover:bg-[#FFD43A] transition-all duration-300 flex items-center gap-2"
                      >
                        {t("recommendedSection.poluchit")}
                        <Images.arrowIcon />
                      </button>
                    </div>
                    <button
                      onClick={() => toggleCart(item)}
                      className="text-[#a2a2a2] flex items-center gap-1 font-FiraSans font-normal text-base lg:text-lg mt-3 whitespace-nowrap"
                    >
                      {t("cartPage.delete")}
                      <Images.deleteIcon />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <RequestCall
        request={request}
        setRequest={setRequest}
        closeRequest={closeRequest}
      />
      <FeedbackForm />
    </div>
  );
}
export default CartPage;
