var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Analytics_app;
import { firebase, FirebaseApp, serialize } from '@nativescript/firebase-core';
import { ConsentStatus, ConsentType } from '.';
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
export class Analytics {
    constructor() {
        _Analytics_app.set(this, void 0);
        if (defaultAnalytics) {
            return defaultAnalytics;
        }
        defaultAnalytics = this;
    }
    handleOpenURL(url) {
        try {
            FIRAnalytics.handleOpenURL(NSURL.URLWithString(url));
        }
        catch (e) {
        }
    }
    handleUserActivity(userActivity) {
        FIRAnalytics.handleUserActivity(userActivity);
    }
    get app() {
        if (!__classPrivateFieldGet(this, _Analytics_app, "f")) {
            // @ts-ignore
            __classPrivateFieldSet(this, _Analytics_app, FirebaseApp.fromNative(FIRApp.defaultApp()), "f");
        }
        return __classPrivateFieldGet(this, _Analytics_app, "f");
    }
    get appInstanceId() {
        var _a;
        return (_a = FIRAnalytics === null || FIRAnalytics === void 0 ? void 0 : FIRAnalytics.appInstanceID) === null || _a === void 0 ? void 0 : _a.call(FIRAnalytics);
    }
    setSessionTimeoutInterval(sessionTimeoutInterval) {
        FIRAnalytics.setSessionTimeoutInterval(sessionTimeoutInterval);
    }
    setUserProperty(key, value) {
        FIRAnalytics.setUserPropertyStringForName(value, key);
    }
    setAnalyticsCollectionEnabled(analyticsCollectionEnabled) {
        FIRAnalytics.setAnalyticsCollectionEnabled(analyticsCollectionEnabled);
    }
    setUserId(userId) {
        FIRAnalytics.setUserID(userId);
    }
    logEvent(name, parameters) {
        FIRAnalytics.logEventWithNameParameters(name, serialize(parameters));
    }
    resetAnalyticsData() {
        FIRAnalytics.resetAnalyticsData();
    }
    setDefaultEventParameters(parameters) {
        FIRAnalytics.setDefaultEventParameters(serialize(parameters));
    }
    setConsent(consentSettings) {
        const dictionary = {};
        consentSettings.forEach((value, key) => {
            let nativeKey;
            let nativeValue;
            switch (key) {
                case ConsentType.Ad_Storage:
                    nativeKey = FIRConsentTypeAdStorage;
                    break;
                case ConsentType.Analytics_Storage:
                    nativeKey = FIRConsentTypeAnalyticsStorage;
                    break;
            }
            switch (value) {
                case ConsentStatus.Denied:
                    nativeValue = FIRConsentStatusDenied;
                    break;
                case ConsentStatus.Granted:
                    nativeValue = FIRConsentStatusGranted;
                    break;
            }
            if (nativeKey && nativeValue) {
                dictionary[nativeKey] = nativeValue;
            }
        });
        FIRAnalytics.setConsent(dictionary);
    }
}
_Analytics_app = new WeakMap();
//# sourceMappingURL=index.ios.js.map