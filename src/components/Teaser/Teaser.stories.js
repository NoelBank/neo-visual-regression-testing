import React from "react";
import { storiesOf } from "@storybook/react";
import { Teaser } from "./Teaser";

let stories = storiesOf("Teaser", module);

stories.add("Default", () => <Teaser headline={"Hallo Max"} />);
