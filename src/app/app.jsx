import { useRoutes } from "react-router-dom";
import { router } from "../routes/router";
import { Suspense, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import Loading from "../components/Loading";

function App() {
  const routes = useRoutes(router);
  const { t } = useTranslation();
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
    Aos.refresh();
  }, []);

  return (
    <>
      <Helmet>
        <title>{t("metaTitleDescriptions.mainTitle")}</title>
        <meta
          name="description"
          content={t("metaTitleDescriptions.mainDescription")}
        />
      </Helmet>
      <Suspense
        fallback={
          <div>
            <Loading />
          </div>
        }
      >
        {routes}
      </Suspense>
    </>
  );
}
export default App;
