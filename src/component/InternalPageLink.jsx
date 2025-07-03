import { Link } from "react-router-dom";

export default class InternalPageLink {
  constructor({ data }) {
    this.data = data || { pageId: "", pageTitle: "" };
  }

  render() {
    const wrapper = document.createElement("div");

    const inputTitle = document.createElement("input");
    inputTitle.placeholder = "Page Title";
    // inputTitle.value = this.data.pageTitle;
    inputTitle.oninput = (e) => {
      this.data.pageTitle = e.target.value;
    };

    const inputId = document.createElement("input");
    inputId.placeholder = "Page ID";
    // inputId.value = this.data.pageId;
    inputId.oninput = (e) => {
      this.data.pageId = e.target.value;
    };

    wrapper.appendChild(inputTitle);
    // wrapper.appendChild(document.createElement("br"));
    wrapper.appendChild(inputId);

    return wrapper;
  }

  save() {
    // console.log(this.data);
    return this.data;
  }

  static get toolbox() {
    return {
      title: "Page Link",
      icon: "🔗",
    };
  }
}
