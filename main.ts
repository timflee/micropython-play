input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    let num2 = fib(i)
    // basic.show_number(num2)
    serial.writeLine(convertToText(num2))
    i += 1
})
function fib(num: number): number {
    if (num <= 1) {
        return num
    } else {
        return fib(num - 1) + fib(num - 2)
    }
    
}

let i = 1
input.onButtonPressed(Button.B, function on_button_pressed_a2() {
    control.reset()
})
while (true) {
    basic.pause(100)
}
