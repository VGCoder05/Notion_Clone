export default class CustomDelimiter {
  static get toolbox() {
    return {
      title: "Divider",
      icon: "➖",
    };
  }

  render() {
    const hr = document.createElement("hr");
    hr.className = "custom-hr"; // Optional: add class for styling
    return hr;
  }

  save() {
    return {};
  }
}
