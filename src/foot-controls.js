import {Element as PolymerElement}
  from "../node_modules/@polymer/polymer/polymer-element.js"

export class FootControls extends PolymerElement {

  static get is() { return 'foot-controls'; }

  static get properties() {
    return {

    };
  }

  //static get observers() {
  //    return [ 'thingCountChanged' ];
  //}

  constructor() {
  super();
  }

  connectedCallback() {
    super.connectedCallback();
    console.log('foot-controls connected!');
  }

  ready() {
    super.ready();
    console.log('foot-controls ready!');
  }

  static get template() {
    return `

    	<style>

    	</style>

      <div>hello</div>
	
      `
  }

}

customElements.define('foot-controls', FootControls);