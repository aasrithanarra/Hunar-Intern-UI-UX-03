// Simple placeholder script for handling interactions
document.addEventListener("DOMContentLoaded", () => {
    const tasks = document.querySelectorAll(".task input[type='checkbox']");
    
    tasks.forEach(task => {
        task.addEventListener("change", () => {
            if (task.checked) {
                task.parentNode.style.textDecoration = "line-through";
                task.parentNode.style.color = "#95a5a6";
            } else {
                task.parentNode.style.textDecoration = "none";
                task.parentNode.style.color = "#2c3e50";
            }
        });
    });
});
