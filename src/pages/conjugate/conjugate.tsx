import React, { useCallback, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import {AppBar as AppBarMui, Box, Typography} from "@mui/material";

import { TENSES, Verb } from "../../data";
import { AppBar } from "../../components/app-bar";
import { ControlButtons } from "../../components/button";

type ConjugateLoaderData = {
  verbs: Verb[];
}



const Conjugate = () => {
  const { verbs } = useLoaderData<ConjugateLoaderData>();

  const [currentVerbIndex, setCurrentVerbIndex] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>("");
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [hintIndex, setHintIndex] = useState<number>(0);

  const resetForm = useCallback(() => {
    setInputValue("");
    setHintIndex(0);
    setIsCorrect(false);
  }, [])

  useEffect(() => {
    if (verbs.length && inputValue === verbs[currentVerbIndex].conjugations["PRESENT"][0].conjugatedVerb) {
      setIsCorrect(true);
    }
  }, [inputValue, verbs.length])

  useEffect(() => {
    setInputValue(verbs[currentVerbIndex].conjugations["PRESENT"][0].conjugatedVerb.substring(0, hintIndex))
  }, [hintIndex])

  if (!verbs.length) {
    return null;
  }

  return (
    <Box>
      <AppBar />
      <h3><b>{verbs[currentVerbIndex].infinitive}</b></h3>
      <p>
        {verbs[currentVerbIndex].conjugations["PRESENT"][0].performer}
        <input disabled={isCorrect} value={inputValue} onChange={e => setInputValue(e.target.value)}/>
      </p>
      <ControlButtons
        currentIndex={currentVerbIndex}
        setIndex={setCurrentVerbIndex}
        verbsTotal={verbs.length}
        onIndexButtonsClickCallback={() => resetForm()}
        onHintClick={() => setHintIndex(prevIndex => prevIndex + 1)}
      />
    </Box>
  );
}

export { Conjugate };