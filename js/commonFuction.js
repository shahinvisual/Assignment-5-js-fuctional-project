
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const donateBalance = parseFloat(inputValue);
    return donateBalance;
}

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const addDonateBalance = parseFloat(textValue);
    return addDonateBalance;
}

function showSectionById(id){
    document.getElementById('section-hidden').classList.add('hidden');
    document.getElementById('section-hidden-transaction').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}
