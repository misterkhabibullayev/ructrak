import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { NewsData } from "../../data/newsData";
import { Images } from "../../utils/images";

function NewsDetailes() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const { newsdetailes } = useParams();

  const currentNews = NewsData.find((item) => item.slug === newsdetailes);
  const newsTitle = currentNews.title[currentLang];

  const currentNewsDetailes = NewsData.filter(
    (news) => news.slug === currentNews.slug,
  );
  return (
    <>
      <div className="container1">
        <div className="my-4">
          <Link
            to={"/news"}
            className="flex items-center gap-2 text-black dark:text-white"
          >
            <span className="rotate-180">
              <Images.rightArrowIcon />
            </span>
            <span>{t("newsDetailes.back")}</span>
          </Link>
        </div>
        <div>
          <div>
            <h2>{newsTitle}</h2>
          </div>
          {currentNewsDetailes.map(item => (
            <div key={item.id} dangerouslySetInnerHTML={{__html: item.description[currentLang]}}></div>
          ))}
        </div>
      </div>
    </>
  );
}
export default NewsDetailes;
