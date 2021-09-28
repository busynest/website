import { LitElement, TemplateResult, CSSResult } from 'lit';
import './drawer';
import './offline';
declare const ApplicationShell_base: (new (...args: any[]) => {
    _storeUnsubscribe: import("redux").Unsubscribe;
    connectedCallback(): void;
    disconnectedCallback(): void;
    stateChanged(_state: {}): void;
    readonly isConnected: boolean;
}) & typeof LitElement;
export declare class ApplicationShell extends ApplicationShell_base {
    user: boolean;
    page: string;
    drawer: boolean;
    offline: boolean;
    offlineTxt: boolean;
    photoURL: string;
    constructor();
    private toggleDrawers;
    protected firstUpdated(): void;
    protected updated(changedProps: any): void;
    static get styles(): CSSResult;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'application-shell': ApplicationShell;
    }
}
export {};
//# sourceMappingURL=application-shell.d.ts.map