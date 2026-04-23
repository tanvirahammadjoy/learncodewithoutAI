let root = document.getElementById("root");

let h1 = document.createElement("h1");
h1.textContent = "Hello World";

root.appendChild(h1);
let p = document.createElement("p");
p.textContent = "This is a paragraph.";
root.appendChild(p);
let ul = document.createElement("ul");
let li1 = document.createElement("li");
li1.textContent = "Item 1";
let li2 = document.createElement("li");
li2.textContent = "Item 2";
let li3 = document.createElement("li");
li3.textContent = "Item 3";
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
root.appendChild(ul);

// an function taht can create any element and append it to the root that we want
function createElement(tag, text) {
  let element = document.createElement(tag);
  element.textContent = text;
  root.appendChild(element);
}

createElement("div", "This is a div element.");

createElement("h2", "This is a heading 2");
createElement("p", "This is another paragraph.");
createElement("li", "Item 4");

// an function that can create any element and append it to the root that we want and also add a class, id  and an attribute to the element and also can do nested elements
function createElementWithAttributes(tag, text, className, id, attributes) {
  let element = document.createElement(tag);
  element.textContent = text;
  if (className) {
    element.classList.add(className);
  }
  if (id) {
    element.id = id;
  }
  if (attributes) {
    for (let key in attributes) {
      element.setAttribute(key, attributes[key]);
    }
  }
  root.appendChild(element);
}

createElementWithAttributes(
  "div",
  "This is a div element with attributes.",
  "my-div",
  "div1",
  {
    "data-info": "This is some data",
    title: "This is a title",
  },
);

createElementWithAttributes(
  "h2",
  "This is a heading 2 with attributes",
  "my-h2",
  "h2",
  {
    "data-info": "This is some data",
    title: "This is a title",
  },
);
createElementWithAttributes(
  "p",
  "This is another paragraph with attributes.",
  "my-p",
);

// waht if i want nested elements root inside with different dive as much as i want to nested elements
// we shuld think about the eadge case like use free will like
// waht if user juwant to create a div
// waht if user don't want give calss or id or attributes or nested elements or anything like that
function createElementWithAttributesAndNestedElements(
  tag,
  text,
  className,
  id,
  attributes,
  nestedElements,
) {
  let element = document.createElement(tag);
  element.textContent = text;
  if (className) {
    element.classList.add(className);
  }
  if (id) {
    element.id = id;
  }
  if (attributes) {
    for (let key in attributes) {
      element.setAttribute(key, attributes[key]);
    }
  }
  if (nestedElements) {
    nestedElements.forEach((nestedElement) => {
      element.appendChild(nestedElement);
    });
  }
  root.appendChild(element);
}

let nestedDiv = document.createElement("div");
nestedDiv.textContent = "This is a nested div.";
createElementWithAttributesAndNestedElements(
  "div",
  "This is a div element with nested elements.",
  "my-div",
  "div1",
  {
    "data-info": "This is some data",
    title: "This is a title",
  },
  [nestedDiv],
);
