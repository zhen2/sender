radio.setGroup(1)
radio.setTransmitPower(5)
basic.forever(function () {
    radio.sendString("")
    basic.pause(200)
})
