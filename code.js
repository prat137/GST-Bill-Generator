
angular.module('myApp', [])
.controller('myCtrl', ['$scope', function($scope) {
                       $scope.count = 0;
                       var pageElement = angular.element(document.getElementById("products"));
                       
                       $scope.myFunc = function(param) {
                       var tbl = '   <tr class="products" ng-init="qty'+$scope.count+'=1;rate'+$scope.count+'=0;">'+
                       '          <td class="tg-yw4l1" style="padding:5px;"><textarea onkeyup="textAreaAdjust(this)" rows="4" cols="23" style="text-align:center;padding-top:14%;font-size:12px;"> </textarea></td>'+
                       '            <td class="tg-yw4l1" style="padding:5px"><textarea onkeyup="textAreaAdjust(this)" rows="4" cols="23" style="text-align:center;padding-top:14%;font-size:12px;"> </textarea></td>'+
                       '           <td class="tg-yw4l" style="padding:5px"><textarea onkeyup="textAreaAdjust(this)" rows="4" cols="23" style="text-align:center;font-size:12px;padding-top:14%;"  ng-keyup="gstCount()" style="text-align:center;" ng-model="qty'+$scope.count+'"></textarea></td>'+
                       
                       '           <td class="tg-yw4l" style="padding:5px"><textarea onkeyup="textAreaAdjust(this)" rows="4" cols="23" style="text-align:center;font-size:12px;padding-top:14%;" ng-model="units" ></textarea></td>'+
                       '            <td class="tg-yw4l" style="padding:5px"><textarea onkeyup="textAreaAdjust(this)" rows="4" cols="23" style="text-align:center;font-size:12px;padding-top:14%;" ng-keyup="gstCount()" ng-model="rate'+$scope.count+'" ></textarea></td>'+
                       '            <td class="tg-yw4l1" style="padding:5px; id="am'+$scope.count+'" ng-model="am'+$scope.count+'"><textarea onkeyup="textAreaAdjust(this)" rows="4" cols="23" style="text-align:center;font-size:12px;padding-top:14%;" id="am'+$scope.count+'">{{qty'+$scope.count+' * rate'+$scope.count+'}}</textarea></td>'+
                       '            </tr>';
                       angular.element(pageElement).injector().invoke(function($rootScope, $compile) {
                                                                      pageElement.after($compile(tbl)($scope));
                                                                      });
                       $scope.count++;
                       };
                       
                       $scope.gstCount = function(){
                       var i=0;
                       var total =0;
                       while(i<$scope.count){
                       var num = parseInt($("#am"+i+"").val());
                       total = total + num;
                       i++;
                       }
                       var temptotal = total;
                       total = (total * (parseInt(document.getElementById("gst").innerHTML)))/100;
                       $scope.total = total;
                       $scope.gtotal = total + temptotal;
                       $('#aminwords').text(convertNumberToWords($scope.gtotal)+" Only");
                       
                       };
                       
                       $scope.printFunc = function(){
                       var bn = $("#bwno").val();
                       $("#sbw").html("BW-"+bn);
                       $("input").css("border","0px solid");
                       $("#gstp").html("GST"+$scope.gst+"%");
                       $("textarea").css("resize","none");
                       $("textarea").css("border","0px solid");
                       $("#aanp").css("display","none");
                       $('#aminwords').text(convertNumberToWords($scope.gtotal)+" Only");
                       };
                       
                       $scope.editFunc = function(){
                       $("textarea").css("resize","auto");
                       $("#sbw").html("BW-"+'<select name="invoiceno" id="bwno">'+
                                      ' <option>01</option>'+
                                      ' <option>02</option>'+
                                      ' <option>03</option>'+
                                      ' </select>');
                       var cont = '<p id="gstp">GST <input class="tg-yw4lb"  type="text" ng-keyup="gstCount()" class="gstp" ng-model="gst"></p>';
                       angular.element(pageElement).injector().invoke(function($rootScope, $compile) {
                                                                      $("#gstp").html($compile(cont)($scope));
                                                                      });
                       };
                       }]);
function textAreaAdjust(o) {
    o.style.height = "80px";
    o.style.height = (10+o.scrollHeight)+"px";
}

$(document).ready(function() {
                  $(".datepicker").click(function(){
                                         $(this).datepick();
                                         });
                  });

function convertNumberToWords(amount) {
    var words = new Array();
    words[0] = '';
    words[1] = 'One';
    words[2] = 'Two';
    words[3] = 'Three';
    words[4] = 'Four';
    words[5] = 'Five';
    words[6] = 'Six';
    words[7] = 'Seven';
    words[8] = 'Eight';
    words[9] = 'Nine';
    words[10] = 'Ten';
    words[11] = 'Eleven';
    words[12] = 'Twelve';
    words[13] = 'Thirteen';
    words[14] = 'Fourteen';
    words[15] = 'Fifteen';
    words[16] = 'Sixteen';
    words[17] = 'Seventeen';
    words[18] = 'Eighteen';
    words[19] = 'Nineteen';
    words[20] = 'Twenty';
    words[30] = 'Thirty';
    words[40] = 'Forty';
    words[50] = 'Fifty';
    words[60] = 'Sixty';
    words[70] = 'Seventy';
    words[80] = 'Eighty';
    words[90] = 'Ninety';
    amount = amount.toString();
    var atemp = amount.split(".");
    var number = atemp[0].split(",").join("");
    var n_length = number.length;
    var words_string = "";
    if (n_length <= 9) {
        var n_array = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
        var received_n_array = new Array();
        for (var i = 0; i < n_length; i++) {
            received_n_array[i] = number.substr(i, 1);
        }
        for (var i = 9 - n_length, j = 0; i < 9; i++, j++) {
            n_array[i] = received_n_array[j];
        }
        for (var i = 0, j = 1; i < 9; i++, j++) {
            if (i == 0 || i == 2 || i == 4 || i == 7) {
                if (n_array[i] == 1) {
                    n_array[j] = 10 + parseInt(n_array[j]);
                    n_array[i] = 0;
                }
            }
        }
        value = "";
        for (var i = 0; i < 9; i++) {
            if (i == 0 || i == 2 || i == 4 || i == 7) {
                value = n_array[i] * 10;
            } else {
                value = n_array[i];
            }
            if (value != 0) {
                words_string += words[value] + " ";
            }
            if ((i == 1 && value != 0) || (i == 0 && value != 0 && n_array[i + 1] == 0)) {
                words_string += "Crores ";
            }
            if ((i == 3 && value != 0) || (i == 2 && value != 0 && n_array[i + 1] == 0)) {
                words_string += "Lakhs ";
            }
            if ((i == 5 && value != 0) || (i == 4 && value != 0 && n_array[i + 1] == 0)) {
                words_string += "Thousand ";
            }
            if (i == 6 && value != 0 && (n_array[i + 1] != 0 && n_array[i + 2] != 0)) {
                words_string += "Hundred and ";
            } else if (i == 6 && value != 0) {
                words_string += "Hundred ";
            }
        }
        words_string = words_string.split("  ").join(" ");
    }
    return words_string;
}





