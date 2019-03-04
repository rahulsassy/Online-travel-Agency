<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ page import="java.util.List" %>
<%@ page import="com.flyhot.www.*" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>get availability</title>
</head>
<body>
<%

String bookingType=request.getParameter("booking type");
String clasType=request.getParameter("class type");
String adultCount=request.getParameter("adult count");
String childCount=request.getParameter("child count");
String infantCount=request.getParameter("infant count");
String residentOfIndia=request.getParameter("resident of india");
String origin=request.getParameter("origin");
String destination=request.getParameter("destination");

getAvailability ga = new getAvailability();
//System.out.println("Calling get flight details method");
 ga.getFlightDetails();

//ga.getFlightDetails(bookingType,clasType,adultCount,childCount,infantCount,residentOfIndia,origin,destination);
%>
</body>
</html>