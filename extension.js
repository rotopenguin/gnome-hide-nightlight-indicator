import GLib from 'gi://GLib';
import {panel} from 'resource:///org/gnome/shell/ui/main.js';
import {Extension} from 'resource:///org/gnome/shell/extensions/extension.js';

export default class HideNightLight extends Extension {
	enable() {
		this.sourceId = GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
			this.nightLightIndicator = panel.statusArea.quickSettings._nightLight;
			if (!this.nightLightIndicator)
				return GLib.SOURCE_CONTINUE;

			this.nightLightIndicator.hide();
			this.showSignal = this.nightLightIndicator.connect("show", () => {
				this.nightLightIndicator.hide();
			});
			this.sourceId = null;
			return GLib.SOURCE_REMOVE;
		});
	}

	disable() {
		// The "unlock-dialog" session mode is used to hide the volume indicator on the lockscreen.
		if (this.sourceId) {
			GLib.Source.remove(this.sourceId);
		}
		if (this.nightLightIndicator) {
			this.nightLightIndicator.disconnect(this.showSignal);
			this.nightLightIndicator.show();
		}
	}
}
