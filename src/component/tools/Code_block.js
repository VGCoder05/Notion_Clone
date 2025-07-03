export default class WaterCodeTool {
  static get toolbox() {
    return {
      title: "Code",
      icon: '<svg width="18" height="18" viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zM14.6 16.6l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>',
    };
  }

  constructor({ data }) {
    this.data = data || { code: "" };
    this.wrapper = null;
  }

  render() {
    this.wrapper = document.createElement("div");
    this.wrapper.classList.add("water-code-block");

    this.textArea = document.createElement("textarea");
    this.textArea.value = this.data.code || "";
    this.textArea.placeholder = "Write your code here...";

    this.wrapper.appendChild(this.textArea);

    return this.wrapper;
  }

  save() {
    return {
      code: this.textArea.value,
    };
  }
}

/*

const IframeCodeBlock = ({ code }) => {
  const content = `
    <html>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css" />
      </head>
      <body>
        <pre><code>${code}</code></pre>
      </body>
    </html>
  `;

  return (
    <iframe
      title="Code Block"
      srcDoc={content}
      style={{ width: "100%", height: "150px", border: "none" }}
    />
  );
};


*/
