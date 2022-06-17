import { FirebaseApp } from '@nativescript/firebase-core';
import { ConsentStatus, ConsentType, EventParameter, IAnalytics } from './common';
export * from './common';
export declare class Analytics implements IAnalytics {
	#private;
	constructor();
	handleOpenURL(url: string): void;
	handleUserActivity(userActivity: any): void;
	get app(): FirebaseApp;
	get appInstanceId(): string;
	setSessionTimeoutInterval(sessionTimeoutInterval: number): void;
	setUserProperty(key: string, value: string): void;
	setAnalyticsCollectionEnabled(analyticsCollectionEnabled: boolean): void;
	setUserId(userId: string): void;
	logEvent(name: string, parameters: EventParameter): void;
	resetAnalyticsData(): void;
	setDefaultEventParameters(parameters: EventParameter): void;
	setConsent(consentSettings: Map<ConsentType, ConsentStatus>): void;
}
