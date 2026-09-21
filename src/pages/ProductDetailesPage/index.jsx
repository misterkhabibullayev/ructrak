import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useBreadcrumbStore } from "../../store/useBreadcrumbStore";
import Breadcrumbs from "../../components/Breadcrumbs";
import { useProductStore } from "../../store/useProductStore";

function ProductDetailes() {
  const { detailes } = useParams();
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const { setDynamicName } = useBreadcrumbStore();
  const products = useProductStore((state) => state.products);
  const fetchProducts = useProductStore((state) => state.fetchProducts);

  useEffect(() => {
    if (products.length === 0 && fetchProducts) {
      fetchProducts();
    }
  }, [products.length, fetchProducts]);

  const currentProduct = products.find((item) => item.slug === detailes);
  const productTitle = currentProduct?.title?.[currentLang];

  useEffect(() => {
    if (productTitle) {
      setDynamicName(productTitle);
    }
    return () => setDynamicName("");
  }, [productTitle, setDynamicName]);

  if (products.length === 0) {
    return <div>Yuklanmoqda...</div>;
  }
  return (
    <>
      <div className="container1">
        <div>
          <Breadcrumbs />
        </div>
        {currentProduct && (
          <div
            dangerouslySetInnerHTML={{
              __html: currentProduct.title[currentLang],
            }}
          ></div>
        )}
      </div>
    </>
  );
}
export default ProductDetailes;
