
import { PolymerElement, html }       from '@polymer/polymer/polymer-element.js';
import { updateMetadata }           from './metadata.js';

class SendFeedback extends PolymerElement {

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

  static get template() {
    return html`

    <h1>Feedback</h1>

  `;
  }

}

customElements.define("send-feedback", SendFeedback);