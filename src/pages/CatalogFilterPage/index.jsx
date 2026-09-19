import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import { useBreadcrumbStore } from "../../store/useBreadcrumbStore";
import { useTranslation } from "react-i18next";
import { Images } from "../../utils/images";
import ProductCard from "../../components/ProductCard";
import CatalogFilter from "../../components/CatalogFilter";
import RequestCall from "../../components/RequestCallModal";
import Pagination from "../../components/Pagination";
import FeedbackForm from "../../components/FeedbackForm";
import SortDropdown from "../../components/SortDropdown";

function ProductFilter() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const { filter } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const [productsData, setProductsData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const currentPage = Number(searchParams.get("page")) || 1;
  const currentSortParam = searchParams.get("sort") || "property_BRAND";
  const currentOrderParam = searchParams.get("order") || "desc";

  const [selectedProductId, setSelectedProductId] = useState(null);
  const [request, setRequest] = useState(null);
  const closeRequest = () => setRequest(null);
  const { setDynamicName } = useBreadcrumbStore();
  const [isListGrid, setIsListGrid] = useState(true);

  const itemsPerPage = 10;

  useEffect(() => {
    let isMounted = true;

    Promise.all([
      import("../../data/productsData"),
      import("../../data/categoriesData"),
    ]).then(([productsMod, categoriesMod]) => {
      if (isMounted) {
        setProductsData(productsMod.productsData || []);
        setCategoriesData(categoriesMod.categoriesData || []);
        setIsLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  const activeProduct = useMemo(
    () => productsData.find((productId) => productId.id === selectedProductId),
    [productsData, selectedProductId],
  );

  const handleProductOpen = (id) => {
    setSelectedProductId(id);
    setRequest("variant");
  };

  const currentFilter = useMemo(
    () => categoriesData.find((item) => item.slug === filter),
    [categoriesData, filter],
  );

  const productTitle = currentFilter?.title?.[currentLang];

  useEffect(() => {
    if (productTitle) {
      setDynamicName(productTitle);
    }
    return () => setDynamicName("");
  }, [productTitle, setDynamicName]);

  const categoriesFilter = useMemo(
    () =>
      productsData.filter(
        (product) => product?.categorySlug === currentFilter?.slug,
      ),
    [productsData, currentFilter],
  );

  const sortedProducts = useMemo(() => {
    const list = [...categoriesFilter];

    return list.sort((a, b) => {
      let result;
      switch (currentSortParam) {
        case "show_counter":
          result = (b.views || 0) - (a.views || 0);
          break;
        case "date_create":
          result = new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
          break;
        case "property_NOT_AVAILABLE":
          result = (b.inStock ? 1 : 0) - (a.inStock ? 1 : 0);
          break;
        case "property_PRICE":
          result = (a.price || 0) - (b.price || 0);
          break;
        case "property_BRAND":
        default: {
          const brandA = a.brand || a.title?.[currentLang] || "";
          const brandB = b.brand || b.title?.[currentLang] || "";
          result = brandA.localeCompare(brandB);
          break;
        }
      }
      return currentOrderParam === "asc" ? result : -result;
    });
  }, [categoriesFilter, currentSortParam, currentOrderParam, currentLang]);

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  const handlePageChange = (pageNumber) => {
    setSearchParams((prev) => {
      if (pageNumber === 1) {
        prev.delete("page");
      } else {
        prev.set("page", pageNumber);
      }
      return prev;
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) {
    return (
      <div className="container1 py-20 text-center font-FiraSans text-xl text-black dark:text-white">
        {t("loading", "Yuklanmoqda...")}
      </div>
    );
  }

  return (
    <>
      <div className="bg-[#F9F9F9] dark:bg-slate-900">
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
            <div className="flex items-center justify-between md:justify-normal md:gap-10">
              <div className="flex md:hidden items-center gap-4">
                <button className="w-10 h-10 flex items-center justify-center bg-[#FEC80B] rounded">
                  <Images.filterSlidersIcon />
                </button>
                <span className="font-FiraSans font-medium text-lg leading-[150%] text-black dark:text-white">
                  {t("catFilPage.filter")}
                </span>
              </div>

              <SortDropdown />

              <div className="hidden md:flex items-center gap-2">
                <button
                  onClick={() => setIsListGrid(false)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${!isListGrid ? "bg-[#FEC80B]" : ""}`}
                >
                  <Images.listBtnIcon
                    className={`text-[#A1A1A1] transition-all duration-300 ${!isListGrid ? "text-black " : ""}`}
                  />
                </button>
                <button
                  onClick={() => setIsListGrid(true)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isListGrid ? "bg-[#FEC80B] text-black" : ""}`}
                >
                  <Images.gridBtnIcon
                    className={`text-[#A1A1A1] transition-all duration-300 ${isListGrid ? "text-black" : ""}`}
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="flex mb-20">
            <div className="hidden lg:flex w-[320px]">
              <CatalogFilter
                currentFilter={currentFilter}
                categoriesFilter={categoriesFilter}
              />
            </div>

            <div className="flex-1 flex flex-col justify-between">
              <div
                className={
                  !isListGrid
                    ? "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3.75 md:flex md:flex-col md:gap-4"
                    : "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3.75 mb-20"
                }
              >
                {currentProducts.map((item) => (
                  <ProductCard
                    key={item.id}
                    handleProductOpen={handleProductOpen}
                    item={item}
                    setRequest={setRequest}
                    isListGrid={isListGrid}
                  />
                ))}
              </div>

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />

              <div
                dangerouslySetInnerHTML={{
                  __html: currentFilter?.description?.[currentLang] || "",
                }}
                className="text-black dark:text-white"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <FeedbackForm />
      <RequestCall
        request={request}
        activeProduct={activeProduct}
        closeRequest={closeRequest}
      />
    </>
  );
}

export default ProductFilter;
