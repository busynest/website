import { LitElement, html }     from "@polymer/lit-element";
import { AppView }              from './app-view.js';
import { updateMetadata }       from './metadata.js';

class WrongPage extends AppView {

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

  _render() {
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