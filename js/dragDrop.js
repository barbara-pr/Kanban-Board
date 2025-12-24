export function initDragAndDrop() {
    const columns = document.querySelectorAll(".cards-field");

    columns.forEach(column => {
        column.addEventListener("dragover", e => e.preventDefault());

        column.addEventListener("drop", e => {
            const id = e.dataTransfer.getData("text");
            const task = document.getElementById(id);
            column.appendChild(task);
        });
    });

    document.addEventListener("dragstart", e => {
        if (e.target.classList.contains("task")) {
            const id = crypto.randomUUID();
            e.target.id = id;
            e.dataTransfer.setData("text", id);
        }
    });
}
