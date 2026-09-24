import { useTranslation } from "react-i18next";
import Breadcrumbs from "../../components/Breadcrumbs";
import ProductCard from "../../components/ProductCard";
import { useFavoritesStore } from "../../store/useFavoritesStore";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import FeedbackForm from "../../components/FeedbackForm";
import { useState } from "react";
import RequestCall from "../../components/RequestCallModal";

function FavoritesPage() {
  const { favorites } = useFavoritesStore();

  const [request, setRequest] = useState(null);
  const closeRequest = () => setRequest(null);

  const { t } = useTranslation();
  return (
    <div>
      <Helmet>
        <title>{t("metaTitleDescriptions.favorites")}</title>
      </Helmet>
      <div className="container1">
        <div>
          <Breadcrumbs />
        </div>
        {favorites.length === 0 ? (
          <div>
            <h2 className="font-FiraSans font-normal text-lg md:text-2xl leading-[120%] text-black dark:text-white whitespace-pre-line">
              {t("favoritesPage.notFavorites")}
            </h2>
            <div className="flex items-center gap-6 my-14">
              <Link
                to={"/"}
                className="inline-block py-2.75 px-7.5 border-2 border-[#FEC80B] bg-transparent rounded text-black dark:text-white font-FiraSans font-normal text-base leading-[110%] hover:bg-[#FEC80B] hover:text-black transition-colors duration-300"
              >
                {t("favoritesPage.home")}
              </Link>
              <Link
                to={"/catalog"}
                className="inline-block py-2.75 px-7.5 border-2 border-[#FEC80B] bg-[#FEC80B] hover:bg-[#FFD43A] transition-colors duration-300 rounded text-black font-FiraSans font-normal text-base leading-[110%]"
              >
                {t("favoritesPage.catalog")}
              </Link>
            </div>
          </div>
        ) : (
          <div className="pb-10">
            <div className="flex items-end gap-6 mb-8">
              <h1 className="font-FiraSans font-medium text-2xl md:text-[32px] leading-[120%] text-black dark:text-white mt-8 md:mt-2">
                {t("breadCrumbs.favorites")}
              </h1>
              <span className="hidden lg:flex font-FiraSans font-normal text-base leading-[130%] text-black/30 dark:text-white/30 mb-1">
                {favorites.length} {t("catFilPage.goods")}
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {favorites.map((item) => (
                <ProductCard
                  key={item.id}
                  item={item}
                  isListGrid={true}
                  setRequest={setRequest}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      <FeedbackForm />
      <RequestCall request={request} closeRequest={closeRequest} />
    </div>
  );
}
export default FavoritesPage;
