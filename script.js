// ===============================
// 🌐 Language Switch Logic
// ===============================
function setLang(lang) {
  const elements = document.querySelectorAll(".lang");
  elements.forEach((el) => {
    const translation = el.getAttribute(`data-${lang}`);
    if (translation) {
      el.textContent = translation;
    }
  });
  document.documentElement.lang = lang;
}

// ===============================
// 📂 Project List (Editable Zone)
// ===============================
const projectData = [
  {
    title_kk: "Medi-Care Медициналық көмек жобасы.",
    title_ru: "Medi-Care Проект Медицинская помощь.",
    title_en: "Medi-Care Medical Aid System.",
    description_kk: "Адам денесін басу арқылы ауру түрлерін анықтайтын ақылды жүйе. https://kalzhantolendi.github.io/MediCare/",
    description_ru: "Умная система, где человек нажимает на тело и получает диагноз. https://kalzhantolendi.github.io/MediCare/",
    description_en: "Smart anatomy project that detects diseases from clicks on body. https://kalzhantolendi.github.io/MediCare/"
  },
  {
    title_kk: "Korkem Studio",
    title_ru: "Korkem Studio",
    title_en: "Korkem Studio",
    description_kk: "Қазақ этно стильдегі компаниясы логотип + брендбук.",
    description_ru: "Казахская этно компания логотип + брендбук.",
    description_en: "Kazakh ethno-style logo + brandbook."
  },
  {
    title_kk: "Saulet Құрылыс компаниясы",
    title_ru: "Saulet Строительная компания",
    title_en: "Saulet Construction Company",
    description_kk: "Құрылыс компаниясы компаниясы логотип + брендбук.",
    description_ru: "Строительная компания компания логотип + брендбук.",
    description_en: "Construction Company logo + brandbook."
  },
  {
    title_kk: "Taza Line үй тазалайтын компания",
    title_ru: "Taza Line клининговая компания",
    title_en: "Taza Line cleaning company",
    description_kk: "Сатылған Веб сайт. https://kalzhantolendi.github.io/project-/index.html",
    description_ru: "Сайт продан. https://kalzhantolendi.github.io/project-/index.html",
    description_en: "Sold Website. https://kalzhantolendi.github.io/project-/index.html"
  },
  {
    title_kk: "Medi-Care(MediApp) Медициналық көмек жобасы.",
    title_ru: "Medi-Care(MediApp) Проект Медицинская помощь.",
    title_en: "Medi-Care(MediApp) Medical Aid System.",
    description_kk: "Адам денесін басу арқылы ауру түрлерін анықтайтын ақылды жүйе. Фигма сылка UX/UI https://www.figma.com/design/Vz0j405KiogrD1Efj1i5g3/Start-up--INFOMATRIX--project?node-id=0-1&p=f",
    description_ru: "Умная система, где человек нажимает на тело и получает диагноз. Фигма сылка UX/UI https://www.figma.com/design/Vz0j405KiogrD1Efj1i5g3/Start-up--INFOMATRIX--project?node-id=0-1&p=f",
    description_en: "Smart anatomy project that detects diseases from clicks on body. Figma is a UX/UI framework. https://www.figma.com/design/Vz0j405KiogrD1Efj1i5g3/Start-up--INFOMATRIX--project?node-id=0-1&p=f"
  },
];

function loadProjects(lang = "kk") {
  const container = document.querySelector(".project-list");
  container.innerHTML = ""; // Clear existing projects

  projectData.forEach((proj) => {
    const card = document.createElement("div");
    card.className = "project-card";

    const title = document.createElement("h3");
    title.textContent = proj[`title_${lang}`];

    const desc = document.createElement("p");
    desc.textContent = proj[`description_${lang}`];

    card.appendChild(title);
    card.appendChild(desc);
    container.appendChild(card);
  });
}

const translations = {
  en: "My Featured Projects",
  ru: "Избранные проекты",
  kk: "Таңдаулы жобаларым"
};

function setLang(lang) {
  document.getElementById("projectTitle").textContent = translations[lang];
}


// Initialize default language
document.addEventListener("DOMContentLoaded", () => {
  setLang("kk"); // Default to Kazakh
  loadProjects("kk");

  // Update projects and texts when language changes
  const langButtons = document.querySelectorAll(".lang-switcher button");
  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selectedLang = btn.textContent.toLowerCase().includes("қ") ? "kk"
                          : btn.textContent.toLowerCase().includes("ру") ? "ru"
                          : "en";
      setLang(selectedLang);
      loadProjects(selectedLang);
    });
  });
});
