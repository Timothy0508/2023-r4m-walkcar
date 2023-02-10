function right () {
    pwm += 30
    if (pwm >= 255) {
        pwm = 255
    }
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    pwm
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    pwm - 30
    )
}
function back () {
    pwm = 150
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    100
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    100
    )
}
function left () {
    pwm += 30
    if (pwm >= 255) {
        pwm = 255
    }
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    pwm - 30
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P16,
    pwm
    )
}
function stop () {
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    0
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    0
    )
}
function go () {
    pwm = 150
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    100
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P16,
    100
    )
}
let pwm = 0
let operation = 0
let redytostop = 0
go()
basic.pause(1000)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P8) == 0) {
        go()
    } else if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P8) == 0) {
        right()
    } else if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P8) == 1) {
        left()
    } else if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P8) == 1) {
        go()
        basic.pause(200)
        operation += 1
        if (operation == 1) {
            right()
            basic.pause(1500)
            go()
            basic.pause(1000)
            stop()
            back()
            basic.pause(2500)
            stop()
            go()
            basic.pause(1200)
            stop()
            left()
            basic.pause(1250)
            stop()
        } else if (operation == 2) {
            right()
            basic.pause(1400)
            stop()
            back()
            basic.pause(2000)
            go()
            basic.pause(1200)
            stop()
            left()
            basic.pause(1100)
            stop()
        } else if (operation == 3) {
            right()
            basic.pause(1400)
            stop()
            back()
            basic.pause(2000)
            stop()
            go()
            basic.pause(1200)
            stop()
            left()
            basic.pause(1200)
            stop()
        } else if (operation == 4) {
            right()
            basic.pause(1200)
            stop()
            go()
            basic.pause(1000)
            back()
            basic.pause(3200)
            stop()
            go()
            basic.pause(1200)
            left()
            basic.pause(1200)
            stop()
        } else if (operation == 5) {
            right()
            basic.pause(1200)
            stop()
            go()
            basic.pause(1200)
            back()
            basic.pause(1200)
            right()
            basic.pause(800)
        } else if (operation >= 8) {
            stop()
            basic.pause(9999999999999999999999999999999999)
        }
    }
})
