microbitApp.compassButtonDown(CompassButtonOption.W, function () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 100)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 100)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CW, 100)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, 100)
})
microbitApp.compassButtonDown(CompassButtonOption.N, function () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 100)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 100)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CCW, 100)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, 100)
})
input.onButtonPressed(Button.A, function () {
    motor.motorStopAll()
})
microbitApp.compassButtonDown(CompassButtonOption.S, function () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 100)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 100)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CW, 100)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 100)
})
microbitApp.compassButtonDown(CompassButtonOption.E, function () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 100)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 100)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CCW, 100)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 100)
})
bluetooth.startUartService()
motor.motorStopAll()
basic.forever(function () {
	
})
