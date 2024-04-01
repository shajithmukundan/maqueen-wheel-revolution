DFRobotMaqueenPlus.I2CInit()
DFRobotMaqueenPlus.PID(PID.ON)
basic.forever(function () {
    basic.pause(1000)
    if (DFRobotMaqueenPlus.readeDistance(Motors1.M1) < "5") {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 202)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.GREEN)
    } else {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.RED)
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
        DFRobotMaqueenPlus.PID(PID.OFF)
    }
})
