var request = require("request");
var bookingType='O';
var origin='MAA';
var destination='BLR';
var travelDate='12/26/2019';
var classType='ECONOMY';
var airlineCode='';
var adultCount=1;
var childCount=0;
var infantCount=0;
var residentOfIndia=1;
var options = { method: 'POST',
  url: 'https://cyrusrecharge.in/api/CyrusFlightServices.aspx',
  
  formData: 
   { MerchantID: 'AP164777',
     MerchantKey: '9FE9BEC5FA',
     MethodName: 'GetAvailability',
     InputParameter: '{\n"AvailabilityInput": {\n"BookingType": "'+bookingType+'",\n"JourneyDetails": [{\n"Origin": "'+origin+'",\n"Destination": "'+destination+'",\n"TravelDate": "'+travelDate+'"\n}],\n"ClassType": "'+classType+'",\n"AirlineCode": "'+airlineCode+'",\n"AdultCount":"'+adultCount+'",\n"ChildCount":"'+childCount+'",\n"InfantCount":"'+infantCount+'",\n"ResidentofIndia": "'+residentOfIndia+'",\n"Optional1": "0",\n"Optional2": "0",\n"Optional3": "0"\n}\n}\n',
     Format: 'JSON' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  console.log(response);
  //console.log(bookingType);
  console.log(body);
});