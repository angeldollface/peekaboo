<p align="center">
 <img src="assets/banner.png"/>
</p>

# PEEKABOO :camera: :crab:

![Peekaboo CI](https://github.com/angeldollface/peekaboo/actions/workflows/rust.yml/badge.svg)

![Peekaboo Release CI](https://github.com/angeldollface/peekaboo/actions/workflows/release.yml/badge.svg)

***A graphical interface to display images. :camera: :crab:***

## ABOUT :books:

Since I recently installed Arch Linux on my main machine and I didn't have a program to open images, I thought I'd write one in the best language in the world and the Tauri framework. Enjoy. :heart_on_fire:

## USAGE :hammer_and_pick:

To use ***Peekaboo***, simply drag and drop an image into the window and scale the window accordingly.

## BUILD FROM SOURCE :hammer:

Make sure you have the following tools installed and available from the command line:

- [Rust](https://rust-lang.org)
- [Git](https://git-scm.org)

After you have confirmed that both are installed, execute the following steps to build ***Peekaboo*** from source:

- 1.) Download the source code:

```bash
git clone https://github.com/angeldollface/peekaboo
```

- 2.) Change directory into the source directory's root:

```bash
cd peekaboo
```

- 3.) Install Tauri's CLI:

```bash
cargo install tauri-cli
```

- 4.) Build the source code into a graphical executable for your platform:

```bash
cargo tauri build
```

- 5.) This should produce a binary bundle in the `target/release/bundle/your_platform` directory where `your_platform` is the name of your operating system. Enjoy. :heart:

## CHANGELOG :black_nib:

### Version 0.1.0

- Initial release.
- Upload to GitHub.

## NOTE :scroll:

- *Peekaboo :camera: :crab:* by Alexander Abraham :black_heart: a.k.a. *"Angel Dollface" :dolls: :ribbon:*
- Licensed under the MIT license.
