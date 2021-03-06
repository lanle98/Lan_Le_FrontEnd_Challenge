require('../css/main.css')
require('./validate_form')



//parse data from fetch api
let parseData = (data) => {
    let display_today = document.querySelector('.today')

    const { Note } = data

    //check if the api is working or not
    if (Note) {
        display_today.innerHTML = "<li>Sorry the data is unavailable at a moment</li>"
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






//fetch data
let symbol = ['MSFT', 'GOOGL', 'BTCUSD']

//looping
for (let i = 0; i < symbol.length; i++) {
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol[i]}&apikey=JQ1LE8WZCWJRAMXL`)
        .then(res => res.json())
        .then(data => parseData(data))
}

