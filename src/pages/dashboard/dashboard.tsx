import { Verb } from "../../data";
import { useLoaderData } from "react-router";
import { AppBar } from "../../components/app-bar";

import dashboardImage from "../../assets/landing_page.jpg";
import {Box as BoxMUI, styled} from "@mui/material";

type DashboardLoaderData = {
  verbs: Verb[];
};

const Box = styled(BoxMUI)({
  maxHeight: "65vh",
  '& img': {
    maxHeight: '65vh',
  }
})

const Dashboard = () => {
  const { verbs } = useLoaderData<DashboardLoaderData>();

  return (
    <>
      <AppBar />
      <Box display="flex" justifyContent="center" position="fixed" bottom="-50px" width="100vw">
        <img src={dashboardImage} alt="Dashboard Image" />
      </Box>
    </>
  );
};

export { Dashboard };