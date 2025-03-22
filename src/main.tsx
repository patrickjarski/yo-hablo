import {StrictMode, useEffect, useState} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import verbData from "./data/jehle_verb_lookup.json";

enum TENSES {
  PRESENT,
  IMPERFECT,
  FUTURE
}

type VerbObject = {
  performer: string, // add persons type
  mood: string,
  infinitive: string,
  performer_en: string, // add persons type
  tense: string,
  has_long: boolean,
  translation: string
}

type VerbDataEntry = [string, Array<VerbObject>];

const Main = () => {
  const [pickedTense, setPickedTense] = useState(TENSES.PRESENT);
  const [verbsForPickedTense, setVerbsForPickedTense] = useState([]);
  console.log(Object.fromEntries(Object.entries(verbData).slice(0,10)));

  useEffect(() => {
    const filteredVerbs = Object.entries(verbData)
      .filter((verbEntry: VerbDataEntry) =>
        verbEntry[1][0].tense.toLowerCase() === TENSES[pickedTense].toLowerCase())
      .map((verbEntry: VerbDataEntry) => verbEntry[1][0].infinitive)
      .filter((value: string, index: number, array: Array<string>) => array.indexOf(value) === index)
      .sort();

    setVerbsForPickedTense(filteredVerbs);
  }, [pickedTense])

  return verbsForPickedTense.map(verb => <p>{verb}</p>);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Main />
  </StrictMode>,
)
