var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from './store';
import { LazyLoader } from './lazy-loader';
let HomePage = class HomePage extends connect(store)(LazyLoader) {
    constructor() {
        super();
    }
    firstUpdated() {
    }
    static get styles() {
        return css `

    :host {
         grid-template-columns: 1fr; 
         grid-gap:  16px;
         max-width: 1000px; 
      }

`;
    }
    render() {
        return html `


    `;
    }
};
HomePage = __decorate([
    customElement('home-page')
], HomePage);
export { HomePage };
//# sourceMappingURL=home.js.map