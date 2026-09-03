import { useParams } from "react-router-dom";
import { productsData } from "../../data/productsData";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useBreadcrumbStore } from "../../store/useBreadcrumbStore";
import Breadcrumbs from "../../components/Breadcrumbs";

function ProductDetailes() {
  const { detailes } = useParams();
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const {setDynamicName} = useBreadcrumbStore()

  const currentProduct = productsData.find((item) => item.slug === detailes);
  const productTitle = currentProduct.title[currentLang];
  useEffect(() => {
    if (productTitle) {
      setDynamicName(productTitle);
    }
    return () => setDynamicName("");
  }, [productTitle, setDynamicName]);
  return (
    <>
      <div className="container1">
        <div>
          <Breadcrumbs />
        </div>
        {currentProduct.categorySlug}
      </div>
    </>
  );
}
export default ProductDetailes;
