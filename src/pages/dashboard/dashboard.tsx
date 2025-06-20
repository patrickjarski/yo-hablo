import { Verb } from "../../data";
import { Flashcards } from "../flashcards";
import { useLoaderData } from "react-router";
import {AppBar, Container, styled, Typography, Box, Stack, Button as ButtonMUI} from "@mui/material";


type DashboardLoaderData = {
  verbs: Verb[];
};

const Button = styled(ButtonMUI)(({ theme }) => ({
  padding: theme.spacing(0, 1),
  color: theme.palette.secondary.main,
  '&:hover': {
    '&:after': {
      transform: "scaleX(1)"
    },
    backgroundColor: theme.palette.primary.main
  },
  '&::after': {
    display: "block",
    content: '""',
    borderBottom: `solid 1px ${theme.palette.secondary.main}`,
    transform: "scaleX(0)",
    transition: "transform 250ms ease-in-out"
  },
}))

type NavMenuButtonProps = {
  label: string;
}

const NavMenuButton = ({ label }: NavMenuButtonProps) => (
  <Button variant="text" color="secondary">
    <Typography variant="h5">{label}</Typography>
  </Button>
)

const Dashboard = () => {
  const { verbs } = useLoaderData<DashboardLoaderData>();

  return (
    <AppBar position="static">
      <Box display="flex" justifyContent="space-between">
        <Typography fontStyle="italic" variant="h5">YO HABLO</Typography>
        <Stack direction="row" spacing={2}>
          <NavMenuButton label="FLASHCARDS" />
          <NavMenuButton label="FILL IN THE BLANK" />
          <NavMenuButton label="CONJUGATE" />
        </Stack>
      </Box>
    </AppBar>
  );
};

export { Dashboard };