var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let SnackBar = class SnackBar extends LitElement {
    constructor() {
        super(...arguments);
        this.active = false;
    }
    static get styles() {
        return css `
      :host {
        display:              block;
        position:             fixed;
        bottom:               0;
        left:                 0;
        right:                0;
        padding:              12px;
        background-color:     var(--app-white-color);
        color:                var(--app-black-color);
        box-shadow:           0 0 10px rgba(0, 0, 0, 0.2);
        text-align:           center;
        will-change:          transform;

        transform:            translate3d(0, 100%, 0);
        -webkit-transform:    translate3d(0, 100%, 0);

        transition-property:          visibility, transform;
        -webkit-transition-property:  visibility, transform;

        transition-duration:          0.2s;
        -webkit-transition-duration:  0.2s;

        visibility:           hidden;
      }
      :host[active] {
        visibility:           visible;
        
        transform:            translate3d(0, 0, 0);
        -webkit-transform:    translate3d(0, 0, 0);

      }
      @media (min-width: 460px) {
        snack-bar {
          width:              320px;
          margin:             auto;
        }
      }
    `;
    }
    render() {
        return html `
    <slot></slot>
    `;
    }
};
__decorate([
    property({ type: Boolean })
], SnackBar.prototype, "active", void 0);
SnackBar = __decorate([
    customElement('snack-bar')
], SnackBar);
export { SnackBar };
//# sourceMappingURL=offline.js.map