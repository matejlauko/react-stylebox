/**
 * Default whole page styles
 * Inspiration:
 * - https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css
 */

export default function(theme) {
  return `
    html {
      font-size: ${theme.typography.fontSize};
      line-height: ${theme.typography.lineHeight};
      font-family: ${theme.text.fontFamily};
      color: ${theme.text.color};
      box-sizing: border-box;
    }
    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }
    body: {
      margin: 0;
      padding: 0;
    }
    a, [role=button] {
      cursor: pointer;
    }
    audio,
    canvas,
    iframe,
    img,
    svg,
    video {
      vertical-align: middle;
    }
    fieldset {
      border: 0;
      margin: 0;
      padding: 0;
    }
    textarea {
      resize: vertical;
    }

    @keyframes App-logo-spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `;
}
