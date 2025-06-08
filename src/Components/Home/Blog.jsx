import React from "react";
import BlogCard from "../Cards/BlogCard";
import { useTranslation } from "react-i18next";

const Blog = () => {
    const { t } = useTranslation();

  return (
   <div className="flex ietms-center justify-center flex-col pt-52 w-full">
    <div className="flex items-center justify-center">
    <h1 className="text-4xl text-heading font-bold border-b-2 border-heading">{t("body.card.blog-card.title")}</h1>
    </div>
     <section className="flex items-center justify-around flex-wrap gap-8 p-10">
      <BlogCard />
    </section>
   </div>
  );
};

export default Blog;
