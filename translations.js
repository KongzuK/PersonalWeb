const translations = {
  zh: {
    homepage: "个人主页",
    aboutMe: "关于我",
    projects: "项目作品",
    miniSites: "其他作品",
    location: "杭州，中国",
    resume: "简历",
    linkedin: "LinkedIn",
    github: "GitHub",
    welcome: "欢迎来到我的个人主页。",
    aboutSection: "这里展示你的个人简介、学术背景、研究方向、技术特长等内容。",
    aboutMore: "你可以在这里补充更多介绍性文字，内容会出现在页面上部左侧。",
    projectsSection: "项目",
    projectsNote: "每个项目包含详情、图片、视频和 GitHub 链接。",
    miniSitesSection: "其他作品",
    miniSitesNote: "这里放你制作的小网页，包含详情、截图或演示图、链接。",
    backToList: "返回项目列表",
    projectImages: "项目图片",
    projectVideo: "项目视频",
    videoUnsupported: "您的浏览器不支持 video 标签。"
  },
  en: {
    homepage: "Portfolio",
    aboutMe: "About Me",
    projects: "Projects",
    miniSites: "Other Work",
    location: "Hangzhou, China",
    resume: "Resume",
    linkedin: "LinkedIn",
    github: "GitHub",
    welcome: "Welcome to my personal portfolio.",
    aboutSection: "This area introduces your background, research direction, and technical strengths.",
    aboutMore: "You can add more introductory text here for the upper part of the page.",
    projectsSection: "Projects",
    projectsNote: "Each project includes details, images, videos, and links.",
    miniSitesSection: "Other Work",
    miniSitesNote: "Small webpages you have created, with details, screenshots, demos, and links.",
    backToList: "Back to Projects",
    projectImages: "Project Images",
    projectVideo: "Project Video",
    videoUnsupported: "Your browser does not support the video tag."
  }
};

function setLanguage(lang) {
  localStorage.setItem("language", lang);
  document.documentElement.lang = lang === "en" ? "en" : "zh-CN";

  const langBtn = document.querySelector(".lang-switcher");
  if (langBtn) {
    langBtn.textContent = lang === "zh" ? "EN" : "中文";
  }

  updatePageText(lang);
}

function getLanguage() {
  return localStorage.getItem("language") || "zh";
}

function updatePageText(lang) {
  const trans = translations[lang] || translations.zh;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (trans[key]) {
      el.textContent = trans[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (trans[key]) {
      el.placeholder = trans[key];
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setLanguage(getLanguage());
});
