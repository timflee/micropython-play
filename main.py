def on_button_pressed_a():
    global i
    num2 = fib(i)
    #basic.show_number(num2)
    serial.write_line(convert_to_text(num2))
    i += 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def fib(num: number):
    if num <= 1:
        return num
    else:
        return fib(num - 1) + fib(num - 2)

i = 1

def on_button_pressed_a2():
    control.reset()
input.on_button_pressed(Button.B, on_button_pressed_a2)

while True:
    basic.pause(100)