
// LIT HTML
import { html, css, LitElement, TemplateResult, CSSResult } from 'lit';
import { customElement, property }    from 'lit/decorators.js';

// APPLICATION HELPERS
import { installRouter }              from 'pwa-helpers/router';
import { installOfflineWatcher }      from 'pwa-helpers/network';
import { connect }                    from 'pwa-helpers/connect-mixin';
import { updateMetadata }             from 'pwa-helpers/metadata';

// REDUX STORE
import { store } from './store';

import { navigate } from './controllers/redux-general';
import { setDrawer } from './controllers/redux-drawer';
import { updateOffline } from './controllers/redux-offline';

// CUSTOM ELEMENTS
import './drawer';
import './offline';


const profileIcon   = html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18px" height="18px" style="margin: auto;"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"/></svg>`;
// const createIcon    = html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>`;
const settingsIcon  = html`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" style="margin: auto;"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>`;

@customElement('application-shell')
export class ApplicationShell extends connect(store)(LitElement) {

  @property({type: Boolean})  public user       :boolean   = false;
  @property({type: String})   public page       :string    = '';
  @property({type: Boolean})  public drawer     :boolean   = false;
  @property({type: Boolean})  public offline    :boolean   = false;
  @property({type: Boolean})  public offlineTxt :boolean   = false;
  @property({type: String})   public photoURL   :string    = '';

  constructor() {
    super();
  }

  private toggleDrawers() { store.dispatch( setDrawer() ) }

  protected firstUpdated() {

    installRouter( (location) => { store.dispatch( navigate( decodeURIComponent(location.pathname) ) ) /*, setMetaTag('name', 'twitter:title', this. ) */ } );
    installOfflineWatcher( (offline) => store.dispatch( updateOffline(offline) ) );

      // Get all Elements by Class Name
      const list = this.shadowRoot!.querySelectorAll('.collapsible');

      // Number For Loop Function
      let i; for (i = 0; i < list.length; i++) {

        list[i].addEventListener("click", (e:any) => {
          // store.dispatch(titlePage(e.target.name));
          console.log(e.target.name);
        });
      }

  }

  protected updated(changedProps:any) {
    if (changedProps.has('page')) {

      const pageTitle:any = this.page;
      let txt           :any = "";
      // let url           :any = "";
      // let image         :any = "";
      // let imageAlt      :any = "";

      if (this.page === "page")   {
        txt = "" }
        
      if (this.page === "feedback")     {
        txt = "" }

      if (this.page === "terms")        {
        txt = "" }

      if (this.page === "oops")     {
        txt = "" }  

      updateMetadata({
        title:        pageTitle,
        description:  txt,
        // url:          url,
        // image:        image,
        // imageAlt:     imageAlt  
      });
    }
  }

static get styles():CSSResult { return css`

      /*
        --secondary-green-dark:         #2b3c44;
        --secondary-green-light:        #A8D5BA;
        --secondary-green-lighter:      #F0FFF0;
        --secondary-green:              #00da6c;
        --action-green:                 #6cc04a;
        --blue:                         #2b3c44;
        --blue-2:                       #4C8FBD;
        --primary-blue-dark:            #184A78;
        --primary-blue:                 #3F9EF5;
        --primary-blue-light:           #E5EEF3;
      */

        :host {
          box-sizing: border-box;
          --primary:    #4CAF50; /*#FF5F2D; /* #ff9501; */
        }

        svg {
          color:              #03a9f4; /*  #03a9f4; /** bisque */
          height:    28px;
          width:     28px;
        }

        #subscribe[data-backed] { background-color: transparent; }
        #subscribe  {
          background-color:             var(--primary); /* #03a9f4; */
       /* -webkit-text-stroke-width:    1px;
          -webkit-text-stroke-color:    #184A78;*/
          font-weight:                  800;
         }

        #subscribe {
          margin:         auto 3px auto auto;
          height:         36px;
          width:          80px;
          border:         2px solid var(--primary);
          border-radius:  8px;
        }

        #subscribe[data-on] {
          height:         42px;
          width:          42px;
          border:         0;
          border-radius:  50%;
        }
        
        user-drawer { 
          visibility:           hidden;
          display:              inline-grid;
          position:             fixed;
          top:                  0;
          right:                0;
          z-index:              2;
          width:                100%;
          max-width:            500px;
          margin:               auto;
          background-color:     rgba(228, 241, 254, 1);
          color:                #303030;
          padding:              24px 12px;
          border:               1.5px #303030 solid;

          box-sizing:           border-box;
          -webkit-box-sizing:   border-box;

          border-radius:          20px;
          -webkit-border-radius:  20px;
          will-change:          transform;

          transform:            translate3d(0, -150%, 0);
          -webkit-transform:    translate3d(0, -150%, 0);

          transition-property:          visibility, transform;
          -webkit-transition-property:  visibility, transform;

          transition-duration:          .6s;
          -webkit-transition-duration:  .6s;
        }
        user-drawer[on] { 
          visibility:           visible;
          transform:            translate3d(0, 0, 0);
          -webkit-transform:    translate3d(0, 0, 0);
        }

        snack-bar {
        display:              block;
        position:             fixed;
        bottom:               0;
        left:                 0;
        right:                0;
        padding:              12px;
        background-color:     var(--app-white-color);
        color:                var(--app-black-color);
        box-shadow:           0 0 10px rgba(0, 0, 0, 0.2);
        text-align:           center;
        will-change:          transform;

        transform:            translate3d(0, 100%, 0);
        -webkit-transform:    translate3d(0, 100%, 0);

        transition-property:          visibility, transform;
        -webkit-transition-property:  visibility, transform;

        transition-duration:          0.2s;
        -webkit-transition-duration:  0.2s;

        visibility:           hidden;
      }
      snack-bar[active] {
        visibility:           visible;
        
        transform:            translate3d(0, 0, 0);
        -webkit-transform:    translate3d(0, 0, 0);
      }

        /* DISPLAY */
        .page        { display: none; }

        home-page[active],
        .page[data-active],
        .page[active]  { display: grid; }

        /* FOCUS */
        a[selected]   { background-color: rgba(255,255,255, 0.9); }
        /* a[data-logo]:hover { background-color: lightgrey; } */
        a, a:visited        { color: lightblue }
        .top-actions        { display: grid; }
        .actions[data-on]   { visibility: hidden; }

        /*clip-path: circle(50%); overflow: hidden;*/

        @media only screen and (max-width: 460px) {
          .actions      { visibility: visible; grid-template-columns: 1fr 33.33% 33.33% 33.33%; font-size: small; }
        }

        @media only screen and (min-width: 460px) {
          .actions       { visibility: visible; grid-template-columns: 1fr 120px 120px 120px; }
        }

        /* LOGO MOBILE */
        @media only screen and (max-width: 768px) {
          header        { padding: 20px; }
          .banner       { grid-template-columns: 1fr; }
          .top-actions  { display: none; }
          #subscribe[data-on] {margin: auto;}
        }

        /* LOGO DESKTOP */
        @media only screen and (min-width: 774px) {
          header { padding: 30px; }
          .banner { grid-template-columns: 1fr 1fr; grid-gap: 16px;}
          .actions { visibility: hidden; }
          .slogan { margin: auto; }
          #subscribe[data-on] {
            margin-top:     auto;
            margin-bottom:  auto;
            margin-right:   0;
            margin-left:    auto;
          }
        }
        
        .toolbar-top {
          grid-template-columns:            180px 1fr 100px;
          -webkit-grid-template-columns:    180px 1fr 100px;
        }
    
        /* DESKTOP */
        @media only screen and (min-width: 600px) {

          .toolbar-top[data-user] {
            grid-template-columns:            180px 1fr 48px;
            -webkit-grid-template-columns:    180px 1fr 48px;
          }


          nav{ text-align: right; }
        }

        /* MOBILE */
        @media only screen and (max-width: 600px) {

          nav{ text-align: center;}
        
          .toolbar-top[data-user] {
            grid-template-columns:            180px 1fr 80px;
            -webkit-grid-template-columns:    180px 1fr 80px;
          }

        }

        /* MOBILE */
        @media only screen and (min-width: 1000px) {
          main { border: 2px solid #303030; }
        }
/*
        user-drawer {
          visibility:           hidden;
          display:              inline-grid;
          position:             fixed;
          top:                  0;
          right:                0;
          z-index:              2;
          width:                100%;
          max-width:            500px;
          margin:               auto;
          background-color:     rgba(228, 241, 254, 1);
          color:                #303030;
          padding:              24px 12px;
          border:               1.5px #303030 solid;

          box-sizing:           border-box;
          -webkit-box-sizing:   border-box;

          border-radius:          20px;
          -webkit-border-radius:  20px;
          will-change:          transform;

          transform:            translate3d(0, -150%, 0);
          -webkit-transform:    translate3d(0, -150%, 0);

          transition-property:          visibility, transform;
          -webkit-transition-property:  visibility, transform;

          transition-duration:          .6s;
          -webkit-transition-duration:  .6s;
        }

        user-drawer[on] {
          visibility: visible;
          transform:            translate3d(0, 0, 0);
          -webkit-transform:    translate3d(0, 0, 0);
        }
*/

  ` } ;


protected render():TemplateResult {
  return html`

<header
  style = "
    display:            grid;
    grid-gap:           20px;
    background-color:   rgba(0,0,0,0.8);
    color:              #fff;
    box-shadow:         0 0 8px 0 rgba(0, 0, 0, 1);
    ">

    <!--
      background-color:   #184A78;
      border-bottom:      1.5px solid #303030;
      border-radius:      0 0 8px 8px;
    -->

  <!-- FIRST TOOLBAR -->
  <div
    class ="toolbar-top"
    ?data-user ="${this.user}"
    style = "
      display:  grid;">

      <!-- LOGO / HOME BUTTON -->
      <a
        class       = "logo"
        href        = "/"
        data-logo   = ""
        style = "
          text-decoration:  none;
          margin:           auto;

          background-image:   url('/images/logo.png');
          height:             48px;
          width:              180px;

          -webkit-background-size:  cover;
          -moz-background-size:     cover;
          -o-background-size:       cover;
          background-size:          cover;

          -moz-background-position: center;
          -o-background-position:   center;
          background-position:      center;"></a>

        <span>
          <!-- TITLE -->
          <div
            class     = "top-actions"
            style="
             grid-template-columns: 1fr 120px 120px 120px;
             height: 100%;" >

             <span></span>

            <a
              href="/"
              style="
                margin:   auto;
                padding:  0 8px;
                fill:     whitesmoke;
                color:    whitesmoke;
                text-decoration: none; ">
              Page One
            </a>

            <a
              href="/"
              style="
                margin:   auto;
                padding:  0 8px;
                fill:     whitesmoke;
                color:    whitesmoke;
                text-decoration: none; ">
              Page Two
            </a>

            <a
              href="/"
              style="
                margin: auto;
                padding: 0 8px;
                fill: whitesmoke;
                color: whitesmoke;
                text-decoration: none; ">
              Page Three
            </a>
            
          </div>
        </span>

        <!-- LOGIN / MENU TOGGLE -->
        <div
          id              ="subscribe"
          @click          ="${ this.toggleDrawers }"
          ?data-on        ="${ this.user }"
          ?data-backed    ="${ this.user }"
          style = "
            display:              block;
            padding:              0;
            line-height: 36px;
            text-align: center;
            background-image:     url('${this.user ? this.photoURL : '' }');
            background-position:  center;
            background-repeat:    no-repeat; 
            background-size:      cover;
            box-shadow:           4px 4px 6px -3px #303030;
            color:                black;
          ">

            ${this.user ? html`  ` : html` Menu ` }
</div>

    </div> <!-- CLOSE FIRST TOOLBAR -->

    <!-- DRAWER -->
    <user-drawer ?on="${ this.drawer }"></user-drawer>

</header>


  <!-- NAVIGATION -->
  <nav
    class = "actions"
    style="
      display: grid;
      padding: 0 16px;">

    <span></span>

    <a
      href="/"
      style="
        margin:     auto;
        padding:    0 8px;
        fill:       #303030;
        color:      black;
        display:    grid;
        grid-template-columns: 32px 1fr;
        text-decoration: none;">
      ${profileIcon}
      <p style="font-weight: 700;">Page One</p>
    </a>

    <a
      href="/"
      style="
        margin:     auto;
        padding:    0 8px;
        fill:       #303030;
        color:      black;
        display:    grid;
        grid-template-columns: 32px 1fr;
        text-decoration: none;">
      ${profileIcon}
      <p style="font-weight: 700;">Page Twp</p>
    </a>
    
    <a
      href="/"
      style="
        margin:     auto;
        padding:    0 8px;
        fill:       #303030;
        color:      black;
        display:    grid;
        grid-template-columns: 32px 1fr;
        text-decoration: none;">
      ${settingsIcon}
      <p style="font-weight: 700;">Page Three</p>
    </a>

  </nav>

<main id="main"
  style="
    display:              block;
    box-sizing:           border-box;
    -webkit-box-sizing:   border-box;
    background-color:     rgba(0,0,0,0.8);
    color:                white;
    padding:              16px;
    width:                100%;
    max-width:            640px;
    min-height:           50vh;
    margin:               auto;
    border-top:           2px solid #303030;
    border-bottom:        2px solid #303030;
  ">

  <div id="map"></div>

  <!-- APPLICATION PAGES -->
  <home-page
    class="page"
    ?active="${ this.page === 'home'}"></home-page>

  <p
    class="page"
    ?active="${ !this.user && this.page === 'network' || !this.user && this.page === 'contractor' || !this.user && this.page === 'article'}"
  >Please sign in</p>

  <profile-contacts
    class="page"
    ?active="${ this.user && this.page === 'network'}"></profile-contacts>

  <contractor-profile
    class="page"
    ?active="${ this.user && this.page === 'contractor'}"></contractor-profile>

  <user-display
    class="page"
    ?active="${ this.user && this.page === 'article'}"></user-display>

  <contractors-questions
    class="page"
    ?active="${ this.page === 'feedback' }"></contractors-questions>

  <contractors-privacy
    class="page"
    ?active="${ this.page === 'terms' }"></contractors-privacy>

  <reset-options
    class="page"
    ?active="${ this.page === 'reset' }"></reset-options>

  <wrong-page
    class="page"
    ?active="${ this.page === 'oops' }"></wrong-page>

</main>

<!-- FOOTER #184A78 -->
<footer
  style="
    display:                grid;
    background-color:       rgba(0,0,0,0.8);
    width:                  100%;
    text-align:             center;
    font-style:             italic;
    margin:                 32px 0 0 0;
    padding:                32px 0;
    box-shadow:             0 0 8px 0 rgba(0, 0, 0, 1);">

  <!-- LOGO -->
  <div>

    <a href="/" >
      <img
        src="/images/logo.png"
        style="
          width: 136px;" />
    </a>

    <p style="color: whitesmoke;">""</p>
    <p style="color: whitesmoke;">©copyright</p>

  </div>

  <div>

    <p>
      <a
        href="https://www.twitter.com/"
        style="
          color: whitesmoke;
          text-decoration: none;">Twitter</a>
    </p>

    <p>
      <a
        href="/feedback"
        style="
          color: whitesmoke;
          text-decoration: none;">Feedback</a>
    </p>

    <p style=" color: whitesmoke;">
      By clicking Sign Up, you agree to our <br />
      <a href="/terms">Terms of Service </a> & <a href="privacy">Privacy Policy</a>.
    </p>

  </div>

  <div>

  <div>

    <!-- GOOGLE ADS -->
    <slot
      name="advert"></slot>
    </div>

  </div>

</footer>



<!--OFFLINE -->
<snack-bar
  ?active="${ this.offline }">You are now ${ this.offlineTxt ? 'offline' : 'online' }.</snack-bar>


  `;
}


}

// END OF CUSTOM ELEMENT

declare global {
  interface HTMLElementTagNameMap {
      'application-shell': ApplicationShell;
  }
}
