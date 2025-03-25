import { createRoot } from 'react-dom/client'
import './index.css'
import { Home } from "./pages/home";
import { VERBS_ES } from "./data";


const Main = () => {

  return <Home verbs={VERBS_ES}/>;
}

createRoot(document.getElementById('root')!).render(
  <Main/>,
)
