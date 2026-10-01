import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import Breadcrumbs from "../../components/Breadcrumbs";
import reviewsImg1 from "../../Image/reviews1.jpg";
import reviewsImg2 from "../../Image/reviews2.jpg";
import reviewsImg3 from "../../Image/reviews3.jpg";
import reviewsImg4 from "../../Image/reviews4.jpg";
import reviewsImg5 from "../../Image/reviews5.jpg";
import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import FeedbackForm from "../../components/FeedbackForm";
import { Images } from "../../utils/images";

export default function ReviwsPage() {
  const { t } = useTranslation();

  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {});
    return () => {
      Fancybox.destroy();
    };
  }, []);

  const reviews = [
    {
      id: 1,
      img: reviewsImg1,
    },
    {
      id: 2,
      img: reviewsImg2,
    },
    {
      id: 3,
      img: reviewsImg3,
    },
    {
      id: 4,
      img: reviewsImg4,
    },
    {
      id: 5,
      img: reviewsImg5,
    },
  ];
  return (
    <>
      <div>
        <Helmet>
          <title>{t("metaTitleDescriptions.reviews")}</title>
        </Helmet>
        <div className="container1">
          <div>
            <Breadcrumbs />
          </div>
          <h1 className="font-FiraSans font-medium text-2xl md:text-[32px] leading-[118%] mb-8 pt-8 md:pt-2 text-black dark:text-white">{t("reviews")}</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 pb-10">
            {reviews.map((item) => (
              <div key={item.id} className="relative w-full h-full group rounded overflow-hidden border border-[#a2a2a2]">
                <a
                  href={item.img}
                  data-fancybox="gallery"
                  className="inline-block group"
                >
                  <img
                    src={item.img}
                    alt="reviews"
                    className="w-full h-full object-cover"
                  />
                </a>
                  <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex opacity-0 text-white group-hover:opacity-100 items-center justify-center transition-all duration-300">
                    <Images.plusSearchIcon />
                  </div>
              </div>
            ))}
          </div>
        </div>
        <FeedbackForm />
      </div>
    </>
  );
}
