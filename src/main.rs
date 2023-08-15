/*
PEEKABO by Alexander Abraham a.k.a. "Angel Dollface".
Licensed under the MIT license.
*/

// Prevents a console window opening on Windows in release.
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

/// Importing the "Manager"
/// trait from Tauri.
use tauri::Manager;

/// Main point of entry for the Rust
/// compiler.
fn main() {
    tauri::Builder::default().setup(
        |app| {
            #[cfg(debug_assertions)] // only include this code on debug builds
    {
      let window = app.get_window("main").unwrap();
      window.open_devtools();
      window.close_devtools();
    }
            Ok(())
        }
    )
    .run(tauri::generate_context!())
    .expect("Error while running tauri application");
}
