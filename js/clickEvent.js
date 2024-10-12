// Donate for Flood at Noakhali, Bangladesh

document.getElementById('donate-click-event')
    .addEventListener('click', function () {
        const donateAmount = getInputFieldValueById('donate-input-field');
        const addDonateFund = getTextFieldValueById('add-donate-fund');
        const totalBalance = getTextFieldValueById('total-balance');
        if (donateAmount <= 0 || isNaN(donateAmount)) {
            alert('Invalid Input!');
            return;
        }
        else {
            const addedDonate = addDonateFund + donateAmount;
            const totalBalanceDebited = totalBalance - donateAmount;
            document.getElementById('total-balance').innerText = totalBalanceDebited;
            document.getElementById('add-donate-fund').innerText = addedDonate;

            const div = document.createElement('div');
            div.classList.add('border', 'border-b-gray-400', 'rounded-xl', 'container', 'max-w-5xl', 'mx-auto', 'p-6', 'space-y-4', 'mb-5');
            div.innerHTML = `
            <p class="text-lg font-bold">${donateAmount}Taka is Donated for famine-2024 at Feni, Bangladesh</p>
            <p> date: ${new Date().toLocaleString()} bangladesh standard time </p>`

            document.getElementById('section-hidden-transaction').prepend(div, div.firstChild);
        }

    })


// Donate for Flood Relief in Feni,Bangladesh
document.getElementById('donate-click-event-1')
    .addEventListener('click', function () {
        const donateAmount = getInputFieldValueById('donate-input-field-1');
        const addDonateFund = getTextFieldValueById('add-donate-fund-1');
        const totalBalance = getTextFieldValueById('total-balance');
        if (donateAmount <= 0 || isNaN(donateAmount)) {
            alert('Invalid Input!');
            return;
        }
        else {
            const addedDonate = addDonateFund + donateAmount;
            const totalBalanceDebited = totalBalance - donateAmount;
            document.getElementById('total-balance').innerText = totalBalanceDebited;
            document.getElementById('add-donate-fund-1').innerText = addedDonate;

            const div = document.createElement('div');
            div.classList.add('border', 'border-b-gray-400', 'rounded-xl', 'container', 'max-w-5xl', 'mx-auto', 'p-6', 'space-y-4', 'mb-5');
            div.innerHTML = `
            <p class="text-lg font-bold">${donateAmount} Taka is Donated for Flood Relief in Feni,Bangladesh</p>
            <p> date: ${new Date().toLocaleString()} bangladesh standard time </p>`

            document.getElementById('section-hidden-transaction').prepend(div, div.firstChild);
        }

    })

    // Aid for Injured in the Quota Movement

    document.getElementById('donate-click-event-2')
    .addEventListener('click', function () {
        const donateAmount = getInputFieldValueById('donate-input-field-2');
        const addDonateFund = getTextFieldValueById('add-donate-fund-2');
        const totalBalance = getTextFieldValueById('total-balance');
        if (donateAmount <= 0 || isNaN(donateAmount)) {
            alert('Invalid Input!');
            return;
        }
        else {
            const addedDonate = addDonateFund + donateAmount;
            const totalBalanceDebited = totalBalance - donateAmount;
            document.getElementById('total-balance').innerText = totalBalanceDebited;
            document.getElementById('add-donate-fund-2').innerText = addedDonate;

            const div = document.createElement('div');
            div.classList.add('border', 'border-b-gray-400', 'rounded-xl', 'container', 'max-w-5xl', 'mx-auto', 'p-6', 'space-y-4', 'mb-5');
            div.innerHTML = `
            <p class="text-lg font-bold">${donateAmount} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
            <p> date: ${new Date().toLocaleString()} bangladesh standard time </p>`

            document.getElementById('section-hidden-transaction').prepend(div, div.firstChild);
        }

    })





