import * as React from "react";

import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

const addresses = ["1 MUI Drive", "Reactville", "Anytown", "99999", "USA"];
const payments = [
  { name: "Card type:", detail: "Visa" },
  { name: "Card holder:", detail: "Mr. John Smith" },
  { name: "Card number:", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Expiry date:", detail: "04/2024" },
];

export default function Review() {
  return (
    <div
      sx={(theme) =>
        theme.unstable_sx({
          display: "flex",
          flexDirection: "column",
          gap: 2,
        })
      }
    >
      <List disablePadding>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Products" secondary="4 selected" />
          <Typography variant="body2">$134.98</Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Shipping" secondary="Plus taxes" />
          <Typography variant="body2">$9.99</Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $144.97
          </Typography>
        </ListItem>
      </List>
      <Divider />
      <div
        sx={(theme) =>
          theme.unstable_sx({ display: "flex", flexDirection: "column", my: 2 })
        }
      >
        <div>
          <Typography variant="subtitle2" gutterBottom>
            Shipment details
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography
            gutterBottom
            sx={{
              color: "text.secondary",
            }}
          >
            {addresses.join(", ")}
          </Typography>
        </div>
        <Divider flexItem />
        <div>
          <Typography variant="subtitle2" gutterBottom>
            Payment details
          </Typography>
          <div sx={{ display: "flex" }}>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <div
                  sx={(theme) =>
                    theme.unstable_sx({
                      display: "flex",
                      gap: 1,
                      width: "100%",
                      mb: 1,
                    })
                  }
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.secondary",
                    }}
                  >
                    {payment.name}
                  </Typography>
                  <Typography variant="body2">{payment.detail}</Typography>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
