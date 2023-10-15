 const treasure = () => {
    return alert('Gold!')
  }
  
const changetoEmoji = (treasure) => {
    if(treasure === treasurenumber) {
        document.getElementById(treasurenumber).innerHTML = "🎁"
    }
    // else if(treasure === 'bomb'){
    //     document.getElementById(location).innerHTML = "💣"
    // }
    // else if(treasure === 'rainbow'){
    //     document.getElementById(location).innerHTML = "🌈"
    // }
    // return alert
  }

  var treasurenumber = Math.floor(Math.random() * 9)

  var bomb