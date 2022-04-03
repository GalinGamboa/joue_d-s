const newGame = document.getElementById("new_game");
console.log(newGame);
const roll_dice = document.getElementById('roll_dice');
console.log(roll_dice);
const hold = document.getElementById('hold');
console.log(hold);
const points_temp1 = document.getElementById('points_temp1');
console.log(points_temp1);
const points_temp2 = document.getElementById('points_temp2');
console.log(points_temp2);
const points_glob1 = document.getElementById('points_glob1');
console.log(points_glob1);
const points_glob2 = document.getElementById('points_glob2');
console.log(points_glob2);
const gagnant = document.querySelector('.gagnant');

const container_buttons = document.querySelector('.container_buttons')
console.log(container_buttons)

newGame.addEventListener('click',()=>{
    
    a = 0;
    b = 0;
    c = 0;
    d = 0;
    points_glob1.textContent='0'
    points_glob2.textContent='0'
    points_temp1.textContent='0'
    points_temp2.textContent='0'
    gagnant.textContent=('')
    container_buttons.style.display = ('block')
    document.querySelector('.dice_1').setAttribute('src', "/images/img/dé1.jpg")
    
})

