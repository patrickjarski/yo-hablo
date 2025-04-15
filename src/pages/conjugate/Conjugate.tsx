import React, { useCallback, useEffect, useState } from "react";
import { TENSES, Verb } from "../../data";
import { useLoaderData } from "react-router";

type ConjugateLoaderData = {
  verbs: Verb[];
}

const Conjugate = () => {
  const { verbs } = useLoaderData<ConjugateLoaderData>();

  const [filteredVerbs, setFilteredVerbs] = useState<Verb[]>([]);
  const [currentVerbIndex, setCurrentVerbIndex] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>("");
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const resetForm = useCallback(() => {
    setInputValue("");
    setIsCorrect(false);
  }, [])

  useEffect(() => {
    const filtered = verbs.filter(verb => Object.keys(verb.conjugations).includes("PRESENT"));

    setFilteredVerbs(filtered);
  }, [verbs])

  useEffect(() => {
    if (filteredVerbs.length && inputValue === filteredVerbs[currentVerbIndex].conjugations["PRESENT"][0].conjugatedVerb) {
      setIsCorrect(true);
    }
  }, [inputValue])

  if (!filteredVerbs.length) {
    return null;
  }

  return (
    <div>
      <h3><b>{filteredVerbs[currentVerbIndex].infinitive}</b></h3>
      <p>
        {filteredVerbs[currentVerbIndex].conjugations["PRESENT"][0].performer}
        <input disabled={isCorrect} value={inputValue} onChange={e => setInputValue(e.target.value)}/>
      </p>

      <br/>
      <button
        onClick={() => {
          if (currentVerbIndex + 1 < verbs.length) {
            setCurrentVerbIndex(prevIndex => prevIndex + 1);
            resetForm();
          }
        }}
      >NEXT VERB
      </button>
      <button
        onClick={() => {
          if (currentVerbIndex > 0) {
            setCurrentVerbIndex(prevIndex => prevIndex - 1)
            resetForm();
          }
        }}
      >PREV VERB
      </button>
    </div>
  );
}

export { Conjugate };