var balls = getBall(34)

balls.sort(function(){
    return Math.random() * 2 - 1
})

var redBalls = balls.slice(0,6)

console.log(redBalls)

function getBall(num){
    var arr = []
    var i = 1
    while(i <= num){
        arr.push(i)
        i++
    }
    return arr
}