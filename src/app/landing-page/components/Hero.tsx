import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import visuallyHidden from "@mui/utils/visuallyHidden";
import { styled } from "@pigment-css/react";

const StyledBox = styled("div")(({ theme }) => ({
  alignSelf: "center",
  width: "100%",
  height: 400,
  marginTop: theme.spacing(8),
  borderRadius: theme.shape.borderRadius,
  boxShadow: "0 0 24px 12px hsla(210, 100%, 25%, 0.2)",
  outline: "1px solid",
  backgroundImage: `url(${"/static/images/templates/templates-images/hero-dark.png"})`,
  backgroundSize: "cover",
  outlineColor: "hsla(210, 100%, 80%, 0.1)",
  [theme.breakpoints.up("sm")]: {
    marginTop: theme.spacing(10),
    height: 700,
  },
  ...theme.applyStyles("light", {
    boxShadow: "0 0 12px 8px hsla(220, 25%, 80%, 0.2)",
    backgroundImage: `url(${"/static/images/templates/templates-images/hero-light.png"})`,
    outlineColor: "hsla(220, 25%, 80%, 0.5)",
  }),
}));

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        backgroundImage:
          "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)",
        backgroundRepeat: "no-repeat",
        ...theme.applyStyles("light", {
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)",
        }),
      })}
    >
      <div
        sx={(theme) => ({
          ...theme.unstable_sx({
            maxWidth: "lg",
            width: "100%",
            marginLeft: "auto",
            boxSizing: "border-box",
            marginRight: "auto",
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            [theme.breakpoints.up("sm")]: {
              paddingLeft: theme.spacing(3),
              paddingRight: theme.spacing(3),
            },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pt: { xs: 14, sm: 20 },
            pb: { xs: 8, sm: 12 },
          }),
        })}
      >
        <div
          sx={(theme) => ({
            ...theme.unstable_sx({
              display: "flex",
              flexDirection: "column",
              gap: 2,
              alignItems: "center",
              width: { xs: "100%", sm: "70%" },
            }),
          })}
        >
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              fontSize: "clamp(3rem, 10vw, 3.5rem)",
            }}
          >
            Our&nbsp;latest&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={(theme) => ({
                fontSize: "inherit",
                color: "primary.light",
                ...theme.applyStyles("light", {
                  color: "primary.main",
                }),
              })}
            >
              products
            </Typography>
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              color: "text.secondary",
              width: { sm: "100%", md: "80%" },
            }}
          >
            Explore our cutting-edge dashboard, delivering high-quality
            solutions tailored to your needs. Elevate your experience with
            top-tier features and services.
          </Typography>
          <div
            sx={(theme) => ({
              ...theme.unstable_sx({
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 1,
                pt: 2,
                width: { xs: "100%", sm: "auto" },
              }),
            })}
          >
            <InputLabel htmlFor="email-hero" sx={visuallyHidden}>
              Email
            </InputLabel>
            <TextField
              id="email-hero"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Enter your email address"
              placeholder="Your email address"
              inputProps={{
                autoComplete: "off",
                "aria-label": "Enter your email address",
              }}
            />
            <Button variant="contained" color="primary">
              Start now
            </Button>
          </div>
          <Typography
            variant="caption"
            sx={{
              textAlign: "center",
            }}
          >
            By clicking &quot;Start now&quot; you agree to our&nbsp;
            <Link href="#" color="primary">
              Terms & Conditions
            </Link>
            .
          </Typography>
        </div>
        <StyledBox id="image" />
      </div>
    </Box>
  );
}
