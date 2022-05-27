var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Crashlytics_native, _Crashlytics_app;
import { firebase, FirebaseApp } from '@nativescript/firebase-core';
import StackTrace from 'stacktrace-js';
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
        __classPrivateFieldSet(this, _Crashlytics_native, FIRCrashlytics.crashlytics(), "f");
    }
    get native() {
        return __classPrivateFieldGet(this, _Crashlytics_native, "f");
    }
    get ios() {
        return this.native;
    }
    get app() {
        if (!__classPrivateFieldGet(this, _Crashlytics_app, "f")) {
            // @ts-ignore
            __classPrivateFieldSet(this, _Crashlytics_app, FirebaseApp.fromNative(this.native.app), "f");
        }
        return __classPrivateFieldGet(this, _Crashlytics_app, "f");
    }
    get isCrashlyticsCollectionEnabled() {
        return this.native.isCrashlyticsCollectionEnabled();
    }
    checkForUnsentReports() {
        return new Promise((resolve, reject) => {
            this.native.checkForUnsentReportsWithCompletion((completed) => {
                resolve(completed);
            });
        });
    }
    crash() {
        TNSFirebaseCrashlytics.crash();
    }
    deleteUnsentReports() {
        this.native.deleteUnsentReports();
    }
    didCrashOnPreviousExecution() {
        return this.native.didCrashDuringPreviousExecution();
    }
    log(message) {
        this.native.log(message);
    }
    recordError(error) {
        if (error instanceof Error) {
            StackTrace.fromError(error).then((stack) => {
                const traceElements = [];
                stack.forEach((item, i) => {
                    traceElements[i] = FIRStackFrame.stackFrameWithSymbolFileLine(item.functionName || '(anonymous)', item.fileName, item.lineNumber);
                });
                const e = FIRExceptionModel.exceptionModelWithNameReason('JavaScriptError', error.message);
                this.native.recordExceptionModel(e);
            });
        }
        else {
            this.native.recordError(error);
        }
    }
    sendUnsentReports() {
        this.native.sendUnsentReports();
    }
    setAttribute(name, value) {
        this.native.setCustomValueForKey(value, name);
    }
    setAttributes(attributes) {
        Object.keys(attributes).forEach((key) => {
            this.native.setCustomValueForKey(attributes[key], key);
        });
    }
    setCrashlyticsCollectionEnabled(enabled) {
        this.native.setCrashlyticsCollectionEnabled(enabled);
    }
    setUserId(userId) {
        this.native.setUserID(userId);
    }
}
_Crashlytics_native = new WeakMap(), _Crashlytics_app = new WeakMap();
//# sourceMappingURL=index.ios.js.map