import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import { VERBS_ES } from "./data";

import { Dashboard } from "./pages/dashboard";
import { FillInTheBlank } from "./pages/fill-in-the-blank";
import { Flashcards } from "./pages/flashcards";

import './index.css'

const router = createBrowserRouter([
  { path: "dashboard", Component: Dashboard, loader: () => ({ verbs: VERBS_ES }) },
  { path: "flashcards", Component: Flashcards, loader: () => ({ verbs: VERBS_ES }) },
  { path: "fill-in-the-blank", loader: () => ({ verbs: VERBS_ES }), Component: FillInTheBlank },
  { path: "conjugate", loader: () => ({ verbs: VERBS_ES }), Component: Flashcards },
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>,
)
