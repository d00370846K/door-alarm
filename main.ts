input.onButtonPressed(Button.A, function () {
    strip2.showColor(neopixel.colors(NeoPixelColors.White))
    strip2.show()
})
input.onPinPressed(TouchPin.P2, function () {
    if (buttonState == 0) {
        buttonState += 1
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        strip.show()
    } else if (buttonState == 1) {
        buttonState += 1
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        strip.show()
    } else if (buttonState == 2) {
        buttonState += 1
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        strip.show()
    } else if (buttonState == 3) {
        buttonState += 1
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        strip.show()
    } else if (buttonState == 4) {
        strip.clear()
        strip.show()
        buttonState = 0
    }
})
input.onButtonPressed(Button.B, function () {
	
})
radio.onReceivedStringDeprecated(function (receivedString) {
    if (receivedString == "doorOpen") {
        dfplayermini.playFile(1, dfplayermini.isRepeat.No)
        strip.setBrightness(255)
        basic.showIcon(IconNames.Yes)
        strip2.showColor(neopixel.colors(NeoPixelColors.White))
        strip2.show()
        strip.showRainbow(1, 360)
        strip.show()
        for (let index = 0; index < 47; index++) {
            strip.rotate(3)
            strip.show()
            basic.pause(100)
        }
        strip2.clear()
    } else if (receivedString == "doorClosed") {
        basic.pause(100)
        if (buttonState == 0) {
            strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
            strip.show()
        } else if (buttonState == 1) {
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
            strip.show()
        } else if (buttonState == 2) {
            strip.showColor(neopixel.colors(NeoPixelColors.Green))
            strip.show()
        } else if (buttonState == 3) {
            strip.showColor(neopixel.colors(NeoPixelColors.Blue))
            strip.show()
        } else if (buttonState == 4) {
            strip.clear()
            strip.show()
        }
        strip.show()
        strip2.clear()
        strip2.show()
        basic.showIcon(IconNames.No)
    }
})
let strip2: neopixel.Strip = null
let strip: neopixel.Strip = null
let buttonState = 0
dfplayermini.connect(SerialPin.P0, SerialPin.P1)
dfplayermini.setVolume(30)
radio.setGroup(17)
buttonState = 0
strip = neopixel.create(DigitalPin.P16, 47, NeoPixelMode.RGB)
strip2 = neopixel.create(DigitalPin.P11, 64, NeoPixelMode.RGB)
strip.clear()
strip.show()
basic.forever(function () {
	
})
