import React from "react";
import { Verb } from "../../data";
import { useLoaderData } from "react-router";

type ConjugateLoaderData = {
  verbs: Verb[];
}

const Conjugate = () => {
  const { verbs } = useLoaderData<ConjugateLoaderData>();

  console.log(verbs);

  return "CONJUGATE";
}