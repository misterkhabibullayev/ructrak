import { useTranslation } from "react-i18next";
import { Link, useSearchParams } from "react-router-dom";
import { useProductStore } from "../../store/useProductStore";
import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../../components/Breadcrumbs";
import ProductCard from "../../components/ProductCard";
import FeedbackForm from "../../components/FeedbackForm";

function SearchPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "uz";

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const { products } = useProductStore();

  const filteredProducts = products.filter((item) => {
    const lowerCaseQuery = query.toLowerCase();

    const titleMatch = item.title?.[currentLang]
      ?.toLowerCase()
      .includes(lowerCaseQuery);

    return titleMatch;
  });
  return (
    <>
      <div>
        <Helmet>
          <title>{t("breadCrumbs.search")}</title>
        </Helmet>

        <div className="container1">
          <Breadcrumbs />

          <div>
            {filteredProducts.length === 0 ? (
              <div className="pb-10">
                <h2 className="font-FiraSans font-normal text-2xl md:text-[32px] leading-[120%]  text-black dark:text-white mb-7.5 md:mb-5 pt-8 md:pt-2">
                  {t("searchPage.notFoundTitle", { query: query })}
                </h2>
                <p className="font-FiraSans font-normal text-base md:text-lg leading-[150%] text-black dark:text-white mb-10 max-w-full md:max-w-[60%]">
                  {t("searchPage.notFoundText")}
                </p>
                <Link
                  to={"/catalog"}
                  className="inline-block py-3.25 px-7.5 bg-[#FEC80B] rounded hover:bg-[#FFD43A] transition-all duration-300 font-FiraSans font-normal text-base leading-[110%] text-black"
                >
                  {t("cartPage.catalog")}
                </Link>
              </div>
            ) : (
              <div className="pb-10">
                <div className="flex items-end gap-6 mb-8">
                  <h2 className="font-FiraSans font-normal text-2xl md:text-[32px] leading-[120%]  text-black dark:text-white pt-8 md:pt-2">
                    {t("breadCrumbs.search")}: «{query}»
                  </h2>
                  <span className="hidden lg:flex font-FiraSans font-normal text-base leading-[130%] text-black/30 dark:text-white/30 mb-1">
                    {filteredProducts.length}
                    {t("catFilPage.goods")}
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                  {filteredProducts.map((item) => (
                    <ProductCard key={item.id} item={item} isListGrid={true} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <FeedbackForm />
      </div>
    </>
  );
}
export default SearchPage;
