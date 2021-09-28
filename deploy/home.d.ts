import { TemplateResult, CSSResult } from 'lit';
import { LazyLoader } from './lazy-loader';
declare const HomePage_base: (new (...args: any[]) => {
    _storeUnsubscribe: import("redux").Unsubscribe;
    connectedCallback(): void;
    disconnectedCallback(): void;
    stateChanged(_state: {}): void;
    readonly isConnected: boolean;
}) & typeof LazyLoader;
export declare class HomePage extends HomePage_base {
    constructor();
    protected firstUpdated(): void;
    static get styles(): CSSResult;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'home-page': HomePage;
    }
}
export {};
//# sourceMappingURL=home.d.ts.map