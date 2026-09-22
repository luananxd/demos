const table = document.querySelector('[data-el="table-body"]');

function renderTableRow(data) {
  const row = document.createElement("tr");
  const id = document.createElement("td");
  const icon = document.createElement("td");
  const title = document.createElement("td");
  const category = document.createElement("td");
  const description = document.createElement("td");
  const price = document.createElement("td");

  id.textContent = data.id;
  icon.textContent = data.icon;
  title.textContent = data.title;
  category.textContent = data.category;
  description.textContent = data.description;
  price.textContent = "$" + data.price;

  row.append(id);
  row.append(icon);
  row.append(title);
  row.append(category);
  row.append(description);
  row.append(price);

  return row;
}

export function updateTable(elements) {
  table.innerHTML = "";

  elements.forEach((element) => {
    const row = renderTableRow(element);
    table.append(row);
  });
}
