import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useBreadcrumbStore } from "../../store/useBreadcrumbStore";
import Breadcrumbs from "../../components/Breadcrumbs";
import { useProductStore } from "../../store/useProductStore";
import { Images } from "../../utils/images";
import { useCartStore } from "../../store/useCartStore";
import RequestCall from "../../components/RequestCallModal";
import FeedbackForm from "../../components/FeedbackForm";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

function ProductDetailes() {
  const { detailes } = useParams();
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "uz";
  const { setDynamicName } = useBreadcrumbStore();
  const products = useProductStore((state) => state.products);
  const fetchProducts = useProductStore((state) => state.fetchProducts);
  const { toggleCart } = useCartStore();
  const [request, setRequest] = useState(null);
  const closeRequest = () => setRequest(null);

  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {});
    return () => {
      Fancybox.destroy();
    };
  }, []);

  useEffect(() => {
    if (products.length === 0 && fetchProducts) {
      fetchProducts();
    }
  }, [products.length, fetchProducts]);

  const currentProduct = products.find((item) => item.slug === detailes);
  const productTitle = currentProduct?.title?.[currentLang];

  useEffect(() => {
    if (productTitle) {
      setDynamicName(productTitle);
    }
    return () => setDynamicName("");
  }, [productTitle, setDynamicName]);

  if (products.length === 0) {
    return (
      <div className="flex justify-center items-center py-20 text-black dark:text-white">
        <Images.noDataIcon className="text-[#a2a2a2]" />
        <span>{t("noData")}</span>
      </div>
    );
  }

  const handleScrollToFeature = (e) => {
    e.preventDefault();
    const element = document.getElementById("feature");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <>
      <div className="container1">
        <div>
          <Breadcrumbs />
        </div>
        <div className="mb-6">
          <h1 className="font-FiraSans font-medium text-2xl md:text-[32px] leading-[118%] text-black dark:text-white mb-2 pt-2">
            {productTitle.toUpperCase()}
          </h1>
        </div>
        <div>
          {currentProduct ? (
            <div>
              <div className="flex flex-col lg:flex-row items-start gap-5.5 pb-10">
                <div className="mt-4 w-full lg:w-[70%] relative">
                  <div className="flex overflow-x-hidden snap-x snap-mandatory [&::-webkit-scrollbar]:hidden rounded-2xl">
                    {currentProduct?.media?.mainImage && (
                      <a
                        href={currentProduct.media.mainImage}
                        data-fancybox="gallery"
                        className="min-w-full shrink-0 snap-start"
                      >
                        <img
                          src={currentProduct.media.mainImage}
                          alt={productTitle}
                          className="w-full h-75 md:h-125 object-cover"
                        />
                      </a>
                    )}
                    {currentProduct?.media?.gallery?.map((item, index) => (
                      <a
                        key={index}
                        href={item}
                        data-fancybox="gallery"
                        className="min-w-full shrink-0 snap-start"
                      >
                        <img
                          src={item}
                          alt={`${productTitle} - ${index + 1}`}
                          className="w-full h-75 md:h-125 object-cover"
                        />
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-FiraSans font-medium text-2xl md:text-[32px] leading-[118%] text-black dark:text-white ml-3 mb-4">
                    {currentProduct?.price?.isPriceOnRequest ||
                    !currentProduct?.price?.amount ? (
                      t("recommendedSection.cena")
                    ) : (
                      <>
                        {new Intl.NumberFormat().format(
                          currentProduct?.price?.amount,
                        )}{" "}
                        <Images.rubleIcon />
                      </>
                    )}
                  </p>
                  <div className="flex flex-col min-[426px]:flex-row lg:flex-col xl:flex-row gap-4.5 mb-5.5 md:mb-8">
                    <button
                      onClick={() => toggleCart(currentProduct)}
                      className="py-3.5 px-6 bg-[#FEC80B] text-black hover:bg-[#FFD43A] transition-all duration-300 rounded font-FiraSans font-normal text-base"
                    >
                      {t("productFilPage.addCart")}
                    </button>
                    <button
                      onClick={() => setRequest("kp")}
                      className="py-3.5 px-6 border border-[#FEC80B] text-black dark:text-white dark:hover:text-black hover:bg-[#FFD43A] transition-all duration-300 rounded font-FiraSans font-normal text-base"
                    >
                      {t("productFilPage.getAQuote")}
                    </button>
                  </div>
                  <div className="hidden lg:flex lg:flex-col">
                    <ul>
                      {currentProduct?.specifications?.slice(1).map((item) => (
                        <li
                          key={item.id}
                          className="flex items-center justify-between font-FiraSans font-normal text-base leading-[130%] text-black dark:text-white mb-3"
                        >
                          <span>{item.name[currentLang]}</span>
                          <span>{item.value[currentLang]}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#feature"
                      onClick={handleScrollToFeature}
                      className="inline-block font-FiraSans text-sm leading-[110%] underline text-[#a2a2a2] hover:no-underline transition-all duration-300"
                    >
                      {t("productFilPage.allSpesifications")}
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src={currentProduct?.media.blueprints}
                  alt="blueprints prosta qo'ymin qo'yibman"
                  className="bg-[#FEC80B] h-10 my-10"
                />
              </div>
              <div
                id="feature"
                className="text-black text-center pt-10 w-full h-125 bg-[#FEC80B] scroll-mt-30"
              >
                bera text editordan table galishi garak
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center py-20">
              <Images.noDataIcon className="text-[#a2a2a2]" />
              <span>{t("noData")}</span>
            </div>
          )}
        </div>
      </div>
      <FeedbackForm />
      <RequestCall request={request} closeRequest={closeRequest} />
    </>
  );
}
export default ProductDetailes;
