export default {
    deepCopy(data) {
        return window.JSON.parse(window.JSON.stringify(data))
    },
    /**错误弹框 start */
    errorMessageFlag: null,
    errorMessageRemove() {
        const _commonErrorMsg = document.getElementById('commonErrorMsg');
        if (_commonErrorMsg != null) _commonErrorMsg.parentNode.removeChild(_commonErrorMsg);
    },
    errorMessage(message, callBack) {
        if (this.errorMessageFlag) clearTimeout(this.errorMessageFlag)
        this.errorMessageRemove()
        const html = `
            <div class="common-error-msg" id="commonErrorMsg">
            <div class="error-box">
                ${message}
            </div>
        </div>
        `
        document.getElementById('app').insertAdjacentHTML('afterend', html);
        this.errorMessageFlag = setTimeout(() => {
            this.errorMessageRemove()
            if (callBack) callBack()
        }, 2000)
    },
    /**错误弹框 end */
    /**
     * @Created by xiandan on 2017-10-09
     * @desc 根据时间,格式 戳返回日期
     * @param { date } - 时间戳  @param { fmt }  - 格式格式
     * @return { fmt }
     * @dome01 this._utils.dateFormat(1507513800642, 'yyyy/MM/dd hh:mm:ss')  => 2017/10/09 09:50:00
     * @dome02 this._utils.dateFormat(1507513800642, 'yyyy-MM-dd hh:mm:ss')  => 2017-10-09 09:50:00
     * @dome03 this._utils.dateFormat(1507513800642, 'yyyy.MM.dd , hh-mm-ss') => 2017.10.09 , 09-50-00
     */
    dateFormat(date, fmt) {
        if (!(date && true)) return date
        date = new Date(parseInt(date))
        var o = {
            'M+': date.getMonth() + 1,
            'd+': date.getDate(),
            'h+': date.getHours(),
            'm+': date.getMinutes(),
            's+': date.getSeconds(),
            'q+': Math.floor((date.getMonth() + 3) / 3),
            'S': date.getMilliseconds()
        }
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
        for (var k in o) {
            if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
        }
        return fmt
    },
    /**
     * @Created by Jun on 2018-07-26
     * @desc 根据详细时间,截取年月日获取日期
     * @param { date } - 时间
     */
    dateTime(date) {
        var date = new Date(date);
        var nowMonth = date.getMonth() + 1;
        var strDate = date.getDate();
        // 对月份进行处理，1-9月在前面添加一个“0”
        if (nowMonth >= 1 && nowMonth <= 9) {
            nowMonth = "0" + nowMonth;
        }
        // 对日期进行处理，1-9号在前面添加一个“0”
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        date = `${date.getFullYear()}-${nowMonth}-${strDate}`
        return date
    },
    //判断是否为微信浏览器
    isWeixn() {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger") return true;
        else return false;
    },
    //验证价格 错误返回 true  正确返回false
    isPrice(data) {
        if (data) return !Number(data)
    },
    datePicker(callBack) {
        document.querySelector('#startDatePicker').onclick = () => {
            weui.datePicker({
                start: 2000,
                end: 2050,
                defaultValue: [new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate()],
                onChange: function (result) {
                    console.log(result, 'result');
                },
                onConfirm: function (result) {
                    callBack({
                        startDate: result[0] + '-' + result[1] + '-' + result[2]
                    })
                }
            });
        }
        document.querySelector('#endDatePicker').onclick = () => {
            weui.datePicker({
                start: 2000,
                end: 2050,
                defaultValue: [new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate()],
                onChange: function (result) {
                    console.log(result);
                },
                onConfirm: function (result) {
                    callBack({
                        endDate: result[0] + '-' + result[1] + '-' + result[2]
                    })
                }
            });
        }
    }
}
