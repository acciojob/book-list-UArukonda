//your JS code here. If required.
const form = document.getElementById("book-form");
    const titleInput = document.getElementById("title");
    const authorInput = document.getElementById("author");
    const isbnInput = document.getElementById("isbn");
    const bookList = document.getElementById("book-list");

    
    form.addEventListener("submit", function (event) {
     
      event.preventDefault();

      const title = titleInput.value.trim();
      const author = authorInput.value.trim();
      const isbn = isbnInput.value.trim();

      
      if (!title || !author || !isbn) return;

      const row = document.createElement("tr");

      [title, author, isbn].forEach(function (value) {
        const cell = document.createElement("td");
        cell.textContent = value;
        row.appendChild(cell);
      });

      const actionCell = document.createElement("td");
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "X";
      deleteBtn.className = "btn btn-danger btn-sm delete";
      actionCell.appendChild(deleteBtn);
      row.appendChild(actionCell);

      bookList.appendChild(row);

      form.reset();
    });


    bookList.addEventListener("click", function (event) {
      if (event.target.classList.contains("delete")) {
        event.target.closest("tr").remove();
      }
    });