import { buildLegacyTheme } from "sanity"

const props = {
  "--my-white": "#fff",
  "--my-black": "#1a1a1a",
  "--my-red": "#b44337",
  "--my-green": "#0f9d58",
  "--papa-fam-brand": "#F7AB0A",
  "--my-yellow": "#f4bb40",
  "--my-cyan": "#0ff"
}

export const myTheme = buildLegacyTheme({
  "--black": props["--my-black"],
  "--white": props["--my-white"],
  "--gray": "#666",
  "--gray-base": "#666",
  "--component-bg": props["--my-black"],
  "--component-text-color": props["--my-white"],
  "--brand-primary": props["--papa-fam-brand"],
  "--default-button-color": "#666",
  "--default-button-primary-color": props["--papa-fam-brand"],
  "--default-button-danger-color": props["--my-red"],
  "--default-button-success-color": props["--my-green"],
  "--default-button-warning-color": props["--my-yellow"],
  "--state-info-color": props["--papa-fam-brand"],
  "--state-success-color": props["--my-green"],
  "--state-danger-color": props["--my-red"],
  "--state-warning-color": props["--my-yellow"],
  "--main-navigation-color": props["--my-black"],
  "--main-navigation-color--inverted": props["--my-white"],
  "--focus-color": props["--papa-fam-brand"]
})
