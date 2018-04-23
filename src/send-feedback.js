
import { PolymerElement }       from '@polymer/polymer/polymer-element.js';
import { updateMetadata }       from './metadata.js';

export class SendFeedback extends PolymerElement {

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
    return `

  `
  }

}

customElements.define("send-feedback", SendFeedback);