"use client";
import * as React from "react";
import Button from "@mui/material/Button";

import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

import SignInCard from "./SignInCard";
import Content from "./Content";

export default function SignInSide() {
  return (
    <React.Fragment>
      <main
        sx={[
          {
            justifyContent: "space-between",
          },
          (theme) => ({
            ...theme.unstable_sx({
              display: "flex",
              flexDirection: "column",
              backgroundImage:
                "radial-gradient(at 70% 51%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
              backgroundSize: "cover",
              height: { xs: "auto", md: "100dvh" },
              pb: { xs: 12, sm: 0 },
              ...theme.applyStyles("light", {
                backgroundImage:
                  "radial-gradient(ellipse at 70% 51%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
              }),
            }),
          }),
        ]}
      >
        <div
          sx={(theme) => ({
            ...theme.unstable_sx({
              display: "flex",
              justifyContent: "space-between",
              position: { sm: "static", md: "fixed" },
              width: "100%",
              p: { xs: 2, sm: 4 },
            }),
          })}
        >
          <Button startIcon={<ArrowBackRoundedIcon />} component="a" href="/">
            Back
          </Button>
        </div>
        <div
          sx={(theme) => ({
            ...theme.unstable_sx({
              display: "flex",
              flexDirection: { xs: "column-reverse", md: "row" },
              justifyContent: "center",
              gap: { xs: 6, sm: 12 },
              height: { xs: "100%", md: "100dvh" },
              p: 2,
            }),
          })}
        >
          <Content />
          <SignInCard />
        </div>
      </main>
    </React.Fragment>
  );
}
