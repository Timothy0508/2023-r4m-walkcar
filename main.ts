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
input.onPinPressed(TouchPin.P0, function () {
    strbtn = 1
})
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
let strbtn = 0
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
strbtn = 0
let operation = 0
let redytostop = 0
if (strbtn == 1) {
    go()
    basic.pause(1000)
}
basic.forever(function () {
    if (strbtn == 1) {
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
            basic.pause(100)
            if (operation == 1) {
                right()
                // 第一個路口右轉
                basic.pause(1150)
                go()
                // 推動進去A區
                basic.pause(500)
                stop()
                back()
                // 從A區向後推動D區
                basic.pause(2700)
                stop()
                go()
                // 從D區到A區中間第一個路口
                basic.pause(1300)
                stop()
                left()
                // 從第一路口左轉朝向正前方
                basic.pause(1250)
                stop()
            } else if (operation == 2) {
                right()
                // 自第二路口轉向F區正前方
                basic.pause(1600)
                stop()
                back()
                // 自F區前方後退推動F區
                basic.pause(2000)
                go()
                // 從F區前進到第二路口
                basic.pause(1200)
                stop()
                left()
                // 從第二路口左轉朝向正前方
                basic.pause(1100)
                stop()
            } else if (operation == 3) {
                right()
                // 在第三路口右轉
                basic.pause(1400)
                stop()
                back()
                // 從C區正前方後退推動C區
                basic.pause(2000)
                stop()
                go()
                // 從C區向前至第三路口
                basic.pause(1200)
                stop()
                left()
                // 從第三路口朝向正前方
                basic.pause(1200)
                stop()
            } else if (operation == 4) {
                right()
                // 從第四路口轉向至B區方向
                basic.pause(1200)
                stop()
                go()
                // 從第四路口推進B區
                basic.pause(1000)
                back()
                // 後退推進G區
                basic.pause(3200)
                stop()
                go()
                // 離開G區前進到第四路口
                basic.pause(1200)
                left()
                // 第四路口朝向正前方
                basic.pause(1200)
                stop()
            } else if (operation == 5) {
                right()
                // 從第五路口右轉朝向E區
                basic.pause(1200)
                stop()
                go()
                // 前進推進E區
                basic.pause(1200)
                back()
                // 從E區後退推進ParkingPlace
                basic.pause(2000)
                stop()
                basic.pause(999999999999999999)
            }
        }
    }
})
