import {Element as PolymerElement}
  from "../node_modules/@polymer/polymer/polymer-element.js"

export class BoardSquare extends PolymerElement {

  static get is() { return 'board-square'; }

  static get properties() {
    return {
      widthThis: Number,
    };
  }

  static get observers() {
      
  }

  constructor() {
    super();
    //this.chess-pawn.setAttribute("transform", "scale(2.0)");
    // const upDown      = this.bigSquare.height() ;
    // const leftRight   = this.bigSquare.width() ;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedcCallback();
  }

  attributeChangedCallback() {
    super.attributeChangedCallback();
  }

  ready() {
    super.ready();
    //this.addEventListener('keypress', e => this.handlePress(e));
  }

  block() {
  	const block = document.querySelector('block');
  }

  static get template() {
    return `
      <style>
        :host {
        }

        .grid {
          height: 100%;
          max-width: 800px;
          margin: auto;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
          grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;"
        }

        chess-pawn, chess-rook, chess-knight, chess-bishop, chess-king, chess-queen {
          position:   absolute;
          z-index:    3;

        }


     </style>

     <!--

     width:      100%;
     height:     100%;

     -->

     <!-- Chess Defense Game -->
     <div id="grid" class="grid">
    	
     <!-- 1 -->
     <four-square id="a1" widthBox="{{widthThis}}">
     </four-square>

     <!-- 2 -->
     <four-square id="b1">
       <chess-knight></chess-knight>
     </four-square>

     <!-- 3 -->
     <four-square id="c1">
       <chess-bishop myWidth="{{widthThis}}"></chess-bishop>
     </four-square>

     <!-- 4 -->
     <four-square id="d1">
       <chess-king></chess-king>
     </four-square>

     <!-- 5 -->
     <four-square id="e1">
       <chess-queen></chess-queen>
     </four-square>

     <!-- 6 -->
     <four-square id="f1">
       <chess-bishop></chess-bishop>
     </four-square>

     <!-- 7 -->
     <four-square id="g1">
       <chess-knight></chess-knight>
     </four-square>

     <!-- 8 -->
     <four-square id="h1">
       <chess-rook></chess-rook>
     </four-square>
     

     
     <!-- 9 -->
     <four-square id="a2">
       <chess-pawn></chess-pawn>
     </four-square>

     <!-- 10 -->
     <four-square id="b2">
       <chess-pawn></chess-pawn>
     </four-square>

     <!-- 11 -->
     <four-square id="c2">
       <chess-pawn></chess-pawn>
     </four-square>

     <!-- 12 -->
     <four-square id="d2">
       <chess-pawn></chess-pawn>
     </four-square>

     <!-- 13 -->
     <four-square id="e2">
       <chess-pawn></chess-pawn>
     </four-square>

     <!-- 14 -->
     <four-square id="f2">
       <chess-pawn></chess-pawn>
     </four-square>

     <!-- 15 -->
     <four-square id="g2">
       <chess-pawn></chess-pawn>
     </four-square>

     <!-- 16 -->
     <four-square id="h2">
       <chess-pawn></chess-pawn>
     </four-square>
     

     
     <!-- 17 -->
     <four-square>
     </four-square>
     <!-- 18 -->
     <four-square>
     </four-square>
     <!-- 19 -->
     <four-square>
     </four-square>
     <!-- 20 -->
     <four-square>
     </four-square>
     <!-- 21 -->
     <four-square>
     </four-square>
     <!-- 22 -->
     <four-square>
     </four-square>
     <!-- 23 -->
     <four-square>
     </four-square>
     <!-- 24 -->
     <four-square>
     </four-square>
     
     

     <!-- 25 -->
     <four-square>
     </four-square>
     <!-- 26 -->
     <four-square>
     </four-square>
     <!-- 27 -->
     <four-square>
     </four-square>
     <!-- 28 -->
     <four-square>
     </four-square>
     <!-- 29 -->
     <four-square>
     </four-square>
     <!-- 30 -->
     <four-square>
     </four-square>
     <!-- 31 -->
     <four-square>
     </four-square>
     <!-- 32 -->
     <four-square>
     </four-square>
     

     
     <!-- 33 -->
     <four-square>
     </four-square>
     <!-- 34 -->
     <four-square>
     </four-square>
     <!-- 35 -->
     <four-square>
     </four-square>
     <!-- 36 -->
     <four-square>
     </four-square>
     <!-- 37 -->
     <four-square>
     </four-square>
     <!-- 38 -->
     <four-square>
     </four-square>
     <!-- 39 -->
     <four-square>
     </four-square>
     <!-- 40 -->
     <four-square>
     </four-square>
     

     
     <!-- 41 -->
     <four-square>
     </four-square>
     <!-- 42 -->
     <four-square>
     </four-square>
     <!-- 43 -->
     <four-square>
     </four-square>
     <!-- 44 -->
     <four-square>
     </four-square>
     <!-- 45 -->
     <four-square>
     </four-square>
     <!-- 47 -->
     <four-square>
     </four-square>
     <!-- 48 -->
     <four-square>
     </four-square>
     <!-- 49 -->
     <four-square>
     </four-square>
     

     
     <!-- 50 -->
     <four-square id="a7">
           <chess-pawn></chess-pawn>
     </four-square>      
     <!-- 51 -->
     <four-square id="b7">
           <chess-pawn></chess-pawn>
     </four-square>
     <!-- 52 -->
     <four-square id="c7">
           <chess-pawn></chess-pawn>
     </four-square>
     <!-- 53 -->
     <four-square id="d7">
           <chess-pawn></chess-pawn>
     </four-square>
     <!-- 54 -->
     <four-square id="e7">
           <chess-pawn></chess-pawn>
     </four-square>
     <!-- 55 -->
     <four-square id="f7">
           <chess-pawn></chess-pawn>
     </four-square>
     <!-- 56 -->
     <four-square id="g7">
           <chess-pawn></chess-pawn>
     </four-square>
     <!-- 57 -->
     <four-square id="h7">
           <chess-pawn></chess-pawn>
     </four-square>
     
     

     <!-- 58 -->
     <four-square id="a8">
           <chess-rook></chess-rook>
     </four-square>
     <!-- 59 -->
     <four-square id="b8">
           <chess-knight></chess-knight>
     </four-square>
     <!-- 60 -->
     <four-square id="c8">
           <chess-bishop></chess-bishop>
     </four-square>
     <!-- 61 -->
     <four-square id="d8">
           <chess-king></chess-king>
     </four-square>
     <!-- 62 -->
     <four-square id="e8">
           <chess-queen></chess-queen>
     </four-square>
     <!-- 63 -->
     <four-square id="f8">
           <chess-bishop></chess-bishop>
     </four-square>
     <!-- 64 -->
     <four-square id="g8">
           <chess-knight></chess-knight>
     </four-square>
     <!-- 64 -->
     <four-square id="h8">
           <chess-rook></chess-rook>
     </four-square>

     </div>

	`
  }

}

customElements.define('board-square', BoardSquare);

/**

    	<div style="height:100%; width:100%;">
        <slot></slot>
        <div style="height:100%; width:100%; display: grid; grid-template-columns: 50% 50%; grid-template-rows: 50% 50%;">
          <four-square></four-square>
          <four-square></four-square>
          <four-square></four-square>
          <four-square></four-square>
        </div>
      </div>

      [a1,b1,c1,d1,e1,f1,g1,h1,a2,b2,c2,d2,e2,f2,g2,h2,a3,b3,c3,d3,e3,f3,g3,h3,a4,b4,c4,d4,e4,f4,g4,h4,a5,b5,c5,d5,e5,f5,g5,h5,a6,b6,c6,d6,e6,f6,g6,h6,a7,b7,c7,d7,e7,f7,g7,h7,a8,b8,c8,d8,e8,f8,g8,h8]


      a1, b1, c1, d1, e1, f1, g1, h1,
      a2, b2, c2, d2, e2, f2, g2, h2,
      a3, b3, c3, d3, e3, f3, g3, h3,
      a4, b4, c4, d4, e4, f4, g4, h4,
      a5, b5, c5, d5, e5, f5, g5, h5,
      a6, b6, c6, d6, e6, f6, g6, h6,
      a7, b7, c7, d7, e7, f7, g7, h7,
      a8, b8, c8, d8, e8, f8, g8, h8

var arena, grid, i;
    arena = [
      "a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1",
      "a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2",
      "a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3",
      "a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4",
      "a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5",
      "a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6",
      "a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7",
      "a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"
    ];


**/

/*
      box: {
        type: Array,
        value: [
          {x:"a1"}, {x:"b1"}, {x:"c1"}, {x:"d1"}, {x:"e1"}, {x:"f1"}, {x:"g1"}, {x:"h1"},
          {x:"a2"}, {x:"b2"}, {x:"c2"}, {x:"d2"}, {x:"e2"}, {x:"f2"}, {x:"g2"}, {x:"h2"},
          {x:"a3"}, {x:"b3"}, {x:"c3"}, {x:"d3"}, {x:"e3"}, {x:"f3"}, {x:"g3"}, {x:"h3"},
          {x:"a4"}, {x:"b4"}, {x:"c4"}, {x:"d4"}, {x:"e4"}, {x:"f4"}, {x:"g4"}, {x:"h4"},
          {x:"a5"}, {x:"b5"}, {x:"c5"}, {x:"d5"}, {x:"e5"}, {x:"f5"}, {x:"g5"}, {x:"h5"},
          {x:"a6"}, {x:"b6"}, {x:"c6"}, {x:"d6"}, {x:"e6"}, {x:"f6"}, {x:"g6"}, {x:"h6"},
          {x:"a7"}, {x:"b7"}, {x:"c7"}, {x:"d7"}, {x:"e7"}, {x:"f7"}, {x:"g7"}, {x:"h7"},
          {x:"a8"}, {x:"b8"}, {x:"c8"}, {x:"d8"}, {x:"e8"}, {x:"f8"}, {x:"g8"}, {x:"h8"}
        ]
      }

    <!-- Chess Defense Game -->
    <div id="grid" class="grid">

          <dom-repeat items="{{boxes}}">
            <template><div id="[[box.x]]"></div></template>
          </dom-repeat>

    </div>

*/