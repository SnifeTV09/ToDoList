function addButton() {
  const input = document.getElementById("todoInput");

  document.getElementById("addBtn").onclick = function () {
    input.style.display = "block";
    input.focus();

    input.onkeydown = function (e) {
      if (e.key === "Enter") {
        const value = input.value.trim();
        if (value !== "") {
          const item = document.createElement("div");
          item.className = "todoItem";

          // Checkbox erstellen
          const checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.className = "checkbox";

          // Text erstellen
          const text = document.createElement("span");
          text.textContent = value;

          // Checkbox-Event: Wenn angeklickt → Text durchstreichen
          checkbox.onchange = function () {
            if (checkbox.checked) {
              text.style.textDecoration = "line-through";
              text.style.opacity = "0.6";
            } else {
              text.style.textDecoration = "none";
              text.style.opacity = "1";
            }
          };

          // Elemente zusammenbauen
          item.appendChild(checkbox);
          item.appendChild(text);

          // In die Liste einfügen
          document.getElementById("listView").appendChild(item);
        }
        input.value = "";
        input.style.display = "none";
      }
    };
  };
}

addButton();

function deleteButton() {
  document.getElementById("deleteBtn").onclick = function () {
    const items = document.querySelectorAll(".todoItem");

    items.forEach((item) => {
      const checkbox = item.querySelector("input[type='checkbox']");
      if (checkbox.checked) {
        item.remove();
      }
    });
  };
}

deleteButton();
