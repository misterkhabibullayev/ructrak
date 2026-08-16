import { useRoutes } from "react-router-dom";
import { router } from "../routes/router";
import { Suspense, useEffect } from "react";
import Loading from "../components/Loading";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const routes = useRoutes(router);
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
    Aos.refresh();
  }, []);

  return (
    <>
      <Suspense
        fallback={
          <div className="fixed inset-0 z-50 flex items-center justify-center">
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
