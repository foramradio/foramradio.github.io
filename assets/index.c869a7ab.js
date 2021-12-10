import{r as e,j as t,c as i,a as o}from"./vendor.3e50eef0.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(i){const o=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((i,a)=>{const n=new URL(e,o);if(self[t].moduleMap[n])return i(self[t].moduleMap[n]);const l=new Blob([`import * as m from '${n}';`,`${t}.moduleMap['${n}']=m;`],{type:"text/javascript"}),s=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){a(new Error(`Failed to import: ${e}`)),r(s)},onload(){i(self[t].moduleMap[n]),r(s)}});document.head.appendChild(s)})),self[t].moduleMap={}}}("/assets/");const r=[1,2,3,4,5,6,7,8],a=o=>{const[a,l]=e.useState(0),[s,d]=e.useState(!1);return t("div",null,t("div",{className:o.className,css:i`
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          font-family: RAINYHEARTS;
        `},t("div",{css:i`
            display: flex;
            flex-direction: column;
            height: 100%;
          `},t("div",{css:i`
              height: var(--banner-height);
              width: 100%;
            `},t("div",{css:i`
                max-width: 960px;
                margin: 0 auto;
                display: flex;
                flex-direction: row;
                justify-content: left;
                font-size: 32px;
                color: white;
              `},t("div",{css:i`
                  height: calc(var(--banner-height) - 12px);
                  width: 200px;
                  background-color: rgba(114, 213, 255, 0.8);
                  border: 6px solid var(--border-color);
                  border-style: ridge;
                  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                  text-align: center;
                  @media only screen and (max-width: 500px) {
                    display: none;
                  }
                `},t("div",{css:i`
                    margin-top: 16px;
                  `},"*Foram Radio")),t("div",{css:i`
                  height: 60px;
                  width: auto;
                  flex: 1;
                  border: 6px solid var(--border-color);
                  border-style: ridge;
                  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                  overflow: hidden;
                `},t("div",{css:i`
                    margin-left: -60px;
                  `},t("iframe",{width:"100%",height:"60",src:"https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&feed=%2Fworm_radio%2Fpractice2%2F",frameBorder:"0"}))))),t("div",{css:i`
              flex: 1;
            `},t("div",{css:i`
                height: 100%;
                max-width: calc(
                  100vh - var(--banner-height) - var(--picker-height) + 200px
                );
                margin: 0 auto;
              `},t("div",{onClick:()=>{console.log("click"),d(!s)},css:i`
                  position: relative;
                  width: 100%;
                  height: 100%;
                  float: left;
                  pointer-events: none;
                  overflow: hidden;

                  @media only screen and (max-width: 500px) {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    pointer-events: auto;
                  }
                `},r.map(((e,o)=>t("video",{key:o.toString(),playsInline:!0,autoPlay:!0,muted:!0,loop:!0,css:[i`
                      position: absolute;
                      height: min(100%, 100vw);
                      width: auto;
                      z-index: -1;
                    `,o!=a&&i`display: none;`]},t("source",{src:"content/video"+o.toString()+".webm",type:'video/webm;codecs="vp9, vorbis"'})))),t("div",{css:[i`
                      background-color: white;
                      float: right;
                      max-width: 35%;
                      margin-top: 15%;
                      margin-right: 20px;
                      @media only screen and (max-width: 500px) {
                        margin: 0 auto;
                        max-width: 80%;
                      }

                      padding: 5px;
                      outline: 6px solid var(--border-color);
                      outline-style: ridge;
                      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                      background-color: rgba(114, 213, 255, 0.8);
                      color: white;
                    `,s&&i`
                        @media only screen and (max-width: 500px) {
                          display: none;
                        }
                      `]},"If all items have flex-grow set to 1, the remaining space in the container will be distributed equally to all children. If one of the children has a value of 2, the remaining space would take up twice as much space as the others (or it will try to, at least). If all items have flex-grow set to 1, the remaining space in the container will be distributed equally to all children. If one of the children has a value of 2, the remaining space would take up twice as much space as the others (or it will try to, at least)."," ")))),t("div",{css:i`
              aspect-ratio: 2/1;
              height: unset;
              --n: 4;
              @media only screen and (min-width: 500px) {
                aspect-ratio: 8/1;
                height: unset;
                --n: 8;
              }
              @media only screen and (min-width: 970px) {
                height: var(--picker-height);
                aspect-ratio: unset;
                --n: 8;
              }
            `},t("div",{css:i`
                height: 100%;
                max-width: calc(var(--picker-height) * 8);
                margin: 0 auto;

                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
              `},r.map(((e,o)=>t(n,{key:o.toString(),isSelected:o===a,onClick:()=>{l(o)}},t("img",{css:i`
                      overflow: hidden;
                      background-color: transparent;
                      object-fit: cover;
                      width: 100%;
                      height: 100%;
                    `,src:"content/preview"+o.toString()+".png",alt:"hey"})))))))))},n=e=>t("div",{onClick:t=>{e.onClick&&e.onClick()},css:[i`
          width: calc(100% / var(--n) - 12px);
          height: calc((100% / 8) * var(--n) - 12px);
          background-color: var(--box-background-color);
          border: 6px solid var(--border-color);
          border-style: ridge;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          z-index: unset;
          &:hover {
            border: unset;
            margin: 6px;
            outline: 8px solid #0ac6ff;
            outline-style: ridge;
            z-index: 101;
          }
        `,e.isSelected&&i`
            border: unset;
            margin: 6px;
            outline: 8px solid #0ac6ff;
            outline-style: ridge;
            z-index: 100;
          `]},e.children);o.render(t(e.StrictMode,null,t(a,null)),document.getElementById("root"));
