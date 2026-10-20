// Script Bài 12 - In lịch
const dayInput = document.getElementById("dayInput");
const monthInput = document.getElementById("monthInput");
const yearInput = document.getElementById("yearInput");
const printButton = document.getElementById("printButton");

const displayYear = document.getElementById("displayYear");
const displayMonth = document.getElementById("displayMonth");
const displayDay = document.getElementById("displayDay");
const displayWeekday = document.getElementById("displayWeekday");
const greeting = document.getElementById("greeting");

const weekdays = [
    "Chủ nhật",
    "Thứ hai",
    "Thứ ba",
    "Thứ tư",
    "Thứ năm",
    "Thứ sáu",
    "Thứ bảy"
];

function updateCalendar() {
    const day = parseInt(dayInput.value, 10);
    const month = parseInt(monthInput.value, 10);
    const year = parseInt(yearInput.value, 10);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        alert("Vui lòng nhập ngày, tháng, năm hợp lệ!");
        return;
    }

    const date = new Date(year, month - 1, day);
    displayYear.textContent = year;
    displayMonth.textContent = `Tháng ${month}`;
    displayDay.textContent = String(day).padStart(2, "0");
    displayWeekday.textContent = weekdays[date.getDay()];

    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
        greeting.textContent = "Chào buổi sáng!";
    } else if (hour >= 12 && hour < 18) {
        greeting.textContent = "Chào buổi chiều!";
    } else {
        greeting.textContent = "Chào buổi tối!";
    }
}

if (printButton) {
    printButton.addEventListener("click", updateCalendar);
}
updateCalendar();
