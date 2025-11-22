import { useCallback, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import {
  Box,
  Input as InputMui,
  Stack,
  styled,
  Typography,
} from "@mui/material";

import { Verb } from "../../data";
import { AppBar } from "../../components/app-bar";
import { ControlButtons } from "../../components/button";

type ConjugateLoaderData = {
  verbs: Verb[];
};

const Input = styled(InputMui)({
  maxWidth: "300px",
  textAlign: "center",
});

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
  }, []);

  useEffect(() => {
    if (
      verbs.length &&
      inputValue ===
        verbs[currentVerbIndex].conjugations["PRESENT"][0].conjugatedVerb
    ) {
      setIsCorrect(true);
    }
  }, [inputValue, verbs.length]);

  useEffect(() => {
    setInputValue(
      verbs[currentVerbIndex].conjugations[
        "PRESENT"
      ][0].conjugatedVerb.substring(0, hintIndex),
    );
  }, [hintIndex]);

  if (!verbs.length) {
    return null;
  }

  return (
    <Box>
      <AppBar />
      <Box paddingTop={(theme) => theme.spacing(30)} component="section">
        <Stack justifyContent="center" alignItems="center">
          <Typography variant="h4" textAlign="center" component="h4">
            {verbs[currentVerbIndex].infinitive}
          </Typography>
          <Typography variant="h5" textAlign="center" component="h5">
            {verbs[currentVerbIndex].conjugations["PRESENT"][0].performer}
          </Typography>
          <Input
            disabled={isCorrect}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            autoFocus
          />
        </Stack>
      </Box>

      <ControlButtons
        currentIndex={currentVerbIndex}
        setIndex={setCurrentVerbIndex}
        verbsTotal={verbs.length}
        onIndexButtonsClickCallback={() => resetForm()}
        onHintClick={() => setHintIndex((prevIndex) => prevIndex + 1)}
      />
    </Box>
  );
};

export { Conjugate };
