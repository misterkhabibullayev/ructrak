import { useTranslation } from "react-i18next";
import { Images } from "../utils/images";

function RequestCall({ request, closeRequest }) {
  const {t} = useTranslation()
  return (
    <div className="fixed inset-0 z-52 flex items-center justify-center">
      <div onClick={closeRequest} className="fixed inset-0 bg-black/50" />
      <div className="relative z-10 bg-white dark:bg-slate-900">
        <button onClick={closeRequest} aria-label={t("requestModal.close")}>
          <Images.closeIcon className="text-black dark:text-white" />
        </button>
        <div className={request === "call" ? "block" : "hidden"}>
          <h2>{t("requestModal.modalTitleZakaz")}</h2>
          <p>{t("requestModal.modalP")}</p>
        </div>
        <div className={request === "kp" ? "block" : "hidden"}>
          <h2>{t("requestModal.modalTitleKommer")}</h2>
        </div>
      </div>
    </div>
  );
}
export default RequestCall;
