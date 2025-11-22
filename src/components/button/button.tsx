import { styled } from "@mui/material";

export const Button = styled("button")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  backgroundColor: theme.palette.primary.main,
  border: "none",
  color: theme.palette.secondary.main,
  cursor: "pointer",
}));

export const ButtonWithBottomAnimation = styled(Button)(({ theme }) => ({
  padding: theme.spacing(0, 1),
  backgroundColor: theme.palette.primary.main,
  border: "none",
  color: theme.palette.secondary.main,
  "&:hover": {
    "&:after": {
      transform: "scaleX(1)",
    },
    backgroundColor: theme.palette.primary.main,
  },
  "&::after": {
    display: "block",
    content: '""',
    borderBottom: `solid 1px ${theme.palette.secondary.main}`,
    transform: "scaleX(0)",
    transition: "transform 250ms ease-in-out",
  },
}));
