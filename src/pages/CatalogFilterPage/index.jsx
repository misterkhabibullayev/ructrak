import { useParams } from "react-router-dom";
import { productsData } from "../../data/productsData";
import { categoriesData } from "../../data/categoriesData";
import { useState } from "react";
import RequestCall from "../../components/RequestCallModal";

function ProductFilter() {
  const { filter } = useParams();
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [request, setRequest] = useState(null);
  const closeRequest = () => setRequest(null);

  const activeProduct = productsData.find(
    (productId) => productId.id === selectedProductId,
  );
  const handleProductOpen = (id) => {
    console.log(id);
    setSelectedProductId(id);
    setRequest("variant");
  };

  const currentFilter = categoriesData.find((item) => item.slug === filter);

  const categoriesFilter = productsData.filter(
    (product) => product?.categorySlug === currentFilter?.slug,
  );
  return (
    <>
      <div>
        {categoriesFilter.map((item) => (
          <div key={item.id}>
            <img src={item?.media?.mainImage} alt="salom" />
            <div>
              <button onClick={() => handleProductOpen(item.id)}>
                menga xabar bering
              </button>
              <button onClick={() => setRequest("kp")}>
                poluchit kp
              </button>
            </div>
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
