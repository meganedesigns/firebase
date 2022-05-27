import { FirebaseConfig, IFirebaseOptions } from './common';
export * from './utils';
export declare class FirebaseError extends Error {
    #private;
    static fromNative(native: NSError, message?: string): FirebaseError;
    get native(): NSError;
    intoNative(): NSError;
}
export declare class FirebaseOptions implements IFirebaseOptions {
    #private;
    static fromNative(native: FIRApp): FirebaseOptions;
    get ios(): FIROptions;
    get native(): FIROptions;
    get name(): string;
    set apiKey(value: string);
    get apiKey(): string;
    set gcmSenderId(value: string);
    get gcmSenderId(): string;
    set androidClientId(value: string);
    get androidClientId(): string;
    set appGroupId(value: string);
    get appGroupId(): string;
    set bundleId(value: string);
    get bundleId(): string;
    set clientId(value: string);
    get clientId(): string;
    set databaseURL(value: string);
    get databaseURL(): string;
    set deepLinkURLScheme(value: string);
    get deepLinkURLScheme(): string;
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
    static fromNative(app: FIRApp): FirebaseApp;
    get native(): FIRApp;
    get ios(): FIRApp;
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
