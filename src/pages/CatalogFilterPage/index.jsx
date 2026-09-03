import { Link, useParams } from "react-router-dom";
import { productsData } from "../../data/productsData";
import { categoriesData } from "../../data/categoriesData";
import { useEffect, useState } from "react";
import RequestCall from "../../components/RequestCallModal";
import Breadcrumbs from "../../components/Breadcrumbs";
import { useBreadcrumbStore } from "../../store/useBreadcrumbStore";
import { useTranslation } from "react-i18next";

function ProductFilter() {
  const { i18n } = useTranslation();
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
        {categoriesFilter.map((item) => (
          <div key={item.id}>
            <Link to={item.slug}>
              <img src={item?.media?.mainImage} alt="salom" />
              <div>
                <button onClick={() => handleProductOpen(item.id)}>
                  menga xabar bering
                </button>
                <button onClick={() => setRequest("kp")}>poluchit kp</button>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <RequestCall
        request={request}
        activeProduct={activeProduct}
        closeRequest={closeRequest}
      />
    </>
  );
}
export default ProductFilter;
