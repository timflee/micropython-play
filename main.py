def on_button_pressed_a():
    global i
    serial.write_line(convert_to_text(fib(i)))
    i += 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def fib(num: number):
    if num <= 1:
        return num
    else:
        return fib(num - 1) + fib(num - 2)

def on_button_pressed_b():
    control.reset()
input.on_button_pressed(Button.B, on_button_pressed_b)

i = 0
i = 1
while True:
    if input.logo_is_pressed():
        serial.write_line(convert_to_text(fib(i)))
    basic.pause(1000)