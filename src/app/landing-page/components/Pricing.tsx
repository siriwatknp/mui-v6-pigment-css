import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const tiers = [
  {
    title: "Free",
    price: "0",
    description: [
      "10 users included",
      "2 GB of storage",
      "Help center access",
      "Email support",
    ],
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
  },
  {
    title: "Professional",
    subheader: "Recommended",
    price: "15",
    description: [
      "20 users included",
      "10 GB of storage",
      "Help center access",
      "Priority email support",
      "Dedicated team",
      "Best deals",
    ],
    buttonText: "Start now",
    buttonVariant: "contained",
  },
  {
    title: "Enterprise",
    price: "30",
    description: [
      "50 users included",
      "30 GB of storage",
      "Help center access",
      "Phone & email support",
    ],
    buttonText: "Contact us",
    buttonVariant: "outlined",
  },
];

export default function Pricing() {
  return (
    <div
      id="pricing"
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
          pt: { xs: 4, sm: 12 },
          pb: { xs: 8, sm: 16 },
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }),
      })}
    >
      <Box
        sx={{
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        <Typography
          component="h2"
          variant="h4"
          sx={{
            color: "text.primary",
          }}
        >
          Pricing
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
          }}
        >
          Quickly build an effective pricing table for your potential customers
          with this layout. <br />
          It&apos;s built with default Material UI components with little
          customization.
        </Typography>
      </Box>
      <div
        sx={{
          display: "flex",
          gap: 3,
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {tiers.map((tier) => (
          <Card
            key={tier.title}
            sx={[
              (theme) => ({
                p: 2,
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }),
              tier.title === "Professional" &&
                ((theme) => ({
                  border: "none",
                  boxShadow: `0 8px 12px hsla(0, 0%, 0%, 0.8)`,
                  background:
                    "radial-gradient(circle at 50% 0%, hsl(210, 98%, 35%), hsl(210, 100%, 16%))",
                  ...theme.applyStyles("light", {
                    boxShadow: `0 8px 12px hsla(210, 98%, 42%, 0.2)`,
                  }),
                })),
            ]}
          >
            <CardContent>
              <Box
                sx={[
                  {
                    mb: 1,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 2,
                  },
                  tier.title === "Professional"
                    ? {
                        color: "grey.100",
                      }
                    : {
                        color: "",
                      },
                ]}
              >
                <Typography component="h3" variant="h6">
                  {tier.title}
                </Typography>
                {tier.title === "Professional" && (
                  <Chip
                    icon={<AutoAwesomeIcon />}
                    label={tier.subheader}
                    size="small"
                    sx={{
                      borderColor: "hsla(220, 60%, 99%, 0.3)",
                      backgroundColor: "hsla(220, 60%, 99%, 0.1)",
                      "& .MuiChip-label": {
                        color: "hsl(0, 0%, 100%)",
                      },
                      "& .MuiChip-icon": {
                        color: "primary.light",
                      },
                    }}
                  />
                )}
              </Box>
              <Box
                sx={[
                  {
                    display: "flex",
                    alignItems: "baseline",
                  },
                  tier.title === "Professional"
                    ? {
                        color: "grey.50",
                      }
                    : {
                        color: "",
                      },
                ]}
              >
                <Typography component="h3" variant="h2">
                  ${tier.price}
                </Typography>
                <Typography component="h3" variant="h6">
                  &nbsp; per month
                </Typography>
              </Box>
              <Divider
                sx={{
                  my: 2,
                  opacity: 0.8,
                  borderColor: "divider",
                }}
              />
              {tier.description.map((line) => (
                <Box
                  key={line}
                  sx={{
                    py: 1,
                    display: "flex",
                    gap: 1.5,
                    alignItems: "center",
                  }}
                >
                  <CheckCircleRoundedIcon
                    sx={[
                      {
                        width: 20,
                      },
                      tier.title === "Professional"
                        ? {
                            color: "primary.light",
                          }
                        : {
                            color: "primary.main",
                          },
                    ]}
                  />
                  <Typography
                    variant="subtitle2"
                    component={"span"}
                    sx={[
                      {},
                      tier.title === "Professional"
                        ? {
                            color: "grey.50",
                          }
                        : {
                            color: "",
                          },
                    ]}
                  >
                    {line}
                  </Typography>
                </Box>
              ))}
            </CardContent>
            <CardActions>
              <Button
                fullWidth
                variant={tier.buttonVariant as "outlined" | "contained"}
              >
                {tier.buttonText}
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}
