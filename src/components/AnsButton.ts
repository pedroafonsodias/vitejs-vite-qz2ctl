import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import 'carbon-web-components/es/components/button/index.js';

@customElement('ans-button')
export class AnsButton extends LitElement {
  @property()
  kind: string;

  @property()
  size: string;

  @property()
  disabled: boolean;

  @property()
  icon: string;

  constructor() {
    super();
    this.kind = 'primary';
    this.disabled = false;
    this.icon = '';
    this.size = 'sm';
  }

  private getIcon() {
    return this.icon == 'plus'
      ? html`<svg style="color: white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16"> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" fill="white"></path> </svg>`
      : '';
  }

  render() {
    return html`<bx-btn size=${this.size} kind=${this.kind} 
    ${this.disabled ? 'disabled' : ''}>
    ${this.getIcon()}
    ${this.innerHTML}
    </bx-btn>`;
  }

  static styles = css``;
}
