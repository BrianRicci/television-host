function fmPlay() {
    if(radioState == 'pause') {
        radioState = 'play'
        playBtn.classList.add('play')
        fmRadio.play()
    } else if(radioState == 'play'){
        radioState = 'pause'
        fmRadio.pause()
        playBtn.classList.remove('play')
    }
}
var audio = document.getElementById('fm');
var rng=document.getElementById('range');
rng.addEventListener('change', () => {
    audio.volume=rng.value;
})

let radioState = 'pause',
    fmRadio = document.getElementById('fm'),
    playBtn = document.querySelector('.fm-play')