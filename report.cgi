use CGI;
use DBI;
use File::Path;

print "Content-type: text/html\n\n";
print <<ENDHTML;
<html>
<head>
	<title>Berthas Deluxe Chocolates<\/title>
	 <meta http-equiv="content-type" content="text/html;charset=utf-8"\/>
	 <script type="text/javascript" src="/jquery/jquery.js" ><\/script>
	 <link type="text/css" rel="stylesheet" href="/~jadrn074/proj4/project4.css"/>
     <script type="text/javascript" src="ajax_get_lib.js"><\/script>
	 <script type="text/javascript" src="ajax_populate_page.js"></script>
     <script type="text/javascript" src="shopping_cart.js"><\/script>
     
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
ENDHTML

my $host = "opatija.sdsu.edu";
my $port = "3306";
my $database = "jadrn074";
my $username = "jadrn074";
my $password = "power";
my $database_source = "dbi:mysql:$database:$host:$port";
my $query;
	
my $dbh = DBI->connect($database_source, $username, $password) 
or die 'Cannot connect to db';
print "<h2>Sales Report</h2>";
my $sql = select sku,quantity ,retail from orders group by sku;   
my $sth = $dbh->prepare($sql);         
$sth->execute();                        
my @row;
print "<table border='1' class =\"table_report\">\n";
print "<tr><th>SKU ID</th><th>Number of Units Sold</th><th>Profit</th></tr>";
while (@row = $sth->fetchrow_array) {  
     print "<tr><td>$row[0]</td><td>$row[1]</td><td>$row[2]</td></tr>\n";
}
print "</table>\n";


$dbh->disconnect(); 
print "</div>";
print "</body>";
print "</html>";