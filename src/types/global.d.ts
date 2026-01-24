export { };

declare global {
    interface Window {
        gtag: (
            command: 'config' | 'event' | 'consent',
            targetId: string,
            config?: Record<string, unknown>
        ) => void;
    }
}
