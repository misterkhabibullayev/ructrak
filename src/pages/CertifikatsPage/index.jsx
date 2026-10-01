import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../../components/Breadcrumbs";
import FeedbackForm from "../../components/FeedbackForm";
import { Images } from "../../utils/images";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import CertImg1 from "../../Image/cert1.jpg";
import CertImg2 from "../../Image/cert2.jpg";
import CertImg3 from "../../Image/cert3.jpg";
import CertImg4 from "../../Image/cert4.jpg";
import CertImg5 from "../../Image/cert5.jpg";
import CertImg6 from "../../Image/cert6.jpg";
import CertImg7 from "../../Image/cert7.jpg";
import CertImg8 from "../../Image/cert8.jpg";

export default function CertifikatsPage() {
  const { t } = useTranslation();

  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {});
    return () => {
      Fancybox.destroy();
    };
  }, []);

  const cert = [
    {
      id: 1,
      img: CertImg1,
    },
    {
      id: 2,
      img: CertImg2,
    },
    {
      id: 3,
      img: CertImg3,
    },
    {
      id: 4,
      img: CertImg4,
    },
    {
      id: 5,
      img: CertImg5,
    },
    {
      id: 6,
      img: CertImg6,
    },
    {
      id: 7,
      img: CertImg7,
    },
    {
      id: 8,
      img: CertImg8,
    },
  ];
  return (
    <>
      <div>
        <Helmet>
          <title>{t("metaTitleDescriptions.cert")}</title>
        </Helmet>
        <div className="container1">
          <div>
            <Breadcrumbs />
          </div>
          <h1 className="font-FiraSans font-medium text-2xl md:text-[32px] leading-[118%] mb-8 pt-8 md:pt-2 text-black dark:text-white">
            {t("breadCrumbs.cert")}
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 pb-10">
            {cert.map((item) => (
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
