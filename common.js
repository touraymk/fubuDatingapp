function createBtn(func, label) {
  let html = "";
  html = /*html*/ `
    <button onclick="${func}()" class="btn">${label}</button>
  `;
  return html;
}
