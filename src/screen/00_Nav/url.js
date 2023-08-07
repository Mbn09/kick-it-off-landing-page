import React from "react";
import { BsChevronDown } from "react-icons/bs";

export const URL = {
  // url
  home: "/",
  login: "/login",
};

export const newItems = (t, language) => {
  const items = {
    home: {
      title: "Home",
      url: language,
      key: "1",
      hightlight: ["1"],
      arrow: false,
    },
    login: {
      title: "Login",
      url: language,
      key: "1",
      hightlight: ["1"],
      arrow: false,
    },
  };
  return items;
};

// export const newBreadCrumb = (items) => {
//   const breadCrumb = {
//     home: null,
//     aboutUs: [items.home, items.aboutUs],
//     advisory: [items.home, items.aboutUs, items.advisory],
//     administration: [items.home, items.aboutUs, items.administration],
//     landing: [items.home, items.aboutUs, items.landing],
//     news: [items.home, items.news],
//     property: [items.home, items.property],
//     residential: [items.home, items.property, items.residential],
//     commercial: [items.home, items.property, items.commercial],
//     event: [items.home, items.event],
//     partner: [items.home, items.partner],
//     contact: [items.home, items.contact],
//   };
//   return breadCrumb;
// };

// export const setMenuItem = (props) => {
//   const { title, url, key, arrow, icon, children } = props;
//   const href = url;
//   let label = href ? (
//     <>
//       <a href={href} target="_self" rel="noopener noreferrer">
//         {title}
//       </a>
//       {arrow ? (
//         <BsChevronDown
//           style={{ fontSize: 10, marginLeft: 5 }}
//           className="arrow-down"
//         />
//       ) : null}
//     </>
//   ) : (
//     title
//   );
//   return { key, children, label, icon };
// };

// const setChildCategory = (type, categories, language) => {
//   const data = categories
//     ?.filter((item) => item?.type === type && item?.language === language)
//     ?.map((item) => {
//       return setMenuItem({
//         title: item?.name,
//         url: "/" + language + "/news/" + item?.type + "/" + item?.slug,
//         key: item?.id,
//         arrow: false,
//         icon: null,
//         children: null,
//       });
//     });
//   return data?.length > 0 ? data : null;
// };

// export const newMenus = ({ items, categories, language }) => {
//   const menu = [
//     setMenuItem({ ...items.home }),
//     setMenuItem({
//       ...items.aboutUs,
//       children: [
//         setMenuItem({ ...items.advisory }),
//         setMenuItem({ ...items.administration }),
//         setMenuItem({ ...items.landing }),
//       ],
//     }),
//     setMenuItem({
//       ...items.news,
//       children: [
//         setMenuItem({
//           ...items.immigrant,
//           children: setChildCategory(NEWS_TYPE.IMMIGRANT, categories, language),
//         }),
//         setMenuItem({
//           ...items.education,
//           children: setChildCategory(NEWS_TYPE.EDUCATION, categories, language),
//         }),
//         setMenuItem({
//           ...items.lifeIntegeration,
//           children: setChildCategory(NEWS_TYPE.LIFE, categories, language),
//         }),
//         setMenuItem({
//           ...items.golf,
//           children: setChildCategory(NEWS_TYPE.GOLF, categories, language),
//         }),
//       ],
//     }),
//     setMenuItem({
//       ...items.property,
//       children: [
//         setMenuItem({ ...items.residential }),
//         setMenuItem({ ...items.commercial }),
//       ],
//     }),
//     setMenuItem({ ...items.event }),
//     setMenuItem({ ...items.partner }),
//     setMenuItem({ ...items.contact }),
//   ];
//   return menu;
// };
