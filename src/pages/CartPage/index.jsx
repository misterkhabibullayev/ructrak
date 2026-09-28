import { Trans, useTranslation } from "react-i18next";
import { useCartStore } from "../../store/useCartStore";
import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../../components/Breadcrumbs";
import { Link } from "react-router-dom";
import FeedbackForm from "../../components/FeedbackForm";
import { Images } from "../../utils/images";
import { useState } from "react";
import RequestCall from "../../components/RequestCallModal";

function CartPage() {
  const { cart, toggleCart } = useCartStore();
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [request, setRequest] = useState(null);
  const closeRequest = () => setRequest(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    agree: true,
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    agree: false,
  });

  const validateName = (name) => {
    return !name || name.trim() === "";
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !email || email.trim() === "" || !emailRegex.test(email.trim());
  };

  const validatePhone = (phone) => {
    const cleanPhone = phone ? phone.replace(/\D/g, "") : "";
    return !cleanPhone || cleanPhone.length < 12;
  };

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    const fieldMap = {
      nameInput: "name",
      emailInput: "email",
      chekedInput: "agree",
    };

    const fieldName = fieldMap[id];
    if (!fieldName) return;

    setFormData((prev) => ({
      ...prev,
      [fieldName]: type === "checkbox" ? checked : value,
    }));

    if (errors[fieldName]) {
      setErrors((prev) => ({ ...prev, [fieldName]: false }));
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
    if (validateEmail(formData.email)) newErrors.email = true;
    if (validatePhone(formData.phone)) newErrors.phone = true;
    if (!formData.agree) newErrors.agree = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const cleanData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      agree: formData.agree,
    };

    setErrors({ name: false, email: false, phone: false, agree: false });
    console.log("Buyurtma ma'lumotlari:", cleanData);
  };

  return (
    <div className="bg-[#f9f9f9] dark:bg-slate-900">
      <Helmet>
        <title>{t("metaTitleDescriptions.cart")}</title>
      </Helmet>
      <div className="">
        <div className="container1">
          <Breadcrumbs />
        </div>
        {cart.length === 0 ? (
          <div className="container1">
            <h2 className="font-FiraSans font-normal text-lg md:text-2xl leading-[120%] text-black dark:text-white whitespace-pre-line pt-8 md:pt-2">
              {t("cartPage.notCart")}
            </h2>
            <div className="flex flex-col min-[376px]:flex-row items-center gap-6 my-14">
              <Link
                to={"/"}
                className="inline-block w-full min-[376px]:w-auto text-center py-2.75 px-7.5 border-2 border-[#FEC80B] bg-transparent rounded text-black dark:text-white font-FiraSans font-normal text-base leading-[110%] hover:bg-[#FEC80B] hover:text-black transition-colors duration-300"
              >
                {t("cartPage.home")}
              </Link>
              <Link
                to={"/catalog"}
                className="inline-block w-full min-[376px]:w-auto text-center py-2.75 px-7.5 border-2 border-[#FEC80B] bg-[#FEC80B] hover:bg-[#FFD43A] transition-colors duration-300 rounded text-black font-FiraSans font-normal text-base leading-[110%]"
              >
                {t("cartPage.catalog")}
              </Link>
            </div>
          </div>
        ) : (
          <div className="">
            <div className="pb-16 container1">
              <h1 className="font-FiraSans font-medium text-2xl md:text-[32px] leading-[120%] text-black dark:text-white pt-8 md:pt-2 mb-8">
                {t("breadCrumbs.cart")}
              </h1>
              <div className="grid grid-cols-1 gap-6">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col items-center justify-between bg-white dark:bg-slate-950 md:pr-7.5"
                  >
                    <div className="flex w-full py-4 md:py-0">
                      <div className="aspect-video lg:aspect-4/3 overflow-hidden w-[20%]">
                        <Link to={item.slug}>
                          <img
                            loading="lazy"
                            src={item.media.mainImage}
                            alt={item.title[currentLang]}
                            className="w-full h-full object-cover"
                          />
                        </Link>
                      </div>
                      <div className="pl-4.5 md:pl-7.5 md:py-4 md:pr-20 flex-1 flex items-center justify-between gap-20">
                        <div className="flex-1">
                          <Link to={item.slug}>
                            <h2 className="font-FiraSans text-base leading-[120%] text-black dark:text-white text-left line-clamp-2 min-h-10 mt-0! md:text-[22px] font-medium mb-0 md:mb-8">
                              {item.title[currentLang]}
                            </h2>
                          </Link>
                          <div className="hidden md:flex lg:hidden w-[123.6px] items-center border border-[#a2a2a2] rounded">
                            <button className="text-[#a2a2a2] w-8 h-8 m-1 font-FiraSans text-2xl font-medium leading-[110%]">
                              -
                            </button>
                            <span className="border-l border-r border-[#a2a2a2] px-1">
                              <input
                                type="text"
                                value={1}
                                maxLength={4}
                                readOnly
                                className="w-8 h-8 text-center text-[#a2a2a2] outline-none font-FiraSans text-base font-medium leading-[110%]"
                              />
                            </span>
                            <button className="text-[#a2a2a2] w-8 h-8 m-1 font-FiraSans text-2xl font-medium leading-[110%]">
                              +
                            </button>
                          </div>
                          <div className="text-[#a1a1a1] hidden lg:flex flex-col gap-4">
                            <div className="flex items-center justify-between">
                              <p className="font-FiraSans font-normal text-sm leading-[110%]">
                                {item.specifications?.[0]?.name2?.[currentLang]}
                              </p>
                              <div className="border-b border-dashed border-[#a1a1a1] flex-1 h-2 mx-2"></div>
                              <p className="font-FiraSans font-normal text-sm leading-[110%]">
                                {
                                  item.specifications?.[0]?.value2?.[
                                    currentLang
                                  ]
                                }
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="hidden lg:flex items-center border border-[#a2a2a2] rounded">
                          <button className="text-[#a2a2a2] w-8 h-8 m-1 font-FiraSans text-2xl font-medium leading-[110%]">
                            -
                          </button>
                          <span className="border-l border-r border-[#a2a2a2] px-1">
                            <input
                              type="text"
                              value={1}
                              maxLength={4}
                              readOnly
                              className="w-8 h-8 text-center text-[#a2a2a2] outline-none font-FiraSans text-base font-medium leading-[110%]"
                            />
                          </span>
                          <button className="text-[#a2a2a2] w-8 h-8 m-1 font-FiraSans text-2xl font-medium leading-[110%]">
                            +
                          </button>
                        </div>
                      </div>
                      <div className="hidden md:flex flex-col items-center justify-center gap-3">
                        
                        <div className="flex flex-col items-center justify-between gap-3 w-full pr-0">
                          <button
                            onClick={() => setRequest("kp")}
                            className="w-full text-center py-3.25 px-13 rounded bg-[#FEC80B] font-FiraSans font-normal text-base leading-[110%] text-black hover:bg-[#FFD43A] transition-all duration-300 flex items-center gap-2"
                          >
                            {t("recommendedSection.poluchit")}
                            <Images.arrowIcon />
                          </button>
                          <button
                            onClick={() => toggleCart(item)}
                            className="text-[#a2a2a2] flex items-center gap-1 font-FiraSans font-normal text-base lg:text-lg mt-3 whitespace-nowrap"
                          >
                            {t("cartPage.delete")}
                            <Images.deleteIcon />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex md:hidden px-2">
                      <div className="w-full h-px bg-[#EBEBEB]"></div>
                    </div>
                    <div className="w-full flex md:hidden items-center justify-between py-4 px-1.75">
                      <div className="flex items-center border border-[#a2a2a2] rounded">
                        <button className="text-[#a2a2a2] w-6 h-6 m-1 font-FiraSans text-2xl font-medium leading-[110%]">
                          -
                        </button>
                        <span className="border-l border-r border-[#a2a2a2] px-1">
                          <input
                            type="text"
                            value={1}
                            maxLength={4}
                            readOnly
                            className="w-6 h-6 text-center text-[#a2a2a2] outline-none font-FiraSans text-base font-medium leading-[110%]"
                          />
                        </span>
                        <button className="text-[#a2a2a2] w-6 h-6 m-1 font-FiraSans text-2xl font-medium leading-[110%]">
                          +
                        </button>
                      </div>
                      <div className="flex items-center gap-2 pr-0">
                        <button
                          onClick={() => setRequest("kp")}
                          className="text-center py-2.75 px-4.5 rounded bg-[#FEC80B] font-FiraSans font-normal text-base leading-[110%] text-black hover:bg-[#FFD43A] transition-all duration-300 whitespace-nowrap"
                        >
                          {t("recommendedSection.poluchit")}
                        </button>
                        <button
                          onClick={() => toggleCart(item)}
                          className="text-[#a2a2a2] flex items-center gap-1 font-FiraSans font-normal text-base lg:text-lg whitespace-nowrap"
                        >
                          <Images.deleteIcon />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-15 pb-21 bg-white dark:bg-slate-950">
              <div className="container1 flex flex-col gap-10 md:flex-row md:items-end ">
                <div>
                  <h2 className="font-FiraSans font-medium text-[20px] md:text-[32px] leading-[120%] text-black dark:text-white text-center mb-6">
                    {t("cartPage.placeOrder")}
                  </h2>
                  <form onSubmit={handleSubmit} className="max-w-87.5 mx-auto">
                    <div className="flex flex-col gap-3 mb-14">
                      <div className="flex flex-col">
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
                          className={`py-1.75 min-[575px]:py-2.75 px-2.25 min-[575px]:px-3.25 outline-none border rounded text-black dark:text-white placeholder:transition-all placeholder:duration-300 focus:placeholder-transparent transition-all duration-300 ${
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
                          htmlFor="emailInput"
                          className={`font-FiraSans font-normal text-[14px] mb-1 transition-colors duration-300 ${
                            errors.email
                              ? "text-[#FF3939]"
                              : "text-black dark:text-white"
                          }`}
                        >
                          {t("requestModal.emailInputLabel")}
                        </label>
                        <input
                          type="email"
                          id="emailInput"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@mail.com"
                          className={`py-1.75 min-[575px]:py-2.75 px-2.25 min-[575px]:px-3.25 outline-none border rounded text-black dark:text-white placeholder:transition-all placeholder:duration-300 focus:placeholder-transparent transition-all duration-300 ${
                            errors.email
                              ? "border-[#FF3939]"
                              : "border-black/50 dark:border-white/50 focus:border-[#fec80b] focus:shadow-InputHover"
                          }`}
                        />
                        <span
                          className={`font-FiraSans font-normal text-[14px] leading-[110%] text-[#FF3939] mt-1 ${
                            errors.email ? "block" : "hidden"
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
                          className={`py-1.75 min-[575px]:py-2.75 px-2.25 min-[575px]:px-3.25 outline-none border rounded text-black dark:text-white placeholder:transition-all placeholder:duration-300 focus:placeholder-transparent transition-all duration-300 ${
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

                      <div className="flex items-start gap-2.5">
                        <input
                          type="checkbox"
                          id="chekedInput"
                          checked={formData.agree}
                          onChange={handleChange}
                          className={`custom-checkbox ${
                            errors.agree ? "outline-1 outline-[#FF3939]" : ""
                          }`}
                        />
                        <label
                          htmlFor="chekedInput"
                          className={`select-none whitespace-normal font-FiraSans font-normal text-[14px] leading-[110%] ${
                            errors.agree
                              ? "text-[#FF3939]"
                              : "text-black dark:text-white"
                          }`}
                        >
                          <Trans
                            i18nKey="requestModal.agreeText"
                            components={[
                              <Link
                                key="privacy-link"
                                to="/privacy-policy"
                                className="text-blue-600 hover:text-blue-700 font-FiraSans font-normal text-[14px] leading-[110%]"
                              />,
                            ]}
                          />
                        </label>
                      </div>
                    </div>

                    <div className="text-black">
                      <button
                        type="submit"
                        className="w-full flex items-center justify-center p-4 bg-[#FEC80B] hover:bg-[#FFD43A] transition-all duration-300 rounded font-FiraSans font-normal text-[16px] leading-[110%]"
                      >
                        {t("cartPage.placeOrder")}
                      </button>
                    </div>
                  </form>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col items-center m-5">
                    <div className="flex flex-col text-black dark:text-white max-w-75">
                      <h2 className="font-FiraSans font-medium text-2xl md:text-[32px] leading-[118%] mb-2.5 md:mb-2">
                        {t("cartPage.questionsTitle")}
                      </h2>
                      <p className="font-FiraSans font-normal text-[15px] leading-[110%] mb-4">
                        {t("cartPage.questionsText")}
                      </p>
                      <div className="flex gap-0.5 dark:text-white transition-all duration-300">
                        <span className="font-FiraSans font-normal text-[15px] leading-[110%] text-black dark:text-white whitespace-nowrap">
                          {t("header.forRegions")}
                        </span>
                        <a
                          href="tel:8 (800) 77-77-210"
                          className="font-FiraSans font-normal text-[15px] leading-[110%] text-black dark:text-white whitespace-nowrap"
                        >
                          8 (800) 77-77-210
                        </a>
                      </div>
                      <div className="flex items-end gap-0.5 dark:text-white transition-all duration-300">
                        <span className="font-FiraSans font-normal text-[15px] leading-[110%] text-black dark:text-white whitespace-nowrap">
                          {t("header.nizhnyNovgorod")}
                        </span>
                        <a
                          href="tel:8 (831) 225-00-55"
                          className="font-FiraSans font-normal text-[15px] leading-[110%] text-black dark:text-white whitespace-nowrap"
                        >
                          8 (831) 225-00-55
                        </a>
                      </div>
                      <div className="mt-6 md:mt-8">
                        <button
                          onClick={() => setRequest("call")}
                          aria-label={t("footer.requestCallBtn")}
                          className="py-2.75 px-7.5 w-full bg-transparent text-black dark:text-white hover:text-white dark:hover:text-black rounded hover:bg-black dark:hover:bg-white border border-black dark:border-white transition-all duration-300 font-FiraSans font-normal text-[16px] leading-[110%]"
                        >
                          {t("footer.requestCallBtn")}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <RequestCall
        request={request}
        setRequest={setRequest}
        closeRequest={closeRequest}
      />
      <FeedbackForm />
    </div>
  );
}

export default CartPage;
