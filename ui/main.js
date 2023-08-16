/*
PEEKABOO by Alexander Abraham a.k.a. "Angel Dollface".
Licensed under the MIT license.
*/

const { listen } = window.__TAURI__.event;
const { convertFileSrc } = window.__TAURI__.tauri;
let imageEl;
window.addEventListener("DOMContentLoaded", () => {imageEl = document.querySelector("#imageWindow");listen('tauri://file-drop', event => {let path = convertFileSrc(event.payload);imageEl.src = path;});});