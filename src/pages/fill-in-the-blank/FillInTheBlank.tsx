import React, { useCallback, useEffect, useState } from "react";
import { Verb } from "../../data";

type FillInTheBlankProps = {
  verbs: Verb[];
};

const FillInTheBlank = (props: FillInTheBlankProps) => {
  const { verbs } = props;

  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [currentVerbIndex, setCurrentVerbIndex] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>("");
  const [hintIndex, setHintIndex] = useState<number>(0);

  const resetFields = useCallback(() => {
    setInputValue("");
    setHintIndex(0);
    setIsCorrect(false);
  }, [])

  useEffect(() => {
    if (inputValue === verbs[currentVerbIndex].infinitive) {
      setIsCorrect(true);
    }
  }, [inputValue]);

  return (
    <div>
      <h2>FILL IN THE BLANK</h2>
      <input disabled={isCorrect} onChange={e => setInputValue(e.target.value)} value={inputValue}/>
      {isCorrect && <p>CORRECT!</p>}
      <p>{verbs[currentVerbIndex]?.translation}</p>
      <br/>
      <button
        disabled={isCorrect}
        onClick={() => {
          setHintIndex(prevIndex => prevIndex + 1)
        }}
      >NEXT HINT
      </button>
      {hintIndex > 0 && <p>{verbs[currentVerbIndex].infinitive.substring(0, hintIndex)}</p>}
      <br/>
      <button
        onClick={() => {
          if (currentVerbIndex + 1 < verbs.length) {
            resetFields();
            setCurrentVerbIndex(prevIndex => prevIndex + 1);
          }
        }}
      >NEXT VERB
      </button>
      <button
        onClick={() => {
          if (currentVerbIndex > 0) {
            resetFields();
            setCurrentVerbIndex(prevIndex => prevIndex - 1)
          }
        }}
      >PREV VERB
      </button>
    </div>
  )
}

export { FillInTheBlank };