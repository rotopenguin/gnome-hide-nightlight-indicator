import GLib from 'gi://GLib';
import {panel} from 'resource:///org/gnome/shell/ui/main.js';

export default class HideVolume {

	_hideNightLightIndicator() {
		panel.statusArea.quickSettings._nightLight.hide();
	}

	_queueHideNightLightIndicator() {
		GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
			if (!panel.statusArea.quickSettings._nightLight)
				return GLib.SOURCE_CONTINUE;

			this._hideNightLightIndicator();
			return GLib.SOURCE_REMOVE;
	})}

	enable() {
		if (panel.statusArea.quickSettings._nightLight)
			this._hideNightLightIndicator();
		else
			this._queueHideNightLightIndicator();
	}

	disable() {
		panel.statusArea.quickSettings._nightLight.show();
	}
}