function StockPriceTicker() {
    'use strict';
    var ticker = document.getElementById("tickBox").value,
        // YQL_url = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22" + ticker + "%22)&env=store://datatables.org/alltableswithkeys",
        YQL_url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22" + ticker + "%22)&format=json&env=store://datatables.org/alltableswithkeys",
        StockTickerHTML = "",
        CompName,
        Price,
        ChnageInPrice,
        PercentChnageInPrice,
        Time,
        Open,
        PrevClose,
        stockhtmlTable,
        stockhtmlChart,
        Symbol,
        Ask,
        Bid,
        
        StockTickerXML = $.get(YQL_url, function (_return) {
            var stock = _return.query.results.quote;
            CompName = stock.Name;
            Symbol = stock.symbol;
            Price = stock.LastTradePriceOnly;
            Time = stock.LastTradeTime;
            ChnageInPrice = stock.Change;
            PercentChnageInPrice = stock.Change_PercentChange;
            Open = stock.Open;
            PrevClose = stock.PreviousClose;
            Ask = stock.Ask;
            Bid = stock.Bid;
                
            stockhtmlTable = "<h2> Company Name: " + CompName + " (" + Symbol + ") </h2>";
            stockhtmlTable = stockhtmlTable + "<table style='width:35%' align='center'> <tr>";
            stockhtmlTable = stockhtmlTable + "<th>Last Trade Price:</th>";
            stockhtmlTable = stockhtmlTable + "<th>" + Price + "</th>";
            stockhtmlTable = stockhtmlTable + "<th>Last Trade Time:</th>";
            stockhtmlTable = stockhtmlTable + "<th>" + Time + "</th></tr>";
            stockhtmlTable = stockhtmlTable + "<tr><th>Change:</th>";
            stockhtmlTable = stockhtmlTable + "<th>" + ChnageInPrice + "</th>";
            stockhtmlTable = stockhtmlTable + "<th>Percent Change:</th>";
            stockhtmlTable = stockhtmlTable + "<th>" + PercentChnageInPrice + "</th></tr>";
            stockhtmlTable = stockhtmlTable + "<tr><th>Open:</th>";
            stockhtmlTable = stockhtmlTable + "<th>" + Open + "</th>";
            stockhtmlTable = stockhtmlTable + "<th>Previous Close:</th>";
            stockhtmlTable = stockhtmlTable + "<th>" + PrevClose + "</th></tr>";
            stockhtmlTable = stockhtmlTable + "<tr><th>Ask:</th>";
            stockhtmlTable = stockhtmlTable + "<th>" + Ask + "</th>";
            stockhtmlTable = stockhtmlTable + "<th>Bid:</th>";
            stockhtmlTable = stockhtmlTable + "<th>" + Bid + "</th></tr>";
            stockhtmlTable = stockhtmlTable + "</table><br>";
            stockhtmlTable = stockhtmlTable + "<button style=\"background-color: green;border: none;color: white;text-align: center;padding: 5px 20px;font-size: 16px;\" onclick=\"insert1D('" + Symbol + "')\" id='1DButton'>1D</button>";
            stockhtmlTable = stockhtmlTable + "<button style=\"background-color: green;border: none;color: white;text-align: center;padding: 5px 20px;font-size: 16px;\" onclick=\"insert5D('" + Symbol + "')\" id='5DButton'>5D</button>";
            stockhtmlTable = stockhtmlTable + "<button style=\"background-color: green;border: none;color: white;text-align: center;padding: 5px 20px;font-size: 16px;\" onclick=\"insert1M('" + Symbol + "')\" id='1MButton'>1M</button>";
            stockhtmlTable = stockhtmlTable + "<button style=\"background-color: green;border: none;color: white;text-align: center;padding: 5px 20px;font-size: 16px;\" onclick=\"insert6M('" + Symbol + "')\" id='6MButton'>6M</button>";
            stockhtmlTable = stockhtmlTable + "<button style=\"background-color: green;border: none;color: white;text-align: center;padding: 5px 20px;font-size: 16px;\" onclick=\"insert1Y('" + Symbol + "')\" id='1YButton'>1Y</button>";
            stockhtmlTable = stockhtmlTable + "<button style=\"background-color: green;border: none;color: white;text-align: center;padding: 5px 20px;font-size: 16px;\" onclick=\"insert2Y('" + Symbol + "')\" id='2YButton'>2Y</button>";
            stockhtmlTable = stockhtmlTable + "<button style=\"background-color: green;border: none;color: white;text-align: center;padding: 5px 20px;font-size: 16px;\" onclick=\"insert5Y('" + Symbol + "')\" id='5YButton'>5Y</button>";
            stockhtmlTable = stockhtmlTable + "<button style=\"background-color: green;border: none;color: white;text-align: center;padding: 5px 20px;font-size: 16px;\" onclick=\"insert9Y('" + Symbol + "')\" id='9YButton'>9Y</button>";
				
            document.getElementById("showStockTick").innerHTML = stockhtmlTable;
            insert6M(Symbol);
        });
}

function insert1D(Symbol) {
    insertChart(Symbol,"1d");
}

function insert5D(Symbol) {
    insertChart(Symbol,"5d");
}

function insert1M(Symbol) {
    insertChart(Symbol,"1m");
}

function insert6M(Symbol) {
    insertChart(Symbol,"6m");
}

function insert1Y(Symbol) {
    insertChart(Symbol,"1y");
}

function insert2Y(Symbol) {
    insertChart(Symbol,"2y");
}

function insert5Y(Symbol) {
    insertChart(Symbol,"5y");
}

function insert9Y(Symbol) {
    insertChart(Symbol,"9y");
}

function insertChart(Symbol,length) {
    insertImage = "<img src='https://chart.finance.yahoo.com/z?s=" + Symbol + "&t=" + length + "&q=l&l=on&z=s&p=m50,m200'/>";
    document.getElementById("stockChart").innerHTML = insertImage;
}