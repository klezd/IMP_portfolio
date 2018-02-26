
// SCRIPTS FOR CONTROLLING AUDIO
var audio = document.getElementById("audio");
var audioPlayPause = document.getElementById("audioPlayPause");
var volControlAudio = document.getElementById("vol-control-audio");
//play / pause AUDIO
var audioImg = document.getElementById("audioVol");
audioPlayPause.onclick = function(){
    console.log("click play");

    if(audio.paused)
        audio.play();
    else
        audio.pause();
};
//change volume when adjust the input range
volControlAudio.onchange = function() {
    console.log("change volume");
    var volAudioVal = volControlAudio.value;
    audio.volume = volAudioVal/100;
    console.log(volAudioVal);

    if(volAudioVal === 0) {
        audioImg.setAttribute("src", "mute.png");
    } else {
        audioImg.setAttribute("src", "volume.png");
    }
}
//change img of the volume when click
audioImg.onclick = function() {

    if(audioImg.getAttribute("src") === "mute.png") {
        audio.volume = 0.5;
        volControlAudio.value = 50;
        audioImg.setAttribute("src", "volume.png");
    } else {
        audio.volume = 0.0;
        volControlAudio.value = 0;
        audioImg.setAttribute("src", "mute.png");
    }
}


// SCRIPTS FOR CONTROLLING VIDEO
var video = document.getElementById("video");
var videoPlayPause = document.getElementById("videoPlayPause");
var volControlVideo = document.getElementById("vol-control-video");
//play / pause video
var videoImg = document.getElementById("videoVol");
videoPlayPause.onclick = function(){
    console.log("click play");

    if(video.paused)
        video.play();
    else
        video.pause();
};
//change volume when adjust the input range
volControlVideo.onchange = function() {
    console.log("change volume");
    var volVideoVal = volControlVideo.value;
    video.volume = volVideoVal/100;
    console.log(volVideoVal);

    if(volVideoVal === 0) {
        videoImg.setAttribute("src", "img/mute.png");
    } else {
        videoImg.setAttribute("src", "img/volume.png");
    }
}
//change img of the volume when click
videoImg.onclick = function() {
    if(videoImg.getAttribute("src") === "img/mute.png") {
        video.volume = 0.5;
        volControlVideo.value = 50;
        videoImg.setAttribute("src", "img/volume.png");
    } else {
        video.volume = 0.0;
        volControlVideo.value = 0;
        videoImg.setAttribute("src", "img/mute.png");
    }
}

/*
$(document).ready(function(){
    // control for video
    $("#videoPlayPause").click(function(){
        console.log("click play");
        if( $("#video").paused ){
            $("#video").get(0).play();
        } else {
            $("#video").get(0).pause();
        }
    });

    $("#vol-control-video").change(function(){
        console.log("change volume");

        var val = $("#vol-control-video").val();
        $("#video").volume = val / 100;

        if(val == 0) {
            $("#videoVol").attr("src", "mute.png");
        } else {
            $("#videoVol").attr("src", "volume.png");
        }
    })

    $("#videoVol").click(function(){
        if($("#videoVol").attr("src") == "mute.png") {
            $("#video").volume = 5.0;
            $("#vol-control-video").val(50);
            $("#videoVol").attr("src", "volume.png");
        } else {
            $("#video").volume = 0;
            $("#vol-control-video").val(0);
            $("#videoVol").attr("src", "mute.png");
        }
    })

})*/