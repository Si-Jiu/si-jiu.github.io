import type {
	AnnouncementConfig,
	CommentConfig,
	ExpressiveCodeConfig,
	LicenseConfig,
	MusicPlayerConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";
import { getTranslateLanguageFromConfig } from "./utils/language-utils";

// Define site language
const SITE_LANG = "zh_CN"; // Language code, e.g., 'en', 'zh_CN', 'ja', etc.

export const siteConfig: SiteConfig = {
	title: "肆鸠的博客",
	subtitle: "真的有人看？",

	lang: SITE_LANG,

	themeColor: {
		hue: 250, // Default hue for theme color, range from 0 to 360. e.g., red: 0, cyan: 200, teal: 250, pink: 345
		fixed: false, // Hide theme color picker for visitors
	},
	translate: {
		enable: true, // Enable translation feature
		service: "client.edge", // Use Edge browser translation service
		defaultLanguage: getTranslateLanguageFromConfig(SITE_LANG), // Automatically set default translation language based on site language
		showSelectTag: false, // Don't show default language selection dropdown, use custom button
		autoDiscriminate: true, // Automatically detect user language
		ignoreClasses: ["ignore", "banner-title", "banner-subtitle"], // CSS class names to ignore for translation
		ignoreTags: ["script", "style", "code", "pre"], // HTML tags to ignore for translation
	},
	banner: {
		enable: true, // Temporarily disable banner to improve loading speed

		// Support single image or image array, carousel is automatically enabled when array length > 1
		src: {
			desktop: [
				"assets/desktop-banner/1-banner.webp",
			], // Desktop banner images
			mobile: [
				// "assets/mobile-banner/1.webp",
				// "assets/mobile-banner/2.webp",
				// "assets/mobile-banner/3.webp",
				// "assets/mobile-banner/4.webp",
				// "assets/mobile-banner/5.webp",
				// "assets/mobile-banner/6.webp",
				// "assets/mobile-banner/7.webp",
			], // Mobile banner images
		}, // Use local banner images

		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. Default is 'center'

		carousel: {
			enable: true, // When true: enable carousel for multiple images. When false: randomly display one image from the array

			interval: 1, // Carousel interval time (seconds)
		},

		homeText: {
			enable: true, // Display custom text on homepage
			title: "肆鸠的博客", // Homepage banner main title

			subtitle: [
				"终于有人看了QWQ",
				"还是PVP大佬",
				"我问你我能不能大声说话！😡",
				"UIU黑完之后是无规则状态",
				"他们站的太密集了",
				"现在他在恶意开庭",
				"还是PVP大佬",
				"Attention, this announcement s-SYSTEM NOW UNDER MILITARY COMMAND",
			], // Homepage banner subtitle, supports multiple texts
			typewriter: {
				enable: true, // Enable subtitle typewriter effect

				speed: 75, // Typing speed (milliseconds)
				deleteSpeed: 50, // Delete speed (milliseconds)
				pauseTime: 2500, // Pause time after complete display (milliseconds)
			},
		},

		credit: {
			enable: false, // Display banner image source text

			text: "Describe", // Source text to display
			url: "", // (Optional) URL link to original artwork or artist page
		},
	},
	toc: {
		enable: true, // Enable table of contents feature
		depth: 3, // TOC depth, 1-6, 1 means only show h1 headings, 2 means show h1 and h2 headings, and so on
	},
	favicon: [
		// Leave empty to use default favicon
		// {
		//   src: '/favicon/icon.png',    // Icon file path
		//   theme: 'light',              // Optional, specify theme 'light' | 'dark'
		//   sizes: '32x32',              // Optional, icon size
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home, 
		LinkPreset.Archive,
		LinkPreset.About,
		// LinkPreset.Friends,
		// LinkPreset.Anime,
		// LinkPreset.Diary,
		// {
		// 	name: "GitHub",
		// 	url: "https://github.com/matsuzaka-yuki", // Internal links should not include base path as it will be automatically added

		// 	external: true, // Show external link icon and open in new tab
		// },
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.jpg", // Relative to /src directory. If starts with '/', relative to /public directory
	name: "肆鸠",
	bio: "我个人觉得呢，这个意大利面就应该拌42号混凝土",
	links: [
		{
			name: "Bilibli",
			icon: "fa6-brands:bilibili",
			url: "https://space.bilibili.com/443950222",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/Si-Jiu",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (like background color) have been overridden, see astro.config.mjs file.
	// Please choose a dark theme as this blog theme currently only supports dark backgrounds
	theme: "github-dark",
};

export const commentConfig: CommentConfig = {
	enable: false, // Enable the comment function. When it is set to false, the comment component will not be displayed in the article area.
	twikoo: {
		envId: "https://twikoo.vercel.app",
	},
};

export const announcementConfig: AnnouncementConfig = {
	enable: false, // Enable announcement feature
	title: "公告", // Announcement title
	content: "Nothing here~", // Announcement content
	closable: true, // Allow users to close the announcement
	link: {
		text: "Learn More", // Link text
		url: "/about/", // Link URL
		external: true, // Internal link
	},
};

export const musicPlayerConfig: MusicPlayerConfig = {
	enable: true, // Enable music player feature
};
