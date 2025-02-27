/**
 * @jest-environment jsdom
 */
import App from "../js/App";

describe("check tooltip of the form", () => {
  const container = document.createElement("div");
  container.className = "container";
  document.body.append(container);

  new App().init();

  const button = container.querySelector(".btn");
  const popover = container.querySelector(".popover");

  test("no click happened", async () => {
    expect(popover.classList.contains("hidden")).toBe(true);
  });

  test("after first click on the button", async () => {
    button.click();
    expect(popover.classList.contains("hidden")).toBe(false);
  });

  test("after second click on the button", async () => {
    button.click();
    expect(popover.classList.contains("hidden")).toBe(true);
  });
  test("after third click on the button", async () => {
    button.click();
    expect(popover.classList.contains("hidden")).toBe(false);
  });
});
