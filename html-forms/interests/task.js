const checkbox = document.getElementsByClassName('interest__check');
const interest = document.getElementsByClassName('interest');

for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener('click', () => {        
        const checkInside = interest[i].getElementsByClassName('interest__check');
        for (let j = 1; j < checkInside.length; j++) {
            if (checkInside[j].indeterminate) {
                checkInside[j].indeterminate = false;
            }

            checkInside[j].checked = checkbox[i].checked;
        }

        let checkboxNull = checkbox[i].closest('ul').closest('li');
        while (checkboxNull != null) {
            const checkOutside = checkboxNull.querySelector('.interest__check');
            const interestOutside = checkboxNull.getElementsByClassName('interest__check');
            for (let j = 1; j < interestOutside.length; j++) {
                if (interestOutside[1].checked != interestOutside[j].checked) {
                    checkOutside.indeterminate = true;
                    break;
                }
                if (checkOutside.indeterminate) {
                    checkOutside.indeterminate = false;
                }
                checkOutside.checked = interestOutside[1].checked;
            }

            checkboxNull = checkboxNull.closest('ul').closest('li');
        }
    });
}