import { PolymerElement, html }       from "@polymer/polymer/polymer-element.js"
import { updateMetadata }       from './metadata.js';

class WrongPage extends PolymerElement {

  static get is() { return 'wrong-page'; }

  static get properties() {
    return {

    };
      
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    updateMetadata({
      title: 'Wrong Page',
      description: 'Help ME',
      url: document.location.href
    });
  }

  ready() {
    super.ready();
    console.log(this.tagName);
  }

  static get template() {
    return html`
      <style>
        :host {
          display: block;
          padding: 10px 20px;
        }
      </style>

      Oops you hit a 404. <a href="[[rootPath]]">Head back to home.</a>
    `;
  }
}

customElements.define("wrong-page", WrongPage);