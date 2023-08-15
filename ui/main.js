/*
PEEKABO by Alexander Abraham a.k.a. "Angel Dollface".
Licensed under the MIT license.
*/

// Calling Tauri's function handler.
const { listen } = window.__TAURI__.event;

let imageEl;

// Updates the UI depending
// on receieved events.
window.addEventListener(
  "DOMContentLoaded", 
  () => {
    imageEl = document.querySelector("#imageWindow");
  }
);

listen(
      'tauri://file-drop', 
      event => {
        console.log(event.payLoad);
        imageEl.src = event.payLoad;
        console.log(imageEl.src);
      }
    );
