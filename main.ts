input.onButtonPressed(Button.A, function () {
    if (Player_1 == (Heads && Heads)) {
        basic.pause(2000)
        basic.showString("P1")
        basic.showString("W")
        Points += 1
    } else if (Player_1 == (Tails && Tails)) {
        basic.pause(2000)
        basic.showString("P1")
        basic.showString("W")
        Points += 1
    } else if (Player_2 == (Tails && Tails)) {
        basic.pause(2000)
        basic.showString("P1")
    } else {
    	
    }
})
let Points = 0
let Tails = 0
let Heads = 0
let Player_2 = 0
let Player_1 = 0
basic.showNumber(Player_1)
basic.showNumber(Player_2)
Player_1 = 1
Player_2 = 2
Heads = 0
Tails = 0
