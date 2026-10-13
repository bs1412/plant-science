window.onload = function() {
    var video = document.getElementById("myvideo");
    var play = document.getElementById("play");
    var progress = document.getElementById("progress");
    var bar = document.getElementById("bar");
    var control = document.getElementById("control");
    var sound = document.getElementById("sound");
    var full = document.getElementById("full");
    var box = document.querySelector(".box");

    control.onmousedown = function(e) {
        e.preventDefault();
        video.pause();
        
        document.onmousemove = function(e) {
            var progressRect = progress.getBoundingClientRect();
            var lef = e.clientX - progressRect.left;
            lef = Math.max(0, Math.min(lef, progress.offsetWidth));
            
            bar.style.width = lef + "px";
            control.style.left = lef + "px";
            
            var scale = lef / progress.offsetWidth;
            video.currentTime = video.duration * scale;
        };

        document.onmouseup = function() {
            video.play();
            document.onmousemove = null;
            document.onmouseup = null;
        };
    };

    video.ontimeupdate = function() {
        var scale = video.currentTime / video.duration;
        bar.style.width = (progress.offsetWidth * scale) + "px";
        control.style.left = (progress.offsetWidth * scale) + "px";
    };
    play.onclick = function() {
        if (video.paused) {
            video.play();
            play.className = "pause";
        } else {
            video.pause();
            play.className = "play";
        }
    };

    sound.onclick = function() {
        video.muted = !video.muted;
        sound.className = video.muted ? "soundoff" : "soundon";
    };

    full.onclick = function() {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen();
        } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
        }
    };
};