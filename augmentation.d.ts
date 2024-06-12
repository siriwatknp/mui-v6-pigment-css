import type { Theme, CSSObject } from "@mui/material/styles";

declare module "@pigment-css/react/theme" {
  interface ThemeArgs {
    theme: Theme;
  }
}

declare global {
  namespace React {
    interface HTMLAttributes<T> {
      sx?:
        | CSSObject
        | ((theme: Theme) => CSSObject)
        | ReadonlyArray<CSSObject | ((theme: Theme) => CSSObject)>;
    }
  }
}
