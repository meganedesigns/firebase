export interface IAnalytics {
    readonly appInstanceId: string;
    logEvent(name: string, parameters: EventParameter): void;
    setUserId(userId: string): void;
    resetAnalyticsData(): void;
    setAnalyticsCollectionEnabled(analyticsCollectionEnabled: boolean): void;
    setUserProperty(value: string, name: string): void;
    setSessionTimeoutInterval(sessionTimeoutInterval: number): void;
    setDefaultEventParameters(parameters: EventParameter): void;
    setConsent(consentSettings: Map<ConsentType, ConsentStatus>): void;
    handleOpenURL(url: string): void;
    handleUserActivity(userActivity: any): void;
}
export interface EventParameter {
    [key: string]: any;
}
export declare enum ConsentType {
    Ad_Storage = 0,
    Analytics_Storage = 1
}
export declare enum ConsentStatus {
    Denied = 0,
    Granted = 1
}
