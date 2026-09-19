import { ConfigProvider, Slider } from "antd";
import { useTranslation } from "react-i18next";

export default function PriceFilter({
  filter,
  filterValues,
  handleInputChange,
}) {
  const { t } = useTranslation();
  const minBound = 0;
  const maxBound = 10000000;

  const minVal = Number(filterValues[filter.id]?.from) || minBound;
  const maxVal = Number(filterValues[filter.id]?.to) || maxBound;

  const handleSliderChange = (values) => {
    handleInputChange(filter.id, "from", values[0]);
    handleInputChange(filter.id, "to", values[1]);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <ConfigProvider
        theme={{
          components: {
            Slider: {
              trackBg: "#FEC80B",
              trackHoverBg: "#FEC80B",
              railBg: "#334155",
              railHoverBg: "#334155",
              handleColor: "#FEC80B",
              handleActiveColor: "#FEC80B",
              handleActiveOutlineColor: "rgba(254, 200, 11, 0.2)",
              handleSize: 14,
              handleSizeHover: 16,
              railSize: 4,
            },
          },
        }}
      >
        <div className="px-1">
          <Slider
            range
            min={minBound}
            max={maxBound}
            value={[minVal, maxVal]}
            onChange={handleSliderChange}
          />
        </div>
      </ConfigProvider>

      <div className="flex items-center gap-3">
        <div className="relative flex-1 flex items-center border border-gray-200 dark:border-gray-400 rounded px-3 py-2 focus-within:border-[#FEC80B]">
          <span className="text-gray-400 text-sm font-FiraSans mr-2 select-none">
            {t("catFilPage.from")}
          </span>
          <input
            type="number"
            value={filterValues[filter.id]?.from || ""}
            placeholder={minBound.toString()}
            onChange={(e) =>
              handleInputChange(filter.id, "from", e.target.value)
            }
            className="w-full text-sm font-FiraSans text-black dark:text-white bg-transparent outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
        </div>

        <div className="relative flex-1 flex items-center border border-gray-200 dark:border-gray-400 rounded px-3 py-2 focus-within:border-[#FEC80B]">
          <span className="text-gray-400 text-sm font-FiraSans mr-2 select-none">
            {t("catFilPage.to")}
          </span>
          <input
            type="number"
            value={filterValues[filter.id]?.to || ""}
            placeholder={maxBound.toString()}
            onChange={(e) => handleInputChange(filter.id, "to", e.target.value)}
            className="w-full text-sm font-FiraSans text-black dark:text-white bg-transparent outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
        </div>
      </div>
    </div>
  );
}
