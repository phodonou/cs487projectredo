$(document).ready(function () {
    $('#oop').click(function (e) {
        window.location.href = './oop.html';
    });
});

$(document).ready(function () {
    $('#se').click(function (e) {
        window.location.href = './home_page.html';
    });
});

function addAssignment() {
    const nameEl = $('#name');
    const dueDateEl = $('#dueDate');
    const recDaysEl = $('#recDays');

    const assignmentsEl = $('#assignments');

    if (nameEl.val().length != 0 && dueDateEl.val().length != 0 && recDaysEl.val().length != 0) {
        const today = new Date();
        const shouldBeDueAfer = addDays(today, parseInt(recDaysEl.val()))  
        const dateDue = new Date(dueDateEl.val())

        if ( dateDue >= shouldBeDueAfer) {
            const el = $(`
        <div class="tile">
            <div class="tile is-parent">
                <div class="tile is-child box">
                    <span style="margin-right:5px; color:blue">${nameEl.val()}</span>
                    <span style="margin-right:50px; color:purple">Due: ${dueDateEl.val()}</span>
                    <span style="color:orange; margin-right:50px"> 0% of students has completed </span>
                    <span style="margin-right:5px"> <i class="fas fa-pencil-alt"></i> </span>
                    <span><i class="fas fa-trash-alt"></i></span>
                </div>
            </div>
        </div>`)
            assignmentsEl.append(el);
        } else {
            alert('(Recommended days + today) must not pass due date')
        }
    } else {
        alert('You must input all fields')
    }
}

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }