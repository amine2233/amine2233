import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://amine2233.github.io",
  base: "amine2233",
  trailingSlash: "always",
  integrations: [tailwind(), icon()]
});