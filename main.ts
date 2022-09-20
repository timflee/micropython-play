input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    serial.writeLine(convertToText(fib(i)))
    i += 1
})
function fib(num: number): number {
    if (num <= 1) {
        return num
    } else {
        return fib(num - 1) + fib(num - 2)
    }
    
}

input.onButtonPressed(Button.B, function on_button_pressed_b() {
    control.reset()
})
let i = 0
i = 1
while (true) {
    if (input.logoIsPressed()) {
        serial.writeLine(convertToText(fib(i)))
    }
    
    basic.pause(1000)
}
