$(document).ready(function() {
    $("#tickBox").on("input", function(e) {
        var tick = document.getElementById("tickBox").value;
        $.getJSON("http://stocksearchapi.com/api/?search_text=" + tick + "&api_key=1374a1ba5dcb4ac199361c5f5e36b9cef5bd6bed", function(data) {
            var dropDownHTML;
            for (var i=0,len=data.length;i<len;i++){
                dropDownHTML = dropDownHTML + '<option value="' + data[i].company_symbol + '">' + data[i].company_name + '</option>';
            }
            document.getElementById("options").innerHTML = dropDownHTML;
        });
    });
})