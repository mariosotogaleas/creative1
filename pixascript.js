document.getElementById("citySubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("cityInput").value;
  if (value === "")
    return;
  console.log(value);
  
   const url = "https://pixabay.com/api/?key=13901912-632db4cc834eaaedd2a27f556&q=" + value + "&image_type=photo";
   console.log(url);
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {	
      let results = "";
      results += '<h2 text-align:center >Picture of ' + value + "</h2>";
     
      var x =true;
      var counter =0;
      for (let i=0; i < 1; i++) {
	        
	        results += '<img   class="center" src="' + json.hits[i].largeImageURL +'"/>';
	
        	
        
        	
      }
      document.getElementById("pixaResults").innerHTML = results;
      //console.log(json);
    });
    
    
});