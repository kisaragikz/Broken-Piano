let audio = new (window.AudioContext || window.webkitAudioContext)()
  let osci = audio.createOscillator()
  let gain = audio.createGain()
  osci.connect(gain)
  gain.connect(audio.destination)

  function playNote(freq) {
    let time = audio.currentTime
    let newosci = audio.createOscillator()
    let newgain = audio.createGain()
    newosci.connect(newgain)
    newgain.connect(audio.destination)
    newosci.frequency.value = freq / 2
    newosci.start()
    newgain.gain.value = 1;
    newgain.gain.linearRampToValueAtTime(0, time + .20)
  }
  document.body.onkeydown = function (event) {
    let key = event.key
    if (key == 'a') {
      key1.click();
    }
    if (key == 'w') {
      key2.click();
    }
    if (key == 's') {
      key3.click();
    }
    if (key == 'e') {
      key4.click();
    }
    if (key == 'd') {
      key5.click();
    }
    if (key == 'f') {
      key6.click();
    }
    if (key == 't') {
      key7.click();
    }
    if (key == 'g') {
      key8.click();
    }
    if (key == 'y') {
      key9.click();
    }
    if (key == 'h') {
      key10.click();
    }
    if (key == 'u') {
      key11.click();
    }
    if (key == 'j') {
      key12.click();
    }
    if (key == 'k') {
      key13.click();
    }
    if (key == 'o') {
      key14.click();
    }
    if (key == 'l') {
      key15.click();
    }
    if (key == 'p') {
      key16.click();
    }
    if (key == ';') {
      key17.click();
    }
    if (key == '\'') {
      key18.click();
    }
    if (key == ']') {
      key19.click();
    }
    if (key == 'Enter') {
      key20.click();
    }
  }