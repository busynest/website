import { html }     from "lit";
import { LazyLoader }              from './lazy-loader';

class WrongPage extends LazyLoader {

  static get is() { return 'wrong-page'; }

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
        :host {
          display: block;
          padding: 10px 20px;
        }
      </style>

      Oops you hit a 404. <a href="">Head back to home.</a>
    `;
  }
}

customElements.define("wrong-page", WrongPage);