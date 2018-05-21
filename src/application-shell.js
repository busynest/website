
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

import { LitElement, html }                         from '@polymer/lit-element';
import { setPassiveTouchGestures, setRootPath }     from '@polymer/polymer/lib/utils/settings.js';

import { ShellStyles }     from './shell-styles.js';

import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';

import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/iron-iconset-svg/iron-iconset-svg.js';

 import { installRouter }              from 'pwa-helpers/router.js';
 import { installOfflineWatcher }      from 'pwa-helpers/network.js';
 import { installMediaQueryWatcher }   from 'pwa-helpers/media-query.js';
 import { updateMetadata }             from 'pwa-helpers/metadata.js';
 import { menuIcon }                   from './my-icons.js';
 import './snack-bar.js';

class ApplicationShell extends LitElement {

  static get is() { return 'application-shell'; }

  static get properties() {
    return {
      appTitle:         String,
      _page:            String,
      _drawerOpened:    Boolean,
      _snackbarOpened:  Boolean,
      _offline:         Boolean,
      opened:           { type: Boolean, reflectToAttribute: true },
      horizontal:       { type: Boolean },
      noAnimation:      { type: Boolean },
    };
  }

  constructor() {
    super();
    this._drawerOpened = false;
    setPassiveTouchGestures(true);
  }

  _firstRendered() {
    installRouter((location)          => this._locationChanged(location));
    installOfflineWatcher((offline)   => this._offlineChanged(offline));
    installMediaQueryWatcher(`(min-width: 460px)`,
        (matches) => this._layoutChanged(matches));
  }

  _didRender(properties, changeList) {

    if ('_page' in changeList) {

      const pageTitle = properties.appTitle + ' - ' + changeList._page;
      updateMetadata({
          title: pageTitle,
          description: pageTitle
          // This object also takes an image property, that points to an img src.
      });
    }

  }

  _layoutChanged(isWideLayout) {
    // The drawer doesn't make sense in a wide layout, so if it's opened, close it.
    this._updateDrawerState(false);
  }

  _offlineChanged(offline) {
    const previousOffline = this._offline;
    this._offline = offline;

    // Don't show the snackbar on the first load of the page.
    if (previousOffline === undefined) {
      return;
    }

  clearTimeout(this.__snackbarTimer);
    this.snackbarOpened = true;
    this.__snackbarTimer = setTimeout(() => { this.snackbarOpened = false }, 3000);
  }

  _locationChanged() {
    const path = window.decodeURIComponent(window.location.pathname);
    const page = path === '/' ? 'page-one' : path.slice(1);
    this._loadPage(page);
    // Any other info you might want to extract from the path (like page type),
    // you can do here.

    // Close the drawer - in case the *path* change came from a link in the drawer.
    this._updateDrawerState(false);
  }

  _updateDrawerState(opened) {
    if (opened !== this._drawerOpened) {
      this._drawerOpened = opened;
    }
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedcCallback();
  }

  ready() {
    //this.addEventListener('keypress', e => this.handlePress(e));
    super.ready();
    console.log(this.tagName);
  }

  async _loadPage(page) {

    switch(page) {

      case 'page-one':
        await import('./page-one.js');
        break;

      case 'send-feedback':
        await import('./send-feedback.js');
        break;

      default:
      page = 'wrong-page';
        await import('./wrong-page.js');

    }
    this._page = page;
  }

  _toggleSearch() {
    this.$.collapse.toggle();
  }

  _getText(opened) {
    return opened ? 'Collapse' : 'Expand';
  }

  _render({appTitle, _page, _drawerOpened, _snackbarOpened, _offline}) {
    return html`

    <style>
    :host {
      --app-drawer-width:                     200px;
        display:                              block;

        --app-primary-color:                  #E91E63;
        --app-secondary-color:                #293237;

        --app-dark-text-color:                var(--app-secondary-color);
        --app-light-text-color:               white;

        --app-section-even-color:             #f7f7f7;
        --app-section-odd-color:              white;

        --app-header-background-color:        white;
        --app-header-text-color:              var(--app-dark-text-color);
        --app-header-selected-color:          var(--app-primary-color);

        --app-drawer-background-color:        var(--app-secondary-color);
        --app-drawer-text-color:              var(--app-light-text-color);
        --app-drawer-selected-color:          #78909C;
        
        --paper-progress-container-color:     black;
    }

    </style>

    ${ShellStyles}

    <!-- APP DRAWER LAYOUT -->
    <app-drawer-layout
      fullbleed>

    <!-- APP DRAWER -->
    <app-drawer
      slot="drawer"
      align="end"
      opened="${_drawerOpened}"
      on-opened-changed="${e => this._updateDrawerState(e.target.opened)}">

      <!-- MENU -->
      <div style=" height: 60px;">
      </div>

      <nav class="drawer-list">
        <a selected?="${_page === 'page-one'}"      href="/page-one">View One</a>
        <a selected?="${_page === 'send-feedback'}" href="/send-feedback">View Two</a>
      </nav>

    </app-drawer>

    <!-- APP HEADER LAYOUT -->
    <app-header-layout
      fullbleed>

      <!-- APP HEADER -->
      <app-header
        slot="header"
        class="toolbar-top"
        fixed>

        <!-- APP-TOOLBAR #1 -->
        <app-toolbar>

          <!-- TITLE -->
          <div main-title>${appTitle}</div>

          <button class="menu-btn" title="Menu" on-click="${_ => this._updateDrawerState(true)}" drawer-toggle>${menuIcon}</button>

        </app-toolbar>

        <!-- This gets hidden on a small screen-->
        <nav class="toolbar-list">
          <a selected?="${_page === 'page-one'}"      href="/page-one">View One</a>
          <a selected?="${_page === 'send-feedback'}" href="/send-feedback">View Two</a>
        </nav>

      </app-header>

      <!-- BODY -->
      <main class="main-content">

        <!-- SEARCH CARD -->
        <iron-collapse
          id="collapse"
          opened="{{opened}}"
          horizontal="[[horizontal]]"
          no-animation="[[noAnimation]]"
          tabindex="0">

            <website-card>
              <!-- GOOGLE CUSTOM SEARCH -->
              <slot name="search"></slot>
            </website-card>
        
        </iron-collapse>
            
            <website-card>
              <!-- GOOGLE ADVERTIZMENT -->
              <slot name="advert"></slot>
            </website-card>

        <!-- IRON PAGES -->
        <iron-pages
          class="magicPagesOne"
          role="main"
          selected="[[page]]"
          attr-for-selected="name"
          fallback-selection="wrong-page">

          <!-- PAGE ONE -->
          <page-one       class="page" active?="${_page === 'page-one'}"></page-one>

          <!-- WRONG PAGE -->
          <send-feedback  class="page" active?="${_page === 'send-feedback'}"></send-feedback> 

          <!-- WRONG PAGE -->
          <wrong-page     class="page" active?="${_page === 'wrong-page'}"></wrong-page>            

        </iron-pages>
      </main>
      
      <!-- FOOTER -->
      <footer>
        <p>Modern Projects</p>
      </footer>

      <!-- SNACK BAR -->
      <snack-bar active?="${_snackbarOpened}">
        You are now ${_offline ? 'offline' : 'online'}.</snack-bar>

    </app-drawer-layout>
  </app-header-layout>
  `
  }

}

customElements.define(ApplicationShell.is, ApplicationShell);

/*

      <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
        <a name="page-one"       href="[[rootPath]]page-one"><paper-item><h2>Page One</h2></paper-item></a>  
        <a name="send-feedback"  href="[[rootPath]]send-feedback"><paper-item><h2>Feedback</h2></paper-item></a>     
      </iron-selector>

                <!-- SEARCH 
          <paper-icon-button 
            id="trigger"
            role="button"
            icon="myicons:search"
            on-click="_toggleSearch"
            aria-expanded$="[[opened]]"
            aria-controls="collapse">[[_getText(opened)]]
          </paper-icon-button>
          -->

      <iron-iconset-svg size="24" name="myicons">
      <svg>
        <defs>

          <g id="menu">
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></g>
      
          <g id="print">
          <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path></g>

          <g id="search">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></g>

        </defs>
      </svg>
    </iron-iconset-svg>

*/