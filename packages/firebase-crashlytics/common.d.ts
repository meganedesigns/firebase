import { FirebaseApp } from '@nativescript/firebase-core';
export interface ICrashlytics {
    readonly app: FirebaseApp;
    checkForUnsentReports(): Promise<boolean>;
    crash(): void;
    deleteUnsentReports(): any;
    didCrashOnPreviousExecution(): boolean;
    log(message: string): void;
    recordError(error: any): void;
    sendUnsentReports(): void;
    setAttribute(name: string, value: string | number | boolean): any;
    setAttributes(attributes: {
        [key: string]: string | number | boolean;
    }): any;
    setCrashlyticsCollectionEnabled(enabled: boolean): any;
    setUserId(userId: string): any;
}
