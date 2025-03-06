const ipo = document.getElementById('ipo');

if(ipo){

/* Значения из текстовых инпутов */
const totalCost = document.getElementById('cost'),
    anInitialFee = document.getElementById('initial'),
    creditTerm = document.getElementById('term'),
    creditRate = document.getElementById('rate');

/* Все number input */
const inputsNumber = document.querySelectorAll('input[type="number"]');

/* Итоговые значения */
const totalMonthlyPayment = document.querySelector('.ipo__sum'),
    totalAmountOfCredit = document.querySelector('.ipo__total');
//     totalMonthlyPayment = document.getElementById('monthly-payment'),
//     totalRecommendedIncome = document.getElementById('recommended-income');

/* Пересчет для number inputs */
for (number of inputsNumber){
    number.addEventListener('change', () => {
        // totalCostRange.value = totalCost.value;
        // anInitialFeeRange.value = anInitialFee.value;
        // creditTermRange.value = creditTerm.value;
        calculation(totalCost.value, anInitialFee.value, creditTerm.value, creditRate.value);
    })
}

// let currentPercent = creditRate.value;

const calcBtn = document.querySelector('.ipo-btn');

/* Рассчет кредита */
const calculation = (totalCost = 2000000, anInitialFee = 50000, creditTerm = 15, currentPercent = 9.5) => {
    /* 
        ЕП - ежемесячный платеж; 
        РК - размер кредита; 
        ПС - процентная ставка; 
        КМ - количество месяцев

        ЕП = (РК + (((РК / 100) * ПС) / 12 ) * КМ) / КМ
    */
    
    let lounAmount = totalCost - anInitialFee //РК - размер кредита
    let interestRate = currentPercent; //ПС - процентная ставка
    let numberOfMonths = creditTerm * 12; //КМ - количество месяцев

    let monthlyPayment = (lounAmount + ((((lounAmount / 100) * interestRate) / 12) * numberOfMonths)) / numberOfMonths; //ЕП - ежемесячный платеж
    let monthlyPaymentArounded = Math.round(monthlyPayment);

    if (monthlyPaymentArounded < 0) {
        return false;
    } else {
        // totalAmountOfCredit.innerHTML = `${lounAmount} руб.`;
        totalMonthlyPayment.innerHTML = `${prettify(monthlyPaymentArounded)} руб. в месяц`;
        // totalRecommendedIncome.innerHTML = `${monthlyPaymentArounded + (monthlyPaymentArounded / 100) * 35} руб.`; //+35%
    }
}


    calculation();
    calcBtn.addEventListener('click', calculation(totalCost.value, anInitialFee.value, creditTerm.value, creditRate.value));
}
