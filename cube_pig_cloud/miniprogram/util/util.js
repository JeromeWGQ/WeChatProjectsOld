function second2minute(second) {
    var secondTime = parseInt(second) // 秒
    var minuteTime = 0 // 分
    var hourTime = 0 // 小时
    if (secondTime >= 60) {
        minuteTime = parseInt(secondTime / 60)
        secondTime = parseInt(secondTime % 60)
        if (minuteTime >= 60) {
            hourTime = parseInt(minuteTime / 60)
            minuteTime = parseInt(minuteTime % 60)
            return hourTime + ":" + (minuteTime < 10 ? "0" + minuteTime : minuteTime) + ":" + (secondTime < 10 ? "0" + secondTime : secondTime)
        } else {
            return minuteTime + ":" + (secondTime < 10 ? "0" + secondTime : secondTime)
        }
    } else {
        return secondTime + ""
    }
}

function millisecond2show(millisecond) {
    var smallDigit = parseInt(millisecond % 1000 / 10) + ""
    if (smallDigit.length == 1) {
        smallDigit = "0" + smallDigit
    }
    return [second2minute(millisecond / 1000), smallDigit]
}

function createtime2mmdd(create_time) {
    let mmdd = create_time.split('T')[0].split('-')
    return [mmdd[1], mmdd[2]]
}

module.exports = {
    second2minute,
    millisecond2show,
    createtime2mmdd
}