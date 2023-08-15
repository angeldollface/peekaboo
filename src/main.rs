/*
PEEKABOO by Alexander Abraham a.k.a. "Angel Dollface".
Licensed under the MIT license.
*/

// Prevents a console window opening on Windows in release.
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

/// Main point of entry for the Rust
/// compiler.
fn main() {
    tauri::Builder::default()
    .run(tauri::generate_context!())
    .expect("Error while running tauri application");
}
