import { ChangeEvent, useEffect, useState } from "react";
import { TENSES, Verb } from "../../data";


type HomeProps = {
  verbs: Verb[];
};

const Home = ({ verbs }: HomeProps) => {
  const [pickedTense, setPickedTense] = useState<TENSES>(TENSES[0]);
  const [filteredVerbs, setFilteredVerbs] = useState<Verb[]>([]);
  const [currentVerbIndex, setCurrentVerbIndex] = useState<number>(0);

  useEffect(() => {
    const filtered = [...verbs]
      .filter((verb: Verb) => Object.keys(verb.conjugations).includes(pickedTense as string))
      .map((verb: Verb) => ({ infinitive: verb.infinitive, translation: verb.translation }))
    setFilteredVerbs(filtered);
  }, [pickedTense]);

  return (
    <div>
      Home!
      <select onChange={(event: ChangeEvent<TENSES>) => setPickedTense(event.target.value)}>
        {Object.values(TENSES).filter(k => typeof k === "string")
          .map((tense: string) => <option key={tense} value={tense}>{tense}</option>)}
      </select>
      <h2>{pickedTense}</h2>
      <hr/>
      <p><b>{filteredVerbs[currentVerbIndex]?.infinitive}</b></p>
      <p>{filteredVerbs[currentVerbIndex]?.translation}</p>
      <button
        onClick={() => {
          if (currentVerbIndex + 1 < filteredVerbs.length) {
            setCurrentVerbIndex(prevIndex => prevIndex + 1);
          }
        }}
      >NEXT VERB
      </button>
      <button
        onClick={() => {
          if (currentVerbIndex > 0) {
            setCurrentVerbIndex(prevIndex => prevIndex - 1)
          }
        }}
      >PREV VERB
      </button>
    </div>
  );
};

export { Home };