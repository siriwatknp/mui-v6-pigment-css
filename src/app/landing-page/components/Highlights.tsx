import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: "Adaptable performance",
    description:
      "Our product effortlessly adjusts to your needs, boosting efficiency and simplifying your tasks.",
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: "Built to last",
    description:
      "Experience unmatched durability that goes above and beyond with lasting investment.",
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: "Great user experience",
    description:
      "Integrate our product into your routine with an intuitive and easy-to-use interface.",
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: "Innovative functionality",
    description:
      "Stay ahead with features that set new standards, addressing your evolving needs better than the rest.",
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: "Reliable support",
    description:
      "Count on our responsive customer support, offering assistance that goes beyond the purchase.",
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: "Precision in every detail",
    description:
      "Enjoy a meticulously crafted product where small touches make a significant impact on your overall experience.",
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: "white",
        bgcolor: "hsl(220, 30%, 2%)",
      }}
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
          <Typography component="h2" variant="h4">
            Highlights
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.400" }}>
            Explore why our product stands out: adaptability, durability,
            user-friendly design, and innovation. Enjoy reliable customer
            support and precision in every detail.
          </Typography>
        </Box>
        <div
          sx={(theme) => ({
            ...theme.unstable_sx({
              display: "grid",
              gap: 2.5,
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              width: "100%",
            }),
          })}
        >
          {items.map((item, index) => (
            <Card
              key={index}
              sx={(theme) => ({
                ...theme.unstable_sx({
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  color: "inherit",
                  p: 3,
                  border: "1px solid",
                  borderColor: "hsla(220, 25%, 25%, .3)",
                  background: "transparent",
                  backgroundColor: "grey.900",
                  boxShadow: "none",
                }),
              })}
            >
              <Box sx={{ opacity: "50%" }}>{item.icon}</Box>
              <div>
                <Typography
                  gutterBottom
                  sx={{
                    fontWeight: "medium",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "grey.400" }}>
                  {item.description}
                </Typography>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Box>
  );
}
