import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../components/AnsButton';

@customElement('bookable-events')
export class BookableEventsPage extends LitElement {
  render() {
    return html`
    <div id="header">
    <table border='0'>
      <tr>
        <td>
          <ans-button kind="secondary" size="sm" disabled="true">Link Sub-Environments</ans-button>
        </td>
        <td>
          <ans-button kind="secondary" disabled="false">Filter Sub-Environments</ans-button>
        </td>
      </tr>
    </table>
    </div>
    <div id="content">
      <ans-button kind="primary" size="m" icon="plus">Event</ans-button>
      <p>This is the bookable events page</p>
    </div>`;
  }

  static styles = css`
  #header {
    position: absolute;
    top:0px;
    left:0px;
    width: 100%;
    height: 100px;
    background-color: gray;
  }

  #content {
    position:absolute;
    top:100px;
    left:0px;
    margin-bottom: 0px;
    width: 100%;
    height: inherit;
    background-color: white;
  }
  `;
}
