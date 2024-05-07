import type { Theme } from "@mui/material/styles";

declare module "@pigment-css/react/theme" {
  interface ThemeArgs {
    theme: Theme;
  }
}
