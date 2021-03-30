const elForm = document.querySelector('#comment_form');
const elName = document.querySelector('#name');
const elComment = document.querySelector('#comment');
const elOutput = document.querySelector('#comment_table');
const elNameCheckOutput = document.querySelector('#namecheck');

let newRowHtml = '';
let commentCount = 1;

function checkNameLenght() {
    let name = elName.value;
    if (name.length < 3) {
        elNameCheckOutput.textContent = 'Name must be 3 characters or longer!';
        return false;
    } else {
        elNameCheckOutput.textContent = '';
        return true;
    }
}

function displayComment(event) {
    if (checkNameLenght()) {
        console.log('displayComment called');
        console.log('commentCount = ' + commentCount);

        let name = elName.value;
        let comment = elComment.value;

        console.log('name = ' + name + ', comment = ' + comment);

        newRowHtml += '<tr><td class="td_name">' + name + ': </td><td class="td_comment">' + comment + '</td></tr>';

        elOutput.innerHTML = newRowHtml;

        commentCount++;
    }
    event.preventDefault();



}

elForm.addEventListener('submit', displayComment);
elName.addEventListener('blur', checkNameLenght);
