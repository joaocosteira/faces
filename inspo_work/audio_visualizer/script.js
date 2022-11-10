function playPause(){

    document.getElementById('music').paused
        ? document.getElementById('music').play()
        : document.getElementById('music').pause()


    Array
        .from({ length: 9 }, (v, i) => i + 1)
        .forEach( n => {
            document.querySelector(`.audio-wire-${n}`).style.animationPlayState = 
                document.getElementById('music').paused ? "running" : "paused"
        })

}