
import { LitElement, html }         from '@polymer/lit-element';
import { AppView }                  from './app-view.js';
import { updateMetadata }           from './metadata.js';

class SendFeedback extends AppView {

  static get is() { return 'send-feedback'; }

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
      title: '',
      description: '',
      url: document.location.href
    });
  }

  ready() {
    super.ready();
  }

  _render() {
    return html`

    <h1>Feedback</h1>

  `;
  }

}

customElements.define("send-feedback", SendFeedback);