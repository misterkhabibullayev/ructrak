import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useBreadcrumbStore } from "../store/useBreadcrumbStore";
import { categoriesData } from "../data/categoriesData";

export default function Breadcrumbs() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const location = useLocation();
  const { dynamicName } = useBreadcrumbStore();

  const pathnames = location.pathname.split("/").filter((x) => x);

  if (pathnames.length === 0) return null;

  return (
    <nav className="items-center gap-2 py-4 hidden md:flex font-FiraSans font-normal text-[14px] leading-[110%]">
      <Link
        to="/"
        className="text-black dark:text-gray-400 hover:text-gray-500 dark:hover:text-white transition-colors"
      >
        {t("breadCrumbs.main")}
      </Link>

      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        const hasTranslation = t(`breadCrumbs.${value}`, { defaultValue: "" });
        const categoryMatch = categoriesData?.find((cat) => cat.slug === value);
        const categoryTitle = categoryMatch?.title?.[currentLang];

        let label = value;
        if (hasTranslation) {
          label = hasTranslation;
        } else if (categoryTitle) {
          label = categoryTitle;
        } else if (last && dynamicName) {
          label = dynamicName;
        }

        return (
          <div key={to} className="flex items-center gap-2">
            <span className="text-gray-400">/</span>
            {last ? (
              <span className="text-black dark:text-gray-400 font-normal">
                {label}
              </span>
            ) : (
              <Link
                to={to}
                className="text-black dark:text-gray-400 hover:text-gray-400 transition-all duration-300"
              >
                {label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
