import {Element as PolymerElement}
  from "../node_modules/@polymer/polymer/polymer-element.js"

export class HeadNavigation extends PolymerElement {

  static get is() { return 'head-navigation'; }

  static get properties() {
    return {

    };
  }

  //static get observers() {
  //    return [ 'thingCountChanged' ];
  //}

  constructor() {
  super();
  //console.log('four-square constructor!');
  }

  connectedCallback() {
    super.connectedCallback();
    console.log('head-navigation connected!');
  }

  ready() {
    super.ready();
    //this.addEventListener('keypress', e => this.handlePress(e));
    //var sq = new OneSquare();
    console.log('head-navigation ready!');
  }

  static get template() {
    return `

    	<style>
        .head {
          background-color: darkgrey;
        }
    	</style>

      <div class="head"></div>
	
      `
  }

}

customElements.define('head-navigation', HeadNavigation);