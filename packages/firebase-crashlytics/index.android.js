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
var _Crashlytics_native, _Crashlytics_app;
import { FirebaseApp, FirebaseError, firebase } from '@nativescript/firebase-core';
import lazy from '@nativescript/core/utils/lazy';
import StackTrace from 'stacktrace-js';
const NSCrashlyticsReference = lazy(() => org.nativescript.firebase.crashlytics.FirebaseCrashlytics);
let defaultCrashlytics;
const fb = firebase();
Object.defineProperty(fb, 'crashlytics', {
    value: () => {
        if (!defaultCrashlytics) {
            defaultCrashlytics = new Crashlytics();
        }
        return defaultCrashlytics;
    },
    writable: false,
});
export class Crashlytics {
    constructor() {
        _Crashlytics_native.set(this, void 0);
        _Crashlytics_app.set(this, void 0);
        if (defaultCrashlytics) {
            return defaultCrashlytics;
        }
        defaultCrashlytics = this;
    }
    get native() {
        if (!__classPrivateFieldGet(this, _Crashlytics_native, "f")) {
            __classPrivateFieldSet(this, _Crashlytics_native, com.google.firebase.crashlytics.FirebaseCrashlytics.getInstance(), "f");
        }
        return __classPrivateFieldGet(this, _Crashlytics_native, "f");
    }
    get android() {
        return this.native;
    }
    get app() {
        if (!__classPrivateFieldGet(this, _Crashlytics_app, "f")) {
            // @ts-ignore
            __classPrivateFieldSet(this, _Crashlytics_app, FirebaseApp.fromNative(this.native.app), "f");
        }
        return __classPrivateFieldGet(this, _Crashlytics_app, "f");
    }
    checkForUnsentReports() {
        return new Promise((resolve, reject) => {
            NSCrashlyticsReference().checkForUnsentReports(this.native, new org.nativescript.firebase.crashlytics.FirebaseCrashlytics.Callback({
                onSuccess(param0) {
                    resolve(param0);
                },
                onError(param0) {
                    const err = FirebaseError.fromNative(param0);
                    reject(err);
                },
            }));
        });
    }
    crash() {
        NSCrashlyticsReference().crash();
    }
    deleteUnsentReports() {
        this.native.deleteUnsentReports();
    }
    didCrashOnPreviousExecution() {
        return this.native.didCrashOnPreviousExecution();
    }
    log(message) {
        this.native.log(message);
    }
    recordError(error) {
        if (error instanceof Error) {
            StackTrace.fromError(error).then((stack) => {
                const traceElements = Array.create('java.lang.StackTraceElement', stack.length);
                stack.forEach((item, i) => {
                    traceElements[i] = new java.lang.StackTraceElement('', item.functionName || '(anonymous)', item.fileName, -1);
                });
                const t = new java.lang.Throwable(error.message);
                t.setStackTrace(traceElements);
                this.native.recordException(t);
            });
        }
        else {
            this.native.recordException(error);
        }
    }
    sendUnsentReports() {
        this.native.sendUnsentReports();
    }
    setAttribute(name, value) {
        if (typeof value === 'string') {
            this.native.setCustomKey(name, value);
        }
        else if (typeof value === 'number') {
            this.native.setCustomKey(name, value);
        }
        else if (typeof value === 'boolean') {
            this.native.setCustomKey(name, value);
        }
    }
    setAttributes(attributes) {
        try {
            NSCrashlyticsReference().setAttributes(this.native, JSON.stringify(attributes));
        }
        catch (e) { }
    }
    setCrashlyticsCollectionEnabled(enabled) {
        this.native.setCrashlyticsCollectionEnabled(java.lang.Boolean.valueOf(enabled));
    }
    setUserId(userId) {
        this.native.setUserId(userId);
    }
}
_Crashlytics_native = new WeakMap(), _Crashlytics_app = new WeakMap();
//# sourceMappingURL=index.android.js.map