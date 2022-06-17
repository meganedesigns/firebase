var __classPrivateFieldSet =
	(this && this.__classPrivateFieldSet) ||
	function (receiver, state, value, kind, f) {
		if (kind === 'm') throw new TypeError('Private method is not writable');
		if (kind === 'a' && !f) throw new TypeError('Private accessor was defined without a setter');
		if (typeof state === 'function' ? receiver !== state || !f : !state.has(receiver)) throw new TypeError('Cannot write private member to an object whose class did not declare it');
		return kind === 'a' ? f.call(receiver, value) : f ? (f.value = value) : state.set(receiver, value), value;
	};
var __classPrivateFieldGet =
	(this && this.__classPrivateFieldGet) ||
	function (receiver, state, kind, f) {
		if (kind === 'a' && !f) throw new TypeError('Private accessor was defined without a getter');
		if (typeof state === 'function' ? receiver !== state || !f : !state.has(receiver)) throw new TypeError('Cannot read private member from an object whose class did not declare it');
		return kind === 'm' ? f : kind === 'a' ? f.call(receiver) : f ? f.value : state.get(receiver);
	};
var _FirebaseError_native, _FirebaseOptions_nativeApp, _FirebaseOptions_apiKey, _FirebaseOptions_gcmSenderId, _FirebaseOptions_databaseURL, _FirebaseOptions_googleAppId, _FirebaseOptions_projectId, _FirebaseOptions_storageBucket, _FirebaseOptions_trackingId, _FirebaseApp_native, _FirebaseApp_options, _a, _Firebase_onResumeQueue, _Firebase_inForeground;
import { Application, knownFolders, Utils } from '@nativescript/core';
export * from './utils';
export class FirebaseError extends Error {
	constructor() {
		super(...arguments);
		_FirebaseError_native.set(this, void 0);
	}
	static fromNative(native, message) {
		var _b;
		const error = new FirebaseError(message || ((_b = native === null || native === void 0 ? void 0 : native.getMessage) === null || _b === void 0 ? void 0 : _b.call(native)));
		__classPrivateFieldSet(error, _FirebaseError_native, native, 'f');
		return error;
	}
	get native() {
		return __classPrivateFieldGet(this, _FirebaseError_native, 'f');
	}
	intoNative() {
		if (!__classPrivateFieldGet(this, _FirebaseError_native, 'f')) {
			return new java.lang.Exception(this.message);
		}
		return __classPrivateFieldGet(this, _FirebaseError_native, 'f');
	}
}
_FirebaseError_native = new WeakMap();
export class FirebaseOptions {
	constructor() {
		_FirebaseOptions_nativeApp.set(this, void 0);
		_FirebaseOptions_apiKey.set(this, void 0);
		_FirebaseOptions_gcmSenderId.set(this, void 0);
		_FirebaseOptions_databaseURL.set(this, void 0);
		_FirebaseOptions_googleAppId.set(this, void 0);
		_FirebaseOptions_projectId.set(this, void 0);
		_FirebaseOptions_storageBucket.set(this, void 0);
		_FirebaseOptions_trackingId.set(this, void 0);
	}
	static fromNative(native) {
		if (native instanceof com.google.firebase.FirebaseApp) {
			const opts = new FirebaseOptions();
			__classPrivateFieldSet(opts, _FirebaseOptions_nativeApp, native, 'f');
			return opts;
		}
		return null;
	}
	get native() {
		if (!__classPrivateFieldGet(this, _FirebaseOptions_nativeApp, 'f')) {
			return null;
		}
		return __classPrivateFieldGet(this, _FirebaseOptions_nativeApp, 'f').getOptions();
	}
	set apiKey(value) {
		__classPrivateFieldSet(this, _FirebaseOptions_apiKey, value, 'f');
	}
	get apiKey() {
		var _b, _c;
		if (__classPrivateFieldGet(this, _FirebaseOptions_apiKey, 'f')) {
			return __classPrivateFieldGet(this, _FirebaseOptions_apiKey, 'f');
		}
		return (_c = (_b = this.native) === null || _b === void 0 ? void 0 : _b.getApiKey) === null || _c === void 0 ? void 0 : _c.call(_b);
	}
	set gcmSenderId(value) {
		__classPrivateFieldSet(this, _FirebaseOptions_gcmSenderId, value, 'f');
	}
	get gcmSenderId() {
		var _b, _c;
		if (__classPrivateFieldGet(this, _FirebaseOptions_gcmSenderId, 'f')) {
			return __classPrivateFieldGet(this, _FirebaseOptions_gcmSenderId, 'f');
		}
		return (_c = (_b = this.native) === null || _b === void 0 ? void 0 : _b.getGcmSenderId) === null || _c === void 0 ? void 0 : _c.call(_b);
	}
	get databaseURL() {
		var _b, _c;
		if (__classPrivateFieldGet(this, _FirebaseOptions_databaseURL, 'f')) {
			return __classPrivateFieldGet(this, _FirebaseOptions_databaseURL, 'f');
		}
		return (_c = (_b = this.native) === null || _b === void 0 ? void 0 : _b.getDatabaseUrl) === null || _c === void 0 ? void 0 : _c.call(_b);
	}
	set googleAppId(value) {
		__classPrivateFieldSet(this, _FirebaseOptions_googleAppId, value, 'f');
	}
	get googleAppId() {
		var _b, _c;
		if (__classPrivateFieldGet(this, _FirebaseOptions_googleAppId, 'f')) {
			return __classPrivateFieldGet(this, _FirebaseOptions_googleAppId, 'f');
		}
		return (_c = (_b = this.native) === null || _b === void 0 ? void 0 : _b.getApplicationId) === null || _c === void 0 ? void 0 : _c.call(_b);
	}
	set projectId(value) {
		__classPrivateFieldSet(this, _FirebaseOptions_projectId, value, 'f');
	}
	get projectId() {
		var _b, _c;
		if (__classPrivateFieldGet(this, _FirebaseOptions_projectId, 'f')) {
			return __classPrivateFieldGet(this, _FirebaseOptions_projectId, 'f');
		}
		return (_c = (_b = this.native) === null || _b === void 0 ? void 0 : _b.getProjectId) === null || _c === void 0 ? void 0 : _c.call(_b);
	}
	set storageBucket(value) {
		__classPrivateFieldSet(this, _FirebaseOptions_storageBucket, value, 'f');
	}
	get storageBucket() {
		var _b, _c;
		if (__classPrivateFieldGet(this, _FirebaseOptions_storageBucket, 'f')) {
			return __classPrivateFieldGet(this, _FirebaseOptions_storageBucket, 'f');
		}
		return (_c = (_b = this.native) === null || _b === void 0 ? void 0 : _b.getStorageBucket) === null || _c === void 0 ? void 0 : _c.call(_b);
	}
	set trackingId(value) {
		this.trackingId = value;
	}
	get trackingId() {
		var _b, _c;
		if (__classPrivateFieldGet(this, _FirebaseOptions_trackingId, 'f')) {
			return __classPrivateFieldGet(this, _FirebaseOptions_trackingId, 'f');
		}
		return (_c = (_b = this.native) === null || _b === void 0 ? void 0 : _b.getGaTrackingId) === null || _c === void 0 ? void 0 : _c.call(_b);
	}
}
(_FirebaseOptions_nativeApp = new WeakMap()), (_FirebaseOptions_apiKey = new WeakMap()), (_FirebaseOptions_gcmSenderId = new WeakMap()), (_FirebaseOptions_databaseURL = new WeakMap()), (_FirebaseOptions_googleAppId = new WeakMap()), (_FirebaseOptions_projectId = new WeakMap()), (_FirebaseOptions_storageBucket = new WeakMap()), (_FirebaseOptions_trackingId = new WeakMap());
let firebaseInstance;
let defaultApp;
const firebaseApps = new Map();
export class FirebaseApp {
	constructor() {
		_FirebaseApp_native.set(this, void 0);
		_FirebaseApp_options.set(this, void 0);
	}
	static fromNative(app) {
		if (app instanceof com.google.firebase.FirebaseApp) {
			const fb = new FirebaseApp();
			__classPrivateFieldSet(fb, _FirebaseApp_native, app, 'f');
			return fb;
		}
		return null;
	}
	get native() {
		return __classPrivateFieldGet(this, _FirebaseApp_native, 'f');
	}
	get android() {
		return this.native;
	}
	get name() {
		return this.native.getName();
	}
	get options() {
		if (!__classPrivateFieldGet(this, _FirebaseApp_options, 'f')) {
			return FirebaseOptions.fromNative(__classPrivateFieldGet(this, _FirebaseApp_native, 'f'));
		}
	}
	delete() {
		return new Promise((resolve, reject) => {
			firebaseApps.delete(this.native.getName());
			this.native.delete();
			resolve();
		});
	}
	get apps() {
		const apps = [];
		const nativeApps = com.google.firebase.FirebaseApp.getApps(Utils.android.getApplicationContext());
		const count = nativeApps.size();
		for (let i = 0; i < count; i++) {
			const nativeApp = nativeApps.get(i);
			const app = new FirebaseApp();
			__classPrivateFieldSet(app, _FirebaseApp_native, nativeApp, 'f');
			apps.push(app);
		}
		return apps;
	}
}
(_FirebaseApp_native = new WeakMap()), (_FirebaseApp_options = new WeakMap());
export class Firebase {
	constructor() {
		if (firebaseInstance) {
			return firebaseInstance;
		}
		firebaseInstance = this;
		Application.android.on('activityResumed', (args) => {
			__classPrivateFieldSet(Firebase, _a, true, 'f', _Firebase_inForeground);
			__classPrivateFieldGet(Firebase, _a, 'f', _Firebase_onResumeQueue).forEach((callback) => {
				callback();
			});
			__classPrivateFieldGet(Firebase, _a, 'f', _Firebase_onResumeQueue).splice(0);
		});
		Application.android.on('activityPaused', (args) => {
			__classPrivateFieldSet(Firebase, _a, false, 'f', _Firebase_inForeground);
		});
		return firebaseInstance;
	}
	static addToResumeQueue(callback) {
		if (typeof callback !== 'function') {
			return;
		}
		__classPrivateFieldGet(Firebase, _a, 'f', _Firebase_onResumeQueue).push(callback);
	}
	static get inForeground() {
		return __classPrivateFieldGet(Firebase, _a, 'f', _Firebase_inForeground);
	}
	app(name) {
		if (name) {
			if (firebaseApps.has(name)) {
				return firebaseApps.get(name);
			}
			return FirebaseApp.fromNative(com.google.firebase.FirebaseApp.getInstance(name));
		}
		if (!defaultApp) {
			defaultApp = FirebaseApp.fromNative(com.google.firebase.FirebaseApp.getInstance());
		}
		return defaultApp;
	}
	initializeApp(options = null, configOrName) {
		return new Promise((resolve, reject) => {
			try {
				let nativeOptions;
				if (options) {
					nativeOptions = new com.google.firebase.FirebaseOptions.Builder();
				}
				if (options === null || options === void 0 ? void 0 : options.apiKey) {
					nativeOptions.setApiKey(options.apiKey);
				}
				if (options === null || options === void 0 ? void 0 : options.gcmSenderId) {
					nativeOptions.setGcmSenderId(options.gcmSenderId);
				}
				if (options === null || options === void 0 ? void 0 : options.databaseURL) {
					nativeOptions.setDatabaseUrl(options.databaseURL);
				}
				if (options === null || options === void 0 ? void 0 : options.googleAppId) {
					nativeOptions.setApplicationId(options.googleAppId);
				}
				if (options === null || options === void 0 ? void 0 : options.projectId) {
					nativeOptions.setProjectId(options.projectId);
				}
				if (options === null || options === void 0 ? void 0 : options.storageBucket) {
					nativeOptions.setStorageBucket(options.storageBucket);
				}
				if (options === null || options === void 0 ? void 0 : options.trackingId) {
					nativeOptions.setGaTrackingId(options.trackingId);
				}
				const name = typeof configOrName === 'string' ? configOrName : configOrName === null || configOrName === void 0 ? void 0 : configOrName.name;
				let app;
				let isDefault = false;
				if (name) {
					if (!nativeOptions) {
						nativeOptions = new com.google.firebase.FirebaseOptions.Builder();
					}
					app = com.google.firebase.FirebaseApp.initializeApp(Utils.android.getApplicationContext(), nativeOptions.build(), name);
				} else {
					if (defaultApp) {
						defaultApp;
					}
					isDefault = true;
					if (nativeOptions) {
						app = com.google.firebase.FirebaseApp.initializeApp(Utils.android.getApplicationContext(), nativeOptions.build());
					} else {
						app = com.google.firebase.FirebaseApp.initializeApp(Utils.android.getApplicationContext());
					}
				}
				if (app && typeof configOrName === 'object' && typeof configOrName.automaticResourceManagement === 'boolean') {
					app.setAutomaticResourceManagementEnabled(configOrName.automaticDataCollectionEnabled);
				}
				const fbApp = FirebaseApp.fromNative(app);
				if (isDefault) {
					defaultApp = fbApp;
				}
				if (!isDefault) {
					firebaseApps.set(name, fbApp);
				}
				resolve(fbApp);
			} catch (e) {
				reject(new FirebaseError(e.message));
			}
		});
	}
	initializeAppWithPath(path, options = null, config) {
		return new Promise((resolve, reject) => {
			var _b, _c;
			try {
				let json;
				const ctx = Utils.android.getApplicationContext();
				if (path.startsWith('res://')) {
					const jsonStr = org.nativescript.firebase.core.FirebaseCore.readRawAsset(ctx, path);
					json = JSON.parse(jsonStr);
				} else {
					if (path.startsWith('~/')) {
						path = knownFolders.currentApp().path + '/' + path.replace('~/', '');
					}
					json = __non_webpack_require__(path);
				}
				// always use first client
				const client = json['client'][0];
				const oauth_clients = client['oauth_client'];
				const project_info = json['project_info'];
				const client_info = client['client_info'];
				let default_web_client_id = null;
				const firebase_database_url = project_info['firebase_url'] || null;
				const gcm_defaultSenderId = project_info['project_number'] || null;
				const google_api_key = (_c = (_b = client['api_key']) === null || _b === void 0 ? void 0 : _b['current_key']) !== null && _c !== void 0 ? _c : null;
				const google_app_id = client_info['mobilesdk_app_id'] || null;
				const google_crash_reporting_api_key = google_app_id;
				const google_storage_bucket = project_info['storage_bucket'] || null;
				const project_id = project_info['project_id'] || null;
				for (let i = 0; i < oauth_clients.length; i++) {
					const oauth_client = oauth_clients[i];
					if (oauth_client.client_type === 3) {
						default_web_client_id = oauth_client['client_id'];
					}
				}
				const nativeOptions = new com.google.firebase.FirebaseOptions.Builder();
				if (google_api_key) {
					nativeOptions.setApiKey(google_api_key);
				}
				if (google_app_id) {
					nativeOptions.setApplicationId(google_app_id);
				}
				if (firebase_database_url) {
					nativeOptions.setDatabaseUrl(firebase_database_url);
				}
				if (gcm_defaultSenderId) {
					nativeOptions.setGcmSenderId(gcm_defaultSenderId);
				}
				if (project_id) {
					nativeOptions.setProjectId(project_id);
				}
				if (google_storage_bucket) {
					nativeOptions.setStorageBucket(google_storage_bucket);
				}
				if (options === null || options === void 0 ? void 0 : options.apiKey) {
					nativeOptions.setApiKey(options.apiKey);
				}
				if (options === null || options === void 0 ? void 0 : options.gcmSenderId) {
					nativeOptions.setGcmSenderId(options.gcmSenderId);
				}
				if (options === null || options === void 0 ? void 0 : options.databaseURL) {
					nativeOptions.setDatabaseUrl(options.databaseURL);
				}
				if (options === null || options === void 0 ? void 0 : options.googleAppId) {
					nativeOptions.setApplicationId(options.googleAppId);
				}
				if (options === null || options === void 0 ? void 0 : options.projectId) {
					nativeOptions.setProjectId(options.projectId);
				}
				if (options === null || options === void 0 ? void 0 : options.storageBucket) {
					nativeOptions.setStorageBucket(options.storageBucket);
				}
				if (options === null || options === void 0 ? void 0 : options.trackingId) {
					nativeOptions.setGaTrackingId(options.trackingId);
				}
				const app = com.google.firebase.FirebaseApp.initializeApp(ctx, nativeOptions.build());
				if (app && typeof config === 'object' && typeof config.automaticResourceManagement === 'boolean') {
					app.setAutomaticResourceManagementEnabled(config.automaticDataCollectionEnabled);
				}
				const fbApp = FirebaseApp.fromNative(app);
				if (!defaultApp) {
					defaultApp = fbApp;
				}
				resolve(fbApp);
			} catch (e) {
				reject(new FirebaseError(e.message));
			}
		});
	}
}
_a = Firebase;
_Firebase_onResumeQueue = { value: [] };
_Firebase_inForeground = { value: false };
export function firebase() {
	if (firebaseInstance) {
		return firebaseInstance;
	}
	firebaseInstance = new Firebase();
	return firebaseInstance;
}
//# sourceMappingURL=index.android.js.map
