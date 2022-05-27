import { IFirebaseOptions, FirebaseConfig } from './common';
export * from './utils';
export declare class FirebaseError extends Error {
    #private;
    static fromNative(native: java.lang.Exception, message?: string): FirebaseError;
    get native(): java.lang.Exception;
    intoNative(): java.lang.Exception;
}
export declare class FirebaseOptions implements IFirebaseOptions {
    #private;
    static fromNative(native: com.google.firebase.FirebaseApp): FirebaseOptions;
    get native(): com.google.firebase.FirebaseOptions;
    set apiKey(value: string);
    get apiKey(): string;
    set gcmSenderId(value: string);
    get gcmSenderId(): string;
    get databaseURL(): string;
    set googleAppId(value: string);
    get googleAppId(): string;
    set projectId(value: string);
    get projectId(): string;
    set storageBucket(value: string);
    get storageBucket(): string;
    set trackingId(value: string);
    get trackingId(): string;
}
export declare class FirebaseApp {
    #private;
    static fromNative(app: com.google.firebase.FirebaseApp): FirebaseApp;
    get native(): com.google.firebase.FirebaseApp;
    get android(): com.google.firebase.FirebaseApp;
    get name(): string;
    get options(): FirebaseOptions;
    delete(): Promise<void>;
    get apps(): any[];
}
export declare class Firebase {
    #private;
    static addToResumeQueue(callback: () => void): void;
    static get inForeground(): boolean;
    constructor();
    app(name?: string): FirebaseApp;
    initializeApp(options?: FirebaseOptions, configOrName?: FirebaseConfig | string): Promise<unknown>;
    initializeAppWithPath(path: string, options?: FirebaseOptions, config?: FirebaseConfig): Promise<unknown>;
}
export declare function firebase(): Firebase;
