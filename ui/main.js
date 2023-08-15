/*
PEEKABOO by Alexander Abraham a.k.a. "Angel Dollface".
Licensed under the MIT license.
*/

// Calling Tauri's event handler.
const { listen } = window.__TAURI__.event;

// Calling Tauri's method to handle file paths.
const { convertFileSrc } = window.__TAURI__.tauri;

// Empty element to 
// hold info.
let imageEl;

// Updates the UI depending
// on receieved events.
window.addEventListener(
  "DOMContentLoaded", 
  () => {
    imageEl = document.querySelector("#imageWindow");
    listen(
      'tauri://file-drop', 
      event => {
        let path = convertFileSrc(event.payload);
        imageEl.src = path;
      }
    );
  }
);


