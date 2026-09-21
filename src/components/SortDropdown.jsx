import { Dropdown } from "antd";
import { useSearchParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function SortDropdown() {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();

  const currentSort = searchParams.get("sort") || "property_BRAND";
  const currentOrder = searchParams.get("order") || "desc";

  const sortOptions = [
    {
      key: "1",
      sort: "show_counter",
      order: "desc",
      label: t("catFilPage.sortPopularity", "По популярности"),
    },
    {
      key: "2",
      sort: "date_create",
      order: "desc",
      label: t("catFilPage.sortNewOnesFirst", "Сначала новые"),
    },
    {
      key: "3",
      sort: "property_NOT_AVAILABLE",
      order: "asc",
      label: t("catFilPage.sortInStock", "В наличии"),
    },
    {
      key: "4",
      sort: "property_PRICE",
      order: "asc",
      label: t("catFilPage.sortByAscending", "По возрастанию цены"),
    },
    {
      key: "5",
      sort: "property_BRAND",
      order: "desc",
      label: t("catFilPage.sortBrand", "По бренду"),
    },
  ];

  const activeOption =
    sortOptions.find(
      (opt) => opt.sort === currentSort && opt.order === currentOrder,
    ) || sortOptions[4];

  const createSortLink = (sort, order) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", sort);
    params.set("order", order);
    return `?${params.toString()}`;
  };

  return (
    <div className="flex flex-col md:flex-row items-center gapp-1 md:gap-2 select-none">
      <span className="font-FiraSans text-sm text-[#A1A1A1]">
        {t("catFilPage.sorting", "Сортировка:")}
      </span>

      <Dropdown
        trigger={["click"]}
        placement="bottomRight"
        rootClassName="z-10!"
        popupRender={() => (
          <div className="bg-white dark:bg-slate-950 rounded-lg border border-[#A1A1A1] flex flex-col overflow-hidden">
            {sortOptions.map((opt) => {
              const isActive =
                opt.sort === activeOption.sort &&
                opt.order === activeOption.order;

              return (
                <Link
                  key={opt.key}
                  to={createSortLink(opt.sort, opt.order)}
                  className={`block px-4 py-2 border-b border-[#A1A1A1] last:border-b-0 font-FiraSans text-base leading-[130%] transition-colors ${
                    isActive
                      ? "font-semibold text-black! dark:text-white!"
                      : "text-black! dark:text-white! font-medium hover:bg-gray-100 dark:hover:bg-slate-800"
                  }`}
                >
                  {opt.label}
                </Link>
              );
            })}
          </div>
        )}
      >
        <button
          type="button"
          className="font-FiraSans font-medium text-base text-black dark:text-white hover:text-[#FEC80B] transition-colors cursor-pointer bg-transparent border-none outline-none "
        >
          {activeOption.label}
        </button>
      </Dropdown>
    </div>
  );
}
