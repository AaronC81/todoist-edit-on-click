function rewire() {
    document.querySelectorAll(".task_item").forEach(el => {
        // Some items don't actually exist
        if (el.classList.contains("reorder_item")) return;

        // Make the edit button invisible
        const editEl = el.querySelector(".task_item_actions div");
        editEl.style.display = "none";

        // Map task click to edit button click
        const textEl = el.querySelector(".task_item_content_text");
        textEl.onclick = '';
        textEl.onclick = function () {
            // Click the edit button
            editEl.click();

            const closeImmediately = setInterval(() => {
                const closeEl = document.querySelector(".item_detail_close")
                if (closeEl) {
                    closeEl.click();
                    clearInterval(closeImmediately);
                }
            }, 10);
        };
    })
}

setInterval(rewire, 500);