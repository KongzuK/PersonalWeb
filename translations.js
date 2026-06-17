const translations = {
  zh: {
    homepage: "个人主页",
    aboutMe: "关于我",
    projects: "项目作品",
    miniSites: "其他作品",
    location: "浙江杭州",
    resume: "简历",
    linkedin: "LinkedIn",
    github: "GitHub",
    welcome: "欢迎来到我的个人主页。",
    aboutSection: "这里展示你的个人简介，学术背景、研究方向、技术特长等内容。",
    aboutMore: "你可以在这里补充更多介绍性文字，内容会出现在页面上部左侧。",
    projectsSection: "项目作品",
    projectsNote: "每个项目包含详情、图片、视频和 GitHub 链接。",
    projectTitle1: "VR导演模拟器 1",
    projectDesc1: "这是项目简介区域。这里预留项目目标、技术栈、挑战与成果。",
    projectDetails: "项目详情",
    projectTitle2: "项目名称 2",
    projectDesc2: "这是第二个项目的介绍位置。用来显示项目的背景、功能和你的角色。",
    projectTitle3: "maya建模 2",
    projectDesc3: "这是第二个项目的介绍位置。用来显示项目的背景、功能和你的角色。",
    miniSitesSection: "其他作品",
    miniSitesNote: "这里放你制作的小网页，包含详情、截图或演示图、链接。",
    workName1: "作品名称 1",
    workDesc1: "简要说明该小网页的功能、技术实现、以及用途。",
    viewDetails: "查看详情",
    visitLink: "访问链接",
    workName2: "作品名称 2",
    workDesc2: "这里预留小网页的简介和说明，方便以后替换成真实内容。",
    backToList: "← 返回项目列表",
    projectInfo: "项目简介",
    projectImages: "项目图片",
    projectVideo: "项目视频",
    videoPlaceholder: "视频预留区域",
    videoUnsupported: "您的浏览器不支持 video 标签。",
  },
  en: {
    homepage: "Portfolio",
    aboutMe: "About Me",
    projects: "Projects",
    miniSites: "Mini Sites",
    location: "Hangzhou, China",
    resume: "Resume",
    linkedin: "LinkedIn",
    github: "GitHub",
    welcome: "Welcome to my personal portfolio.",
    aboutSection: "Here showcases your personal introduction, academic background, research direction, and technical expertise.",
    aboutMore: "You can add more introductory text here, which will appear in the upper left part of the page.",
    projectsSection: "Projects",
    projectsNote: "Each project includes details, images, videos, and GitHub links.",
    projectTitle1: "VR Director Simulator 1",
    projectDesc1: "This is the project introduction area. Reserved for project goals, technology stack, challenges, and achievements.",
    projectDetails: "Project Details",
    projectTitle2: "Project Name 2",
    projectDesc2: "This is the introduction position of the second project. Used to display the project background, functionality, and your role.",
    projectTitle3: "Maya Modeling 2",
    projectDesc3: "This is the introduction position of the second project. Used to display the project background, functionality, and your role.",
    miniSitesSection: "Mini Sites",
    miniSitesNote: "Mini webpages you've created here, with details, screenshots or demo images, and links.",
    workName1: "Work Name 1",
    workDesc1: "Brief description of the functionality, technical implementation, and purpose of the small webpage.",
    viewDetails: "View Details",
    visitLink: "Visit Link",
    workName2: "Work Name 2",
    workDesc2: "This reserves a mini-site introduction and description for easy future replacement with real content.",
    backToList: "← Back to Projects",
    projectInfo: "Project Information",
    projectImages: "Project Images",
    projectVideo: "Project Video",
    videoPlaceholder: "Video preview area",
    videoUnsupported: "Your browser does not support the video tag.",
  }
};

function setLanguage(lang) {
  localStorage.setItem('language', lang);
  document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
  const langBtn = document.querySelector('.lang-switcher');
  if (langBtn) {
    langBtn.textContent = lang === 'zh' ? 'EN' : '中文';
  }
  updatePageText(lang);
}

function getLanguage() {
  return localStorage.getItem('language') || 'zh';
}

function updatePageText(lang) {
  const trans = translations[lang];
  
  // 更新顶部导航
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (trans[key]) {
      el.textContent = trans[key];
    }
  });
  
  // 更新 HTML 属性
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (trans[key]) {
      el.placeholder = trans[key];
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const currentLang = getLanguage();
  setLanguage(currentLang);
});
