import { LitElement, TemplateResult, CSSResult } from 'lit';
export declare class SnackBar extends LitElement {
    active: boolean;
    static get styles(): CSSResult;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'snack-bar': SnackBar;
    }
}
//# sourceMappingURL=offline.d.ts.map