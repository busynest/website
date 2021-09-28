import { html }           from 'lit';
import { LazyLoader }                 from './lazy-loader';

class PageOne extends LazyLoader {

  static get is() { return 'page-one'; }

    static get properties() {
      return {

      };
    }
  
    constructor() {
      super();
    }

    render() {
      return html`
  
      <style>

      </style>

      <mwc-icon></mwc-icon>

      <h1>New App</h1>



      `;
        }
      }
  customElements.define(PageOne.is, PageOne);