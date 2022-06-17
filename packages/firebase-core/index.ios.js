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
var _FirebaseError_native, _FirebaseOptions_nativeApp, _FirebaseOptions_apiKey, _FirebaseOptions_gcmSenderId, _FirebaseOptions_androidClientId, _FirebaseOptions_appGroupId, _FirebaseOptions_bundleId, _FirebaseOptions_clientId, _FirebaseOptions_databaseURL, _FirebaseOptions_deepLinkURLScheme, _FirebaseOptions_googleAppId, _FirebaseOptions_projectId, _FirebaseOptions_storageBucket, _FirebaseOptions_trackingId, _FirebaseApp_native, _FirebaseApp_options, _a, _Firebase_onResumeQueue, _Firebase_inForeground;
import { Application, knownFolders } from '@nativescript/core';
export * from './utils';
export class FirebaseError extends Error {
	constructor() {
		super(...arguments);
		_FirebaseError_native.set(this, void 0);
	}
	static fromNative(native, message) {
		const error = new FirebaseError(message || (native === null || native === void 0 ? void 0 : native.localizedDescription));
		__classPrivateFieldSet(error, _FirebaseError_native, native, 'f');
		return error;
	}
	get native() {
		return __classPrivateFieldGet(this, _FirebaseError_native, 'f');
	}
	intoNative() {
		if (!__classPrivateFieldGet(this, _FirebaseError_native, 'f')) {
			const exception = NSException.exceptionWithNameReasonUserInfo(NSGenericException, this.message, null);
			const info = {};
			info['ExceptionName'] = exception.name;
			info['ExceptionReason'] = exception.reason;
			info['ExceptionCallStackReturnAddresses'] = exception.callStackReturnAddresses;
			info['ExceptionCallStackSymbols'] = exception.callStackSymbols;
			info['ExceptionUserInfo'] = exception.userInfo;
			const error = NSError.alloc().initWithDomainCodeUserInfo('NativeScript', 1000, info);
			return error;
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
		_FirebaseOptions_androidClientId.set(this, void 0);
		_FirebaseOptions_appGroupId.set(this, void 0);
		_FirebaseOptions_bundleId.set(this, void 0);
		_FirebaseOptions_clientId.set(this, void 0);
		_FirebaseOptions_databaseURL.set(this, void 0);
		_FirebaseOptions_deepLinkURLScheme.set(this, void 0);
		_FirebaseOptions_googleAppId.set(this, void 0);
		_FirebaseOptions_projectId.set(this, void 0);
		_FirebaseOptions_storageBucket.set(this, void 0);
		_FirebaseOptions_trackingId.set(this, void 0);
	}
	static fromNative(native) {
		if (native instanceof FIRApp) {
			const opts = new FirebaseOptions();
			__classPrivateFieldSet(opts, _FirebaseOptions_nativeApp, native, 'f');
			return opts;
		}
		return null;
	}
	get ios() {
		return this.native;
	}
	get native() {
		var _b;
		return (_b = __classPrivateFieldGet(this, _FirebaseOptions_nativeApp, 'f')) === null || _b === void 0 ? void 0 : _b.options;
	}
	get name() {
		var _b;
		return (_b = __classPrivateFieldGet(this, _FirebaseOptions_nativeApp, 'f')) === null || _b === void 0 ? void 0 : _b.name;
	}
	set apiKey(value) {
		__classPrivateFieldSet(this, _FirebaseOptions_apiKey, value, 'f');
	}
	get apiKey() {
		var _b;
		if (__classPrivateFieldGet(this, _FirebaseOptions_apiKey, 'f')) {
			return __classPrivateFieldGet(this, _FirebaseOptions_apiKey, 'f');
		}
		return (_b = this.native) === null || _b === void 0 ? void 0 : _b.APIKey;
	}
	set gcmSenderId(value) {
		__classPrivateFieldSet(this, _FirebaseOptions_gcmSenderId, value, 'f');
	}
	get gcmSenderId() {
		var _b;
		if (__classPrivateFieldGet(this, _FirebaseOptions_gcmSenderId, 'f')) {
			return __classPrivateFieldGet(this, _FirebaseOptions_gcmSenderId, 'f');
		}
		return (_b = this.native) === null || _b === void 0 ? void 0 : _b.GCMSenderID;
	}
	set androidClientId(value) {
		__classPrivateFieldSet(this, _FirebaseOptions_androidClientId, value, 'f');
	}
	get androidClientId() {
		var _b;
		if (__classPrivateFieldGet(this, _FirebaseOptions_androidClientId, 'f')) {
			return __classPrivateFieldGet(this, _FirebaseOptions_androidClientId, 'f');
		}
		return (_b = this.native) === null || _b === void 0 ? void 0 : _b.androidClientID;
	}
	set appGroupId(value) {
		__classPrivateFieldSet(this, _FirebaseOptions_appGroupId, value, 'f');
	}
	get appGroupId() {
		var _b;
		if (__classPrivateFieldGet(this, _FirebaseOptions_appGroupId, 'f')) {
			return __classPrivateFieldGet(this, _FirebaseOptions_appGroupId, 'f');
		}
		return (_b = this.native) === null || _b === void 0 ? void 0 : _b.appGroupID;
	}
	set bundleId(value) {
		__classPrivateFieldSet(this, _FirebaseOptions_bundleId, value, 'f');
	}
	get bundleId() {
		var _b;
		if (__classPrivateFieldGet(this, _FirebaseOptions_bundleId, 'f')) {
			return __classPrivateFieldGet(this, _FirebaseOptions_bundleId, 'f');
		}
		return (_b = this.native) === null || _b === void 0 ? void 0 : _b.bundleID;
	}
	set clientId(value) {
		__classPrivateFieldSet(this, _FirebaseOptions_clientId, value, 'f');
	}
	get clientId() {
		var _b;
		if (__classPrivateFieldGet(this, _FirebaseOptions_clientId, 'f')) {
			return __classPrivateFieldGet(this, _FirebaseOptions_clientId, 'f');
		}
		return (_b = this.native) === null || _b === void 0 ? void 0 : _b.clientID;
	}
	set databaseURL(value) {
		__classPrivateFieldSet(this, _FirebaseOptions_databaseURL, value, 'f');
	}
	get databaseURL() {
		var _b;
		if (__classPrivateFieldGet(this, _FirebaseOptions_databaseURL, 'f')) {
			return __classPrivateFieldGet(this, _FirebaseOptions_databaseURL, 'f');
		}
		return (_b = this.native) === null || _b === void 0 ? void 0 : _b.databaseURL;
	}
	set deepLinkURLScheme(value) {
		__classPrivateFieldSet(this, _FirebaseOptions_deepLinkURLScheme, value, 'f');
	}
	get deepLinkURLScheme() {
		var _b;
		if (__classPrivateFieldGet(this, _FirebaseOptions_deepLinkURLScheme, 'f')) {
			return __classPrivateFieldGet(this, _FirebaseOptions_deepLinkURLScheme, 'f');
		}
		return (_b = this.native) === null || _b === void 0 ? void 0 : _b.deepLinkURLScheme;
	}
	set googleAppId(value) {
		__classPrivateFieldSet(this, _FirebaseOptions_googleAppId, value, 'f');
	}
	get googleAppId() {
		var _b;
		if (__classPrivateFieldGet(this, _FirebaseOptions_googleAppId, 'f')) {
			return __classPrivateFieldGet(this, _FirebaseOptions_googleAppId, 'f');
		}
		return (_b = this.native) === null || _b === void 0 ? void 0 : _b.googleAppID;
	}
	set projectId(value) {
		__classPrivateFieldSet(this, _FirebaseOptions_projectId, value, 'f');
	}
	get projectId() {
		var _b;
		if (__classPrivateFieldGet(this, _FirebaseOptions_projectId, 'f')) {
			return __classPrivateFieldGet(this, _FirebaseOptions_projectId, 'f');
		}
		return (_b = this.native) === null || _b === void 0 ? void 0 : _b.projectID;
	}
	set storageBucket(value) {
		__classPrivateFieldSet(this, _FirebaseOptions_storageBucket, value, 'f');
	}
	get storageBucket() {
		var _b;
		if (__classPrivateFieldGet(this, _FirebaseOptions_storageBucket, 'f')) {
			return __classPrivateFieldGet(this, _FirebaseOptions_storageBucket, 'f');
		}
		return (_b = this.native) === null || _b === void 0 ? void 0 : _b.storageBucket;
	}
	set trackingId(value) {
		__classPrivateFieldSet(this, _FirebaseOptions_trackingId, value, 'f');
	}
	get trackingId() {
		var _b;
		if (__classPrivateFieldGet(this, _FirebaseOptions_trackingId, 'f')) {
			return __classPrivateFieldGet(this, _FirebaseOptions_trackingId, 'f');
		}
		return (_b = this.native) === null || _b === void 0 ? void 0 : _b.trackingID;
	}
}
(_FirebaseOptions_nativeApp = new WeakMap()),
	(_FirebaseOptions_apiKey = new WeakMap()),
	(_FirebaseOptions_gcmSenderId = new WeakMap()),
	(_FirebaseOptions_androidClientId = new WeakMap()),
	(_FirebaseOptions_appGroupId = new WeakMap()),
	(_FirebaseOptions_bundleId = new WeakMap()),
	(_FirebaseOptions_clientId = new WeakMap()),
	(_FirebaseOptions_databaseURL = new WeakMap()),
	(_FirebaseOptions_deepLinkURLScheme = new WeakMap()),
	(_FirebaseOptions_googleAppId = new WeakMap()),
	(_FirebaseOptions_projectId = new WeakMap()),
	(_FirebaseOptions_storageBucket = new WeakMap()),
	(_FirebaseOptions_trackingId = new WeakMap());
let firebaseInstance;
let defaultApp;
const firebaseApps = new Map();
export class FirebaseApp {
	constructor() {
		_FirebaseApp_native.set(this, void 0);
		_FirebaseApp_options.set(this, void 0);
	}
	static fromNative(app) {
		if (app instanceof FIRApp) {
			const fb = new FirebaseApp();
			__classPrivateFieldSet(fb, _FirebaseApp_native, app, 'f');
			return fb;
		}
		return null;
	}
	get native() {
		return __classPrivateFieldGet(this, _FirebaseApp_native, 'f');
	}
	get ios() {
		return this.native;
	}
	get name() {
		return this.native.name;
	}
	get options() {
		if (!__classPrivateFieldGet(this, _FirebaseApp_options, 'f')) {
			__classPrivateFieldSet(this, _FirebaseApp_options, FirebaseOptions.fromNative(__classPrivateFieldGet(this, _FirebaseApp_native, 'f')), 'f');
		}
		return __classPrivateFieldGet(this, _FirebaseApp_options, 'f');
	}
	delete() {
		return new Promise((resolve, reject) => {
			this.native.deleteApp((done) => {
				if (done) {
					firebaseApps.delete(this.native.name);
					resolve();
				} else {
					reject();
				}
			});
		});
	}
	get apps() {
		const apps = [];
		const keys = FIRApp.allApps.allKeys;
		const count = keys.count;
		for (let i = 0; i < count; i++) {
			const key = keys.objectAtIndex(i);
			const nativeApp = FIRApp.allApps.objectForKey(key);
			const app = new FirebaseApp();
			__classPrivateFieldSet(app, _FirebaseApp_native, nativeApp, 'f');
			apps.push(app);
		}
		return apps;
	}
}
(_FirebaseApp_native = new WeakMap()), (_FirebaseApp_options = new WeakMap());
const launchQueue = [];
const launchCallback = () => {
	launchQueue.forEach((item) => item());
	launchQueue.splice(0);
};
TNSFirebaseCore.setOnAppFinishLaunchingCallback(launchCallback);
export class Firebase {
	constructor() {
		if (firebaseInstance) {
			return firebaseInstance;
		}
		firebaseInstance = this;
		Application.on('launch', (args) => {
			__classPrivateFieldGet(Firebase, _a, 'f', _Firebase_onResumeQueue).forEach((callback) => {
				callback();
			});
			__classPrivateFieldGet(Firebase, _a, 'f', _Firebase_onResumeQueue).splice(0);
		});
		Application.on('resume', (args) => {
			__classPrivateFieldSet(Firebase, _a, true, 'f', _Firebase_inForeground);
		});
		Application.on('suspend', (args) => {
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
			return FirebaseApp.fromNative(FIRApp.appNamed(name));
		}
		if (!defaultApp) {
			defaultApp = FirebaseApp.fromNative(FIRApp.defaultApp());
		}
		return defaultApp;
	}
	initializeApp(options = null, configOrName) {
		return new Promise((resolve, reject) => {
			const initApp = () => {
				try {
					const name = typeof configOrName === 'string' ? configOrName : configOrName === null || configOrName === void 0 ? void 0 : configOrName.name;
					let nativeOptions;
					if (name) {
						nativeOptions = FIROptions.alloc().initWithGoogleAppIDGCMSenderID(options.googleAppId, options.gcmSenderId);
					}
					if (!nativeOptions && options) {
						nativeOptions = FIROptions.defaultOptions();
					}
					if (options === null || options === void 0 ? void 0 : options.apiKey) {
						nativeOptions.APIKey = options.apiKey;
					}
					if (options === null || options === void 0 ? void 0 : options.gcmSenderId) {
						nativeOptions.GCMSenderID = options.gcmSenderId;
					}
					if (options === null || options === void 0 ? void 0 : options.androidClientId) {
						nativeOptions.androidClientID = options.androidClientId;
					}
					if (options === null || options === void 0 ? void 0 : options.appGroupId) {
						nativeOptions.appGroupID = options.appGroupId;
					}
					if (options === null || options === void 0 ? void 0 : options.bundleId) {
						nativeOptions.bundleID = options.bundleId;
					}
					if (options === null || options === void 0 ? void 0 : options.clientId) {
						nativeOptions.clientID = options.clientId;
					}
					if (options === null || options === void 0 ? void 0 : options.databaseURL) {
						nativeOptions.databaseURL = options.databaseURL;
					}
					if (options === null || options === void 0 ? void 0 : options.deepLinkURLScheme) {
						nativeOptions.deepLinkURLScheme = options.deepLinkURLScheme;
					}
					if (options === null || options === void 0 ? void 0 : options.googleAppId) {
						nativeOptions.googleAppID = options.googleAppId;
					}
					if (options === null || options === void 0 ? void 0 : options.projectId) {
						nativeOptions.projectID = options.projectId;
					}
					if (options === null || options === void 0 ? void 0 : options.storageBucket) {
						nativeOptions.storageBucket = options.storageBucket;
					}
					if (options === null || options === void 0 ? void 0 : options.trackingId) {
						nativeOptions.trackingID = options.trackingId;
					}
					let app;
					let isDefault = false;
					if (name) {
						FIRApp.configureWithNameOptions(name, nativeOptions);
						app = FIRApp.appNamed(name);
					} else {
						if (defaultApp) {
							return defaultApp;
						}
						if (nativeOptions) {
							FIRApp.configureWithOptions(nativeOptions);
						} else {
							FIRApp.configure();
						}
						app = FIRApp.defaultApp();
						isDefault = true;
					}
					if (app && typeof configOrName === 'object' && typeof configOrName.automaticDataCollectionEnabled === 'boolean') {
						app.dataCollectionDefaultEnabled = configOrName.automaticDataCollectionEnabled;
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
			};
			if (!UIApplication.sharedApplication) {
				launchQueue.push(() => {
					initApp();
				});
			} else {
				initApp();
			}
		});
	}
	initializeAppWithPath(path, options = null, config) {
		return new Promise((resolve, reject) => {
			const initApp = () => {
				try {
					if (path.startsWith('res://')) {
						path = NSBundle.mainBundle.pathForResourceOfType(path.replace('res://', '').replace('.plist', ''), 'plist');
					} else if (path.startsWith('~/')) {
						path = knownFolders.currentApp().path + '/' + path.replace('~/', '');
					}
					const nativeOptions = FIROptions.alloc().initWithContentsOfFile(path);
					if (options === null || options === void 0 ? void 0 : options.apiKey) {
						nativeOptions.APIKey = options.apiKey;
					}
					if (options === null || options === void 0 ? void 0 : options.gcmSenderId) {
						nativeOptions.GCMSenderID = options.gcmSenderId;
					}
					if (options === null || options === void 0 ? void 0 : options.androidClientId) {
						nativeOptions.androidClientID = options.androidClientId;
					}
					if (options === null || options === void 0 ? void 0 : options.appGroupId) {
						nativeOptions.appGroupID = options.appGroupId;
					}
					if (options === null || options === void 0 ? void 0 : options.bundleId) {
						nativeOptions.bundleID = options.bundleId;
					}
					if (options === null || options === void 0 ? void 0 : options.clientId) {
						nativeOptions.clientID = options.clientId;
					}
					if (options === null || options === void 0 ? void 0 : options.databaseURL) {
						nativeOptions.databaseURL = options.databaseURL;
					}
					if (options === null || options === void 0 ? void 0 : options.deepLinkURLScheme) {
						nativeOptions.deepLinkURLScheme = options.deepLinkURLScheme;
					}
					if (options === null || options === void 0 ? void 0 : options.googleAppId) {
						nativeOptions.googleAppID = options.googleAppId;
					}
					if (options === null || options === void 0 ? void 0 : options.projectId) {
						nativeOptions.projectID = options.projectId;
					}
					if (options === null || options === void 0 ? void 0 : options.storageBucket) {
						nativeOptions.storageBucket = options.storageBucket;
					}
					if (options === null || options === void 0 ? void 0 : options.trackingId) {
						nativeOptions.trackingID = options.trackingId;
					}
					FIRApp.configureWithOptions(nativeOptions);
					const app = FIRApp.defaultApp();
					if (app && typeof config === 'object' && typeof config.automaticDataCollectionEnabled === 'boolean') {
						app.dataCollectionDefaultEnabled = config.automaticDataCollectionEnabled;
					}
					const fbApp = FirebaseApp.fromNative(app);
					if (!defaultApp) {
						defaultApp = fbApp;
					}
					resolve(fbApp);
				} catch (e) {
					reject(new FirebaseError(e.message));
				}
			};
			if (!UIApplication.sharedApplication) {
				launchQueue.push(() => {
					initApp();
				});
			} else {
				initApp();
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
//# sourceMappingURL=index.ios.js.map
