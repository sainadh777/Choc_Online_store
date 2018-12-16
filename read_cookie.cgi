#!/usr/bin/perl  

use CGI;
use DBI;
use File::Path;

$q = new CGI;

print "Content-type: text/html\n\n";
print <<ENDHTML;
<head>
	<title>Bertha's Deluxe Chocolates</title>
	        <meta http-equiv="content-type" content="text/html;charset=utf-8" />
		        <link rel="stylesheet" type="text/css"  href="http://jadran.sdsu.edu/~jadrn062/proj4/proj4.css" />
                <link rel="stylesheet" type="text/css" href="jquery-ui-1.10.2.custom/css/custom-theme/jquery-ui-1.10.2.custom.min.css" /> 
				
                          <script type="text/javascript" src="/jquery/jquery.js"></script>
                          <script type="text/javascript" src="jquery-ui-1.10.2.custom/js/jquery-ui-1.10.2.custom.min.js"></script>  
                          <script type="text/javascript" src="ajax_get_lib.js"></script>
                          <script type="text/javascript" src="ajax_populate_page.js"></script>
                          <script type="text/javascript" src="shopping_cart.js"></script>
</head>

<body>
<div id="pages" class="center"> 
<h1>Bertha's Deluxe Chocolates</h1>
		    <a href="index.html">Home</a>
			<a href="product.html">Products</a>
		    <a href="order.html">Order Online</a>	
		    <a href="AboutUs.html">About Us</a>
		    <a href="Contact.html">Contact</a>
</div>
<div id="choclate_list">
<div id="c_page">
<h1>Confirmation Page</h1>        
ENDHTML

sub getDate() {
	($second, $minute, $hour, $dayofmonth, $month, $yearoffset, $dayofweek, $dayofyear, $daylightsavings) = localtime();
	$month += 1;
	$year = 1900 + $yearoffset;
	$date = "$year-$month-$dayofmonth";

	return $date;
}

sub getOrderDetails() {
    foreach $key ($q->param) {
    	if ($key =~ /SKU/) {
    	foreach $value ($q->param($key)) {
	   		if ($value ne "") {	   
				push(@skuArray, $value);	   	
	    	}
        }
	}
	
	if ($key =~ /Quantity/) {
    	foreach $value ($q->param($key)) {
	   		push(@qtyArray, $value);
        }
	}
	
	if($key =~ /Price/) {
		foreach $value ($q->param($key)) {
			push(@costArray, $value);
		}
	}
	
	if ($key =~ /Tax/) {
	   $Tax = $q->param($key);	
	}
	
    }
}

sub   getCustomerDetails() {
   
   	foreach $key ($q->param) {
	
	if ($key =~ /firstname/) {
	   $FirstName = $q->param($key);	
	}
	if ($key =~ /lastname/) {
	   $LastName = $q->param($key);	
	}
	if ($key =~ /email/) {
    	$Email = $q->param($key);	
    }
    if ($key =~ /area_phone/) {
    	$aphone = $q->param($key);	
    }
    if ($key =~ /prefix_phone/) {
    	$prephone = $q->param($key);	
    }
    if ($key =~ /phone/) {
    	$phone = $q->param($key);	
    } 
    if ($key =~ /ship_address/) {
	   $Address = $q->param($key);	
	}
	if ($key =~ /ship_city/) {
	   $City = $q->param($key);	
	}
	if ($key =~ /ship_state/) {
	   $State = $q->param($key);	
	}
	if ($key =~ /ship_zip/) {
	   $Zip = $q->param($key);	
	}
   }
}

sub Confirmation() {   
    if (@skuArray) {
    print "<div id='c_page'><h2><center>Thank You, For Shopping with us<br>Your Order is Placedc,deliverd in 2-3 business days</center></h2>";
    print "<h2><center>$FirstName&nbsp;$LastName</center></h2>";
	my $date = &getDate();
	print "<table class='c_table'>";
	print "<tr><td colspan='4'><b>Order Details </b>(Date: $date)</td></tr><tr>";
	print "<th>SKU</th><th>Quantity</th><th>Price</th>";
    print "</tr> ";  	
    for($count = 0; $count < @skuArray; $count++) {
    	print "<tr>";
    	print "<td> $skuArray[$count] </td>";
		print "<td><center> $qtyArray[$count] </center></td>";
		print "<td>\$$costArray[$count] </td>";
		print "</tr>";    	    
    }

    print "<tr><th colspan='2'>Estimated Tax: &nbsp;\$$Tax &nbsp;&nbsp;&nbsp;&nbsp; Shipping Fees: &nbsp;\$2</th>";
 	
 	print "<th colspan='2'>Total Amount:  \$$Total</th></tr>";	
	
	print "<tr></tr>";
	print "<tr><th Shipment Address</th></tr>";
	print "<tr><td colspan='4'><b>Address:</b> &nbsp; $Address ,&nbsp;</td></tr>";
	print "<tr><td colspan='4'>&emsp;&emsp;&emsp;&emsp;&emsp;$City, $State - $Zip</td></tr>";
	print "<tr><td colspan='2'><b>Email:</b>&nbsp; $Email</td><td colspan='2'></td></tr>";
	print "</table></div>";
    }
    
}
&getOrderDetails();
&getCustomerDetails();
&Confirmation();





my $host = "opatija.sdsu.edu";
my $port = "3306";
my $database = "jadrn074";
my $username = "jadrn074";
my $password = "power";
my $database_source = "dbi:mysql:$database:$host:$port";


my $dbh = DBI->connect($database_source, $username, $password) 
or die 'Cannot connect to db';
#send a blank cookie.  You must insert this into the header before
#printing anything.  Also, using the CGI module makes printing
#content-type: text/html redundant.

if (@skuArray) {
	for(my $count = 0; $count < @skuArray; $count++) {
	$query = $dbh->prepare("INSERT INTO orders(orderdate,sku,quantity,retail) VALUES
    ('$date','$skuArray[$count]','$qtyArray[$count]','$costArray[$count]')"); 
	$query->execute();
	}
	$query->finish();
}

$dbh->disconnect();   


undef @skuArray;



print "</div>";
print "</div>";
print "</body>";
print "</html>";