function calcBill(){
const calls = parseInt(document.getElementById("calls").value)
const sms = parseInt(document.getElementById("sms").value)
let callCharges;
let smsCharges;
if (calls<=50)
{
callCharges= 0.5*50
}
else if (calls>50 && calls <=150) {
  callCharges = 0.5*50 + ((calls-50)*0.70)
}
else if (calls>150 &&  calls<=300) {
callCharges = 0.5*50 + 0.7*100+(calls-150)* 0.85
}
else{
  callCharges = (0.5*50) + (0.7*100)+ (0.85*150) +(calls-300)*0.95
}
if (sms<=50)
{
smsCharges=0
}
else if (sms>50 &&  sms<=200) {
  smsCharges = (sms-50)*0.25
}
else if (sms>200 &&  sms<=400) {
 smsCharges = (150*0.25)+ (sms-200)*0.40
}
else{
  smsCharges = ((0*50)+(150*0.25)+(200*0.40)+((sms-400)*0.45))
}

let totalBill = callCharges+smsCharges

alert("Charges for calls " + callCharges +"/-   "+
       "Charges for sms " + smsCharges +"/-   "+
       "Your bill is " + totalBill +"/-   ")

}
