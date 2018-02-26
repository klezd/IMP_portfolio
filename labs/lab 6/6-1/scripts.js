var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

$(document).ready(function() {
    $("#search").click(function(e) {
        e.preventDefault();
        console.log("click");

        var searchTerm = $("#tag").val();
        $("#output-pictures").empty();

        (function() {
            $.getJSON( flickerAPI, {
                tags: searchTerm,
                tagmode: "any",
                format: "json"
            }).done(function( data ) {
                    $.each( data.items, function( i, item ) {
                       // $("<div ></div>").addClass("picture-item").css('background-image', 'url(' + item.media.m + ')').appendTo( "#output-pictures" );
                        console.log(item.media.m);
                        var img = $( "<img>" ).attr( {"src": item.media.m, "class": "picture-item" });
                        $(img).appendTo( "#output-pictures" );

                        if ( i === 9 ) {
                            return false;
                        }
                    });
                });
        })();

    })
})