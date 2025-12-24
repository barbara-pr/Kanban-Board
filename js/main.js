import { initTasks } from "./tasks.js";
import { initDragAndDrop } from "./dragDrop.js";

document.addEventListener("DOMContentLoaded", () => {
    initTasks();
    initDragAndDrop();
});
