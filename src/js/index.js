require('../css/main.css')

let form = document.querySelector('.form')


// add sticky class
let stickyForm = () => {

    window.pageYOffset >= form.offsetTop ? form.classList.add('sticky') : form.classList.remove('sticky')
}


//parse data from fetch api
let parseData = (data) => {
    let display_today = document.querySelector('.today')


    //check if the api is working or not
    if (data["Note"]) {
        display_today.innerHTML = "Sorry the data is unavailable"
    } else {
        let today = Object.keys(data['Time Series (Daily)'])[0],
            yesterday = Object.keys(data['Time Series (Daily)'])[1],
            close_today = data['Time Series (Daily)'][today]['4. close'],
            close_yesterday = data['Time Series (Daily)'][yesterday]['4. close'],
            symbol = data['Meta Data']['2. Symbol']


        //add data to ul tag
        display_today.innerHTML += `<li>${UpOrDown(close_today, close_yesterday)}${symbol}: ${close_today}</li>`
    }





}


//see if the stock goes up or down
let UpOrDown = (today, yesterday) => {
    if (today > yesterday) {
        return '<i class="fas fa-sort-up"></i>'
    } else {
        return '<i class="fas fa-sort-down"></i>'
    }
}



//window on scroll enable sticky form
window.onscroll = function () {
    stickyForm()
}


//fetch data
fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=MSFT&apikey=JQ1LE8WZCWJRAMXL')
    .then(res => res.json())
    .then(data => parseData(data))

fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=GOOGL&apikey=JQ1LE8WZCWJRAMXL')
    .then(res => res.json())
    .then(data => parseData(data))

fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=BTCUSD&apikey=JQ1LE8WZCWJRAMXL')
    .then(res => res.json())
    .then(data => parseData(data))