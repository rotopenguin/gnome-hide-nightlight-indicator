import GLib from 'gi://GLib';
import {panel} from 'resource:///org/gnome/shell/ui/main.js';

export default class HideVolume {

	_hideVolumeIndicator() {
		panel.statusArea.quickSettings._volumeOutput.hide();
	}

	_queueHideVolumeIndicator() {
		GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
			if (!panel.statusArea.quickSettings._volumeOutput)
				return GLib.SOURCE_CONTINUE;

			this._hideVolumeIndicator();
			return GLib.SOURCE_REMOVE;
	})}

	enable() {
		if (panel.statusArea.quickSettings._volumeOutput)
			this._hideVolumeIndicator();
		else
			this._queueHideVolumeIndicator();
	}

	disable() {
		panel.statusArea.quickSettings._volumeOutput.show();
	}
}