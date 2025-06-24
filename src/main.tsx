import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import { VERBS_ES } from "./data";

import { Dashboard } from "./pages/dashboard";
import { FillInTheBlank } from "./pages/fill-in-the-blank";
import { Flashcards } from "./pages/flashcards";
import { Conjugate } from "./pages/conjugate";

import { Box, createTheme, CssBaseline, styled, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff"
    },
    secondary: {
      main: "#30332E"
    }
  },
  typography: {
    fontFamily: ["Inria Sans"],
  },
  spacing: 8,
  shadows: []
});

const Root = styled('div')({
  padding: theme.spacing(0, 2),
  height: "100vh"
})

const router = createBrowserRouter([
  { path: "dashboard", Component: Dashboard, loader: () => ({ verbs: VERBS_ES }) },
  { path: "flashcards", Component: Flashcards, loader: () => ({ verbs: VERBS_ES }) },
  { path: "fill-in-the-blank", loader: () => ({ verbs: VERBS_ES }), Component: FillInTheBlank },
  {
    path: "conjugate",
    loader: () => {
      const verbs = VERBS_ES.filter(verb => Object.keys(verb.conjugations).includes("PRESENT"));
      return { verbs }
    },
    Component: Conjugate
  },
])

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Root>
      <RouterProvider router={router}/>
    </Root>
  </ThemeProvider>,
)
