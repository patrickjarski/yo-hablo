import { Verb } from "../../data";
import { FillInTheBlank } from "../fill-in-the-blank";
import { Flashcards } from "../flashcards";


type HomeProps = {
  verbs: Verb[];
};

const Home = ({ verbs }: HomeProps) => {


  return (
    <div>
      Home!
      <br/>
      {/*<FillInTheBlank verbs={verbs}/>*/}
      <Flashcards verbs={verbs}/>
    </div>
  );
};

export { Home };