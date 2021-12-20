import React from "react";
import { shallow } from "enzyme";
import PokemonCard from "./PokemonCard";

describe("PokemonCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<PokemonCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
