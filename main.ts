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
input.onPinPressed(TouchPin.P2, function () {
    basic.pause(100)
    strbtn += 1
    basic.pause(1000)
    strbtn += 1
})
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
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
let strbtn = 0
let operation = 0
basic.forever(function () {
    if (strbtn == 1) {
        go()
        basic.pause(1000)
    }
    if (strbtn == 2) {
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
                basic.pause(2000)
                go()
                // 推動進去A區
                basic.pause(800)
                stop()
                back()
                // 從A區向後推動D區
                basic.pause(2400)
                stop()
                go()
                // 從D區到A區中間第一個路口
                basic.pause(1200)
                stop()
                left()
                // 從第一路口左轉朝向正前方
                basic.pause(2000)
                stop()
            } else if (operation == 2) {
                right()
                // 自第二路口轉向F區正前方
                basic.pause(2200)
                stop()
                back()
                // 自F區前方後退推動F區
                basic.pause(2000)
                go()
                // 從F區前進到第二路口
                basic.pause(1500)
                stop()
                left()
                // 從第二路口左轉朝向正前方
                basic.pause(2000)
                stop()
            } else if (operation == 3) {
                right()
                // 在第三路口右轉
                basic.pause(1800)
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
                basic.pause(3000)
                stop()
                basic.pause(999999999999999999)
            }
        }
    }
})
