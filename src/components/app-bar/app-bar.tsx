import { Box, Stack, styled, Typography, AppBar as AppBarMUI } from "@mui/material";
import spanishFlag from "../../assets/spanish_flag.png";

const Button = styled('button')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  backgroundColor: theme.palette.primary.main,
  border: 'none',
  color: theme.palette.secondary.main,
  '&:hover': {
    '&:after': {
      transform: "scaleX(1)"
    },
    backgroundColor: theme.palette.primary.main,
    cursor: 'pointer'
  },
  '&::after': {
    display: "block",
    content: '""',
    borderBottom: `solid 1px ${theme.palette.secondary.main}`,
    transform: "scaleX(0)",
    transition: "transform 250ms ease-in-out"
  },
}))

const FlagImage = styled('img')(({ theme }) => ({
  maxHeight: theme.spacing(2),
  userSelect: "none",
}))

type NavMenuButtonProps = {
  label: string;
}

const NavMenuButton = ({ label }: NavMenuButtonProps) => (
  <Button variant="text" color="secondary">
    <Typography variant="h5">{label}</Typography>
  </Button>
)

export const AppBar = () => (
  <AppBarMUI position="static">
    <Box display="flex" justifyContent="space-between">
      <Stack direction="row" spacing={3}>
        <Typography fontStyle="italic" variant="h5">YO HABLO</Typography>
        <FlagImage src={spanishFlag} alt="Spanish flag" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <NavMenuButton label="FLASHCARDS" />
        <NavMenuButton label="FILL IN THE BLANK" />
        <NavMenuButton label="CONJUGATE" />
      </Stack>
    </Box>
  </AppBarMUI>
)