import { html } from 'lit';
import { LazyLoader } from './lazy-loader';
class SendFeedback extends LazyLoader {
    static get is() { return 'send-feedback'; }
    static get properties() {
        return {};
    }
    constructor() {
        super();
    }
    render() {
        return html `

    <h1>Feedback</h1>

  `;
    }
}
customElements.define("send-feedback", SendFeedback);
//# sourceMappingURL=feedback.js.map