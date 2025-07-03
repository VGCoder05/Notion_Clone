export default class SubPageCreatorBlock {
  static get toolbox() {
    return {
      title: "Page",
      icon: "📄",
    };
  }

  constructor({ data }) {
    this.data = data || { page_Name: "", id: "" };
    this.wrapper = null;
  }

  render() {
    this.wrapper = document.createElement("div");
    this.wrapper.className = "subpage-creator-block";

    const nameInput = document.createElement("input");
    nameInput.placeholder = "Sub Page Title";
    nameInput.value = this.data.page_Name || "";
    nameInput.className = "subpage-input";

    const idInput = document.createElement("input");
    idInput.placeholder = "Sub Page ID (e.g., page_about)";
    idInput.value = this.data.id || "";
    idInput.className = "subpage-input";

    const preview = document.createElement("div");
    preview.className = "subpage-preview";

    const updatePreview = () => {
      this.data.page_Name = nameInput.value;
      this.data.id = idInput.value;

      if (nameInput.value && idInput.value) {
        preview.innerHTML = `
            <a class="subpage-link" href="/page/${this.data.id}" target="_blank">
              📄 ${this.data.page_Name}
            </a>
          `;
      } else {
        preview.innerHTML = "";
      }
    };

    nameInput.addEventListener("input", updatePreview);
    idInput.addEventListener("input", updatePreview);

    this.wrapper.appendChild(nameInput);
    this.wrapper.appendChild(idInput);
    this.wrapper.appendChild(preview);

    updatePreview(); // show preview if reloaded from saved data

    return this.wrapper;
  }

  save() {
    return {
      page_Name: this.data.page_Name,
      id: this.data.id,
    };
  }
}
