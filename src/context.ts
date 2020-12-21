export interface Properties {
    [key: string]: string | undefined | number;
}

export interface Context {
    [key: string]: string | undefined | number | Properties;
    userId?: string;
    sessionId?: string;
    remoteAddress?: string;
    environment?: string;
    appName?: string;
    referrer?: string;
    properties?: Properties;
}
