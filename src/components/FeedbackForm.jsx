import { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import TruckImage from "../Image/truckImage.png";
import { Link } from "react-router-dom";

export default function FeedbackForm() {
  const { t } = useTranslation();
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    phone: false,
  });

  const validateName = (name) => !name || name.trim() === "";
  const validatePhone = (phone) => {
    const cleanPhone = phone ? phone.replace(/\D/g, "") : "";
    return !cleanPhone || cleanPhone.length < 12;
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setFormData((prev) => ({ ...prev, name: value }));

    if (errors.name) {
      setErrors((prev) => ({ ...prev, name: false }));
    }
  };

  const handlePhoneFocus = () => {
    if (!formData.phone) {
      setFormData((prev) => ({ ...prev, phone: "+998 " }));
    }
  };

  const handlePhoneBlur = () => {
    if (formData.phone.trim() === "+998") {
      setFormData((prev) => ({ ...prev, phone: "" }));
    }
  };

  const handlePhoneChange = (e) => {
    let value = e.target.value;
    let numbers = value.replace(/\D/g, "");

    if (!numbers.startsWith("998")) {
      numbers = "998" + numbers;
    }

    numbers = numbers.slice(0, 12);

    let formatted = "+998";
    if (numbers.length > 3) formatted += " " + numbers.slice(3, 5);
    if (numbers.length > 5) formatted += " " + numbers.slice(5, 8);
    if (numbers.length > 8) formatted += " " + numbers.slice(8, 10);
    if (numbers.length > 10) formatted += " " + numbers.slice(10, 12);

    setFormData((prev) => ({ ...prev, phone: formatted }));

    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: false }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (validateName(formData.name)) newErrors.name = true;
    if (validatePhone(formData.phone)) newErrors.phone = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSuccess(true);

    const cleanData = {
      name: formData.name.trim(),
      phone: formData.phone.trim(),
    };

    setErrors({ name: false, phone: false });
    console.log("Yuborilgan ma'lumot:", cleanData);
  };
  return (
    <>
      <section className="relative overflow-hidden bg-[#F9F9F9] dark:bg-slate-950 py-12.5 min-[1200px]:py-0">
        <div className="container1">
          <div className="flex items-center">
            <div className="w-full h-full">
              <div className="mb-9.5">
                <h2 className="font-FiraSans font-medium text-[24px] md:text-[42px] leading-[120%] text-black dark:text-white mb-1 text-center min-[1200px]:text-left">{t("feedbackForm.title")}</h2>
                <p className="font-FiraSans font-normal text-[14px] md:text-[18px] leading-[150%] text-black dark:text-white text-center min-[1200px]:text-left">{t("feedbackForm.subtitle")}</p>
              </div>
              <div>
                <form
                  onSubmit={handleSubmit}
                  className="w-full flex flex-col md:flex-row gap-5 mb-4.5"
                >
                  <div className={`flex flex-col`}>
                    <label
                      htmlFor="nameInput"
                      className={`font-FiraSans font-normal text-[14px] mb-1 transition-colors duration-300 ${
                        errors.name
                          ? "text-[#FF3939]"
                          : "text-black dark:text-white"
                      }`}
                    >
                      {t("requestModal.inputLabel1")}
                    </label>
                    <input
                      type="text"
                      id="nameInput"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t("requestModal.inputPlacholder1")}
                      className={`py-1.75 min-w-full md:min-w-75 min-[575px]:py-2.75 px-2.25 min-[575px]:px-3.25 outline-none border rounded text-black dark:text-white placeholder:transition-all placeholder:duration-300 focus:placeholder-transparent transition-all duration-300 ${
                        errors.name
                          ? "border-[#FF3939]"
                          : "border-black/50 dark:border-white/50 focus:border-[#fec80b] focus:shadow-InputHover"
                      }`}
                    />
                    <span
                      className={`font-FiraSans font-normal text-[14px] leading-[110%] text-[#FF3939] mt-1 ${
                        errors.name ? "block" : "hidden"
                      }`}
                    >
                      {t("requestModal.inputError")}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="phoneInput"
                      className={`font-FiraSans font-normal text-[14px] mb-1 transition-colors duration-300 ${
                        errors.phone
                          ? "text-[#FF3939]"
                          : "text-black dark:text-white"
                      }`}
                    >
                      {t("requestModal.inputLabel2")}
                    </label>
                    <input
                      type="tel"
                      id="phoneInput"
                      value={formData.phone}
                      onFocus={handlePhoneFocus}
                      onBlur={handlePhoneBlur}
                      onChange={handlePhoneChange}
                      placeholder="+998"
                      className={`py-1.75 min-w-full md:min-w-75 min-[575px]:py-2.75 px-2.25 min-[575px]:px-3.25 outline-none border rounded text-black dark:text-white placeholder:transition-all placeholder:duration-300 focus:placeholder-transparent transition-all duration-300 ${
                        errors.phone
                          ? "border-[#FF3939]"
                          : "border-black/50 dark:border-white/50 focus:border-[#fec80b] focus:shadow-InputHover"
                      }`}
                    />
                    <span
                      className={`font-FiraSans font-normal text-[14px] leading-[110%] text-[#FF3939] mt-1 ${
                        errors.phone ? "block" : "hidden"
                      }`}
                    >
                      {t("requestModal.inputError")}
                    </span>
                  </div>
                  <div className="md:pt-6.25">
                    <button
                      type="submit"
                      className="w-full md:w-auto py-3.75 px-7.5 bg-[#fec80b] hover:bg-[#FFD43A] transition-all duration-300 rounded font-FiraSans font-normal text-[16px] leading-[110%] text-black"
                    >
                      {t("feedbackForm.submitBtn")}
                    </button>
                  </div>
                </form>
                <div>
                  <p className="font-FiraSans font-normal text-[14px] leading-[110%] text-black dark:text-white text-center min-[1200px]:text-left">
                    <Trans
                      i18nKey="feedbackForm.policyText"
                      components={[
                        <Link
                          key="privacy-link"
                          to="/privacy-policy"
                          className="text-blue-600 hover:text-blue-700 font-FiraSans font-normal text-[14px] leading-[110%]"
                        />,
                      ]}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="w-100 h-85.25 shrink-0 hidden min-[1200px]:flex items-center">
              <img
                src={TruckImage}
                alt="truck image"
                className="w-auto h-full object-contain object-left max-w-none"
              />
            </div>
          </div>
        </div>
        <div className={`absolute top-0 left-0 w-full h-full items-center bg-[#FEC80B] ${isSuccess ? "flex" : "hidden"}`}>
          <div className="container1 flex flex-col items-center">
            <h2 className="font-FiraSans font-medium text-[24px] md:text-[42px] leading-[120%] text-black mb-1 text-center">{t("feedbackForm.successTitle")}</h2>
            <p className="max-w-full md:max-w-105 font-FiraSans font-normal text-[14px] md:text-[18px] leading-[150%] text-black mb-3 text-center">{t("feedbackForm.successDescription")}</p>
            <button
                  onClick={() => setIsSuccess(false)}
                  aria-label={t("requestModal.close")}
                  className="p-4 border-2 border-black rounded max-w-75 w-full hover:bg-black hover:text-white transition-all duration-300 font-FiraSans font-normal text-[16px] leading-[110%]"
                >
                  {t("requestModal.close")}
                </button>
          </div>
        </div>
      </section>
    </>
  );
}
