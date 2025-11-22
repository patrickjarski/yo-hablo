import React, { useState } from "react";
import { Verb } from "../../data";
import { useLoaderData } from "react-router";
import { Box, Button, Stack, Typography } from "@mui/material";
import { AppBar, ControlButtons } from "../../components";

type FlashcardsLoaderData = {
  verbs: Verb[];
};

const Flashcards = () => {
  const { verbs } = useLoaderData<FlashcardsLoaderData>();

  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState<number>(0);
  const [shouldShowEnglishTranslation, setShouldShowEnglishTranslation] =
    useState<boolean>(false);

  return (
    <Box>
      <AppBar />
      <Box paddingTop={(theme) => theme.spacing(30)} component="section">
        <Stack justifyContent="center" alignItems="center">
          <Typography variant="h4">
            {shouldShowEnglishTranslation
              ? verbs[currentFlashcardIndex].translation
              : verbs[currentFlashcardIndex].infinitive}
          </Typography>
          <Button
            onClick={() =>
              setShouldShowEnglishTranslation((prevState) => !prevState)
            }
          >
            <Typography variant="body2" color="textSecondary">
              {shouldShowEnglishTranslation
                ? "SHOW ORIGINAL"
                : "SHOW TRANSLATION"}
            </Typography>
          </Button>
        </Stack>
      </Box>
      <ControlButtons
        currentIndex={currentFlashcardIndex}
        setIndex={setCurrentFlashcardIndex}
        verbsTotal={verbs.length}
      />
    </Box>
  );
};

export { Flashcards };
