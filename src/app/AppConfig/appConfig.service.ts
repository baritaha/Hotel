import { InjectionToken } from "@angular/core";
import { AppConfig } from "./app.interface";
import { environment } from "environments/environment";
export const APP_SERVICE_CONFIG=new InjectionToken<AppConfig>('app.Config');

export const APP_CONFIG:AppConfig = {
    apiEndpoint:environment.apiEndpoint
}