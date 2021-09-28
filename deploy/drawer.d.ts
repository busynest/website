import { TemplateResult, CSSResult, LitElement } from 'lit';
import { RootState } from './store';
declare const UserDrawer_base: (new (...args: any[]) => {
    _storeUnsubscribe: import("redux").Unsubscribe;
    connectedCallback(): void;
    disconnectedCallback(): void;
    stateChanged(_state: {}): void;
    readonly isConnected: boolean;
}) & typeof LitElement;
export declare class UserDrawer extends UserDrawer_base {
    on: boolean;
    constructor();
    stateChanged(state: RootState): void;
    protected firstUpdated(): void;
    static get styles(): CSSResult;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'user-drawer': UserDrawer;
    }
}
export {};
//# sourceMappingURL=drawer.d.ts.map