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
var _Messaging_app, _Messaging_onMessage, _Messaging_onToken, _Messaging_onNotificationTap;
import { Application, ApplicationSettings, Device } from '@nativescript/core';
import { deserialize, firebase, FirebaseApp, FirebaseError } from '@nativescript/firebase-core';
import { AuthorizationStatus } from './common';
export { AuthorizationStatus } from './common';
let _registerDeviceForRemoteMessages = {
    resolve: null,
    reject: null,
};
let defaultMessaging;
const fb = firebase();
Object.defineProperty(fb, 'messaging', {
    value: () => {
        if (!defaultMessaging) {
            defaultMessaging = new Messaging();
        }
        return defaultMessaging;
    },
    writable: false,
});
const REMOTE_NOTIFICATIONS_REGISTRATION_STATUS = 'org.nativescript.firebase.notifications.status';
export class Messaging {
    constructor() {
        _Messaging_app.set(this, void 0);
        _Messaging_onMessage.set(this, void 0);
        _Messaging_onToken.set(this, void 0);
        _Messaging_onNotificationTap.set(this, void 0);
        if (defaultMessaging) {
            return defaultMessaging;
        }
        defaultMessaging = this;
        TNSFirebaseMessaging.onMessageCallback = (dict) => {
            if (__classPrivateFieldGet(this, _Messaging_onMessage, "f")) {
                __classPrivateFieldGet(this, _Messaging_onMessage, "f").call(this, deserialize(dict));
            }
        };
        TNSFirebaseMessaging.onTokenCallback = (value) => {
            if (__classPrivateFieldGet(this, _Messaging_onToken, "f")) {
                __classPrivateFieldGet(this, _Messaging_onToken, "f").call(this, value);
            }
        };
        TNSFirebaseMessaging.onNotificationTapCallback = (dict) => {
            if (__classPrivateFieldGet(this, _Messaging_onNotificationTap, "f")) {
                __classPrivateFieldGet(this, _Messaging_onNotificationTap, "f").call(this, deserialize(dict));
            }
        };
    }
    get showNotificationsWhenInForeground() {
        return TNSFirebaseMessaging.showNotificationsWhenInForeground;
    }
    set showNotificationsWhenInForeground(value) {
        TNSFirebaseMessaging.showNotificationsWhenInForeground = value;
    }
    get _onMessage() {
        return __classPrivateFieldGet(this, _Messaging_onMessage, "f");
    }
    get _onNotificationTap() {
        return __classPrivateFieldGet(this, _Messaging_onNotificationTap, "f");
    }
    get _onToken() {
        return __classPrivateFieldGet(this, _Messaging_onToken, "f");
    }
    getToken() {
        return new Promise((resolve, reject) => {
            var _a;
            if (!TNSFirebaseCore.isSimulator() && !UIApplication.sharedApplication.registeredForRemoteNotifications) {
                reject(new Error('You must be registered for remote messages before calling getToken, see messaging().registerDeviceForRemoteMessages()'));
                return;
            }
            (_a = this.native) === null || _a === void 0 ? void 0 : _a.tokenWithCompletion((token, error) => {
                if (error) {
                    reject(FirebaseError.fromNative(error));
                }
                else {
                    resolve(token);
                }
            });
        });
    }
    getAPNSToken() {
        return TNSFirebaseMessaging.APNSTokenToString(this.native.APNSToken);
    }
    _hasPermission(resolve, reject) {
        if (parseInt(Device.osVersion) >= 10) {
            UNUserNotificationCenter.currentNotificationCenter().getNotificationSettingsWithCompletionHandler((settings) => {
                let status = AuthorizationStatus.NOT_DETERMINED;
                switch (settings.authorizationStatus) {
                    case 2 /* Authorized */:
                        status = AuthorizationStatus.AUTHORIZED;
                        break;
                    case 1 /* Denied */:
                        status = AuthorizationStatus.DENIED;
                        break;
                    case 4 /* Ephemeral */:
                        status = AuthorizationStatus.EPHEMERAL;
                        break;
                    case 3 /* Provisional */:
                        status = AuthorizationStatus.PROVISIONAL;
                        break;
                    case 0 /* NotDetermined */:
                        status = AuthorizationStatus.NOT_DETERMINED;
                        break;
                }
                resolve(status);
            });
        }
        else {
            resolve(AuthorizationStatus.AUTHORIZED);
        }
    }
    hasPermission() {
        return new Promise((resolve, reject) => {
            this._hasPermission(resolve, reject);
        });
    }
    onMessage(listener) {
        __classPrivateFieldSet(this, _Messaging_onMessage, listener, "f");
    }
    onToken(listener) {
        __classPrivateFieldSet(this, _Messaging_onToken, listener, "f");
    }
    onNotificationTap(listener) {
        __classPrivateFieldSet(this, _Messaging_onNotificationTap, listener, "f");
    }
    registerDeviceForRemoteMessages() {
        return new Promise((resolve, reject) => {
            var _a, _b;
            if (TNSFirebaseCore.isSimulator()) {
                ApplicationSettings.setBoolean(REMOTE_NOTIFICATIONS_REGISTRATION_STATUS, true);
                resolve();
            }
            TNSFirebaseMessaging.registerDeviceForRemoteMessagesCallback = (result, error) => {
                if (error) {
                    reject(FirebaseError.fromNative(error));
                }
                else {
                    resolve(result);
                }
            };
            if (UIApplication === null || UIApplication === void 0 ? void 0 : UIApplication.sharedApplication) {
                (_b = (_a = UIApplication === null || UIApplication === void 0 ? void 0 : UIApplication.sharedApplication) === null || _a === void 0 ? void 0 : _a.registerForRemoteNotifications) === null || _b === void 0 ? void 0 : _b.call(_a);
            }
            else {
                const cb = (args) => {
                    var _a, _b;
                    (_b = (_a = UIApplication === null || UIApplication === void 0 ? void 0 : UIApplication.sharedApplication) === null || _a === void 0 ? void 0 : _a.registerForRemoteNotifications) === null || _b === void 0 ? void 0 : _b.call(_a);
                    Application.off('launch', cb);
                };
                Application.on('launch', cb);
            }
        });
    }
    requestPermission(permissions) {
        return new Promise((resolve, reject) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
            const version = parseInt(Device.osVersion);
            if (version >= 10) {
                let options = UNAuthorizationOptionNone;
                if ((_b = (_a = permissions === null || permissions === void 0 ? void 0 : permissions.ios) === null || _a === void 0 ? void 0 : _a.alert) !== null && _b !== void 0 ? _b : true) {
                    options = options | 4 /* Alert */;
                }
                if ((_d = (_c = permissions === null || permissions === void 0 ? void 0 : permissions.ios) === null || _c === void 0 ? void 0 : _c.badge) !== null && _d !== void 0 ? _d : true) {
                    options = options | 1 /* Badge */;
                }
                if ((_f = (_e = permissions === null || permissions === void 0 ? void 0 : permissions.ios) === null || _e === void 0 ? void 0 : _e.sound) !== null && _f !== void 0 ? _f : true) {
                    options = options | 2 /* Sound */;
                }
                if ((_h = (_g = permissions === null || permissions === void 0 ? void 0 : permissions.ios) === null || _g === void 0 ? void 0 : _g.carPlay) !== null && _h !== void 0 ? _h : true) {
                    options = options | 8 /* CarPlay */;
                }
                if (version >= 12) {
                    if ((_j = permissions === null || permissions === void 0 ? void 0 : permissions.ios) === null || _j === void 0 ? void 0 : _j.criticalAlert) {
                        options = options | 16 /* CriticalAlert */;
                    }
                    if ((_k = permissions === null || permissions === void 0 ? void 0 : permissions.ios) === null || _k === void 0 ? void 0 : _k.provisional) {
                        options = options | 64 /* Provisional */;
                    }
                }
                if (version >= 13 && version <= 15) {
                    options = options | 128 /* Announcement */;
                }
                UNUserNotificationCenter.currentNotificationCenter().requestAuthorizationWithOptionsCompletionHandler(options, (result, error) => {
                    if (error) {
                        reject(FirebaseError.fromNative(error));
                    }
                    else {
                        this._hasPermission(resolve, reject);
                    }
                });
            }
            else {
                const notificationTypes = 2 /* Sound */ | 4 /* Alert */ | 1 /* Badge */;
                const settings = UIUserNotificationSettings.settingsForTypesCategories(notificationTypes, null);
                UIApplication.sharedApplication.registerUserNotificationSettings(settings);
                this._hasPermission(resolve, reject);
            }
        });
    }
    subscribeToTopic(topic) {
        return new Promise((resolve, reject) => {
            this.native.subscribeToTopicCompletion(topic, (error) => {
                if (error) {
                    reject(FirebaseError.fromNative(error));
                }
                else {
                    resolve();
                }
            });
        });
    }
    unregisterDeviceForRemoteMessages() {
        return new Promise((resolve, reject) => {
            try {
                UIApplication.sharedApplication.unregisterForRemoteNotifications();
                ApplicationSettings.setBoolean(REMOTE_NOTIFICATIONS_REGISTRATION_STATUS, false);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    }
    unsubscribeFromTopic(topic) {
        return new Promise((resolve, reject) => {
            this.native.unsubscribeFromTopicCompletion(topic, (error) => {
                if (error) {
                    reject(FirebaseError.fromNative(error));
                }
                else {
                    resolve();
                }
            });
        });
    }
    deleteToken() {
        return new Promise((resolve, reject) => {
            var _a;
            (_a = this.native) === null || _a === void 0 ? void 0 : _a.deleteDataWithCompletion((error) => {
                if (error) {
                    reject(FirebaseError.fromNative(error));
                }
                else {
                    resolve();
                }
            });
        });
    }
    get isDeviceRegisteredForRemoteMessages() {
        return UIApplication.sharedApplication.registeredForRemoteNotifications;
    }
    get autoInitEnabled() {
        var _a;
        return (_a = this.native) === null || _a === void 0 ? void 0 : _a.autoInitEnabled;
    }
    set autoInitEnabled(value) {
        this.native.autoInitEnabled = value;
    }
    get app() {
        if (!__classPrivateFieldGet(this, _Messaging_app, "f")) {
            // @ts-ignore
            __classPrivateFieldSet(this, _Messaging_app, FirebaseApp.fromNative(FIRApp.defaultApp()), "f");
        }
        return __classPrivateFieldGet(this, _Messaging_app, "f");
    }
    get native() {
        return FIRMessaging.messaging();
    }
    get ios() {
        return this.native;
    }
}
_Messaging_app = new WeakMap(), _Messaging_onMessage = new WeakMap(), _Messaging_onToken = new WeakMap(), _Messaging_onNotificationTap = new WeakMap();
//# sourceMappingURL=index.ios.js.map