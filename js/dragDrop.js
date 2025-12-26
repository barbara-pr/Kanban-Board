export function aplicarDrag(task) {
    task.draggable = true;

    task.addEventListener("dragstart", e => {
        e.dataTransfer.setData("text/plain", "");
        task.classList.add("dragging");
    });

    task.addEventListener("dragend", () => {
        task.classList.remove("dragging");
    });
}

export function initDragAndDrop() {
    document.querySelectorAll(".cards-field").forEach(column => {

        column.addEventListener("dragover", e => {
            e.preventDefault();
        });

        column.addEventListener("drop", e => {
            e.preventDefault();

            const dragCard = document.querySelector(".task.dragging");
            if (!dragCard) return;

            column.appendChild(dragCard);

            atualizarStatusTask(dragCard, column);
        });
    });
}

function atualizarStatusTask(task, column) {

    // remove status antigos
    task.classList.remove("todo", "in-progress", "done");

    const kanban = column.closest(".kanban-div");
    const status = kanban.id;

    if (status === "ToDo") task.classList.add("todo");
    if (status === "InProgress") task.classList.add("in-progress");
    if (status === "Done") task.classList.add("done");
}
