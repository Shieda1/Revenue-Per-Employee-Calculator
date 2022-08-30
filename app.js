// https://www.omnicalculator.com/finance/revenue-per-employee

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const revenueperemployeeRadio = document.getElementById('revenueperemployeeRadio');
const revenueRadio = document.getElementById('revenueRadio');
const numberofemployeeRadio = document.getElementById('numberofemployeeRadio');

let revenueperemployee;
let revenue = v1;
let numberofemployee = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

revenueperemployeeRadio.addEventListener('click', function() {
  variable1.textContent = 'Revenue';
  variable2.textContent = 'Number of employee';
  revenue = v1;
  numberofemployee = v2;
  result.textContent = '';
});

revenueRadio.addEventListener('click', function() {
  variable1.textContent = 'Revenue per employee';
  variable2.textContent = 'Number of employee';
  revenueperemployee = v1;
  numberofemployee = v2;
  result.textContent = '';
});

numberofemployeeRadio.addEventListener('click', function() {
  variable1.textContent = 'Revenue per employee';
  variable2.textContent = 'Revenue';
  revenueperemployee = v1;
  revenue = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(revenueperemployeeRadio.checked)
    result.textContent = `Revenue per employee = ${computerevenueperemployee().toFixed(2)}`;

  else if(revenueRadio.checked)
    result.textContent = `Revenue = ${computerevenue().toFixed(2)}`;

  else if(numberofemployeeRadio.checked)
    result.textContent = `Number of employee = ${computenumberofemployee().toFixed(2)}`;
})

// calculation

function computerevenueperemployee() {
  return Number(revenue.value) / Number(numberofemployee.value);
}

function computerevenue() {
  return Number(revenueperemployee.value) * Number(numberofemployee.value);
}

function computenumberofemployee() {
  return Number(revenue.value) / Number(revenueperemployee.value);
}