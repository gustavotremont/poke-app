import React from "react";
import { shallow } from "enzyme";
import CreatePokemon from "./CreatePokemon";

describe("CreatePokemon", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CreatePokemon />);
    expect(wrapper).toMatchSnapshot();
  });
});
