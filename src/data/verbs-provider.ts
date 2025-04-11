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
  FUTURE,
  IMPERFECT,
  PRESENT,
  PRETERITE,
  PAST_PARTICIPLE,
  PRESENT_PERFECT,
  FUTURE_PERFECT,
  PAST_PERFECT,
  PRETERITE_ARCHAIC,
  CONDITIONAL_PERFECT,
  GERUND,
  CONDITIONAL,
  INFINITIVE
}

type Conjugation = {
  performer: string;
  conjugatedVerb: string;
}

export type Verb = {
  infinitive: string;
  translation: string;
  conjugations: {
    [key: TENSES]: Conjugation
  }
}

export type VerbDataEntry = [string, Array<VerbObject>];

const upperCase = (str: string) => str
  .replace(" ", "_")
  .replace(/\(|\)/g, "")
  .toUpperCase();

const mapDataToDesiredObject = (verbs): Array<Verb> =>
  Object.values(Object.entries(verbs)
    .slice(0, 500)
    .reduce((acc, curr: VerbDataEntry) => {
      const currentInfinitive = curr[1].find(conjugation => !!conjugation.infinitive)?.infinitive;

      if (!acc[currentInfinitive]) {
        acc[currentInfinitive] = { infinitive: currentInfinitive, conjugations: {} };
      }

      curr[1].forEach(conjugation => {
        const currentTenseCamelized = upperCase(conjugation.tense);
        if (!acc[currentInfinitive].conjugations[currentTenseCamelized]) {
          acc[currentInfinitive].conjugations[currentTenseCamelized] = [];
        }

        if (!acc[currentInfinitive].translation) {
          acc[currentInfinitive].translation = conjugation.translation;
        }

        const verbConjucation = {
          performer: conjugation.performer,
          conjugatedVerb: curr[0]
        }

        acc[currentInfinitive].conjugations[currentTenseCamelized].push(verbConjucation);
      })

      return acc;
    }, {}));


export const VERBS_ES: Array<Verb> = mapDataToDesiredObject(verbData);