
import { html, css, TemplateResult, CSSResult, LitElement } from 'lit';
import { customElement, property }    from 'lit/decorators.js';
import { connect } from 'pwa-helpers/connect-mixin';
import { store, RootState } from './store';
import { closeDrawer } from './controllers/redux-drawer';

// import './login';
// import { googleSignIn } from './controllers/google';
// import { logOut } from './controllers/firebase';
// import { LazyLoader } from '../lazy-loader';

@customElement('user-drawer')
export class UserDrawer extends connect(store)(LitElement) {

  // @property({type: Boolean}) public user:any = false;
  @property({type: Boolean, reflect: true}) public on :boolean = false;

  constructor() {
    super();
  }

  stateChanged(state: RootState) {
    // this.user = state.account!.user;
    this.on = state.drawer!.drawer;
  }

  protected firstUpdated() {
    this.shadowRoot!.querySelector('#close')!         .addEventListener('click', () => { store.dispatch( closeDrawer(false) ) } );
    // this.shadowRoot!.querySelector('.leave')!         .addEventListener('click', () => { logOut(), store.dispatch( closeDrawer() ); } );
  }

  static get styles():CSSResult { return css`

        :host {
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

        :host[on] {
          visibility: visible;
          transform:            translate3d(0, 0, 0);
          -webkit-transform:    translate3d(0, 0, 0);
        }

        /** DISPLAY */
        .slognTitle { color: var(--primary-orange); }

        .slognTitle,
        .setLog,
        #googleOne { display: none; }

        .slognTitle[data-active],
        #googleOne[data-active] { display: block; }

        .setLog[data-on] { display: grid; }
        .google:hover { cursor: pointer; }

        /*.divide       { border: 2px solid #606060; margin: 6px 0 0 0; border-radius: 50%; }*/
        @media (max-width: 460px) { .google { font-size: .8em; } }

      ` } ;

  protected render():TemplateResult {
    return html`

<!-- Toggle EXIT -->
<button
  id    ="close"
  style ="
    position:         absolute;
    top:              16px;
    right:            16px;
    height:           36px;
    width:            36px;
    margin:           auto;
    background-color: transparent;
    border:           0px;
    fill:             red;
    opacity:          .8;
    -webkit-opacity:  .8;"><svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
    </button>

    <!-- <h2 class="slognTitle" ?data-active ="\${!this.user}" style="text-align: center;">Welcome Back</h2> -->

    <!-- Logged OUT  -->

   <!-- GOOGLE SIGN IN  @click  ="\${ googleSignIn }" ?data-active ="\${ !this.user }" -->
   <button
      id      ="googleOne"
      class   ="google"
     
      
      style   ="
      margin:                   auto auto 8px;;
      color:                    #444;
      width:                    210px;
      border:                   thin solid #888;
      box-shadow:               1px 1px 1px grey;
      white-space:              nowrap;
      background-color:         #ffffff;
      size:                     14px;
      font:                     Roboto-Medium;
      line-height:              26px;
      padding:                  8dp;
      border-color:             #4267b2;
      font-weight:              bold;
      text-align:               center;
      text-shadow:              none;
      border-radius:            10px;
      -webkit-border-radius:    10px;
      -webkit-font-smoothing:   antialiased;
      justify-content:          center;
      -webkit-justify-content:  center;">
        <span
          class="icon"
          style="
            background:       url('/images/google.png') transparent 5px 50% no-repeat;
            display:          inline-block;
            vertical-align:   middle;
            width:            42px;
            height:           42px;"></span>
        <span class="buttonText">sign-in with Google</span>
    </button>

    <!-- <create-user method ?user="\${ !this.user }" ></create-user> -->

<!-- Logged IN ?data-on="\${ this.user === true }" -->
<div class="setLog"  style="grid-gap: 16px;">

  <p
    style="
      cursor:           pointer;
      margin:           12px;
      box-sizing:       border-box;
      text-transform:   uppercase; 
      text-align:       center;
      font-weight:      800;
      margin:           0;"><a href="/feedback" style="text-decoration: none; color: #303030;">Feedback</a>
  </p>

  <p
    style="
      cursor:           pointer;
      margin:           12px;
      box-sizing:       border-box;
      text-transform:   uppercase; 
      text-align:       center;
      font-weight:      800;
      margin:           0;"><a href="/terms" style="text-decoration: none; color: #303030;">Terms of Use</a>
  </p>

  <p
    class="leave"
    style="
      cursor: pointer;
      margin: 12px;
      box-sizing: border-box;
      text-transform:   uppercase; 
      text-align:       center;
      font-weight:      800;
      margin:           0;"><a href="/" style="text-decoration: none; color: #303030;">Log Out</a>
  </p>
</div>

<a href="https://www.contractorscentre.com"></a>

      `;
    }
  }

  declare global {
    interface HTMLElementTagNameMap {
        'user-drawer': UserDrawer;
    }
  }