
var header = document.getElementById("filter_div");
var plusElement = document.createElement("div")
var saveButton = document.createElement("button");
saveButton.innerText = "Zapisz checkboxy"
plusElement.appendChild(saveButton)
header.prepend(plusElement)


window.addEventListener('load', function() {
    setCheckboxStateOnPage();
});

saveButton.addEventListener('click', function () {
    checkboxes = getCheckedCheckboxes();
    localStorage.setItem("checkboxes", JSON.stringify(checkboxes));
});



var panel = document.getElementById("pg_panel")
function getCheckedCheckboxes() {
    const checkboxes = panel.querySelectorAll('input[type="checkbox"]');
    return Array.from(checkboxes).map(checkbox => {
        return {
            isChecked: checkbox.checked,
            labelText: checkbox.parentNode.innerText.trim()
        };
    });
}



function setCheckboxStateOnPage() {
    var panel = document.getElementById("pg_panel");
    const checkboxStates = JSON.parse(localStorage.getItem('checkboxes')) || [];
    const checkboxes = panel.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox, index) => {
        if (checkboxStates[index] && typeof checkboxStates[index].isChecked === 'boolean') {
            checkbox.checked = checkboxStates[index].isChecked;
            if (!checkbox.checked) {
                simulateCheckboxClick(checkbox)
            }
        }
    });
}


function simulateCheckboxClick(checkbox) {
    var clickEvent = new Event('click', { bubbles: true });
    checkbox.dispatchEvent(clickEvent);
}






