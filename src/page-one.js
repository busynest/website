import { PolymerElement, html }       from '@polymer/polymer/polymer-element.js';
import { updateMetadata }             from './metadata.js';

class PageOne extends PolymerElement {

  static get is() { return 'page-one'; }

    static get properties() {
      return {

      };
    }
  
    static get observers() {
      
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
  
    disconnectedCallback() {
      super.disconnectedcCallback();
    }
  
    attributeChangedCallback() {
      super.attributeChangedCallback();
    }
  
    ready() {
      super.ready();
      console.log(this.tagName);
    }
  
    static get template() {
      return html`
  
      <style>

      </style>

      <h1>New App</h1>

      `;
        }
      }
  customElements.define(PageOne.is, PageOne);