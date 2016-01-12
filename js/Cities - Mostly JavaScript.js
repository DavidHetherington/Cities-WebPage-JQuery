//                                                                             
//        Author: David Hetherington                                           
//                                                                             
//        Part of the MinimalSaaS demonstration architecture. The Cities       
//        Webpage is a front end that uses JQuery to persist and format data.  
//        The main code is built into index.html.                              
//                                                                             
//        The code builds a table of cities with population, cost              
//        of living, and crime rate which it gets from the                     
//        REST API provided by CitiesBE.js which is hosted                     
//        somewhere else, for example on an Amazon EC2 instance.               
//        CitiesBE.js in turn accesses the Cities Collection in the            
//        asatte-press-city-guide database on Mongolab.com.                    
//                                                                             
//        For more information on the Minimal SaaS demonstration               
//        architecture see: https://github.com/DavidHetherington/              
//                                                                             
//        David Hetherington - 17 December 2015                                



 
$(document).ready(function(){

    //  --- base URL of the  API server.
    var url4APIServer = 'http://ec2-52-91-83-136.compute-1.amazonaws.com';
    
    //  --- Get the count from the JSONP REST API    
    var url4count = url4APIServer + ':3000/api/cities/count?callback=?';
    
    $.getJSON(url4count, function(jsonp){
         // $("#debug-message").text( "jsonp callback " + JSON.stringify(jsonp, null, 2) );
         $("#cities-count").text( jsonp.count );
    });


    //  --- Get the list of cities from the JSONP REST API    
    var url4list = url4APIServer + ':3000/api/cities/list?callback=?';
    
    $.getJSON(url4list, function(jsonp){
         $("#debug-message").text( "jsonp have city list ");

        // See http://stackoverflow.com/questions/21385976/how-to-make-a-16-x-16-inline-block-grid-using-a-loop
        
        var arrayLength = jsonp.length;

        var doc = document;
        
        var fragment = doc.createDocumentFragment();
        
        $('#cities-data-body').empty();
        
        for (var i = 0; i < arrayLength; i++) {
            var tr = doc.createElement("tr");
        
            var tdCity = doc.createElement("td");
            tdCity.classList.add("col-city");
            tdCity.innerHTML = jsonp[i].City;    
            tr.appendChild(tdCity);
        
            var tdState = doc.createElement("td");
            tdState.classList.add("col-state");
            tdState.innerHTML = jsonp[i].State;    
            tr.appendChild(tdState);

            var tdPopulation = doc.createElement("td");
            tdPopulation.classList.add("col-population");
            tdPopulation.innerHTML = jsonp[i].Population;    
            tr.appendChild(tdPopulation);

            var tdCrime = doc.createElement("td");
            tdCrime.classList.add("col-crime");
            tdCrime.innerHTML = jsonp[i]["Violent Crime"];    
            tr.appendChild(tdCrime);

            var tdCost = doc.createElement("td");
            tdCost.classList.add("col-cost-of-living");
            tdCost.innerHTML = jsonp[i]["Cost of Living"];    
            tr.appendChild(tdCost);

            //does not trigger reflow
            fragment.appendChild(tr);
        }
        
        doc.getElementById( "cities-data-body" ).appendChild(fragment);        
                 
    });


    
});



