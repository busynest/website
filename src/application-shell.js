
/**
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';

import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';

import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';

import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/iron-collapse/iron-collapse.js';
import '@polymer/iron-iconset-svg/iron-iconset-svg.js';

import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-progress/paper-progress.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-toggle-button/paper-toggle-button.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-slider/paper-slider.js';
import '@polymer/paper-button/paper-button.js';

import './myicons.js';

setPassiveTouchGestures(true);

setRootPath(PolymerElement.rootPath);

class ApplicationShell extends PolymerElement {

  static get is() { return 'application-shell'; }

  static get properties() {
    return {
      page:         { type: String, reflectToAttribute: true, observer: '_pageChanged' },
      routeData:    Object,
      subroute:     Object,
      opened:       { type: Boolean, reflectToAttribute: true },
      horizontal:   { type: Boolean },
      noAnimation:  { type: Boolean },
    };
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.page)',
    ];
  }

  constructor() {
    super();
    //this.rootPattern = (new URL(this.rootPath)).pathname;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  ready() {
    //this.addEventListener('keypress', e => this.handlePress(e));
    super.ready();
    console.log(this.tagName);
  }

  _routePageChanged(page) {
    if (!page) {
      // If no page was found in the route data, page will be an empty string.
      // Default to 'view1' in that case.
      this.page = 'one-two';
    } else if (['one-two', 'send-feedback'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = 'wrong-page';
    }

    // Close a non-persistent drawer when the page & route are changed.
    if (!this.$.drawer.persistent) {
      this.$.drawer.close();
    }
  }

  _pageChanged(page) {
    // Load page import on demand. Show 404 page if fails
    // Note: `polymer build` doesn't like string concatenation in
    // the import statement, so break it up.
    switch(page) {
      case 'one-two':
        import('./one-two.js');
        break;
      case 'send-feedback':
        import('./send-feedback.js');
        break;
      case 'wrong-page':
        import('./wrong-page.js');
        break;
    }
  }

  _toggleSearch() {
    this.$.collapse.toggle();
  }

  _getText(opened) {
    return opened ? 'Collapse' : 'Expand';
  }

  static get template() {
    return html`

    <style>
    :host {
        --app-primary-color:                  black;
        --app-secondary-color:                black;
        /*
        --app-drawer-width:                   px;
        */
        --paper-progress-container-color:     black;
        --app-drawer-content-container:{
          background-color:                   transparent;
        }
        display: block;
      }

      @media print {

      }

      @media only screen and (min-width: 600px) {

      }

      app-drawer-layout:not([narrow]) [drawer-toggle] { display: none; }

      a               { text-decoration: none; }
      app-header      {  }
      app-toolbar     {  }
      app-drawer      { overflow: auto; }
      paper-progress  { width: 100%; }
      iron-pages      { width: 100%; height: 100%; }
      paper-item      {  }
      h1              {  }
      h2              {  }

    </style>

    <!-- APP LOCATION -->
    <app-location
      route=              "{{route}}">
      url-space-regex=    "^[[rootPath]]">
    </app-location>

    <!-- APP ROUTE -->
    <app-route
      route=    "{{route}}"
      pattern=  "[[rootPattern]]:page"
      data=     "{{routeData}}"
      tail=     "{{subroute}}"></app-route>

    <!-- APP DRAWER LAYOUT -->
    <app-drawer-layout
      fullbleed>

    <!-- APP DRAWER -->
    <app-drawer
      class="colors"
      slot="drawer"
      id="drawer"
      align="end"
      fullbleed>

      <!-- MENU -->
      <div style=" height: 60px;">
      </div>

      <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
        <a name="one-two"       href="[[rootPath]]one-two"><paper-item><h2>One</h2></paper-item></a>  
        <a name="send-feedback" href="[[rootPath]]send-feedback"><paper-item><h2>Feedback</h2></paper-item></a>     
      </iron-selector>

    </app-drawer>

    <!-- APP HEADER LAYOUT -->
    <app-header-layout
      fullbleed>

      <!-- APP HEADER -->
      <app-header
        slot="header"
        fixed>

        <!-- APP-TOOLBAR #1 -->
        <app-toolbar>

          <!-- PAPER-PROGRESS -->
          <paper-progress 
            bottom-item></paper-progress> 

          <!-- BUSINESS LOGO -->
          <div>
            <h1
              class="appTitle"
              main-title>Website Application</h1>
          </div>

          <!-- SPAN DIVIDER -->
          <span class="flex" style="flex:1;"></span>

          <!-- SEARCH -->
          <paper-icon-button 
            id="trigger"
            role="button"
            icon="myicons:search"
            on-click="_toggleSearch"
            aria-expanded$="[[opened]]"
            aria-controls="collapse">[[_getText(opened)]]
          </paper-icon-button>

          <!-- PRINT -->
          <paper-icon-button 
            class="colored"
            role="button"
            onclick="window.print()"
            icon="myicons:print"></paper-icon-button>

          <!-- DRAWER TOGGLE -->
          <paper-icon-button
            drawer-toggle
            class="colored"
            role="button"
            id="printButton"
            icon="myicons:menu"></paper-icon-button>

        </app-toolbar>
      </app-header>

      <!-- BODY -->
      <main>

        <!-- SEARCH CARD -->
        <iron-collapse
          id="collapse"
          opened="{{opened}}"
          horizontal="[[horizontal]]"
          no-animation="[[noAnimation]]"
          tabindex="0">

            <paper-card>
              <!-- GOOGLE CUSTOM SEARCH -->
              <slot name="search"></slot>
            </paper-card>
        
        </iron-collapse>
            
            <paper-card>
              <!-- GOOGLE ADVERTIZMENT -->
              <slot name="advert"></slot>
            </paper-card>

        <!-- IRON PAGES -->
        <iron-pages
          class="magicPagesOne"
          role="main"
          selected="[[page]]"
          attr-for-selected="name"
          fallback-selection="wrong-page">

          <!-- PAE ONE -->
          <one-two
            name="one-two"></one-two>

          <!-- WRONG PAGE -->
          <send-feedback
            name="send-feedback"></send-feedback> 

          <!-- WRONG PAGE -->
          <wrong-page
            name="wrong-page"></wrong-page>            

        </iron-pages>
      </main>
    </app-drawer-layout>
  </app-header-layout>
  `
  }

}

customElements.define("application-shell", ApplicationShell);