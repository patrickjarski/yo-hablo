import { Verb } from "../../data";
import { Flashcards } from "../flashcards";
import { Outlet, useLoaderData } from "react-router";


type DashboardLoaderData = {
  verbs: Verb[];
};

const Dashboard = () => {
  const { verbs } = useLoaderData<DashboardLoaderData>();

  return (
    <div>
      Home!
      <br/>

      <Outlet/>
    </div>
  );
};

export { Dashboard };