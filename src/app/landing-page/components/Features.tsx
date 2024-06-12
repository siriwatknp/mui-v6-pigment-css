"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { Chip as MuiChip } from "@mui/material";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import { styled } from "@pigment-css/react";

import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import EdgesensorHighRoundedIcon from "@mui/icons-material/EdgesensorHighRounded";
import ViewQuiltRoundedIcon from "@mui/icons-material/ViewQuiltRounded";

const items = [
  {
    icon: <ViewQuiltRoundedIcon />,
    title: "Dashboard",
    description:
      "This item could provide a snapshot of the most important metrics or data points related to the product.",
    imageLight:
      'url("/static/images/templates/templates-images/dash-light.png")',
    imageDark: 'url("/static/images/templates/templates-images/dash-dark.png")',
  },
  {
    icon: <EdgesensorHighRoundedIcon />,
    title: "Mobile integration",
    description:
      "This item could provide information about the mobile app version of the product.",
    imageLight:
      'url("/static/images/templates/templates-images/mobile-light.png")',
    imageDark:
      'url("/static/images/templates/templates-images/mobile-dark.png")',
  },
  {
    icon: <DevicesRoundedIcon />,
    title: "Available on all platforms",
    description:
      "This item could let users know the product is available on all platforms, such as web, mobile, and desktop.",
    imageLight:
      'url("/static/images/templates/templates-images/devices-light.png")',
    imageDark:
      'url("/static/images/templates/templates-images/devices-dark.png")',
  },
];

interface ChipProps {
  selected?: boolean;
}

const Chip = styled(MuiChip)<ChipProps>(({ theme }) => ({
  variants: [
    {
      props: ({ selected }) => selected,
      style: {
        borderColor: theme.palette.primary.dark,
        background:
          "linear-gradient(to bottom right, hsl(210, 98%, 48%), hsl(210, 98%, 35%))",
        color: "hsl(0, 0%, 100%)",
        "& .MuiChip-label": {
          color: "hsl(0, 0%, 100%)",
        },
        ...theme.applyStyles("light", {
          borderColor: theme.palette.primary.light,
        }),
      },
    },
  ],
}));

export default function Features() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <div
      id="features"
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
          py: { xs: 8, sm: 16 },
        }),
      })}
    >
      <div
        sx={(theme) => ({
          ...theme.unstable_sx({
            display: "grid",
            gap: 6,
            gridTemplateColumns: "repeat(auto-fill, minmax(500px, 1fr))",
          }),
        })}
      >
        <div>
          <div>
            <Typography
              component="h2"
              variant="h4"
              sx={{
                color: "text.primary",
              }}
            >
              Product features
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                mb: { xs: 2, sm: 4 },
              }}
            >
              Provide a brief overview of the key features of the product. For
              example, you could list the number of features, their types or
              benefits, and add-ons.
            </Typography>
          </div>
          <div
            sx={(theme) => ({
              ...theme.unstable_sx({
                gap: 1,
                display: { xs: "flex", sm: "none" },
              }),
            })}
          >
            {items.map(({ title }, index) => (
              <Chip
                key={index}
                label={title}
                onClick={() => handleItemClick(index)}
                selected={selectedItemIndex === index}
              />
            ))}
          </div>
          <Card
            variant="outlined"
            sx={{
              display: { xs: "auto", sm: "none" },
              mt: 4,
            }}
          >
            <Box
              sx={(theme) => ({
                backgroundImage: "var(--items-imageDark)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: 280,
                ...theme.applyStyles("light", {
                  backgroundImage: "var(--items-imageLight)",
                }),
              })}
              style={{
                "--items-imageLight": items[selectedItemIndex].imageLight,
                "--items-imageDark": items[selectedItemIndex].imageDark,
              }}
            />
            <Box sx={{ px: 2, pb: 2 }}>
              <Typography
                gutterBottom
                sx={{
                  color: "text.primary",
                  fontWeight: "medium",
                }}
              >
                {selectedFeature.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  mb: 1.5,
                }}
              >
                {selectedFeature.description}
              </Typography>
              <Link
                color="primary"
                variant="body2"
                sx={{
                  fontWeight: "bold",
                  display: "inline-flex",
                  alignItems: "center",
                  "& > svg": { transition: "0.2s" },
                  "&:hover > svg": { transform: "translateX(2px)" },
                }}
              >
                <span>Learn more</span>
                <ChevronRightRoundedIcon
                  fontSize="small"
                  sx={{ mt: "1px", ml: "2px" }}
                />
              </Link>
            </Box>
          </Card>
          <div
            sx={(theme) => ({
              ...theme.unstable_sx({
                display: { xs: "none", sm: "flex" },
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: 2,
                width: "100%",
              }),
            })}
          >
            {items.map(({ icon, title, description }, index) => (
              <Card
                key={index}
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={[
                  (theme) => ({
                    p: 3,
                    height: "fit-content",
                    width: "100%",
                    background: "none",
                    "&:hover": {
                      background:
                        "linear-gradient(to right bottom, hsla(210, 100%, 12%, 0.2) 25%, hsla(210, 100%, 16%, 0.2) 100%)",
                      borderColor: "primary.dark",
                      boxShadow: "0px 1px 8px hsla(210, 100%, 25%, 0.5) ",
                      ...theme.applyStyles("light", {
                        background:
                          "linear-gradient(to bottom right, hsla(210, 100%, 97%, 0.5) 25%, hsla(210, 100%, 90%, 0.3) 100%)",
                        borderColor: "primary.light",
                        boxShadow: "0px 2px 8px hsla(0, 0%, 0%, 0.1)",
                      }),
                    },
                  }),
                  selectedItemIndex === index &&
                    ((theme) => ({
                      backgroundColor: "action.selected",
                      borderColor: "primary.dark",
                      ...theme.applyStyles("light", {
                        borderColor: "primary.light",
                      }),
                    })),
                ]}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    textAlign: "left",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: { md: "center" },
                    gap: 2.5,
                  }}
                >
                  <Box
                    sx={[
                      (theme) => ({
                        color: "grey.600",
                        ...theme.applyStyles("light", {
                          color: "grey.400",
                        }),
                      }),
                      selectedItemIndex === index && {
                        color: "primary.main",
                      },
                    ]}
                  >
                    {icon}
                  </Box>
                  <div>
                    <Typography
                      gutterBottom
                      sx={{
                        color: "text.primary",
                        fontWeight: "medium",
                      }}
                    >
                      {title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        mb: 1.5,
                      }}
                    >
                      {description}
                    </Typography>
                    <Link
                      color="primary"
                      variant="body2"
                      onClick={(event) => {
                        event.stopPropagation();
                      }}
                      sx={{
                        fontWeight: "bold",
                        display: "inline-flex",
                        alignItems: "center",
                        "& > svg": { transition: "0.2s" },
                        "&:hover > svg": { transform: "translateX(2px)" },
                      }}
                    >
                      <span>Learn more</span>
                      <ChevronRightRoundedIcon
                        fontSize="small"
                        sx={{ mt: "1px", ml: "2px" }}
                      />
                    </Link>
                  </div>
                </Box>
              </Card>
            ))}
          </div>
        </div>

        <Card
          variant="outlined"
          sx={{
            height: "100%",
            width: "100%",
            display: { xs: "none", sm: "flex" },
            pointerEvents: "none",
          }}
        >
          <Box
            sx={(theme) => ({
              m: "auto",
              width: 420,
              height: 500,
              backgroundSize: "contain",
              backgroundImage: "var(--items-imageDark)",
              ...theme.applyStyles("light", {
                backgroundImage: "var(--items-imageLight)",
              }),
            })}
            style={{
              "--items-imageLight": items[selectedItemIndex].imageLight,
              "--items-imageDark": items[selectedItemIndex].imageDark,
            }}
          />
        </Card>
      </div>
    </div>
  );
}
