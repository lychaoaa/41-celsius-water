input.onButtonPressed(Button.A, function () {
    basic.showNumber(temperature)
})
let temperature = 0
temperature = 41
basic.forever(function () {
    temperature += -0.001
})
