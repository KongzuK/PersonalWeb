const commonTranslations = [
  [".top-logo", "Portfolio"],
  [".top-nav-links a:nth-child(1)", "About Me"],
  [".top-nav-links a:nth-child(2)", "Projects"],
  [".top-nav-links a:nth-child(3)", "Other Work"],
  [".name", "Zhao Han"],
  [".intro", "Welcome to my personal portfolio."],
  [".contact-list .contact-item:nth-child(1) span", "Hangzhou, China"],
  [".back-link", "Back to Projects"],
  ["[data-i18n='projectImages']", "Project Images"],
  ["[data-i18n='projectVideo']", "Project Video"],
  ["[data-i18n='videoUnsupported']", "Your browser does not support the video tag."]
];

const pageTranslations = {
  "index.html": {
    title: "Portfolio",
    items: [
      ["#about-me .section-header h2", "About Me"],
      ["#about-me .about-body p:nth-child(1)", "I graduated from Xi'an Jiaotong-Liverpool University with a degree in Information and Computing Science, and completed my postgraduate studies in Immersive Technologies (Virtual and Augmented Reality) at the University of Bristol."],
      ["#about-me .about-body p:nth-child(2)", "During my studies, I explored game development, VR/AR interaction design, 3D modeling, and front-end development. I gradually found that what interests me most is not only how to implement something, but why it should be designed that way. I enjoy observing everyday phenomena, thinking about the reasons behind user behavior, and quickly turning ideas into playable games, webpages, or interactive prototypes. Whether it is a course project or a strange little idea from daily life, I like making it real instead of leaving it as a concept."],
      ["#about-me .about-body p:nth-child(3)", "In the future, I hope to keep exploring games and digital products, and create more experiences that are both interesting and meaningful."],

      ["#projects .section-header h2", "Projects"],
      ["#projects .section-header p:nth-of-type(1)", "This section collects some of the projects I completed during my studies."],
      ["#projects .section-header p:nth-of-type(2)", "Although these projects vary in type, each went through a complete process from concept development and design planning to final implementation."],
      ["#projects .section-header p:nth-of-type(3)", "In these projects, I was involved in development while also paying attention to user experience, gameplay design, requirement analysis, and teamwork."],
      ["#projects .section-header p:nth-of-type(4)", "For me, these works are not only course outcomes, but also practical experiences of turning ideas into reality, validating them, and continuously improving them."],

      ["#project-1 .project-title", "VR Director Simulator"],
      ["#project-1 p:nth-of-type(1)", "VR Director Simulator is a virtual reality previsualization system designed to help users plan camera shots, observe scenes, and design shooting plans in an immersive environment. Users can freely explore scenes through VR devices, compose shots from a director's perspective, simulate filming, and experience the pre-production workflow of film and television."],
      ["#project-1 p:nth-of-type(2)", "In this project, I worked as both a planner and developer. I was responsible for early-stage concept development, core feature planning, and the implementation of several key systems. I participated in the overall feature design and user experience flow, and developed the camera system, content upload feature, onboarding guide, and scene interaction features. By optimizing the operation flow and interaction feedback, I improved the usability and immersion of the system."],
      ["#project-1 .project-links:last-child a", "Project Details"],

      ["#project-2 .project-title", "AR Interior Design Application"],
      ["#project-2 p:nth-of-type(1)", "This project is an augmented reality interior design application. Users scan a real space to generate placeable areas, then select furniture in different styles from a library to place, rotate, scale, and recolor, allowing them to quickly build and preview an ideal room layout."],
      ["#project-2 p:nth-of-type(2)", "In this project, I was responsible for early product research and feature design. I analyzed the shortcomings of existing AR furniture applications in spatial perception, size matching, and interaction feedback, then designed solutions around the core user question: whether an item fits in their home. To address issues such as object clipping, occlusion errors, and unclear operational feedback, I optimized collision detection logic and interaction feedback mechanisms, improving the realism and usability of the overall experience."],
      ["#project-2 .project-links:last-child a", "Project Details"],

      ["#project-3 .project-title", "Maya Modeling"],
      ["#project-3 p:nth-of-type(1)", "3D modeling based on Maya."],
      ["#project-3 .project-links a", "Project Details"],

      ["#project-4 .project-title", "VR Puzzle Game"],
      ["#project-4 p:nth-of-type(1)", "This project is a VR puzzle game centered on spatial exploration and environmental storytelling. Players search for clues, solve puzzles, and gradually advance the story in an immersive scene."],
      ["#project-4 p:nth-of-type(2)", "During the level design process, I focused on the player's information-gathering path and puzzle-solving experience. Environmental clues, interaction feedback, and scene layout guide players through exploration and reasoning while balancing challenge and clarity. To prevent players from feeling lost in VR, I iterated on the presentation of key clues and the pacing of the level."],
      ["#project-4 .project-links:last-child a", "Project Details"],

      ["#project-5 .project-title", "Game Jam Pet Care Simulator"],
      ["#project-5 p:nth-of-type(1)", "Pet Care Simulator is a pet simulation game created during the TapTap Spotlight 2025 48-hour Game Jam in Chengdu. Together with two teammates, I started from scratch and completed the full development process, from core gameplay ideation and system design to programming and art asset production, within 48 hours."],
      ["#project-5 p:nth-of-type(2)", "Players take on the role of an office worker whose work is constantly interrupted by a pet. They need to take care of the pet while managing a high-intensity daily work rhythm. The core gameplay revolves around interrupted attention and responsibility management: players interact with the dog through mouse actions such as petting, clicking, playing, or feeding to maintain its affection and state."],
      ["#project-5 p:nth-of-type(3)", "The dog in the game has independent mood and affection systems. Different states affect its behavior and how strongly it interrupts the player."],

      ["#project-6 .project-title", "3D Game Development in Unity"],
      ["#project-6 p:nth-of-type(1)", "An independently developed third-person 3D action game featuring character combat, skill growth, and random boss generation. I designed and implemented seven differentiated skill systems, along with attribute counters, a skill shop, and other functional modules."],
      ["#project-6 .project-links a", "Project Details"],

      ["#mini-sites .section-header h2", "Other Work"],
      ["#mini-sites .section-header p:nth-of-type(1)", "I often come up with odd ideas: sometimes an absurd game premise, sometimes a small tool for myself, and sometimes simply a thought like, what if this were more interesting? Instead of leaving ideas in my notes, I prefer to build them. With AI, front-end technologies, and game engines, I quickly create prototypes and turn inspiration into something people can actually experience."],
      ["#mini-sites .section-header p:nth-of-type(2)", "This section records the traces left by those ideas."],
      ["#mini-site-1 h3", "Blender Marine Render Commission Platform"],
      ["#mini-site-1 p:nth-of-type(1)", "A page for commission clients to view service scope, add-on options, and available model choices."],
      ["#mini-site-2 h3", "Visual Novel Game"],
      ["#mini-site-2 p:nth-of-type(1)", "Made with Ren'Py, currently in progress."],
      ["#mini-site-2 p:nth-of-type(2)", "Congratulations, you have completed this life assessment."],
      ["#mini-site-2 p:nth-of-type(3)", "Final score: 3 points."],
      ["#mini-site-2 p:nth-of-type(4)", "Unfortunately, you did not meet the admission score for heaven."],
      ["#mini-site-2 p:nth-of-type(5)", "Would you like to join the Life Restart Remedial Program...?"],
      ["#mini-site-2 p:nth-of-type(6)", "Sign up now to receive one free chance to restart your life!"]
    ]
  },
  "project-1-detail.html": {
    title: "VR Director Simulator Details",
    items: [[".detail-header h2", "VR Director Simulator Details"]]
  },
  "project-2-detail.html": {
    title: "AR Interior Design Application Details",
    items: [[".detail-header h2", "AR Interior Design Application Details"]]
  },
  "project-3-detail.html": {
    title: "Maya Modeling Details",
    items: [[".detail-header h2", "Maya Modeling Details"]]
  },
  "project-4-detail.html": {
    title: "VR Puzzle Game Details",
    items: [[".detail-header h2", "VR Puzzle Game Details"]]
  },
  "project-5-detail.html": {
    title: "Pet Care Simulator Details",
    items: [
      [".detail-header h2", "Pet Care Simulator Details"],
      [".project-info h3", "Project Overview"],
      [".project-info p:nth-of-type(1)", "Pet Care Simulator is a pet simulation game created during the TapTap Spotlight 2025 48-hour Game Jam."],
      [".project-info p:nth-of-type(2)", "Players need to care for a pet while managing their daily work rhythm, dealing with the tension between companionship, interruption, and responsibility."],
      [".video-placeholder", "Video placeholder"]
    ]
  },
  "project-6-detail.html": {
    title: "3D Game Development in Unity Details",
    items: [[".detail-header h2", "3D Game Development in Unity Details"]]
  }
};

function getPageKey() {
  const page = window.location.pathname.split("/").pop();
  return page || "index.html";
}

function rememberOriginal(el) {
  if (!el.dataset.originalText) {
    el.dataset.originalText = el.textContent;
  }
}

function setText(selector, text) {
  document.querySelectorAll(selector).forEach((el) => {
    rememberOriginal(el);
    el.textContent = text;
  });
}

function restoreText(selector) {
  document.querySelectorAll(selector).forEach((el) => {
    if (el.dataset.originalText) {
      el.textContent = el.dataset.originalText;
    }
  });
}

function getAllItems() {
  const pageConfig = pageTranslations[getPageKey()] || pageTranslations["index.html"];
  return [...commonTranslations, ...(pageConfig.items || [])];
}

function setLanguage(lang) {
  const pageConfig = pageTranslations[getPageKey()] || pageTranslations["index.html"];
  localStorage.setItem("language", lang);
  document.documentElement.lang = lang === "en" ? "en" : "zh-CN";

  if (!document.documentElement.dataset.originalTitle) {
    document.documentElement.dataset.originalTitle = document.title;
  }

  if (lang === "en") {
    document.title = pageConfig.title || "Portfolio";
    getAllItems().forEach(([selector, text]) => setText(selector, text));
  } else {
    document.title = document.documentElement.dataset.originalTitle || document.title;
    getAllItems().forEach(([selector]) => restoreText(selector));
  }

  const langBtn = document.querySelector(".lang-switcher");
  if (langBtn) {
    langBtn.textContent = lang === "zh" ? "EN" : "中文";
  }
}

function getLanguage() {
  return localStorage.getItem("language") || "zh";
}

document.addEventListener("DOMContentLoaded", () => {
  getAllItems().forEach(([selector]) => {
    document.querySelectorAll(selector).forEach(rememberOriginal);
  });
  setLanguage(getLanguage());
});
