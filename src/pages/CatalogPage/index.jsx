import { useTranslation } from "react-i18next";
import { categoriesData } from "../../data/categoriesData";
import { productsData } from "../../data/productsData";
import Breadcrumbs from "../../components/Breadcrumbs";

function CatalogPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  return (
    <>
      <div className="container1 pb-10">
        <div>
          <Breadcrumbs />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-5">
          {categoriesData.map((item, index) => (
            <div key={item.id}>
              <div
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="w-full h-full py-4.5 px-3.5 border border-[#EBEBEB] rounded-lg shadow-my hover:border-[#FEC80B] hover:shadow-hover transition-all duration-300"
              >
                <a
                  href={`/catalog/${item.slug}`}
                  className="inline-block w-full h-full"
                >
                  <div>
                    <h2 className="font-FiraSans font-normal text-[24px] leading-[120%] text-black dark:text-white mb-0.5 line-clamp-1">
                      {item?.title?.[currentLang]}
                    </h2>
                    <p className="font-FiraSans font-normal text-[16px] leading-[130%] text-[#A1A1A1]">
                      <span>
                        {
                          productsData.filter(
                            (product) => product.categorySlug === item.slug,
                          ).length
                        }
                      </span>
                      <span className="ml-1">
                        {t("categorySection.modelLength")}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-end justify-end mt-6">
                    <div className="w-57.5 h-57.5">
                      <img
                        src={item.img}
                        alt={item?.title?.[currentLang]}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default CatalogPage;
