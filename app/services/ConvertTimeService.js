/**
 * Created by AlexS on 17.08.2015.
 */
angular
    .module('singlePageApplication')
    .service('ConvertTimeService', function () {

        function addPrefix (str) {
            if (str.length < 2) {
                str = '0'+str;
            }
            return str;
        }

        function addPostfix (str) {
            if (str.length < 2) {
                str = str + '0';
            }
            return str;
        }

        function convertStr(str, where) {
            // 0- prefix, 1 - postfix
            if (typeof str === 'undefined') {
                return '00';
            }

            if (where) {
                str = addPostfix(str);
            } else {
                str= addPrefix(str);
            }

            return str;
        }

        function getTime(time) {
            var splittedStr = [], hh, mm;

            if (typeof time === 'undefined' || time === null) {
                return '00:00';
            }

            time = '' + time;
            splittedStr = time.split('.');
            hh = convertStr(splittedStr[0], 0);
            mm = convertStr(splittedStr[1], 1);
            return hh + ':' + mm;
        }

        return {
            getTime: getTime
        };
    });