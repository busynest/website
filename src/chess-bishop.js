import {Element as PolymerElement}
  from "../node_modules/@polymer/polymer/polymer-element.js"

import "../node_modules/@polymer/iron-iconset-svg/iron-iconset-svg.js"

export class ChessBishop extends PolymerElement {

  static get is() { return 'chess-bishop'; }

  static get properties() {
    return {
      myWidth:  Number,
    };
  }

  constructor() {
    super();

  }

  ready() {
    super.ready();
    console.log('Bishop Ready!');
    //this.width    = 500;
   // this.height   = 40;
  }

  static get template() {
    return `
    <style>
      :host {
        
      }
    </style>

    <svg width="[[myWidth]]" height="[[myWidth]]">
      <polygon points="100,10 40,198 190,78 10,78 160,198"
      style="fill:lime;stroke:purple;stroke-width:5;fill-rule:evenodd;" />
    </svg>

  `
  }

}

customElements.define('chess-bishop', ChessBishop);