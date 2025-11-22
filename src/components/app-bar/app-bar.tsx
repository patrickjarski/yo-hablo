import {
  Box,
  Stack,
  styled,
  Typography,
  AppBar as AppBarMUI,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router";

import spanishFlag from "../../assets/spanish_flag.png";
import { ButtonWithBottomAnimation } from "../button";

const FlagImage = styled("img")(({ theme }) => ({
  maxHeight: theme.spacing(2),
  userSelect: "none",
}));

type NavMenuButtonProps = {
  label: string;
  href: "conjugate" | "fill-in-the-blank" | "flashcards";
};

const NavMenuButton = ({ label, href }: NavMenuButtonProps) => {
  const navigate = useNavigate();

  return (
    <ButtonWithBottomAnimation
      color="secondary"
      onClick={() => navigate(`/${href}`)}
    >
      <Typography variant="h5">{label}</Typography>
    </ButtonWithBottomAnimation>
  );
};

export const AppBar = () => {
  const isBiggerThanMd = useMediaQuery("(min-width: 900px)");

  return (
    <AppBarMUI position="static">
      <Box display="flex" justifyContent="space-between">
        <Stack direction="row" spacing={3}>
          <Typography fontStyle="italic" variant="h5">
            YO HABLO
          </Typography>
          <FlagImage src={spanishFlag} alt="Spanish flag" />
        </Stack>
        {isBiggerThanMd && (
          <Stack direction="row" spacing={2}>
            <NavMenuButton label="FLASHCARDS" href="flashcards" />
            <NavMenuButton label="FILL IN THE BLANK" href="fill-in-the-blank" />
            <NavMenuButton label="CONJUGATE" href="conjugate" />
          </Stack>
        )}
      </Box>
    </AppBarMUI>
  );
};
