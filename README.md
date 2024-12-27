# About this extension, with Director's Commentary
I just yoinked https://codeberg.org/stephaniebread/gnome-hide-volume-indicator, and changed a very few words around.

Why do I need this? I have a Chuwi Hi10 X1, which is an incredibly cute little N100 tablet. It has a very 800px wide panel, and a *very* blue backlit one at that. I keep the night-light mode on all of the time just to knock edge off of the blue tint. I'm doing that with Dash-To-Panel on top (so it deconflicts with the OSK on the bottom). As such, any horizontal space that I can save here means more room for app icons.

# The O.G. extension's notes
👇

# Hide Volume indicator

This extension will completely hide volume indicator on your gnome >45 desktop.

Why? My linuxphone does not need this useless indicator, which is take up space for something more useful.

I do not know **anything** about js or writing shell extensions. But I just take a look at [this](https://github.com/t184256/gnome-shell-extension-autohide-volume) extension and used some lines from it.

## Installation

### Recommended

Install it using [Extension Manager](https://flathub.org/apps/com.mattjakeman.ExtensionManager). This extension is named "Hide Volume Indicator" at extensions.gnome.org

### Manual Install

1. Clone this repo to ~/.local/share/gnome-shell/extensions/ **(just paste code below to a terminal)**

`git clone https://codeberg.org/stephaniebread/gnome-hide-volume-indicator ~/.local/share/gnome-shell/extensions/hide-volume-indicator@stephaniebread`

2. Restart Gnome shell (logout)

3. Enable this extension in "extensions" app.

## Known Issues

1. Volume indicator is still displayed on the lock screen

2. ???
