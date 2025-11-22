import { useCallback, useEffect, useState } from "react";
import { useLoaderData } from "react-router";

import { Verb } from "../../data";
import { Box, Input, Stack, Typography } from "@mui/material";
import { AppBar, ControlButtons } from "../../components";

type FillInTheBlankLoaderData = {
  verbs: Verb[];
};

const CORRECT_TIMEOUT_TIME = 1500;
let correctTimeout: number | undefined;

const FillInTheBlank = () => {
  const { verbs } = useLoaderData<FillInTheBlankLoaderData>();

  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [currentVerbIndex, setCurrentVerbIndex] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>("");
  const [hintIndex, setHintIndex] = useState<number>(0);

  const resetFields = useCallback(() => {
    setInputValue("");
    setHintIndex(0);
    setIsCorrect(false);
    clearTimeout(correctTimeout);
  }, []);

  useEffect(() => {
    if (inputValue === verbs[currentVerbIndex].infinitive) {
      setIsCorrect(true);
      correctTimeout = setTimeout(() => {
        setCurrentVerbIndex((prevIndex) => prevIndex + 1);
        resetFields();
      }, CORRECT_TIMEOUT_TIME);
    }
  }, [inputValue]);

  return (
    <Box>
      <AppBar />
      <Box paddingTop={(theme) => theme.spacing(30)} component="section">
        <Stack justifyContent="center" alignItems="center" spacing={3}>
          <Input
            disabled={isCorrect}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            autoFocus
          />
          <Typography variant="h4">
            {verbs[currentVerbIndex]?.translation}
          </Typography>
          {hintIndex > 0 && (
            <Typography variant="h5">
              {verbs[currentVerbIndex].infinitive.substring(0, hintIndex)}
            </Typography>
          )}
        </Stack>
      </Box>
      <ControlButtons
        currentIndex={currentVerbIndex}
        setIndex={setCurrentVerbIndex}
        verbsTotal={verbs.length}
        onHintClick={() => setHintIndex((prevIndex) => prevIndex + 1)}
        onIndexButtonsClickCallback={() => resetFields()}
      />
    </Box>
  );
};

export { FillInTheBlank };
