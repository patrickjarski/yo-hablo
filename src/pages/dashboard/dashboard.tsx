import { Verb } from "../../data";
import { useLoaderData } from "react-router";
import { AppBar } from "../../components/app-bar";

type DashboardLoaderData = {
  verbs: Verb[];
};

const Dashboard = () => {
  const { verbs } = useLoaderData<DashboardLoaderData>();

  return (
    <AppBar />
  );
};

export { Dashboard };