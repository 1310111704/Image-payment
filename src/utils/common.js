{/* <script src="./mobile-detect.js"></script> */ }
import MobileDetect from './mobile-detect.min.js'
// import FingerprintJS from '@fingerprintjs/fingerprintjs'
import config from '../../package.json'
// 獲取設備信息
export function mobileInfo() {
    // let identifies = getUniqueCode();
    // console.log(identifies, 'identifies=============================identifies');
    //判断数组中是否包含某字符串  
    Array.prototype.contains = function (needle) {
        for (i in this) {
            if (this[i].indexOf(needle) > 0)
                return i;
        }
        return -1;
    }
    var deviceType = navigator.userAgent;//获取userAgent信息  
    var md = new MobileDetect(deviceType);//初始化mobile-detect  
    var os = md.os();//获取系统  
    var version = "";//系统的版本号   
    var model = "";  //设备型号
    console.log(config.version);
    console.log(window.screen.height, window.screen.width);
    if (os == "iOS") {//ios系统的处理  
        version = md.version("iPhone");
        os = md.os();
        model = md.mobile();
        console.log(os);
    } else if (os == "AndroidOS") {//Android系统的处理  
        os = md.os();
        version = md.version("Android");
        var sss = deviceType.split(";");
        var i = sss.contains("Build/");
        if (i > -1) {
            model = sss[i].substring(0, sss[i].indexOf("Build/"));
        }
    } else {
        var sUserAgent = navigator.userAgent;
        console.log(sUserAgent);
        var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
        var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel");
        if (isMac) version = "Mac";
        var isUnix = (navigator.platform == "X11") && !isWin && !isMac;
        if (isUnix) version = "Unix";
        var isLinux = (String(navigator.platform).indexOf("Linux") > -1);
        if (isLinux) version = "Linux";
        if (isWin) {
            var isWin2K = sUserAgent.indexOf("Windows NT 5.0") > -1 || sUserAgent.indexOf("Windows 2000") > -1;
            if (isWin2K) version = "Win2000";
            var isWinXP = sUserAgent.indexOf("Windows NT 5.1") > -1 || sUserAgent.indexOf("Windows XP") > -1;
            if (isWinXP) version = "WinXP";
            var isWin2003 = sUserAgent.indexOf("Windows NT 5.2") > -1 || sUserAgent.indexOf("Windows 2003") > -1;
            if (isWin2003) version = "Win2003";
            var isWinVista = sUserAgent.indexOf("Windows NT 6.0") > -1 || sUserAgent.indexOf("Windows Vista") > -1;
            if (isWinVista) version = "WinVista";
            var isWin7 = sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows 7") > -1;
            if (isWin7) version = "Win7";
            var isWin10 = sUserAgent.indexOf("Windows NT 10") > -1 || sUserAgent.indexOf("Windows 10") > -1;
            if (isWin10) version = "Win10";
        }
        os = 'window'
    }
    //组装信息
    var info = {
        device: version,//电脑ip
        version: config.version,//系统版本号
        // identifies: identifies || localStorage.getItem("DeviceID"),//唯一id
        pcResolution: window.screen.width + '*' + window.screen.height,//分辨率
        platform: os,//设备系统
        // os: os,//系统类型
        // model: model //设备型号
    };
    console.log(info)
    console.log(model);
    return info;
}
// //获取设备唯一标识
// function getUniqueCode() {
//     FingerprintJS.load().then(fp => {
//         fp.get().then(result => {
//             // console.log(result.visitorId,'result.visitorId000000000000000000000000');
//             // console.log('获取设备唯一标识：', visitorId);
//             localStorage.setItem("DeviceID", result.visitorId);
//             return result.visitorId

//         });
//     });

// }

