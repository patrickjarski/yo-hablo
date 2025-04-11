import { ChangeEvent, useEffect, useState } from "react";
import { TENSES, Verb } from "../../data";


type HomeProps = {
  verbs: Verb[];
};

const Home = ({ verbs }: HomeProps) => {
  const [currentVerbIndex, setCurrentVerbIndex] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    if (inputValue === verbs[currentVerbIndex].infinitive) {
      setInputValue("");
      setCurrentVerbIndex(prevIndex => prevIndex + 1);
    }
  }, [inputValue]);

  return (
    <div>
      Home!
      <br/>
      <input onChange={e => setInputValue(e.target.value)} value={inputValue}/>
      <p>{verbs[currentVerbIndex]?.translation}</p>
      <button
        onClick={() => {
          if (currentVerbIndex + 1 < verbs.length) {
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