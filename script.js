var start_date=1900;
var selectBox = document.getElementById('birth-year');
var formElement;
for(var i=start_date;i<=new Date().getFullYear();i++)
{
    var option = document.createElement('option');
    option.value = option.innerHTML = i;
    selectBox.appendChild(option);
}
function onSubmit()
{
    formElement = document.getElementById('login_form');
    var paragraph = document.createElement('P');
    paragraph.id = "user-desc";
    var birth_year = document.getElementById('birth-year').value;
    var username = document.getElementById('username').value;
    var category;
    if(new Date().getFullYear() - birth_year >= 18 ) {
        category = "Adult";
    } else {
        category = "Child";
    }
    username = username.replace(/^\w/, name => name.toUpperCase());
    var para_text = document.createTextNode( username + " (" +
        document.getElementById('email').value + ") [" + category + " ]"); 
    var formParentElement = formElement.parentNode;
    formParentElement.removeChild(formElement);
    paragraph.appendChild(para_text); 
    formParentElement.appendChild(paragraph);
    document.getElementById('second').style.display = 'inline';
}