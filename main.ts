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
go()
basic.pause(4700)
stop()
right()
basic.pause(1800)
go()
basic.pause(1000)
stop()
back()
basic.pause(4000)
stop()
go()
basic.pause(1700)
stop()
left()
basic.pause(1700)
stop()
go()
basic.pause(3000)
stop()
right()
basic.pause(1000)
stop()
back()
basic.pause(3000)
go()
basic.pause(2000)
stop()
left()
basic.pause(1400)
stop()
go()
basic.pause(1000)
stop()
right()
basic.pause(1500)
stop()
back()
basic.pause(3000)
stop()
go()
basic.pause(3000)
stop()
left()
basic.pause(1500)
stop()
go()
basic.pause(1500)
stop()
basic.forever(function () {
	
})
