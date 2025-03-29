import { ChangeEvent, useEffect, useState } from "react";
import { TENSES, Verb } from "../../data";


type HomeProps = {
  verbs: Verb[];
};

const Home = ({ verbs }: HomeProps) => {
  const [pickedTense, setPickedTense] = useState<TENSES>(TENSES[0]);
  const [filteredVerbs, setFilteredVerbs] = useState<Verb[]>([]);

  useEffect(() => {
    const filtered = [...verbs].filter(verb => verb.tense === pickedTense);
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
      {filteredVerbs.map(verb => <p><b>{verb.performer}</b> {verb.word}</p>)}
    </div>
  );
};

export { Home };