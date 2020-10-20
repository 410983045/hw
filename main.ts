basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        led.plot(4, 4 - index)
        basic.pause(100)
    }
    for (let index = 0; index <= 4; index++) {
        led.plot(3, index)
        basic.pause(100)
    }
    for (let index = 0; index <= 4; index++) {
        led.plot(2, 4 - index)
        basic.pause(100)
    }
    for (let index = 0; index <= 4; index++) {
        led.plot(1, index)
        basic.pause(100)
    }
    for (let index = 0; index <= 4; index++) {
        led.plot(0, 4 - index)
        basic.pause(100)
    }
    basic.clearScreen()
})
