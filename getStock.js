function StockPriceTicker() {
    'use strict';
    var ticker = document.getElementById("tickBox").value,
        YQL_url = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22" + ticker + "%22)&env=store://datatables.org/alltableswithkeys",
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
        
        StockTickerXML = $.get(YQL_url, function (xml) {
            $(xml).find("quote").each(function () {
                $(this).find("Symbol").each(function () {
                    Symbol = $(this).text();
                });
                $(this).find("Name").each(function () {
                    CompName = $(this).text();
                });
                $(this).find("LastTradePriceOnly").each(function () {
                    Price = $(this).text();
                });
                $(this).find("Change").each(function () {
                    ChnageInPrice = $(this).text();
                });
                $(this).find("PercentChange").each(function () {
                    PercentChnageInPrice = $(this).text();
                });
                $(this).find("LastTradeTime").each(function () {
                    Time = $(this).text();
                });
                $(this).find("Open").each(function () {
                    Open = $(this).text();
                });
                $(this).find("PreviousClose").each(function () {
                    PrevClose = $(this).text();
                });
                
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
                stockhtmlTable = stockhtmlTable + "</table><br>";
                stockhtmlTable = stockhtmlTable + "<button onclick=\"insert1D('" + Symbol + "')\" id='1DButton'>1D</button>";
                stockhtmlTable = stockhtmlTable + "<button onclick=\"insert5D('" + Symbol + "')\" id='5DButton'>5D</button>";
                stockhtmlTable = stockhtmlTable + "<button onclick=\"insert1M('" + Symbol + "')\" id='1MButton'>1M</button>";
                stockhtmlTable = stockhtmlTable + "<button onclick=\"insert6M('" + Symbol + "')\" id='6MButton'>6M</button>";
                stockhtmlTable = stockhtmlTable + "<button onclick=\"insert1Y('" + Symbol + "')\" id='1YButton'>1Y</button>";
                stockhtmlTable = stockhtmlTable + "<button onclick=\"insert2Y('" + Symbol + "')\" id='2YButton'>2Y</button>";
                stockhtmlTable = stockhtmlTable + "<button onclick=\"insert5Y('" + Symbol + "')\" id='5YButton'>5Y</button>";
                stockhtmlTable = stockhtmlTable + "<button onclick=\"insert9Y('" + Symbol + "')\" id='9YButton'>9Y</button>";
            });
				
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