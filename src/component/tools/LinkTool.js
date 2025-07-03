export default class LinkTool {
  static get toolbox() {
    return {
      title: "Link",
      icon: "🔗",
    };
  }

  constructor({ data, api }) {
    this.api = api;
    this.data = {
      url: data.url || "",
      text: data.text || "",
    };

    this.wrapper = undefined;
  }

  render() {
    this.wrapper = document.createElement("div");
    this.wrapper.classList.add("custom-link-block");

    if (this.data.url) {
      const anchor = document.createElement("a");
      anchor.href = this.data.url;
      anchor.textContent = this.data.text || this.data.url;
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
      this.wrapper.appendChild(anchor);
    } else {
      const url = prompt("Enter URL (must start with http)");
      if (!url.startsWith("http")) {
        alert("Invalid URL");
        return;
      }
      const text = prompt("Enter display text (optional)");
      this.data = {
        url,
        text: text || url,
      };
      this.wrapper.innerHTML = "";
      const a = document.createElement("a");
      a.href = url;
      a.textContent = this.data.text;
      a.target = "_blank";
      this.wrapper.appendChild(a);
    }

    return this.wrapper;
  }

  save() {
    return this.data;
  }

  onPaste(event) {
    const text = event.detail.data;
    if (text.startsWith("http")) {
      this.data = {
        url: text,
        text: text,
      };
      this.wrapper.innerHTML = "";
      const anchor = document.createElement("a");
      anchor.href = text;
      anchor.textContent = text;
      anchor.target = "_blank";
      this.wrapper.appendChild(anchor);
    }
  }
}
