import React from "react";
import { render, screen, act } from "@testing-library/react";
import App from "../components/App";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        icon_url: "http://wwer.png",
        value: "Joke Text",
      }),
  })
);

describe("App", () => {
  it("loads the joke on mount", async () => {
    await act(async () => render(<App />));
    expect(screen.getByText("Joke Text").innerHTML).toMatch("Joke Text");
  });
});
