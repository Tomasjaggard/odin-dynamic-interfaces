const navBar = document.querySelector("nav");

const createDropdown = (parent, menuTitle) => {
  const dropdownContainer = document.createElement("div");
  dropdownContainer.classList.add("dropdown-container");
  dropdownContainer.setAttribute("id", menuTitle);

  const button = document.createElement("button");
  button.classList.add("dropdown-button");
  button.textContent = menuTitle;

  const dropdownItems = document.createElement("div");
  dropdownItems.classList.add("dropdown-items");

  button.addEventListener("mouseenter", () => {
    dropdownItems.classList.toggle("active");
  });

  button.addEventListener("mouseleave", () => {
    dropdownItems.classList.toggle("active");
  });

  dropdownContainer.appendChild(button);
  dropdownContainer.appendChild(dropdownItems);
  parent.appendChild(dropdownContainer);

  return dropdownItems;
};

const addDropdownItems = (parent, ...items) => {
  items.forEach((item) => {
    const newItem = document.createElement("p");
    newItem.classList.add("menu-item");
    newItem.textContent = item;
    parent.appendChild(newItem);
  });
};

const menu1 = createDropdown(navBar, "Menu 1");
const menu2 = createDropdown(navBar, "Menu 2");
addDropdownItems(menu1, "1", "2", "3");
addDropdownItems(menu2, "1", "2", "3");
