import { useTranslation } from "react-i18next";

export function AboutCompanySection() {
  const { t } = useTranslation();
  return (
    <div>
      <div>
        <div>
          <h1>{t("aboutCompanySection.title")}</h1>
        </div>
      </div>
      <div></div>
    </div>
  );
}
