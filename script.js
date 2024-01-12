// API Key
const apiKey = "oOOnyIieHAPSGEsUEG4LpCyptnvKXGAk";

$("#run-search").on("click", function (e) {

  e.preventDefault();

  let query = $("#search-term").val().trim();  
  const articleCount = $("#article-count").val().trim();

  const startYear = $("#start-year").val().trim();
  const endYear = $("#end-year").val().trim();
  
  let begin_date = "";
  let end_date = "";

  if (startYear !== ""){    
    begin_date = startYear + "0101";
  }

  if (endYear){
    end_date = endYear + "1231";
  }

  const queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?
          q=${query}&api-key=${apiKey}&begin_date=${begin_date}&end_date=${end_date}`;
  
  fetch(queryURL)
    .then( function (response) {
        return response.json();
    })
    .then(function (data) {
      console.log(data);
    })
    console.log(queryURL);
});
 