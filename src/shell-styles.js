
import { LitElement, html } from '@polymer/lit-element';

export const ShellStyles = html`
    <style>
      @media print {
        html {margin: 10px !important;}
        body {background: none !important; color: black !important; text-shadow: none !important; padding: 8mm;}
      }

      /* 480px Screen*/
      @media only screen and (max-width: 480px) {
        .appTitle { font-size: 70%; }
      }

      /* 480px Screen*/
      @media only screen and ( min-width: 480px) {
        .appTitle { font-size: 70%; }
      }

      /* 520px to 699px Screen*/
      @media only screen and (min-width: 640px) {
        .appTitle {  }
      }

      /* 768px Screen */
      @media only screen and ( min-width: 780px) {
        .appTitle { font-size: 90%; }
      }

      /* 700px to 1000px Screen */
      @media only screen and (min-width: 1000px) {
        .appTitle {font-size: 90%;}
      }

      /* 1001px + Screen */
      @media only screen and (min-width: 1001px) {
        .appTitle { font-size: 90%; }
      }

      /* 1151px + Screen */
      @media only screen and (min-width: 1151px) {
        .appTitle { font-size: 90%; }
      }

      @media (min-width: 460px) {
        .toolbar-list {
          display: block;
        }
        .menu-btn {
          display: none;
        }
        .main-content {
          padding-top: 107px;
        }
        /* The drawer button isn't shown in the wide layout, so we don't
        need to offset the title */
        [main-title] {
          padding-right: 0px;
        }
      }

      app-drawer-layout:not([narrow]) [drawer-toggle] { display: none; }

      a               { text-decoration: none; }

      app-header      {
                        position: fixed;
                        top: 0;
                        left: 0;
                        background-color:   var(--app-header-background-color);
                        color:              var(--app-header-text-color);
                        width:              100%;
                        text-align:         center;
                      }

      app-toolbar     {  }

      .toolbar-top { background-color: var(--app-header-background-color); }

      .toolbar-list   { display: none; }

      .toolbar-list > a {
        display: inline-block;
        color: var(--app-header-text-color);
        text-decoration: none;
        line-height: 30px;
        padding: 4px 24px;
      }

      .toolbar-list > a[selected] {
        color: var(--app-header-selected-color);
        border-bottom: 4px solid var(--app-header-selected-color);
      }

      .menu-btn {
        background: none;
        border: none;
        fill: var(--app-header-text-color);
        cursor: pointer;
        height: 44px;
        width: 44px;
      }

      .drawer-list {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: 24px;
        background: var(--app-drawer-background-color);
        position: relative;
      }

      .drawer-list > a {
        display: block;
        text-decoration: none;
        color: var(--app-drawer-text-color);
        line-height: 40px;
        padding: 0 24px;
      }

      .drawer-list > a[selected] {
        color: var(--app-drawer-selected-color);
      }

      .main-content {
        padding-top: 64px;
        min-height: 100vh;
      }

      app-drawer      { overflow: auto; }
      paper-progress  { width: 100%; }
      iron-pages      { width: 100%; height: 100%; }
      paper-item      {  }
      h1              {  }
      h2              {  }

      [main-title] {
                        font-family: 'Pacifico';
                        text-transform: lowercase;
                        font-size: 30px;
                        /* In the narrow layout, the toolbar is offset by the width of the
                        drawer button, and the text looks not centered. Add a padding to
                        match that button */
                        padding-right: 44px;
      }

      .page {
        display: none;
      }
      .page[active] {
        display: block;
      }

      footer {
        padding:      24px;
        background:   var(--app-drawer-background-color);
        color:        var(--app-drawer-text-color);
        text-align:   center;
      }
    </style>
      `;