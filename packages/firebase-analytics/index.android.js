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
var _Analytics_native, _Analytics_app;
import { Utils } from '@nativescript/core';
import { firebase, FirebaseApp } from '@nativescript/firebase-core';
import { ConsentStatus, ConsentType } from './common';
export * from './common';
let defaultAnalytics;
const fb = firebase();
Object.defineProperty(fb, 'analytics', {
	value: () => {
		if (!defaultAnalytics) {
			defaultAnalytics = new Analytics();
		}
		return defaultAnalytics;
	},
	writable: false,
});
function serialize(data) {
	let store;
	switch (typeof data) {
		case 'string':
		case 'boolean':
		case 'number': {
			return data;
		}
		case 'object': {
			if (data === null) {
				return null;
			}
			if (Array.isArray(data)) {
				store = new java.util.ArrayList();
				data.forEach((item) => {
					const value = serialize(item);
					switch (typeof value) {
						case 'object':
							if (value instanceof android.os.Bundle) {
								store.add(value);
							}
							if (value instanceof java.util.ArrayList) {
								store.add(value);
							}
							break;
					}
				});
				return store;
			}
			store = new android.os.Bundle();
			Object.keys(data).forEach((key) => {
				const value = serialize(data[key]);
				switch (typeof value) {
					case 'boolean':
						store.putBoolean(key, value);
						break;
					case 'number':
						store.putInt(key, value);
						break;
					case 'string':
						store.putString(key, value);
						break;
					case 'object':
						if (value instanceof android.os.Bundle) {
							store.putBundle(key, value);
						} else if (value instanceof java.util.ArrayList) {
							store.putParcelableArrayList(key, value);
						} else {
							store.putString(key, null);
						}
						break;
				}
			});
			return store;
		}
		default:
			return null;
	}
}
export class Analytics {
	constructor() {
		_Analytics_native.set(this, void 0);
		_Analytics_app.set(this, void 0);
		if (defaultAnalytics) {
			return defaultAnalytics;
		}
		defaultAnalytics = this;
		__classPrivateFieldSet(this, _Analytics_native, com.google.firebase.analytics.FirebaseAnalytics.getInstance(Utils.android.getApplicationContext()), 'f');
	}
	handleOpenURL(url) {}
	handleUserActivity(userActivity) {}
	get app() {
		if (!__classPrivateFieldGet(this, _Analytics_app, 'f')) {
			// @ts-ignore
			__classPrivateFieldSet(this, _Analytics_app, FirebaseApp.fromNative(com.google.firebase.FirebaseApp.getInstance()), 'f');
		}
		return __classPrivateFieldGet(this, _Analytics_app, 'f');
	}
	get appInstanceId() {
		return __classPrivateFieldGet(this, _Analytics_native, 'f').getAppInstanceId();
	}
	setSessionTimeoutInterval(sessionTimeoutInterval) {
		__classPrivateFieldGet(this, _Analytics_native, 'f').setSessionTimeoutDuration(sessionTimeoutInterval);
	}
	setUserProperty(key, value) {
		__classPrivateFieldGet(this, _Analytics_native, 'f').setUserProperty(key, value);
	}
	setAnalyticsCollectionEnabled(analyticsCollectionEnabled) {
		__classPrivateFieldGet(this, _Analytics_native, 'f').setAnalyticsCollectionEnabled(analyticsCollectionEnabled);
	}
	setUserId(userId) {
		__classPrivateFieldGet(this, _Analytics_native, 'f').setUserId(userId);
	}
	logEvent(name, parameters) {
		__classPrivateFieldGet(this, _Analytics_native, 'f').logEvent(name, serialize(parameters));
	}
	resetAnalyticsData() {
		__classPrivateFieldGet(this, _Analytics_native, 'f').resetAnalyticsData();
	}
	setDefaultEventParameters(parameters) {
		__classPrivateFieldGet(this, _Analytics_native, 'f').setDefaultEventParameters(serialize(parameters));
	}
	setConsent(consentSettings) {
		const nativeMap = new java.util.HashMap();
		consentSettings.forEach((value, key) => {
			let nativeKey;
			let nativeValue;
			switch (key) {
				case ConsentType.Ad_Storage:
					nativeKey = com.google.firebase.analytics.FirebaseAnalytics.ConsentType.AD_STORAGE;
					break;
				case ConsentType.Analytics_Storage:
					nativeKey = com.google.firebase.analytics.FirebaseAnalytics.ConsentType.ANALYTICS_STORAGE;
					break;
			}
			switch (value) {
				case ConsentStatus.Denied:
					nativeValue = com.google.firebase.analytics.FirebaseAnalytics.ConsentStatus.DENIED;
					break;
				case ConsentStatus.Granted:
					nativeValue = com.google.firebase.analytics.FirebaseAnalytics.ConsentStatus.GRANTED;
					break;
			}
			if (nativeKey && nativeValue) {
				nativeMap.put(nativeKey, nativeValue);
			}
		});
		__classPrivateFieldGet(this, _Analytics_native, 'f').setConsent(nativeMap);
	}
}
(_Analytics_native = new WeakMap()), (_Analytics_app = new WeakMap());
//# sourceMappingURL=index.android.js.map
