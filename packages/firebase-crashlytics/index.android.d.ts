import { FirebaseApp } from '@nativescript/firebase-core';
import { ICrashlytics } from './common';
export declare class Crashlytics implements ICrashlytics {
    #private;
    constructor();
    get native(): com.google.firebase.crashlytics.FirebaseCrashlytics;
    get android(): com.google.firebase.crashlytics.FirebaseCrashlytics;
    get app(): FirebaseApp;
    checkForUnsentReports(): Promise<boolean>;
    crash(): void;
    deleteUnsentReports(): void;
    didCrashOnPreviousExecution(): boolean;
    log(message: string): void;
    recordError(error: any): void;
    sendUnsentReports(): void;
    setAttribute(name: string, value: string | number | boolean): void;
    setAttributes(attributes: {
        [key: string]: string | number | boolean;
    }): void;
    setCrashlyticsCollectionEnabled(enabled: boolean): void;
    setUserId(userId: string): void;
}
