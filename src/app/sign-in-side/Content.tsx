import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";

import { SitemarkIcon } from "./CustomIcons";

const items = [
  {
    icon: <SettingsSuggestRoundedIcon sx={{ color: "text.secondary" }} />,
    title: "Adaptable performance",
    description:
      "Our product effortlessly adjusts to your needs, boosting efficiency and simplifying your tasks.",
  },
  {
    icon: <ConstructionRoundedIcon sx={{ color: "text.secondary" }} />,
    title: "Built to last",
    description:
      "Experience unmatched durability that goes above and beyond with lasting investment.",
  },
  {
    icon: <ThumbUpAltRoundedIcon sx={{ color: "text.secondary" }} />,
    title: "Great user experience",
    description:
      "Integrate our product into your routine with an intuitive and easy-to-use interface.",
  },
  {
    icon: <AutoFixHighRoundedIcon sx={{ color: "text.secondary" }} />,
    title: "Innovative functionality",
    description:
      "Stay ahead with features that set new standards, addressing your evolving needs better than the rest.",
  },
];
export default function Content() {
  return (
    <div
      sx={(theme) => ({
        ...theme.unstable_sx({
          display: "flex",
          flexDirection: "column",
          alignSelf: "center",
          gap: 4,
          maxWidth: 450,
        }),
      })}
    >
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <SitemarkIcon />
      </Box>
      {items.map((item) => (
        <div
          key={item.title}
          sx={(theme) => ({
            ...theme.unstable_sx({
              display: "flex",
              gap: 2,
            }),
          })}
        >
          {item.icon}
          <div>
            <Typography
              gutterBottom
              sx={{
                fontWeight: "medium",
              }}
            >
              {item.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
              }}
            >
              {item.description}
            </Typography>
          </div>
        </div>
      ))}
    </div>
  );
}
