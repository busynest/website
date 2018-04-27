import {Element as PolymerElement}
  from "../node_modules/@polymer/polymer/polymer-element.js"

import "../node_modules/@polymer/iron-iconset-svg/iron-iconset-svg.js"

export class ChessRook extends PolymerElement {

  static get is() { return 'chess-rook'; }

  static get properties() {
          return {
            life: { type: Number, observer: '_pageChanged', notify: true }
          };
   }

   static get observers() {
      
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedcCallback();
  }

  attributeChangedCallback() {
    super.attributeChangedCallback();
  }

  ready() {
    super.ready();
    //this.addEventListener('keypress', e => this.handlePress(e));
  }

  static get template() {
    return`
    <style>
      :host {
        
      }

      .rook {
        background-color:           green;
        display:                    grid;
        grid-template-columns:      1fr;
        height:                     100%;
        width:                      100%;
      }

      .myPath {
        background-color: black;
        -webkit-clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
        clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
      }

    </style>

        <svg class="myPath" width="25" height="25" xmlns="http://www.w3.org/2000/svg">
          <g id="arrow-back">
            <path id="svg_1" d="m1.995,10.55105l8.02134,0l2.47866,-8.02131l2.47866,8.02131l8.02134,0l-6.48939,4.95738l2.47879,8.02131l-6.48939,-4.95752l-6.48939,4.95752l2.47879,-8.02131l-6.48939,-4.95738z" stroke-width="1.5" stroke="#000" fill="#fff"/>
          </g>
        </svg>

  `
  }

}

customElements.define('chess-rook', ChessRook);

//        <img src="../img/queen.svg" alt="Rook" height="auto" width="auto">