import { useCallback } from "react";
import { AppBar as AppBarMui, Box, styled, Typography } from "@mui/material";
import { Button } from "./button";

import arrowSvg from "../../assets/arrow.svg";
import spaceSvg from "../../assets/spacebar.svg";

type ControlButtonsProps = {
  currentIndex: number;
  setIndex: (callback: (previousIndex: number) => number) => void;
  verbsTotal: number;
  onIndexButtonsClickCallback?: () => void;
  onHintClick?: () => void;
};

const ButtonWithImage = styled(Button)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  "& img": {
    marginBottom: theme.spacing(-1),
    transition: "transform .2s ease-in-out",
    maxWidth: theme.spacing(4),
  },
  "&:hover": {
    img: {
      transform: `translateX(${theme.spacing(1)})`,
    },
  },
}));

const Previous = styled(ButtonWithImage)(({ theme }) => ({
  alignItems: "flex-start",
  "& img": {
    transform: "rotate(180deg)",
  },
  "&:hover": {
    img: {
      transform: `rotate(180deg) translateX(${theme.spacing(1)})`,
    },
  },
}));

const Next = styled(ButtonWithImage)({
  alignItems: "flex-end",
});

const Hint = styled(ButtonWithImage)(({ theme }) => ({
  alignItems: "center",
  "& img": {
    marginBottom: theme.spacing(0),
    maxWidth: theme.spacing(3),
  },
  "&:hover": {
    img: {
      transform: `translateY(${theme.spacing(-1)})`,
    },
  },
}));

export const ControlButtons = (props: ControlButtonsProps) => {
  const {
    currentIndex,
    setIndex,
    verbsTotal,
    onIndexButtonsClickCallback,
    onHintClick,
  } = props;

  const onNextClick = useCallback(
    (currentIndex: number) => {
      if (currentIndex + 1 < verbsTotal) {
        setIndex((prevIndex: number) => prevIndex + 1);
        onIndexButtonsClickCallback?.();
      }
    },
    [setIndex, onIndexButtonsClickCallback, verbsTotal],
  );

  const onPrevClick = useCallback(
    (currentIndex: number) => {
      if (currentIndex > 0) {
        setIndex((prevIndex: number) => prevIndex - 1);
        onIndexButtonsClickCallback?.();
      }
    },
    [setIndex, onIndexButtonsClickCallback],
  );

  return (
    <AppBarMui position="fixed" sx={{ top: "auto", bottom: 0 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Previous color="secondary" onClick={() => onPrevClick(currentIndex)}>
          <img src={arrowSvg} alt="arrow" />
          <Typography variant="h5">prev</Typography>
        </Previous>
        {onHintClick && (
          <Hint onClick={() => onHintClick()} color="secondary">
            <img src={spaceSvg} alt="arrow" />
            <Typography variant="h5">hint</Typography>
          </Hint>
        )}
        <Next color="secondary" onClick={() => onNextClick(currentIndex)}>
          <img src={arrowSvg} alt="arrow" />
          <Typography variant="h5">next</Typography>
        </Next>
      </Box>
    </AppBarMui>
  );
};
