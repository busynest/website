import {Element as PolymerElement}
  from "../node_modules/@polymer/polymer/polymer-element.js"

export class SquareSpace extends PolymerElement {

  constructor() {
  super();
  //console.log('square-space was created!');
  }

  ready() {
    super.ready();
    console.log('Square Ready!');
  }

  static get template() {
    return`


      `
  }
  static get is() { return 'square-space'; }

  static get properties() {
          return {

        };

          };
}

customElements.define('square-space', SquareSpace);