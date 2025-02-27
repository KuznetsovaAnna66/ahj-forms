/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./src/components/button/Button.js

class Button {
  constructor() {
    this.element = document.createElement("button");
    this.element.classList.add("btn");
    this.element.type = "button";
    this.element.textContent = "Click to toggle popover";
  }
  setEventClick(callback) {
    this.element.addEventListener("click", callback);
  }
}
;// ./src/components/popover/Popover.js


// <div class="popover hidden">
//   <h3 class="popover__title">Popover title</h3>
//   <p class="popover__text">And here's some amazing content. It's very engaging. Right?</p>
//   <div class="popover__arrow"></div>
// </div>

class Popover {
  constructor() {
    this.element = document.createElement("div");
    this.element.classList.add("popover", "hidden");
    this.titleElement = document.createElement("h3");
    this.titleElement.classList.add("popover__title");
    this.titleElement.textContent = "Popover title";
    this.textElement = document.createElement("p");
    this.textElement.classList.add("popover__text");
    this.textElement.textContent = "And here's some amazing content. It's very engaging. Right?";
    this.arrowElement = document.createElement("div");
    this.arrowElement.classList.add("popover__arrow");
    this.element.append(this.titleElement, this.textElement, this.arrowElement);
  }
  changeVisibility() {
    this.element.classList.toggle("hidden");
  }
  setPosition(target) {
    const {
      top,
      left
    } = target.getBoundingClientRect();
    this.element.style.top = `${top - this.element.offsetHeight - 7}px`;
    this.element.style.left = `${left - (this.element.offsetWidth - target.offsetWidth) / 2}px`;
  }
}
;// ./src/js/App.js


class App {
  constructor() {
    this.container = document.querySelector(".container");
    this.button = new Button();
    this.popover = new Popover();
  }
  init() {
    this.container.append(this.button.element);
    this.container.append(this.popover.element);
    this.button.setEventClick(this.onBtnClick.bind(this));
  }
  onBtnClick(event) {
    this.popover.changeVisibility();
    this.popover.setPosition(event.target);
  }
}
;// ./src/index.js


document.addEventListener("DOMContentLoaded", () => {
  new App().init();
});
/******/ })()
;