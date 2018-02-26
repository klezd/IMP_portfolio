$(document).ready(function() {
    $("#loadButton").click(function(e) {
        e.preventDefault();

        // check if func called
        // console.log("link clicked");
        //get data from jsonp file
        $.ajax({
            type: 'GET',
            url: 'https://imp-portfolio-demonstration.herokuapp.com/json/persons.jsonp',
            async: false,
            dataType: 'jsonp'
        });

        //console.log("end");
        //hide the 'load with ajax' link
        $("#loadButton").hide();
        $("#list").css("display", "table");


    })
})

function jsonCallback(data) {
    $(data).each( function(index, val){
        var list = $("#list");
        var row = $("<tr>").attr("class", "data-row");
        // test
        // console.log(data[0].latitude);
        $.each(val, function(key, value){
          // console.log(key + " : " + value);
            /*var value = this.value;
            var cell = $("<td>").attr("class", "data-cell");
            this.value.appendTo($(cell));
            $(cell).appendTo($(row));*/
            if(key == "index") {
                value = value + 1;
            }
            if (key == "email") {
                value = "<a href ='mailto:'" + value + "'>" + value + "</a>";
            }
            if (key == "latitude") {
                value = "(" + val.latitude + ", " +  val.longitude + ")";
            }
            if (key == "longitude") {
                value = "";
            }
            if (value != "") {
                var name = key;
                if (key == "latitude") {
                    name = "location";
                }
                if (key == "eyeColor") {
                    name = "eye-color";
                }
                if (key == "index") {
                    name = "id";
                }
                $(row).append("<td class = 'data-cell' name = '"+ name + "'>" + value + "</td>");
                $(row).appendTo($(list));
            }
        });
    });
}
