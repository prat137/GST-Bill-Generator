
<html>
<head>
<title>
GST Bill Generator
</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
    <script src="code.js"></script>
    <style type="text/css">
        @page {
                    size: auto;   /* auto is the initial value */
                    margin: 18px;  /* this affects the margin in the printer settings */
                    .tg{border:3px solid black; border-collapse: collapse; font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;}
                    .tg td{border:3px solid black;colspan:0px;padding:5px}
                    .tg th{border:3px solid black;colspan:0px;padding:5px}
                    .tg-yw4lb{text-shadow: 0px 1px, 0px 0px, 0px 0px;}
                    input{font-size:12px;}
                    table{width:1050px;table-layout:fixed;font-size:11px;z-index:1000;}
                    textarea{border:none;}
              }

        .tg{border:3px solid black; border-collapse: collapse; font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;}
        .tg td{border:3px solid black;colspan:0px;padding:5px;}
        .tg th{border:3px solid black;colspan:0px;padding:5px}
        .tg-yw4lb{text-shadow: 0px 1px, 0px 0px, 0px 0px;}
        input{font-size:12px;}
        table{width:1050px;table-layout:fixed;font-size:11px;}
        textarea{border:none;}
        @media print {
                    #pbtn{display:none;}
                    #editbtn{display:none;}
                   .tg-yw4lb{text-shadow: 0px 1px, 0px 0px, 0px 0px;}
                    table{width:1050px;table-layout:fixed;font-size:11px;}
        }
    </style>
</head>

            <body ng-app="myApp">
                <div ng-controller="myCtrl">
                    <table class="tg">
                        <tr>
                            <th class="tg-s6z2" colspan="6">TAX INVOICE</th>
                        </tr>

                        <tr>
                            <th class="tg-9rkz" colspan="6"><h1 style="text-shadow: 0px 1px, 1px 0px, 1px 1px;">COMPANY NAME</h1>Company Address <br>AHMEDABAD, GUJARAT- (pincode)<br><b style="text-shadow: 0px 1px, 1px 0px, 1px 1px;">GSTIN No-------------------</b>
                            </th>
                        </tr>

                        <tr>
                            <td class="tg-yw4lb">Bill to<br><br><br><textarea name="billto" onkeyup="textAreaAdjust(this)" rows="2" cols="17" style="font-size:15px;" class="tg-yw4lb"></textarea><br></td>
                            <td class="tg-yw4lb" colspan="3" rowspan="3">Place of Supply<br><br><textarea rows="13" cols="55" style="font-size:15px;" >  </textarea></td>
                            <td class="tg-yw4lb"><center>Invoice No</center></td>
                            <td class="tg-yw4lb"><center>Dated</center></td>
                       </tr>

                       <tr>
                            <td class="tg-yw4l"><textarea rows="6" onkeyup="textAreaAdjust(this)" style="font-size:15px;" cols="17"> </textarea></td>
                            <td class="tg-yw4lb" rowspan="2" align="center" id ="sbw" >BW-<select name="invoiceno" id="bwno">
                                    <option>01</option>
                                    <option>02</option>
                                    <option>03</option>
                            </select></td>
                            <td class="tg-yw4l" style="padding:40px" rowspan="2"><input type="date" style="text-align:center;font-size:12px;width:125px;" class="tg-yw4lb"></td>
                      </tr>

                       <tr>
                            <td>GSTIN No ------------------</td>
                      </tr>

                       <tr>
                            <td  class="tg-yw4lb"  align="center">Description of Goods</td>
                            <td class="tg-yw4lb"  align="center">HSN CODE</td>
                            <td class="tg-yw4lb"  align="center">QTY</td>
                            <td class="tg-yw4lb"  align="center">Units</td>
                            <td class="tg-yw4lb"  align="center">Rate</td>
                            <td class="tg-yw4lb"  align="center">AMOUNT (INR)</td>
                      </tr>

                      <tr id="products"  ng-init="qty=1;rate=0;units='PCS';names=[0];count=1;total=0;gtotal=0;"  style="font-size:12px;">
                            <td class="tg-yw4l"  style="padding:5px"><textarea rows="4" onkeyup="textAreaAdjust(this)" cols="23" style="text-align:center;padding-top:14%;font-size:12px;"> </textarea></td>
                            <td class="tg-yw4l" style="padding:5px"><textarea onkeyup="textAreaAdjust(this)" rows="4" cols="23" style="text-align:center;font-size:12px;padding-top:14%;"> </textarea></td>
                            <td class="tg-yw4l" style="padding:5px"><textarea  rows="4" cols="23" style="text-align:center;font-size:12px;padding-top:14%;" ng-model="qty" onkeyup="textAreaAdjust(this)" ng-keyup="gstCount()"> </textarea></td>
                            <td class="tg-yw4l" style="padding:5px"><textarea rows="4" onkeyup="textAreaAdjust(this)" cols="23" style="text-align:center;font-size:12px;padding-top:14%;" ng-model="units"> </textarea></td>
                            <td class="tg-yw4l" style="padding:5px"><textarea rows="4" cols="23" onkeyup="textAreaAdjust(this)" style="text-align:center;font-size:12px;padding-top:14%;" ng-keyup="gstCount()" ng-model="rate"> </textarea></td>
                            <td  ng-model="param.am"  align="center" style="padding:5px">
                                    <textarea rows="4" cols="23" onkeyup="textAreaAdjust(this)" style="text-align:center;font-size:12px;padding-top:14%;" id="am0" >{{qty * rate}}</textarea></td>
                      </tr>

                       <tr id="aanp">
                            <td class="tg-yw4l"><button ng-click="myFunc()">Add New Product </button></td>
                      </tr>

                       <tr>
                            <td class="tg-yw4lb" align="center">TAX<br><p id="gstp">GST <input class="tg-yw4lb"  type="text" ng-keyup="gstCount()" class="gstp" ng-model="gst"></p></td>
                            <td class="tg-yw4l"></td>
                            <td class="tg-yw4l"></td>
                            <td class="tg-yw4l"></td>
                            <td class="tg-yw4l"  align="center" id="gst">{{gst}}</td>
                            <td class="tg-yw4l"  align="center">{{total}}</td>
                      </tr>

                       <tr>
                            <td class="tg-yw4l"></td>
                            <td class="tg-yw4l"></td>
                            <td class="tg-yw4l"></td>
                            <td class="tg-yw4l"></td>
                            <td class="tg-yw4lb" align="center">GRAND TOTAL </td>
                            <td class="tg-yw4lb" align="center">{{gtotal}}</td>
                      </tr>

                      <tr>
                            <td class="tg-baqh"  align="center" >Amount Chargeable (in words)<br><p class="tg-yw4lb" id="aminwords"></p> <br><br><p class="tg-yw4lb">Company's PAN: ---------</p><br><br>Note-Please make cheques in favor<br> of<br><p class="tg-yw4lb"> "COMPANY NAME"</p></td>
                            <td class="tg-baqh"  align="center"><p class="tg-yw4lb">BANK ACCOUNT DETAILS</p><br><br>Account number- --------------<br>Account Name- COMPANY NAME<br><br>Bank Name- ----- BANK, ----- BRANCH<br> FSC Code- ----------<br>Account type- CURRENT/SAVING</td>
                            <td class="tg-yw4l"></td>
                            <td class="tg-yw4lb"  align="center">Note:<br><br>--------------------</td>
                            <td class="tg-yw4l"   align="center" colspan="2"> <p class="tg-yw4lb">For COMPANY NAME LLP</p><br><br>Authorised Signatory<br><br><img src="" height="auto" width="100px"></td>
                      </tr>
            </table>
              <button id="pbtn" style="padding:10px;position:fixed;top:10;right:10" ng-click="printFunc()">Print</button>
              <button id="editbtn" style="padding:10px;position:fixed;top:10;right:60" ng-click="editFunc()">Edit</button>
        </div>
    </body>
</html>
            

