const toggleButtons = document.querySelectorAll(".toggle-button");
const typeHTML = ".html";
const names = [
  "introduce",
  "rule_operation",
  "security",
  "rule_post",
  "price_post_user",
  "guildeline",
  "ads",
  "question",
  "support",
];
const paths = names.map((name) => name + typeHTML);
const currentURL = window.location.href;
const shouldShow = paths.some((path) => { 
  return currentURL.includes(path);
});
const index = names.findIndex((name) => currentURL.includes(name + typeHTML));

// open list item
toggleButtons.forEach(function (toggleButton) {
  let isShown = false;
  toggleButton.addEventListener("click", function () {
    const ul = toggleButton.parentElement.querySelector("ul");
    const iconElement = toggleButton.querySelector("i");
    const iconClasses = iconElement.classList;
    if (!isShown) {
      ul.style.display = "block";
      iconClasses.remove("fa-angle-down");
      iconClasses.add("fa-angle-up");
      isShown = true;
    } else {
      ul.style.display = "none";
      iconClasses.remove("fa-angle-up");
      iconClasses.add("fa-angle-down");
      isShown = false;
    }
  });
});
// auto open list item
if (shouldShow) {
  toggleButtons.forEach((toggleButton) => {
    const buttonSelectorString = `buttonTOC${index+1}`;
    if((toggleButton.id === buttonSelectorString))
    {
      toggleButton.click();
    }
  });
}
// show list item
document.addEventListener("DOMContentLoaded", function () {
  function capitalizeFirstLetter(string) {
    console.log(string);
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  paths.forEach(function (path, index) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", path, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(xhr.responseText, "text/html");
        var h2Elements = xmlDoc.querySelectorAll("h2");
        var linkList = document.getElementById("linkList" + (index + 1));
        if (h2Elements.length === 0) {
          var h1Elements = xmlDoc.querySelectorAll("h1");
          var aItem = document.createElement("a");
          var liItem = document.createElement("li");
          var name = h1Elements[1].textContent.split(":")[1]
          aItem.href = path + "#section-" + (index + 1);
          aItem.textContent = capitalizeFirstLetter(name.toLowerCase());
          liItem.appendChild(aItem);
          linkList.appendChild(liItem);
        } else {
          h2Elements.forEach(function (h2Element) {
            var h2Text = h2Element.textContent;
            var aItem = document.createElement("a");
            aItem.href =
              path +
              "#section-" +
              (index + 1) +
              "-" +
              (linkList.children.length + 1);
            aItem.textContent = h2Text;
            var liItem = document.createElement("li");
            liItem.appendChild(aItem);
            linkList.appendChild(liItem);
          });
        }
      }
    };
    xhr.send();
  });
});


