import { createTheme } from "@mui/material/styles";

const AppTheme = createTheme({
  palette: {
    primary: {
      main: "#01c9a0", // Mint Green
    },
    secondary: {
      main: "#5eaaa8", // Light Mint Green
      light: "#30EFC9",
    },
    background: {
      default: "#f5f5f5", // Light Gray
    },
  },
  typography: {
    fontFamily: ["Roboto", '"Helvetica Neue"', "Arial", "sans-serif"].join(","),
    h1: {
      fontSize: "2.5rem",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: "bold",
    },
    h3: {
      fontSize: "1.8rem",
      fontWeight: "bold",
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
    h5: {
      fontSize: "1.3rem",
      fontWeight: "bold",
    },
    h6: {
      fontSize: "1.2rem",
      fontWeight: "bold",
    },
    subtitle1: {
      fontSize: "1rem",
    },
    subtitle2: {
      fontSize: "0.9rem",
    },
    body1: {
      fontSize: "1rem",
    },
    body2: {
      fontSize: "0.9rem",
    },
    commonAvatar: {
      cursor: "pointer",
      borderRadius: "8px",
    },
    smallAvatar: {
      width: "22px",
      height: "22px",
      fontSize: "1rem",
    },
    mediumAvatar: {
      width: "32px",
      height: "32px",
      fontSize: "1.2rem",
    },
    largeAvatar: {
      width: "44px",
      height: "44px",
      fontSize: "1.5rem",
    },
    mainContent: {
      backgroundColor: "#eef2f6",
      width: "100%",
      minHeight: "calc(100vh - 88px)",
      flexGrow: 1,
      padding: "20px",
      marginTop: "88px",
      marginRight: "20px",
      borderRadius: `${10}px`,
    },
    menuCaption: {
      fontSize: "0.875rem",
      fontWeight: 500,
      // color: theme.heading,
      padding: "6px",
      textTransform: "capitalize",
      marginTop: "10px",
    },
    subMenuCaption: {
      fontSize: "0.6875rem",
      fontWeight: 500,
      //color: theme.darkTextSecondary,
      textTransform: "capitalize",
    },
    content: {
      fontSize: "1.5em",
      lineHeight: 1.6,
      fontWeight: 400,
      color: "#666",
    },
    button: {
      textTransform: "none",
    },
  },
  textColor: {
    default: "#342b50", // Dark Gray or Black
    content: "#888888",
    gridHeader: "#666",
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
        borderRadius: 20,
      },
      containedPrimary: {
        backgroundColor: "#1a936f", // Mint Green
        "&:hover": {
          backgroundColor: "#14745f", // Darker Mint Green on hover
        },
      },
    },
    MuiPaper: {
      root: {
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: 10,
      },
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-input": {
            fontSize: "0.875rem", // Adjust input font size
          },
          "& .MuiInputLabel-root": {
            fontSize: "0.875rem", // Adjust label font size
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          fontSize: "0.875rem", // Adjust select font size
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem", // Adjust select label font size
        },
      },
    },
  },
});

export default AppTheme;
