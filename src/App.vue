<template>
  <div
    id="app"
    :class="{ 'light-background': !isDarkMode, 'dark-background': isDarkMode }"
  >
    <keep-alive include="SignIn,Request">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import "animate.css";

export default {
  name: "App",
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
  mounted() {
    const isDarkMode = this.$store.getters.isDarkMode;
    document.body.style.background = isDarkMode ? "#212c4f" : "#f8f9fa";
  },
};
</script>

<style lang="scss">
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
@import "@/global-styles/colors.scss";
@import "@/global-styles/typography.scss";
* {
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  scrollbar-width: none;
  -ms-overflow-style: none;
  border: none;
  text-decoration: none;
}
*::-webkit-scrollbar {
  display: none;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  text-decoration: none;
}

#app {
  font-family: $system-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $white;
}

body {
  margin: 0;
  background: $dark-blue;
}

h1.dark {
  @include heading-3($black);
}

h1.light {
  @include heading-3($white);
}

h4 {
  margin: 0;
  line-height: 34px;
  font-size: 24px;
  text-align: center;
  color: #ffffff;
}

p {
  @include large-text-bold($purple);
}

line,
text {
  opacity: 0.2;
}

input {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  height: 60px;
  width: 100%;
  font-size: 20px;
  color: white;
  padding-left: 20px;
  margin-top: 20px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }

  &:focus {
    border: 1px solid $blue;
    box-shadow: 0 0 0 1px $blue;
    outline: none;
  }
}

button {
  background: #56ccf2;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  border: none;
  height: 60px;
  width: 100%;
  font-size: 20px;
  color: white;
  margin-top: 20px;
  margin-bottom: 40px;
}

a {
  line-height: 25px;
  font-size: 16px;
  text-align: center;

  text-decoration: none;
}

/* THEME */
.light-background {
  background-color: #f8f9fa;

  line,
  text {
    stroke: $black;
  }
}

.dark-background {
  background-color: $dark-blue;

  line,
  text {
    stroke: $light-gray;
  }
}

.light-text {
  color: $white;
}

.dark-text {
  color: $black;
}

.light-field {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: $white;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}

.dark-field {
  background: rgba(198, 208, 235, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: $black;

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
}

.light-link {
  color: rgba(255, 255, 255, 0.3);
}

.dark-link {
  color: rgba(0, 0, 0, 0.3);
}

.light-box {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.dark-box {
  background: #c6d0eb40;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.Coding {
  font-family: BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 140%;
  max-width: 712px;
  margin: 0 auto;
  text-align: start;
  padding: 0px 20px 100px;

  @media (max-width: 414px) {
    font-size: 17px;
  }

  img,
  video {
    margin: 20px 0;
    width: 100%;
    border-radius: 20px;
    box-sizing: border-box;
    overflow: hidden;
  }

  iframe {
    margin: 20px 0;
    width: 100%;
    border-radius: 20px;
    box-sizing: border-box;
    overflow: hidden;
  }

  h2 {
    padding: 20px 0;
    font-size: 52px;
    line-height: 120%;
  }

  h3 {
    padding: 20px 0 0;
    font-size: 34px;
    text-transform: uppercase;
    font-weight: 500;
    opacity: 0.7;
  }

  h2,
  h3 {
    margin-top: 50px;
    color: #1b7fbd;
  }

  p {
    text-align: left;
    font-size: 18px;
    color: #085f63;
  }

  a {
    text-decoration: none !important;
    font-weight: 600 !important;
    color: #1e2a78;
  }

  blockquote {
    padding: 0 16px 0 50px;
    background-repeat: no-repeat;
    background-position: 14px 2px;
    p {
      font-size: 28px;
      font-weight: 500;
      line-height: 140%;
    }
  }

  pre {
    border-radius: 16px;
  }

  code {
    font-size: 17px;
    font-family: "SF Mono", -apple-system, system-ui, BlinkMacSystemFont,
      "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-weight: 500;
  }

  ol {
    padding: 0;
  }

  @media (max-width: 740px) {
    font-size: 18px;
    padding: 0 30px;

    .Content {
      margin: 50px 20px;
    }
    p {
      font-size: 18px;
    }
    h2 {
      font-size: 28px;
    }
    h3 {
      font-size: 20px;
    }
    blockquote {
      margin: 0;
      p {
        font-size: 20px;
      }
    }
  }

  @media (max-width: 414px) {
    padding: 0 20px;
    code {
      font-size: 15px;
    }
    blockquote {
      margin: 0;
      p {
        font-size: 17px;
      }
    }
  }

  /* Theme */
  code[class*="hljs"],
  pre[class*="hljs"] {
    border-radius: 16px;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    color: #eee;
    background: #222;
    line-height: 1.5em;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;

    @media (prefers-color-scheme: dark) {
      background: #141432;
    }
  }

  code[class*="hljs"]::-moz-selection,
  pre[class*="hljs"]::-moz-selection,
  code[class*="hljs"] ::-moz-selection,
  pre[class*="hljs"] ::-moz-selection {
    background: #363636;
  }

  code[class*="hljs"]::selection,
  pre[class*="hljs"]::selection,
  code[class*="hljs"] ::selection,
  pre[class*="hljs"] ::selection {
    background: #363636;
  }

  :not(pre) > code {
    white-space: normal;
    border-radius: 0.2em;
    padding: 0.1em;
  }

  pre[class*="hljs"] {
    overflow: auto;
    position: relative;
    margin: 0.5em 0;
    padding: 1.25em 1em;
  }

  .language-css > code,
  .language-sass > code,
  .language-scss > code {
    color: #fd9170;
  }

  [class*="hljs"] .namespace {
    opacity: 0.7;
  }

  .markdown-body .atrule {
    color: #c792ea;
  }

  .markdown-body .attr-name {
    color: #ffcb6b;
  }

  .markdown-body .attr-value {
    color: #a5e844;
  }

  .markdown-body .attribute {
    color: #a5e844;
  }

  .markdown-body .boolean {
    color: #c792ea;
  }

  .markdown-body .builtin {
    color: #ffcb6b;
  }

  .markdown-body .cdata {
    color: #80cbc4;
  }

  .markdown-body .char {
    color: #80cbc4;
  }

  .markdown-body .class {
    color: #ffcb6b;
  }

  .markdown-body .class-name {
    color: #f2ff00;
  }

  .markdown-body .comment {
    color: #616161;
  }

  .markdown-body .constant {
    color: #c792ea;
  }

  .markdown-body .deleted {
    color: #ff6666;
  }

  .markdown-body .doctype {
    color: #616161;
  }

  .markdown-body .entity {
    color: #ff6666;
  }

  .markdown-body .function {
    color: #c792ea;
  }

  .markdown-body .hexcode {
    color: #f2ff00;
  }

  .markdown-body .id {
    color: #c792ea;
    font-weight: bold;
  }

  .markdown-body .important {
    color: #c792ea;
    font-weight: bold;
  }

  .markdown-body .inserted {
    color: #80cbc4;
  }

  .markdown-body .keyword {
    color: #c792ea;
  }

  .markdown-body .number {
    color: #fd9170;
  }

  .markdown-body .operator {
    color: #89ddff;
  }

  .markdown-body .prolog {
    color: #616161;
  }

  .markdown-body .property {
    color: #80cbc4;
  }

  .markdown-body .pseudo-class {
    color: #a5e844;
  }

  .markdown-body .pseudo-element {
    color: #a5e844;
  }

  .markdown-body .punctuation {
    color: #89ddff;
  }

  .markdown-body .regex {
    color: #f2ff00;
  }

  .markdown-body .selector {
    color: #ff6666;
  }

  .markdown-body .string {
    color: #a5e844;
  }

  .markdown-body .symbol {
    color: #c792ea;
  }

  .markdown-body .tag {
    color: #ff6666;
  }

  .markdown-body .unit {
    color: #fd9170;
  }

  .markdown-body .url {
    color: #ff6666;
  }

  .markdown-body .variable {
    color: #ff6666;
  }
}
</style>
