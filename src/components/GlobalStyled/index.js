import { createGlobalStyle } from "styled-components";
import AkkoProBold from "./fonts/AkkoPro/AkkoPro-Bold.ttf"
import AkkoProIalic from "./fonts/AkkoPro/AkkoPro-Italic.ttf"
import AkkoProLight from "./fonts/AkkoPro/AkkoPro-Light.ttf"
import AkkoProLightItalic from "./fonts/AkkoPro/AkkoPro-LightItalic.ttf"
import AkkoProMedium from "./fonts/AkkoPro/AkkoPro-Medium.ttf"
import AkkoProRegular from "./fonts/AkkoPro/AkkoPro-Regular.ttf"

const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: "AkkoProBold";
    src: local(AkkoPro Bold), local(AkkoProBold), url(${AkkoProBold});
  }
  @font-face {
    font-family: "AkkoProIalic";
    src: local(AkkoPro Italic), local(AkkoProIalic), url(${AkkoProIalic});
  }
  @font-face {
    font-family: "AkkoProLight";
    src: local(AkkoPro Light), local(AkkoProLight), url(${AkkoProLight});
  }
  @font-face {
    font-family: "AkkoProLightItalic";
    src: local(AkkoPro LightItalic), local(AkkoProLightItalic), url(${AkkoProLightItalic});
  }
  @font-face {
    font-family: "AkkoProMedium";
    src: local(AkkoPro Medium), local(AkkoProMedium), url(${AkkoProMedium});
  }
  @font-face {
    font-family: "AkkoProRegular";
    src: local(AkkoPro Regular), local(AkkoProRegular), url(${AkkoProRegular});
  }

  :root {
    --primary-color: #3498db;
    --secondary-color: #2ecc71;
    --breadcrumb-color: #9FBFBF;
    --ff-primary: AkkoProRegular;
    --fs-title: 24px;
  }

  html {
    line-height: 1.15; 
    -webkit-text-size-adjust: 100%; 
    font-family: var(--ff-primary);
  }

  

  body {
    margin: 0;
    min-height: 100vh;
  }
  main {
    display: block;
  }
  h1 {
    font-size: var(--fs-title);
    margin: 0.67em 0 0.67em 0.67em;
  }
  hr {
    box-sizing: content-box; 
    height: 0; 
    overflow: visible; 
  }
  a {
    background-color: transparent;
  }
  abbr[title] {
    border-bottom: none; 
    text-decoration: underline; 
    text-decoration: underline dotted; 
  }
  b,
  strong {
    font-weight: bolder;
  }
  code,
  kbd,
  samp {
    font-family: monospace, monospace; 
    font-size: 1em; 
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  img {
    border-style: none;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; 
    font-size: 100%; 
    line-height: 1.15; 
    margin: 0; 
  }
  button,
  input { 
    overflow: visible;
  }
  button,
  select { 
    text-transform: none;
  }
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }
  legend {
    box-sizing: border-box; 
    color: inherit; 
    display: table; 
    max-width: 100%; 
    padding: 0; 
    white-space: normal; 
  }
  progress {
    vertical-align: baseline;
  }
  textarea {
    overflow: auto;
  }
  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; 
    padding: 0; 
  }
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }
  [type="search"] {
    -webkit-appearance: textfield; 
    outline-offset: -2px; 
  }
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-file-upload-button {
    -webkit-appearance: button; 
    font: inherit; 
  }
  details {
    display: block;
  }
  summary {
    display: list-item;
  }
  template {
    display: none;
  }
  [hidden] {
    display: none;
  }`


export default GlobalStyles