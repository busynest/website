
import { LitElement, html, css, TemplateResult, CSSResult } from 'lit';
import { customElement, property }    from 'lit/decorators.js';

@customElement('snack-bar')
export class SnackBar extends LitElement {
  
  @property({type: Boolean}) public active = false;

  static get styles():CSSResult { return css`
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
    `
  }

  protected render():TemplateResult {
    return html`
    <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
      'snack-bar': SnackBar;
  }
}