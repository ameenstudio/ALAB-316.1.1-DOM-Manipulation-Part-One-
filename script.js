var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

let mainEL = document.querySelector(`main`);
mainEL.style.backgroundColor = `var(--main-bg)`;
mainEL.innerHTML = `<h1>DOM Manipulation</h1>`;
mainEL.classList.add(`flex-ctr`);

let topMenuEl = document.getElementById(`top-menu`);
topMenuEl.style.height = `100%`;
topMenuEl.style.backgroundColor = `var(--top-menu-bg)`;
topMenuEl.classList.add(`flex-around`);

//1-Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.

let topMenuLinks = topMenuEl.querySelectorAll("a");
//2-Attach a delegated 'click' event listener to topMenuEl.
//  // The first line of code of the event listener function should call the event object's preventDefault() method.
//  // The second line of code of the function should immediately return if the element clicked was not an <a> element.
// Log the content of the <a> to verify the handler is working.

// grab
// The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.
// The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.
// Hint: Removing a non-existent class from an element does not cause an error!

let subMenuEl = document.getElementById(`sub-menu`);
subMenuEl.style.height = `100%`;
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add(`flex-around`);
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

// Add event listener for top menu clicks
topMenuEl.addEventListener("click", function (event) {
  event.preventDefault();
  const clickedLink = event.target;

  if (clickedLink.tagName !== "A") return; // Exit if not an <a> element

  console.log(clickedLink.textContent); // Log clicked text

  // Remove active class from all links
  topMenuEl
    .querySelectorAll("a")
    .forEach((link) => link.classList.remove("active"));

  // Toggle active class
  if (!clickedLink.classList.contains("active")) {
    clickedLink.classList.add("active");
  } else {
    subMenuEl.style.top = "0"; //I want to hide if the same link is clicked!
    return;
  }
  const linkData = menuLinks.find(
    (item) => item.text === clickedLink.textContent
  );

  if (linkData.subLinks) {
    // if subLink found in the object then show the submenu else hide the bar
    subMenuEl.style.top = "100%";
    buildSubmenu(linkData.subLinks);
  } else {
    subMenuEl.style.top = "0"; // here I hide the submune becuase does not contain the propety subLink
  }
});

menuLinks.forEach((menuLink) => {
  let linkEl = document.createElement(`a`);
  linkEl.setAttribute(`href`, menuLink.href);
  linkEl.textContent = menuLink.text;
  topMenuEl.appendChild(linkEl);
});

function buildSubmenu(subLinks) {
  subMenuEl.innerHTML = ""; // Clear content number one requiremnt
  subLinks.forEach((link) => {
    // Iterate
    const a = document.createElement("a");
    a.setAttribute("href", link.href);
    a.textContent = link.text;
    subMenuEl.appendChild(a); // last Append  element to end
  });
}

