// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#6a1b9a", // royal purple
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ff6f00", // amber orange
      contrastText: "#1a1a1a",
    },
    background: {
      default: "#faf7ff",
      paper: "#ffffff",
    },
    text: {
      primary: "#2c2146",
      secondary: "#5c5470",
    },
  },
  typography: {
    fontFamily: "Poppins, Roboto, sans-serif",
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          padding: "10px 24px",
          fontWeight: 600,
          borderRadius: 8,
        },
      },
    },
  },
});

export default theme;
