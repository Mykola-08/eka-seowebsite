export { };

declare global {
    interface Window {
        gtag: (
            command: 'config' | 'event' | 'consent' | 'set',
            targetIdOrAction: string,
            config?: Record<string, unknown>
        ) => void;
        _hsq: Array<unknown[]>;
        _hsp: Array<unknown[]>;
        hbspt?: {
            forms: {
                create: (config: {
                    portalId: string;
                    formId: string;
                    region?: string;
                    target: string;
                    onFormSubmitted?: () => void;
                }) => void;
            };
        };
        HubSpotConversations?: {
            widget: {
                open: () => void;
                close: () => void;
                remove: () => void;
                status: () => { loaded: boolean; open: boolean };
            };
        };
    }
}
