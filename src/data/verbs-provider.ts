import verbData from "./jehle_verb_lookup.json";

type VerbObject = {
  performer: string, // add persons type
  mood: string,
  infinitive: string,
  performer_en: string, // add persons type
  tense: string,
  has_long: boolean,
  translation: string
}

export enum TENSES {
  PRESENT,
  IMPERFECT,
  FUTURE
}

export type Verb = {
  infinitive: string;
  performer: string;
  word: string;
  tense: TENSES;
  translation: string;
}

export type VerbDataEntry = [string, Array<VerbObject>];

const mapDataToDesiredObject = (verbs): Verb[] =>
  Object.entries(verbs)
    .slice(0, 20) // TODO: Remove (DEV PURPOSES)
    .map((verbEntry: VerbDataEntry) => {
      const currentVerbData = verbEntry[1][0];

      return {
        infinitive: currentVerbData.infinitive,
        performer: currentVerbData.performer,
        word: verbEntry[0],
        tense: currentVerbData.tense.toUpperCase() as TENSES,
        translation: currentVerbData.translation
      };
    });

export const VERBS_ES: Verb[] = mapDataToDesiredObject(verbData);