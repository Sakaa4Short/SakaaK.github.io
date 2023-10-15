var treasurenumber = Math.floor(Math.random() * 9)
var bombnumber = Math.floor(Math.random() * 9)
// const treasure = () => {
//     return alert('Gold!')
//   }
  alert("hello")
const changeToEmoji = (treasure) => {
    if(treasure === treasurenumber) {
        document.getElementById(treasurenumber).innerHTML = "🎁"
    }
    else if(treasure === bombnumber){
        document.getElementById(bombnumber).innerHTML = "💣"
    }
    else {
        document.getElementById(treasure).innerHTML = "🌈"
    }
  }
//   var bomb




