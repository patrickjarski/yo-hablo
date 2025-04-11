import { Verb } from "../../data";
import { FillInTheBlank } from "../fill-in-the-blank";


type HomeProps = {
  verbs: Verb[];
};

const Home = ({ verbs }: HomeProps) => {


  return (
    <div>
      Home!
      <br/>
      <FillInTheBlank verbs={verbs}/>
    </div>
  );
};

export { Home };