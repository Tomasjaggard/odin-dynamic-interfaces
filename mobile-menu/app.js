const navBar = document.querySelector("nav");
const menuItems = [];

const phone = document.createElement("i");
phone.classList.add("fa-solid", "fa-phone");
phone.style.color = "#3c485d";

const home = document.createElement("i");
home.classList.add("fa-solid", "fa-house");
home.style.color = "#3c485d";

const pen = document.createElement("i");
pen.classList.add("fa-solid", "fa-pen");
pen.style.color = "#3c485d";

const createMenuItem = (parent, itemName, icon) => {
  const container = document.createElement("div");
  container.classList.add("menu-item");

  const button = document.createElement("button");
  button.classList.add("menu-item-button");
  button.appendChild(icon);

  button.addEventListener("click", () => {
    menuItems.forEach((menuItem) => {
      menuItem.classList.remove("active");
    });
    container.classList.toggle("active");
  });

  menuItems.push(container);
  container.appendChild(button);
  parent.appendChild(container);
};

createMenuItem(navBar, "Home", home);
createMenuItem(navBar, "Social", phone);
createMenuItem(navBar, "Create", pen);
