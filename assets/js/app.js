


var search = "election";
var beginYear = "20120101";
var endYear = "20121231";
var apiKey = "U1vMLjGRIl1ClDayAe6kI9QfUArOm9aC";
var queryKey = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + 
    search + "/begin_date" + beginYear + "/end_date" + endYear + "&api-key=" + apiKey;

$.ajax({
    url: queryKey,
    method : 'GET'
}).then(function(response){

    
    console.log(response.response.docs)
    console.log(queryKey)



})