import React, { useState } from "react";
import { Verb } from "../../data";

type FlashcardsProps = {
  verbs: Verb[];
}

const Flashcards = (props: FlashcardsProps) => {
  const { verbs } = props;

  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState<number>(0);
  const [shouldShowEnglishTranslation, setShouldShowEnglishTranslation] = useState<boolean>(false);
  const [currentVerbIndex, setCurrentVerbIndex] = useState<number>(0);

  return (
    <div>
      <h2>FLASHCARDS</h2>
      {shouldShowEnglishTranslation ? <p>{verbs[currentFlashcardIndex].translation}</p> :
        <p><b>{verbs[currentFlashcardIndex].infinitive}</b></p>}

      <button
        onClick={() => {
          setShouldShowEnglishTranslation(prevState => !prevState)
        }}
      >{
        shouldShowEnglishTranslation ? "SHOW ORIGINAL" : "SHOW TRANSLATION"
      }</button>
      <br/>
      <button
        onClick={() => {
          if (currentFlashcardIndex + 1 < verbs.length) {
            setCurrentFlashcardIndex(prevIndex => prevIndex + 1);
          }
        }}
      >NEXT VERB
      </button>
      <button
        onClick={() => {
          if (currentFlashcardIndex > 0) {
            setCurrentFlashcardIndex(prevIndex => prevIndex - 1)
          }
        }}
      >PREV VERB
      </button>

    </div>
  );
}

export { Flashcards };