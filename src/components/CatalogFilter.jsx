import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Images } from "../utils/images";
import PriceFilter from "./PriceFilter";

export default function CatalogFilter({
  currentFilter,
  categoriesFilter,
  filterOpen,
  setFilterOpen,
}) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "uz";

  const [searchQuery, setSearchQuery] = useState("");

  const [filterValues, setFilterValues] = useState({
    price: { min: "", max: "" },
    brand: [],
    total_weight: [],
    cistern_volume: { min: "", max: "" },
  });

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "";
    };
  }, [filterOpen]);

  const handleCheckboxChange = (filterId, optionId) => {
    setFilterValues((prev) => {
      const currentList = prev[filterId] || [];
      const updatedList = currentList.includes(optionId)
        ? currentList.filter((id) => id !== optionId)
        : [...currentList, optionId];

      return { ...prev, [filterId]: updatedList };
    });
  };

  const handleInputChange = (filterId, inputId, value) => {
    setFilterValues((prev) => ({
      ...prev,
      [filterId]: {
        ...(prev[filterId] || {}),
        [inputId]: value,
      },
    }));
  };

  const getLocalizedText = (textObj) => {
    if (!textObj) return "";
    if (typeof textObj === "string") return textObj;
    return textObj[currentLang] || textObj.ru || textObj.uz || textObj.en || "";
  };

  const filtersList = currentFilter?.filters || [];

  return (
    <aside
      className={`filterAside w-full overflow-y-auto bg-white dark:bg-slate-950 sticky top-30 left-0 mr-6 ${filterOpen ? "min-h-screen mr-0" : "max-h-[82vh] rounded-lg"}`}
    >
      <div
        className={`items-center justify-between py-4.5 px-6 bg-slate-900 ${filterOpen ? "flex" : "hidden"}`}
      >
        <span className="font-FiraSans font-black text-xl leading-[120%] mt-0 mb-0 text-black dark:text-white">
          {t("catFilPage.filter")}
        </span>
        <div>
          <Images.closeIcon className="text-black dark:text-white" />
        </div>
      </div>
      {filtersList.map((filter) => {
        const isBrandFilter = filter.id === "brand";
        const filteredOptions = filter.options?.filter((option) => {
          if (!isBrandFilter || !searchQuery) return true;
          const labelText = getLocalizedText(option.label).toLowerCase();
          return labelText.includes(searchQuery.toLowerCase());
        });

        return (
          <div key={filter.id} className="py-5 px-4">
            <h3 className="font-FiraSans font-medium text-lg leading-[110%] text-black dark:text-white mb-3.5">
              {getLocalizedText(filter.title)}
            </h3>

            {isBrandFilter && (
              <div className="relative mb-4">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t("catFilPage.find")}
                  className="w-full pl-2.5 pr-8 py-2.5 font-FiraSans font-normal text-base leading-[130%] text-[#A1A1A1] border border-[#A1A1A1] rounded focus:outline-none focus:border-[#FEC80B]"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
                  <Images.searchIcon />
                </button>
              </div>
            )}

            {filter.type === "checkbox" && (
              <div className="mb-10.5 flex flex-col gap-3.5">
                {filteredOptions?.map((option) => {
                  const isChecked = (filterValues[filter.id] || []).includes(
                    option.id,
                  );
                  return (
                    <label
                      key={option.id}
                      className="flex items-center gap-2 text-base font-FiraSans font-normal leading-[130%] text-black dark:text-white cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() =>
                          handleCheckboxChange(filter.id, option.id)
                        }
                        className="custom-checkbox"
                      />
                      <span>{getLocalizedText(option.label)}</span>
                    </label>
                  );
                })}
              </div>
            )}

            {filter.type === "range_input" && (
              <div className="mb-7.5">
                <PriceFilter
                  filter={filter}
                  filterValues={filterValues}
                  handleInputChange={handleInputChange}
                />
              </div>
            )}
          </div>
        );
      })}
      <div className="px-5">
        <button className="w-full rounded py-3.25 px-3.75 bg-[#FEC80B] hover:bg-[#FFD43A] transition-all duration-300 mt-6 mb-7.5">
          {t("catFilPage.showProducts")}
          {""}
          <span>({categoriesFilter.length})</span>
        </button>
      </div>
    </aside>
  );
}
