import DefaultTheme from "vitepress/theme";
import CodeTabs from "./components/CodeTabs.vue";

export default {
	extends: DefaultTheme,
	enhanceApp({ app }) {
		// Register global components
		app.component("CodeTabs", CodeTabs);
	},
};
