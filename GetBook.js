var request = require("request");
var UserTrackId='RMQZR97093999986967980956973181876542216';
var Title='Mr';
var Name='Saurav raj';
var Address='siva sai catering doctors layout banglore';
var City='Banglore';
var CountryId='91';
var ContactNumber='7204373077';
var EmailId='raj.saurav.raj@gmail.com';
var PinCode='560100';
var SpecialRemarks='';
var NotifyByMail=1;
var NotifyBySMS=1;
var AdultCount=1;
var ChildCount=0;
var InfantCount=0;
var BookingType='O';
var TotalAmount=2675;
var FrequentFlyerRequest=null;
var SpecialServiceRequest=null;
var FSCMealsRequest=null;
var AirlineCode='SG';
var CurrencyCode='INR';
var Amount=2675;
var TourCode='';
var PassengerType='ADULT';
var Title='Mr';
var FirstName='Saurav';
var LastName='raj';
var Gender='M';
var Age=24;
var DateofBirth='09 01 1993';
var IdentityProofId='';
var IdentityProofNumber='';
var FlightId=11;
var ClassCode='WCFWCFSPLRS';
var SpecialServiceCode='';
var FrequentFlyerId='';
var FrequentFlyerNumber='';
var MealCode='VGMO';
var SeatPreferId='';
var SupplierId='0';
var LCCBaggageRequest=null;
var LCCMealsRequest=null;
var OtherSSRRequest=null;
var SeatRequest=null;



var options = { method: 'POST',
  url: 'https://cyrusrecharge.in/api/CyrusFlightServices.aspx',
 
  formData: 
   { MerchantID: 'AP164777',
     MerchantKey: '9FE9BEC5FA',
     MethodName: 'GetBook',
     InputParameter: '{\n"UserTrackId": "'+UserTrackId+'",\n"BookInput": {\n"CustomerDetails": {\n"Title": "'+Title+'",\n"Name": "'+Name+'",\n"Address": "'+Address+'",\n"City": "'+City+'",\n"CountryId": "'+CountryId+'",\n"ContactNumber": "'+ContactNumber+'",\n"EmailId": "'+EmailId+'",\n"PinCode": "'+PinCode+'"\n},\n"SpecialRemarks": "'+SpecialRemarks+'",\n"NotifyByMail":"'+NotifyByMail+'",\n"NotifyBySMS":"'+NotifyBySMS+'",\n"AdultCount": "'+AdultCount+'",\n"ChildCount":"'+ChildCount+'",\n"InfantCount":"'+InfantCount+'",\n"BookingType": "'+BookingType+'",\n"TotalAmount": "'+TotalAmount+'",\n"FrequentFlyerRequest": "'+FrequentFlyerRequest+'",\n"SpecialServiceRequest": "'+SpecialServiceRequest+'",\n"FSCMealsRequest": "'+FSCMealsRequest+'",\n"FlightBookingDetails": [\n{\n"AirlineCode": "'+AirlineCode+'",\n"PaymentDetails": {\n"CurrencyCode": "'+CurrencyCode+'",\n"Amount": "'+Amount+'"\n},\n"TourCode": "'+TourCode+'",\n"PassengerDetails": [\n{\n"PassengerType": "'+PassengerType+'",\n"Title": "'+Title+'",\n"FirstName": "'+FirstName+'",\n"LastName": "'+LastName+'",\n"Gender": "'+Gender+'",\n"Age": "'+Age+'",\n"DateofBirth": "'+DateofBirth+'",\n"IdentityProofId": "'+IdentityProofId+'",\n"IdentityProofNumber": "'+IdentityProofNumber+'",\n"BookingSegments": [\n{\n"FlightId": "'+FlightId+'",\n"ClassCode": "'+ClassCode+'",\n"SpecialServiceCode": "'+SpecialServiceCode+'",\n"FrequentFlyerId": "'+FrequentFlyerId+'",\n"FrequentFlyerNumber": "'+FrequentFlyerNumber+'",\n"MealCode": "'+MealCode+'",\n"SeatPreferId": "'+SeatPreferId+'",\n"SupplierId": "'+SupplierId+'"\n}\n],\n"LCCBaggageRequest": "'+LCCBaggageRequest+'",\n"LCCMealsRequest": "'+LCCMealsRequest+'",\n"OtherSSRRequest ": "'+OtherSSRRequest+'",\n"SeatRequest": "'+SeatRequest+'"\n}\n]\n}\n]\n}\n}',
     Format: 'Json' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
