import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
//
import { newItems, newMenus, newBreadCrumb } from "../screen/00_Nav/url";
// redux
// import { allCategorySelector } from "../store/category/category.selector";

export const useMenu = () => {
  // -------------------------- VAR --------------------------
  const { t, i18n } = useTranslation("translation", { keyPrefix: "menu" });
  const language = i18n.language;
  // -------------------------- STATE --------------------------
  const [items, setItems] = useState({});
  const [breadCrumb, setBreadCrumb] = useState([]);
  const [menu, setMenu] = useState([]);
  // -------------------------- REDUX --------------------------
  // const categories = useSelector(allCategorySelector);
  // console.log("categories", categories);
  // -------------------------- FUNCTION --------------------------
  // -------------------------- EFFECT --------------------------
  // useEffect(() => {
  //   const items = newItems(t, "/" + language);
  //   const breadCrumb = newBreadCrumb(items);
  //   const menu = newMenus({ items, categories, language });
  //   setItems(items);
  //   setBreadCrumb(breadCrumb);
  //   setMenu(menu);
  // }, [language, categories, t]);
  // -------------------------- RENDER --------------------------
  // -------------------------- MAIN --------------------------
  return { items, breadCrumb, menu };
};
