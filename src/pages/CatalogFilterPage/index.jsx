import { useParams } from "react-router-dom";
import { productsData } from "../../data/productsData";
import { categoriesData } from "../../data/categoriesData";
import { useEffect, useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import { useBreadcrumbStore } from "../../store/useBreadcrumbStore";
import { useTranslation } from "react-i18next";
import { Images } from "../../utils/images";
import ProductCard from "../../components/ProductCard";

function ProductFilter() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const { filter } = useParams();
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [request, setRequest] = useState(null);
  const closeRequest = () => setRequest(null);
  const { setDynamicName } = useBreadcrumbStore();

  const activeProduct = productsData.find(
    (productId) => productId.id === selectedProductId,
  );
  const handleProductOpen = (id) => {
    setSelectedProductId(id);
    setRequest("variant");
  };

  const currentFilter = categoriesData.find((item) => item.slug === filter);
  const productTitle = currentFilter.title[currentLang];
  useEffect(() => {
    if (productTitle) {
      setDynamicName(productTitle);
    }
    return () => setDynamicName("");
  }, [productTitle, setDynamicName]);

  const categoriesFilter = productsData.filter(
    (product) => product?.categorySlug === currentFilter?.slug,
  );
  return (
    <>
      <div className="container1">
        <div>
          <Breadcrumbs />
        </div>
        <div className="mb-6 md:mb-7.5 lg:mb-10 flex flex-col gap-6 md:flex-row md:justify-between">
          <div className="flex flex-col md:flex-row md:items-end md:gap-6">
            <h1 className="font-FiraSans font-medium text-2xl md:text-[32px] text-black dark:text-white mb-1.25 md:mb-0 mt-8 md:mt-2">
              {productTitle}
            </h1>
            <span className="font-FiraSans font-normal text-base text-black dark:text-white pb-1">
              {categoriesFilter.length} {t("catFilPage.goods")}
            </span>
          </div>
          <div className="flex items-center justify-between md:justify-normal">
            <div className="flex md:hidden items-center gap-4">
              <button className="w-10 h-10 flex items-center justify-center bg-[#FEC80B] rounded">
                <Images.filterSlidersIcon />
              </button>
              <span className="font-FiraSans font-medium text-lg leading-[150%] text-black dark:text-white">
                {t("catFilPage.filter")}
              </span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-1">
              <p className="font-FiraSans font-normal text-sm leading-[110%] text-[#A1A1A1]">
                {t("catFilPage.sorting")}
              </p>
              <button className="font-FiraSans font-normal text-base leading-[130%] text-black dark:text-white">
                currentSort
              </button>
            </div>
            <div className="hidden md:flex items-center">
              <button>
                <Images.listBtnIcon className="text-[#A1A1A1] hover:text-black transition-all duration-300" />
              </button>
              <button>
                <Images.gridBtnIcon className="text-[#A1A1A1] hover:text-black transition-all duration-300" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="hidden lg:flex min-w-[320px]">filter</div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-3 gap-3.75">
            {categoriesFilter.map((item) => (
              <ProductCard
                key={item.id}
                handleProductOpen={handleProductOpen}
                item={item}
                request={request}
                setRequest={setRequest}
                closeRequest={closeRequest}
                activeProduct={activeProduct}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductFilter;
