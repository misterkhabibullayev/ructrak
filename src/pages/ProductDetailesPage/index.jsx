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
import { Helmet } from "react-helmet-async";
import Recommended from "../../components/RecommendedSection";

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
    Fancybox.bind("[data-fancybox='main-gallery']", {
      groupAll: false,
    });

    Fancybox.bind("[data-fancybox='blueprint-gallery']", {
      groupAll: false,
    });

    return () => {
      Fancybox.unbind("[data-fancybox='main-gallery']");
      Fancybox.unbind("[data-fancybox='blueprint-gallery']");
      Fancybox.close();
    };
  }, []);

  useEffect(() => {
    if (products.length === 0 && fetchProducts) {
      fetchProducts();
    }
  }, [products.length, fetchProducts]);

  const currentProduct = products.find((item) => item.slug === detailes);
  const productTitle = currentProduct?.title?.[currentLang];
  const upperProductTitle = currentProduct?.title?.[currentLang].toUpperCase();

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
      <Helmet>
        <title>{productTitle}</title>
      </Helmet>
      <div className="container1">
        <div>
          <Breadcrumbs />
        </div>
        <div className="mb-6">
          <h1 className="font-FiraSans font-medium text-2xl md:text-[32px] leading-[118%] text-black dark:text-white mb-2 pt-2">
            {upperProductTitle.toUpperCase()}
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
                        data-fancybox="main-gallery"
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
                  <p className="flex items-center font-FiraSans font-medium text-2xl md:text-[32px] leading-[118%] text-black dark:text-white ml-3 mb-4">
                    {currentProduct?.price?.isPriceOnRequest ||
                    !currentProduct?.price?.amount ? (
                      t("recommendedSection.cena")
                    ) : (
                      <>
                        {new Intl.NumberFormat().format(
                          currentProduct?.price?.amount,
                        )}{" "}
                        <Images.rubleIcon className="w-8 h-8" />
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
              <div className="w-full h-auto mb-10 px-5">
                {currentProduct?.media?.blueprints?.length > 0 && (
                  <div className="border border-[#a2a2a2]">
                    <a
                      href={currentProduct?.media?.blueprints}
                      data-fancybox="blueprint-gallery"
                      className="min-w-full shrink-0"
                    >
                      <img
                        src={currentProduct?.media?.blueprints}
                        alt={currentProduct.title[currentLang]}
                        className="w-full h-full object-cover"
                      />
                    </a>
                  </div>
                )}
              </div>
              <div className="pt-14 pb-10">
                <h2 className="font-FiraSans font-medium text-2xl md:text-[32px] leading-[118%] text-black dark:text-white">
                  {t("karakter")}
                </h2>
              </div>
              <div
                id="feature"
                className="text-black text-center pt-10 scroll-mt-30"
              >
                <table className="w-full rounded-t-sm overflow-hidden border-collapse">
                  <thead className="">
                    <tr>
                      <th colSpan={2} className="w-full py-3 px-5 bg-[#FEC80B]">
                        {productTitle}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="w-full">
                    {currentProduct?.fullSpecifications?.map((item) => (
                      <tr
                        key={item.id}
                        className="w-full font-FiraSans font-normal text-base leading-[120%] text-black dark:text-white"
                      >
                        <td className="w-1/2 py-5 px-7 text-left border-x border-b border-[#a2a2a2]">
                          {item.name[currentLang]}
                        </td>
                        <td className="w-1/2 p-1 border-x border-b border-[#a2a2a2]">
                          {item.value[currentLang]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center py-20">
              <Images.noDataIcon className="text-[#a2a2a2]" />
              <span>{t("noData")}</span>
            </div>
          )}
        </div>
        <div className="py-12.5">
          <Recommended />
        </div>
      </div>
      <FeedbackForm />
      <RequestCall request={request} closeRequest={closeRequest} />
    </>
  );
}
export default ProductDetailes;
