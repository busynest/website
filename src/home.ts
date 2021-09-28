import { html, css, TemplateResult, CSSResult } from 'lit';
import { customElement }              from 'lit/decorators.js';
import { connect }                    from 'pwa-helpers/connect-mixin';
import { store }                      from './store';
import { LazyLoader }                 from './lazy-loader';

@customElement('home-page')
export class HomePage extends connect(store)(LazyLoader) {

  constructor() {
    super();
  }

   // stateChanged(state: RootState) {
    // this.user = state.account!.user;
   // }

  protected firstUpdated(){

  }

static get styles():CSSResult { return css`

    :host {
         grid-template-columns: 1fr; 
         grid-gap:  16px;
         max-width: 1000px; 
      }

` }

protected render():TemplateResult {
  return html`


    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
      'home-page': HomePage;
  }
}

