import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import Routes from "./routes";
import AppTheme from "./AppTheme";

function App() {
  return (
    <>
      <ThemeProvider theme={AppTheme}>
        <StyledEngineProvider>
          <CssBaseline />
          <Routes />
        </StyledEngineProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
