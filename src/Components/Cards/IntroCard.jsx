import React from "react";
import { useTranslation } from "react-i18next";

const IntroCard = ({ title }) => {
  const {t} = useTranslation();
  return (
    <div className="w-full h-max xl:h-lvh flex items-center justify-center p:0 sm:p-4 bg-[url('/images/walpaper.svg')] bg-no-repeat bg-cover bg-center mt-2 mb-2">
      <div className="mx-4 flex flex-col items-center justify-center gap-4 xl:gap-20">
      <div className="flex flex-col items-center justify-center">
    <h1 className="border-b-amber-300 border-b-2 text-2xl font-bold w-max">
    {t("body.root-page.heading")}
        </h1>
        <div className="w-full xl:w-4/5 text-start pt-2 xl:p-4">
          <p className="leading-relaxed">
          {t("body.root-page.description")}
          </p>
        </div>
    </div>
    <div className="flex flex-col items-center justify-center">
    <h1 className="border-b-amber-300 border-b-2 text-2xl font-bold w-max">
    {t("body.root-page.heading")}
        </h1>
        <div className="w-full xl:w-4/5 text-start pt-2 xl:p-4">
          <p className="leading-relaxed ">
          {t("body.root-page.description")}
          </p>
        </div>
    </div>
      </div>
    </div>
  );
};

export default IntroCard;
