
import { LitElement } from 'lit';
import { property }   from 'lit/decorators.js';

export class LazyLoader extends LitElement {

  @property({type: Boolean}) public active: any = false;
  shouldUpdate() { return this.active; } // Only render this page, if it is actually visible.
  
}

declare global {
  interface HTMLElementTagNameMap {
    'lazy-loader': LazyLoader;
  }
}