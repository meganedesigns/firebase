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
var _Messaging_native, _Messaging_app, _Messaging_onMessageCallback, _Messaging_onMessage, _Messaging_onNotificationTapCallback, _Messaging_onNotificationTap, _Messaging_onTokenCallback, _Messaging_onToken;
import { AndroidApplication, Application, Utils } from '@nativescript/core';
import { FirebaseApp, FirebaseError, firebase } from '@nativescript/firebase-core';
import { AuthorizationStatus } from './common';
let defaultMessaging;
export { AuthorizationStatus } from './common';
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
let Callback;
function ensureCallback() {
    var CallbackImpl = /** @class */ (function (_super) {
    __extends(CallbackImpl, _super);
    function CallbackImpl() {
        var _this = _super.call(this) || this;
        return global.__native(_this);
    }
    CallbackImpl.prototype.onError = function (error) { };
    CallbackImpl.prototype.onSuccess = function (message) {
        var _this = this;
        var exec = function () {
            var _a, _b, _c;
            var callback = (_c = (_b = (_a = _this._owner) === null || _a === void 0 ? void 0 : _a.get) === null || _b === void 0 ? void 0 : _b.call(_a)) === null || _c === void 0 ? void 0 : _c[_this._propName];
            if (typeof callback === 'function') {
                if (_this._propName === '_onToken') {
                    callback(message);
                }
                else if (_this._propName === '_onNotificationTap' || _this._propName === '_onMessage') {
                    try {
                        setTimeout(function () {
                            callback(JSON.parse(message));
                        });
                    }
                    catch (e) { }
                }
                else {
                    try {
                        callback(JSON.parse(message));
                    }
                    catch (e) { }
                }
            }
        };
        var fb = require('@nativescript/firebase-core');
        if (!fb.Firebase.inForeground) {
            fb.Firebase.addToResumeQueue(exec);
        }
        else {
            exec();
        }
    };
    CallbackImpl = __decorate([
        Interfaces([org.nativescript.firebase.messaging.FirebaseMessaging.Callback])
    ], CallbackImpl);
    return CallbackImpl;
}(java.lang.Object));
    Callback = CallbackImpl;
}
export class Messaging {
    constructor() {
        _Messaging_native.set(this, void 0);
        _Messaging_app.set(this, void 0);
        _Messaging_onMessageCallback.set(this, void 0);
        _Messaging_onMessage.set(this, void 0);
        _Messaging_onNotificationTapCallback.set(this, void 0);
        _Messaging_onNotificationTap.set(this, void 0);
        _Messaging_onTokenCallback.set(this, void 0);
        _Messaging_onToken.set(this, void 0);
        if (defaultMessaging) {
            return defaultMessaging;
        }
        defaultMessaging = this;
        org.nativescript.firebase.messaging.FirebaseMessaging.init(Utils.android.getApplicationContext());
        ensureCallback();
        // Setup onmessage handling
        if (!__classPrivateFieldGet(this, _Messaging_onMessageCallback, "f")) {
            __classPrivateFieldSet(this, _Messaging_onMessageCallback, new Callback(), "f");
            __classPrivateFieldGet(this, _Messaging_onMessageCallback, "f")._propName = '_onMessage';
            __classPrivateFieldGet(this, _Messaging_onMessageCallback, "f")._owner = new WeakRef(this);
            org.nativescript.firebase.messaging.FirebaseMessaging.setOnMessageListener(__classPrivateFieldGet(this, _Messaging_onMessageCallback, "f"));
        }
        // Setup tap notification handling
        if (!__classPrivateFieldGet(this, _Messaging_onNotificationTapCallback, "f")) {
            __classPrivateFieldSet(this, _Messaging_onNotificationTapCallback, new Callback(), "f");
            __classPrivateFieldGet(this, _Messaging_onNotificationTapCallback, "f")._propName = '_onNotificationTap';
            __classPrivateFieldGet(this, _Messaging_onNotificationTapCallback, "f")._owner = new WeakRef(this);
            org.nativescript.firebase.messaging.FirebaseMessaging.setOnMessageTapListener(__classPrivateFieldGet(this, _Messaging_onNotificationTapCallback, "f"));
        }
        if (!__classPrivateFieldGet(this, _Messaging_onTokenCallback, "f")) {
            __classPrivateFieldSet(this, _Messaging_onTokenCallback, new Callback(), "f");
            __classPrivateFieldGet(this, _Messaging_onTokenCallback, "f")._propName = '_onToken';
            __classPrivateFieldGet(this, _Messaging_onTokenCallback, "f")._owner = new WeakRef(this);
            org.nativescript.firebase.messaging.FirebaseMessaging.setOnTokenListener(__classPrivateFieldGet(this, _Messaging_onTokenCallback, "f"));
        }
        Application.android.on(AndroidApplication.activityNewIntentEvent, this._newIntentCallback.bind(this));
    }
    _newIntentCallback(args) {
        org.nativescript.firebase.messaging.FirebaseMessaging.handleActivityIntent(args.intent);
    }
    get _onMessage() {
        return __classPrivateFieldGet(this, _Messaging_onMessage, "f");
    }
    get _onMessageCallback() {
        return __classPrivateFieldGet(this, _Messaging_onMessageCallback, "f");
    }
    get _onNotificationTap() {
        return __classPrivateFieldGet(this, _Messaging_onNotificationTap, "f");
    }
    get _onNotificationTapCallback() {
        return __classPrivateFieldGet(this, _Messaging_onNotificationTapCallback, "f");
    }
    get _onToken() {
        return __classPrivateFieldGet(this, _Messaging_onToken, "f");
    }
    get _onTokenCallback() {
        return __classPrivateFieldGet(this, _Messaging_onTokenCallback, "f");
    }
    getToken() {
        return new Promise((resolve, reject) => {
            org.nativescript.firebase.messaging.FirebaseMessaging.getToken(this.native, new org.nativescript.firebase.messaging.FirebaseMessaging.Callback({
                onSuccess(result) {
                    resolve(result);
                },
                onError(error) {
                    reject(FirebaseError.fromNative(error));
                },
            }));
        });
    }
    getAPNSToken() {
        return null;
    }
    hasPermission() {
        return Promise.resolve(org.nativescript.firebase.messaging.FirebaseMessaging.hasPermission(Utils.android.getApplicationContext()) ? AuthorizationStatus.AUTHORIZED : AuthorizationStatus.DENIED);
    }
    onMessage(listener) {
        __classPrivateFieldSet(this, _Messaging_onMessage, listener, "f");
    }
    onNotificationTap(listener) {
        __classPrivateFieldSet(this, _Messaging_onNotificationTap, listener, "f");
    }
    onToken(listener) {
        __classPrivateFieldSet(this, _Messaging_onToken, listener, "f");
        if (listener) {
            org.nativescript.firebase.messaging.FirebaseMessaging.setOnTokenListener(__classPrivateFieldGet(this, _Messaging_onTokenCallback, "f"));
        }
        else {
            org.nativescript.firebase.messaging.FirebaseMessaging.setOnTokenListener(null);
        }
    }
    registerDeviceForRemoteMessages() {
        return Promise.resolve();
    }
    requestPermission(permissions) {
        return this.hasPermission();
    }
    subscribeToTopic(topic) {
        return new Promise((resolve, reject) => {
            org.nativescript.firebase.messaging.FirebaseMessaging.subscribeToTopic(topic, this.native, new org.nativescript.firebase.messaging.FirebaseMessaging.Callback({
                onSuccess(result) {
                    resolve();
                },
                onError(error) {
                    reject(FirebaseError.fromNative(error));
                },
            }));
        });
    }
    unregisterDeviceForRemoteMessages() {
        return Promise.resolve();
    }
    unsubscribeFromTopic(topic) {
        return new Promise((resolve, reject) => {
            org.nativescript.firebase.messaging.FirebaseMessaging.unsubscribeFromTopic(topic, this.native, new org.nativescript.firebase.messaging.FirebaseMessaging.Callback({
                onSuccess(result) {
                    resolve();
                },
                onError(error) {
                    reject(FirebaseError.fromNative(error));
                },
            }));
        });
    }
    deleteToken() {
        return new Promise((resolve, reject) => {
            org.nativescript.firebase.messaging.FirebaseMessaging.deleteToken(this.native, new org.nativescript.firebase.messaging.FirebaseMessaging.Callback({
                onSuccess(result) {
                    resolve();
                },
                onError(error) {
                    reject(FirebaseError.fromNative(error));
                },
            }));
        });
    }
    get isDeviceRegisteredForRemoteMessages() {
        return org.nativescript.firebase.messaging.FirebaseMessaging.hasPermission(Utils.android.getApplicationContext());
    }
    get autoInitEnabled() {
        var _a, _b;
        return (_b = (_a = this.native) === null || _a === void 0 ? void 0 : _a.isAutoInitEnabled) === null || _b === void 0 ? void 0 : _b.call(_a);
    }
    set autoInitEnabled(value) {
        var _a, _b;
        (_b = (_a = this.native) === null || _a === void 0 ? void 0 : _a.setAutoInitEnabled) === null || _b === void 0 ? void 0 : _b.call(_a, value);
    }
    get app() {
        if (!__classPrivateFieldGet(this, _Messaging_app, "f")) {
            // @ts-ignore
            __classPrivateFieldSet(this, _Messaging_app, FirebaseApp.fromNative(FIRApp.defaultApp()), "f");
        }
        return __classPrivateFieldGet(this, _Messaging_app, "f");
    }
    get native() {
        if (!__classPrivateFieldGet(this, _Messaging_native, "f")) {
            __classPrivateFieldSet(this, _Messaging_native, com.google.firebase.messaging.FirebaseMessaging.getInstance(), "f");
        }
        return __classPrivateFieldGet(this, _Messaging_native, "f");
    }
    get android() {
        return this.native;
    }
}
_Messaging_native = new WeakMap(), _Messaging_app = new WeakMap(), _Messaging_onMessageCallback = new WeakMap(), _Messaging_onMessage = new WeakMap(), _Messaging_onNotificationTapCallback = new WeakMap(), _Messaging_onNotificationTap = new WeakMap(), _Messaging_onTokenCallback = new WeakMap(), _Messaging_onToken = new WeakMap();
//# sourceMappingURL=index.android.js.map