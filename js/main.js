// import { en } from "./js/en.js";
// import { fr } from "./js/fr.js";
// import { refs } from "./js/refs.js";
// import { ua } from "./js/ua.js";

// const {
//   btn: { btn_ua, btn_en, btn_fr },
//   head: { title, head_desc },
//   text: { main_text, description },
//   flag,
// } = refs;

// function changeLanguge(lang) {
//   title.textContent = lang.title;
//   head_desc.textContent = lang.head_desc;
//   main_text.textContent = lang.main_text;
//   description.textContent = lang.description;
// }
// btn_ua.addEventListener("click", () => {
//   changeLanguge(ua);
// });
// btn_en.addEventListener("click", () => {
//   changeLanguge(en);
// });
// btn_fr.addEventListener("click", () => {
//   changeLanguge(fr);
// });

import { en } from "./en.js";
import { es } from "./es.js";
import { refs } from "./refs.js";

const {
  p: { p_es, p_en, p_fr },
  head: {},
  text: {},
} = refs;
// const {
//   header_p: { p_es, p_en, p_fr },
//   head: {
//     header_info_p,
//     span,
//     header_info_btn,
//     header_info_btn2,
//     main_p,
//     main_p2,
//     main_div_p,
//     Bitesize_Stats,
//     ul_2_li,
//     ul_2_li2,
//     ul_2_li3,
//   },
// } = refs;

function changeLanguge(lang) {
  header_info_p.textContent = lang.title;
  //   span.textContent = lang.span;
  //   header_info_btn.textContent = lang.header_info_btn;
  //   header_info_btn2.textContent = lang.header_info_btn2;
  //   main_p.textContent = lang.main_p;
  //   main_p2.textContent = lang.main_p2;
  //   main_div_p.textContent = lang.main_div_p;
  //   Bitesize_Stats.textContent = lang.Bitesize_Stats;
  //   ul_2_li.textContent = lang.ul_2_li;
  //   ul_2_li2.textContent = lang.ul_2_li2;
  //   ul_2_li3.textContent = lang.ul_2_li3;
}
p_es.addEventListener('("click")', () => {
  changeLanguge(es);
});
p_en.addEventListener('("click")', () => {
  changeLanguge(en);
});
console.log(en);

const p = document.querySelector(".header_info_p");

// setTimeout(() => {
//   p.textContent =
//     "asdasdasdasdasd asdasdas asdasdasda aasassa adasfasf asdasdasd asdasd ASDASDASDASD";
// }, 4000);
