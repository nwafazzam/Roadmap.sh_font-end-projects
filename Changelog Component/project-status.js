document.addEventListener("DOMContentLoaded", () => {
            if (window.matchMedia("(min-width: 601px)").matches) {

                const items = document.querySelectorAll(".changelog-item");
                const currentDate = new Date();

                items.forEach(item => {
                    const timeElement = item.querySelector("time");
                    if (!timeElement) return;

                    const projectDateAttr = timeElement.getAttribute("datetime");
                    const projectDate = new Date(projectDateAttr);

                    const diffInTime = currentDate - projectDate;
                    const diffInDays = diffInTime / (1000 * 3600 * 24);

                    if (diffInDays < 10 && diffInDays >= 0) {
                        item.classList.add("is-new");
                    } else {
                        item.classList.add("is-old");
                    }
                });
            }
        });