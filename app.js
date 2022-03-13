const btns = document.querySelectorAll(".btn"),
    questionsItem = document.querySelectorAll(".questions-item");

btns.forEach((element, index) => {
    element.addEventListener("click", () => {
        questionsItem.forEach((item) => {
            if (item !== questionsItem[index]) {
                item.classList.remove("show-text");
            }
        });
        questionsItem[index].classList.toggle("show-text");
    });
});
