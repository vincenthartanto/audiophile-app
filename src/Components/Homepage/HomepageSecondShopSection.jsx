import React from "react";

import Zx9SpeakerCard from "../Zx9SpeakerCard";

import Zx7SpeakerCard from "../Zx7SpeakerCard";

import YX1Earphonecard from "../YX1Earphonecard";
export default function HomepageSecondShopSection() {
  return (
    <section className="space-y-8 p-8">
      <Zx9SpeakerCard></Zx9SpeakerCard>
      <Zx7SpeakerCard></Zx7SpeakerCard>

      <YX1Earphonecard></YX1Earphonecard>
    </section>
  );
}
