var request = require("request");
var UserTrackId ='RMQZR97093999986967980956973181876542216';
var FlightId=11;
var ClassCode='WCFWCFSPLRS';
var AirlineCode='SG';
var ETicketFlag=1;
var BasicAmount=2139;
var SupplierId='0';
var GSTNumber='09ABVPU9499F1ZB';
var EMailId='adilgzp0005@gmail.com';
var CompanyName='FLYHOT PRIVATE LIMITED COMPANY';
var ContactNumber='7676527844';
var Address='nuruddinpura satti masjid ghazipur uttar pradesh 233001';
var FirstName='Adil';
var LastName='Usmani';





var options = { method: 'POST',
  url: 'https://cyrusrecharge.in/api/CyrusFlightServices.aspx',
  formData: 
   { MerchantID: 'AP164777',
     MerchantKey: '9FE9BEC5FA',
     MethodName: 'GetTax',
     InputParameter: '{\n"UserTrackId": "'+UserTrackId+'",\n"TaxInput": {\n"TaxReqFlightSegments": [\n{\n"FlightId": "'+FlightId+'",\n"ClassCode": "'+ClassCode+'",\n"AirlineCode": "'+AirlineCode+'",\n"ETicketFlag":"'+ETicketFlag+'",\n"BasicAmount":"'+BasicAmount+'",\n"SupplierId": "'+SupplierId+'"\n}\n],\n"GSTDetails": {\n"GSTNumber": "'+GSTNumber+'",\n"EMailId": "'+EMailId+'",\n"CompanyName": "'+CompanyName+'",\n"ContactNumber": "'+ContactNumber+'",\n"Address": "'+Address+'",\n"FirstName": "'+FirstName+'",\n"LastName": "'+LastName+'"\n}\n}\n}',
     Format: 'Json' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
