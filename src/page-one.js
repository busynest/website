import { LitElement, html }           from '@polymer/lit-element';
import { AppView }                    from './app-view.js';
import { updateMetadata }             from './metadata.js';

import {Icon} from '../node_modules/@material/mwc-icon/mwc-icon.js';


class PageOne extends AppView {

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
  
    _render() {
      return html`
  
      <style>

      </style>

      <mwc-icon></mwc-icon>

      <h1>New App</h1>



      `;
        }
      }
  customElements.define(PageOne.is, PageOne);