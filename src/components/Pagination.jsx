import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { Images } from "../utils/images";

export default function Pagination({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  baseUrl,
}) {
  const { t } = useTranslation();
  const location = useLocation();

  if (totalPages <= 1) return null;

  const getPageLink = (page) => {
    const searchParams = new URLSearchParams(location.search);
    if (page === 1) {
      searchParams.delete("page");
    } else {
      searchParams.set("page", page);
    }
    const queryString = searchParams.toString();
    const basePath = baseUrl || location.pathname;
    return queryString ? `${basePath}?${queryString}` : basePath;
  };

  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, 4, 5, "...", totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(
          1,
          "...",
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages,
        );
      }
    }
    return pages;
  };

  const handleAction = (page) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (onPageChange) onPageChange(page);
  };

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4 font-FiraSans text-[16px] select-none my-8">
      {/* ORQAGA TUGMASI */}
      {currentPage > 1 ? (
        <Link
          to={getPageLink(currentPage - 1)}
          onClick={() => handleAction(currentPage - 1)}
          className="flex items-center gap-2 text-[#A1A1A1] hover:text-black dark:hover:text-white transition-colors duration-200 mr-2 cursor-pointer"
        >
          <Images.swiperPrevBtnIcon />
          <span className="hidden md:block">
            {t("pagination.back", "Назад")}
          </span>
        </Link>
      ) : (
        <span className="flex items-center gap-2 text-[#A1A1A1] opacity-40 cursor-not-allowed mr-2">
          <Images.swiperPrevBtnIcon />
          <span className="hidden md:block">
            {t("pagination.back", "Назад")}
          </span>
        </span>
      )}

      {/* SAHIFA RAQAMLARI */}
      <div className="flex items-center gap-1 sm:gap-2">
        {getPageNumbers().map((page, idx) =>
          page === "..." ? (
            <span key={idx} className="px-1 sm:px-2 text-[#A1A1A1]">
              ...
            </span>
          ) : (
            <Link
              key={idx}
              to={getPageLink(page)}
              onClick={() => handleAction(page)}
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-medium transition-all duration-200 cursor-pointer ${
                currentPage === page
                  ? "bg-[#FEC80B] text-black font-semibold shadow-sm pointer-events-none"
                  : "text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-800"
              }`}
            >
              {page}
            </Link>
          ),
        )}
      </div>

      {/* OLGA TUGMASI */}
      {currentPage < totalPages ? (
        <Link
          to={getPageLink(currentPage + 1)}
          onClick={() => handleAction(currentPage + 1)}
          className="flex items-center gap-2 text-black dark:text-white hover:text-[#FEC80B] transition-colors duration-200 ml-2 font-medium cursor-pointer"
        >
          <span className="hidden md:block">
            {t("pagination.next", "Дальше")}
          </span>
          <Images.swiperNextBtnIcon />
        </Link>
      ) : (
        <span className="flex items-center gap-2 text-black dark:text-white opacity-40 cursor-not-allowed ml-2 font-medium">
          <span className="hidden md:block">
            {t("pagination.next", "Дальше")}
          </span>
          <Images.swiperNextBtnIcon />
        </span>
      )}
    </div>
  );
}
