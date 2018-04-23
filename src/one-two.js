import { PolymerElement }       from '@polymer/polymer/polymer-element.js';
import { updateMetadata }       from './metadata.js';

export class OneTwo extends PolymerElement {

  static get is() { return 'one-two'; }

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
        title: 'Page One',
        description: 'Best Page',
        url: document.location.href
      });
    }
  
    ready() {
      super.ready();
      console.log(this.tagName);
    }
  
    static get template() {
      return `
  
      <style>

      </style>

      <h1>New App</h1>

      `;
        }
      }
  customElements.define("one-two", OneTwo);