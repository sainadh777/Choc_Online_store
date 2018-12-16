/*  We load the global array proj4_data once, then use it as needed
    to retrieve product information.
    
    The Milk Chocolate handler is done the old-fashion way, with an 
    'onclick' call in the xhtml code.  The rest of the buttons have 
    handlers assigned the correct way.
    
    Alan Riggins
    CS545
    Fall 2017
*/    

var proj4_data;

$(document).ready(function() {
	var cart = new shopping_cart("jadrn074");
    proj4_data = new Array();
    $.get('/perl/jadrn074/get_products.cgi', storeData);
	updateDisplay();
	
    
	$('#milk').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Milk chocolate") {
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";            
                for(var j=0; j < proj4_data[i].length; j++)
                tmpString += proj4_data[i][j] + "<br />";
			    tmpString += "<input type='number' "+"class='qty'  placeholder='quantity' id='" + proj4_data[i][0]+"_qty' />";
                tmpString += "<input type='button' value='Add To Cart'"+
                "class='buy' id='" + proj4_data[i][0]+"' />";
                tmpString += "<span id='add'>Added to Cart</span><br />";                       
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })
    $('#dark').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Dark chocolate") {
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";            
                for(var j=0; j < proj4_data[i].length; j++)
                    tmpString += proj4_data[i][j] + "<br />";
				 tmpString += "<input type='number' "+"class='qty' size='8' placeholder='quantity' id='" + proj4_data[i][0]+"_qty' />";
                tmpString += "<input type='button' value='Add To Cart'"+
                "class='buy' id='" + proj4_data[i][0]+"' />";
                 tmpString += "<span id='add'>Added to Cart</span><br />";                
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })
        
    $('#nuts').on('click', function() {   
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Nuts and chews") {  
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";                     
                for(var j=0; j < proj4_data[i].length; j++)
                    tmpString += proj4_data[i][j] + "<br />";
				 tmpString += "<input type='number' "+"class='qty' placeholder='quantity' id='" + proj4_data[i][0]+"_qty' />";
				 tmpString += "<input type='button' value='Add To Cart'"+
                "class='buy' id='" + proj4_data[i][0]+"' />";
             tmpString += "<span id='add'>Added to Cart</span><br />";    			
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        }) 
        
    $('#brittle').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Brittles and toffies") {
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";            
                for(var j=0; j < proj4_data[i].length; j++)
                    tmpString += proj4_data[i][j] + "<br />";
			 tmpString += "<input type='number' "+"class='qty'  placeholder='quantity' id='" + proj4_data[i][0]+"_qty' />";
            tmpString += "<input type='button' value='Add To Cart'"+
                "class='buy' id='" + proj4_data[i][0]+"' />";
			 tmpString += "<span id='add'>Added to Cart</span><br />";    
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })
		
	$('#truffles').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Truffles") {
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";            
                for(var j=0; j < proj4_data[i].length; j++)
                    tmpString += proj4_data[i][j] + "<br />";
				 tmpString += "<input type='number' "+"class='qty' size='8' placeholder='quantity' id='" + proj4_data[i][0]+"_qty' />";
                tmpString += "<input type='button' value='Add To Cart'"+
                "class='buy' id='" + proj4_data[i][0]+"' />"; 
            tmpString += "<span id='add'>Added to Cart</span><br />";    			
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })
		
    $('#gifts').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Gifts") {
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";            
                for(var j=0; j < proj4_data[i].length; j++)
                    tmpString += proj4_data[i][j] + "<br />";
				 tmpString += "<input type='number' "+"class='qty'  placeholder='quantity' id='" + proj4_data[i][0]+"_qty' />";
              tmpString += "<input type='button' value='Add To Cart'"+
                "class='buy' id='" + proj4_data[i][0]+"' />";
			tmpString += "<span id='add'>Added to Cart</span><br />";    		
			
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })
    
    $('#holiday').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Holiday assortments") {
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";            
                for(var j=0; j < proj4_data[i].length; j++)
                 tmpString += proj4_data[i][j] + "<br />";
				 tmpString += "<input type='number' "+"class='qty' size='8' placeholder='quantity' id='" + proj4_data[i][0]+"_qty' />";
               tmpString += "<input type='button' value='Add To Cart'"+
                "class='buy' id='" + proj4_data[i][0]+"' />";
            tmpString += "<span id='add'>Added to Cart</span><br />";    					
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        });
    	
$(document).on('click', ".buy", function() {  
        var sku = this.id;
		var qty="#"+sku+"_qty";
		var val= $(qty).val();
		var cost;
var sku1="#"+sku+"_err";

for(var i=0; i<proj4_data.length; i++)
	if(proj4_data[i][0]==sku)
	{
		cost=Math.round((proj4_data[i][6]*val)*100.0)/100.0;
		
	}
	
if(!isNaN(val) && !(val==""))
{
	   
        cart.add(sku,val,cost);
		
        $(this).next().fadeIn(50).fadeOut(2000);
		$('#count').text(cart.size());
        $(sku1).text(" ");

}
else
{
        $(sku1).text("enter valid Quantity");
}
	        });         
        $('#cart').on('click', function() {
       updateDisplay();

        })  
            	
    
              

   function updateDisplay() {
        var cartArray = cart.getCartArray();
		var total=0;
        var toWrite = "<table>";
        toWrite += "<tr><th>SKU</th><th>Quantity</th><th>Price</th></tr>";
 

        for(i=0; i < cartArray.length; i++) {

            toWrite += "<tr>";
           
		toWrite += "<td>"+"<input type='text' value='"+cartArray[i][0]+"' id='editqty' readonly/> </td>";
        toWrite += "<td>"+"<input type='number' value='"+cartArray[i][1]+"' id='" +cartArray[i][0]+"_qty' class='quantity' /> </td>";
        toWrite += "<td>"+"<input type='text' value='"+cartArray[i][2]+"' /> </td>";			
	 toWrite+="<td>"+"<input type='button' id='"+cartArray[i][0]+"'  value='Delete item' class='delete'/>"+"</td>"; 
	toWrite+="<td>"+"<input type='button' id='"+cartArray[i][0]+"'  value='Update item' class='update'/>" +"</td>";          
	 toWrite += "</tr>";
	 total =parseFloat(total)+parseFloat(cartArray[i][2]);

		}      
tot=((total*8)/100);
subtot=tot+total+2;
toWrite += "<tr><td></td><td>Cart Total </td><td>"+total+"</td></tr><tr><td></td><td>Shipping Fees </td><td>$2</td></tr> <tr><td></td><td>Tax (8%) </td><td>"+tot+"</td></tr><tr><td></td><td>Total Amount </td><td>"+subtot+"</td></tr></table>"; 
toWrite += "<input type='button' id='ordernow' value='Proceed to Checkout'  class='ordernow' />"

var hand = document.getElementById('content');
        hand.innerHTML = toWrite;
}
$(document).on('click', ".update", function()  {
	 var sku = this.id;
		var qty="#"+sku+"_qty";
	var cost;
		var val= $(qty).val();
var sku1="#"+sku+"_err";
for(var i=0; i<proj4_data.length; i++)
	if(proj4_data[i][0]==sku)
	{
		cost=Math.round((proj4_data[i][6]*val)*100.0)/100.0;
		
	}
if(!isNaN(val) && !(val==""))
{
        cart.setQuantity(sku,val,cost);
		
       $('#count').text(cart.size());
   }
else
{
       
 $(sku1).val("enter valid");
}

 updateDisplay();     

  })  
        $(document).on('click', ".delete", function()  {
	var sku = this.id;
       	cart.delete(sku);
	updateDisplay();
		})
		
		
$( "#dialog-modal" ).dialog({
            height: 600,
            width: 600,
            modal: true,
            autoOpen: false
    })
      
	$('#ordernow').on('click', function($e) {       
            $("#dialog-modal").dialog('open');
     });
     
$('#copy').change(function(){
	if(document.getElementById('copy').checked)
	{
    document.getElementById('shipping').style.display = "none";
	document.getElementById('ship_fname').value= document.getElementById('fname').value
	document.getElementById('ship_lname').value=document.getElementById('lname').value
	document.getElementById('ship_address').value=document.getElementById('address').value
	document.getElementById('ship_city').value=document.getElementById('city').value
	document.getElementById('ship_state').value=document.getElementById('state').value
	document.getElementById('ship_zip').value=document.getElementById('zip').value
	document.getElementById('ship_area_phone').value=document.getElementById('area_phone').value   
    document.getElementById('ship_prefix_phone').value=document.getElementById('prefix_phone').value   
    document.getElementById('ship_phone').value=document.getElementById('phone').value   	
	}   
else
 document.getElementById('shipping').style.display = "block";

 })
                      	
		
		 });

function storeData(response) {
    var tmpArray = explodeArray(response,';');
    for(var i=0; i < tmpArray.length; i++) {
        innerArray = explodeArray(tmpArray[i],'|');
        proj4_data[i] = innerArray;
        }
    }
 
// from http://www.webmasterworld.com/forum91/3262.htm            
function explodeArray(item,delimiter) {
tempArray=new Array(1);
var Count=0;
var tempString=new String(item);

while (tempString.indexOf(delimiter)>0) {
tempArray[Count]=tempString.substr(0,tempString.indexOf(delimiter));
tempString=tempString.substr(tempString.indexOf(delimiter)+1,tempString.length-tempString.indexOf(delimiter)+1);
Count=Count+1
}

tempArray[Count]=tempString;
return tempArray;

}     

/////////////////////////////////////////////////////////////////////////

function isEmpty(fieldValue) {
        return $.trim(fieldValue).length == 0;    
        } 
        
    function isValidState(state) {                                
        var stateList = new Array("AK","AL","AR","AZ","CA","CO","CT","DC",
        "DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA",
        "MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ",
        "NM","NV","NY","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX",
        "UT","VA","VT","WA","WI","WV","WY");
        for(var i=0; i < stateList.length; i++) 
            if(stateList[i] == $.trim(state))
                return true;
        return false;
        }  
	
	
    // copied from stackoverflow.com, not checked or validated for correctness.        
    function isValidEmail(emailAddress) {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return pattern.test(emailAddress);
        }    

$(document).ready( function() {		
var letspace = /^[A-Za-z]+[A-Za-z\s]*$/;
	var numbers = /^([0-9]{5})$/; 
	
    var errorStatusHandle = $('#message_line');
    var elementHandle = new Array(22);
    elementHandle[0] = $('[name="fname"]');
	elementHandle[1] = $('[name="lname"]');
	elementHandle[2] = $('[name="address"]');
	elementHandle[3] = $('[name="city"]');
    elementHandle[4] = $('[name="state"]');
    elementHandle[5] = $('[name="zip"]');
    elementHandle[6] = $('[name="area_phone"]');
    elementHandle[7] = $('[name="prefix_phone"]');
    elementHandle[8] = $('[name="phone"]');
    elementHandle[9] = $('[name="email"]');
	
	elementHandle[10] = $('[name="ship_fname"]');
	elementHandle[11] = $('[name="ship_lname"]');
	elementHandle[12] = $('[name="ship_address"]');
	elementHandle[13] = $('[name="ship_city"]');
    elementHandle[14] = $('[name="ship_state"]');
    elementHandle[15] = $('[name="ship_zip"]');
    elementHandle[16] = $('[name="ship_area_phone"]');
    elementHandle[17] = $('[name="ship_prefix_phone"]');
    elementHandle[18] = $('[name="ship_phone"]');
	elementHandle[19] = $('[name="card"]');
	elementHandle[20] = $('[name="month"]');
	elementHandle[21] = $('[name="year"]');
	
	
	
	function isValidData() {
        if(isEmpty(elementHandle[0].val())) {
            elementHandle[0].addClass("error");
            errorStatusHandle.text("Please enter your first name");
            elementHandle[0].focus();
            return false;
            }
			
			
		if(isEmpty(elementHandle[1].val())) {
            elementHandle[1].addClass("error");
            errorStatusHandle.text("Please enter your Last name");
            elementHandle[1].focus();
            return false;
            }	
			
		if(isEmpty(elementHandle[2].val())) {
            elementHandle[2].addClass("error");
            errorStatusHandle.text("Please enter  your address");
            elementHandle[2].focus();            
            return false;
            }
			
			
        if(isEmpty(elementHandle[3].val())) {
            elementHandle[3].addClass("error");
            errorStatusHandle.text("Please enter your city");
            elementHandle[3].focus();            
            return false;
            }
			
			
        if(isEmpty(elementHandle[4].val())) {
            elementHandle[4].addClass("error");
            errorStatusHandle.text("Please enter state");
            elementHandle[4].focus();            
            return false;
            }
        if(!isValidState(elementHandle[4].val())) {
            elementHandle[4].addClass("error");
            errorStatusHandle.text("The state appears to be invalid, "+
            "Please use two letter state abbreviation");
            elementHandle[4].focus();            
            return false;
            }
			
			
        if(isEmpty(elementHandle[5].val())) {
            elementHandle[5].addClass("error");
            errorStatusHandle.text("Please enter your zip code");
            elementHandle[5].focus();            
            return false;
            }
        if(!$.isNumeric(elementHandle[5].val())) {
            elementHandle[5].addClass("error");
            errorStatusHandle.text("The zip code appears to be invalid, "+
            "numbers only please. ");
            elementHandle[5].focus();            
            return false;
            }
        if(elementHandle[5].val().length != 5) {
            elementHandle[5].addClass("error");
            errorStatusHandle.text("The zip code must have exactly five digits")
            elementHandle[5].focus();            
            return false;
            }
        
		
		
        if(isEmpty(elementHandle[6].val())) {
            elementHandle[6].addClass("error");
            errorStatusHandle.text("Please enter  your area code");
            elementHandle[6].focus();            
            return false;
            }            
        if(!$.isNumeric(elementHandle[6].val())) {
            elementHandle[6].addClass("error");
            errorStatusHandle.text("The area code appears to be invalid, "+
            "numbers only please. ");
            elementHandle[6].focus();            
            return false;
            }
        if(elementHandle[6].val().length != 3) {
            elementHandle[6].addClass("error");
            errorStatusHandle.text("The area code must have exactly three digits")
            elementHandle[6].focus();            
            return false;
            }   
			
			
        if(isEmpty(elementHandle[7].val())) {
            elementHandle[7].addClass("error");
            errorStatusHandle.text("Please enter your phone number prefix");
            elementHandle[7].focus();            
            return false;
            }           
        if(!$.isNumeric(elementHandle[7].val())) {
            elementHandle[7].addClass("error");
            errorStatusHandle.text("The phone number prefix appears to be invalid, "+
            "numbers only please. ");
            elementHandle[7].focus();            
            return false;
            }
        if(elementHandle[7].val().length != 3) {
            elementHandle[7].addClass("error");
            errorStatusHandle.text("The phone number prefix must have exactly three digits")
            elementHandle[7].focus();            
            return false;
            }
			
			
        if(isEmpty(elementHandle[8].val())) {
            elementHandle[8].addClass("error");
            errorStatusHandle.text("Please enter your phone number");
            elementHandle[8].focus();            
            return false;
            }            
        if(!$.isNumeric(elementHandle[8].val())) {
            elementHandle[8].addClass("error");
            errorStatusHandle.text("The phone number appears to be invalid, "+
            "Use numbers only. ");
            elementHandle[8].focus();            
            return false;
            }
        if(elementHandle[8].val().length != 4) {
            elementHandle[8].addClass("error");
            errorStatusHandle.text("The phone number must have exactly four digits")
            elementHandle[8].focus();            
            return false;
            }  
			
			
			
		if(isEmpty(elementHandle[9].val())) {
            elementHandle[9].addClass("error");
            errorStatusHandle.text("Please enter email address");
            elementHandle[9].focus();            
            return false;
        }       	
        if(!isValidEmail(elementHandle[9].val())) {
            elementHandle[9].addClass("error");
            errorStatusHandle.text("The email address appears to be invalid");
            elementHandle[9].focus();            
            return false;
        }
		
		
		if(isEmpty(elementHandle[10].val())) {
            elementHandle[10].addClass("error");
            errorStatusHandle.text("Please enter first name");
            elementHandle[10].focus();
            return false;
        }		
			
	    if(isEmpty(elementHandle[11].val())) {
            elementHandle[11].addClass("error");
            errorStatusHandle.text("Please enter Last name");
            elementHandle[11].focus();
            return false;
        }
	
		if(isEmpty(elementHandle[12].val())) {
            elementHandle[12].addClass("error");
            errorStatusHandle.text("Please enter address");
            elementHandle[12].focus();            
            return false;
		}
        
		
		if(isEmpty(elementHandle[13].val())) {
            elementHandle[13].addClass("error");
            errorStatusHandle.text("Please enter city");
            elementHandle[13].focus();            
            return false;
        }
        
		
		if(isEmpty(elementHandle[14].val())) {
            elementHandle[14].addClass("error");
            errorStatusHandle.text("Please enter state");
            elementHandle[14].focus();            
            return false;
        }
        if(!isValidState(elementHandle[14].val())) {
            elementHandle[14].addClass("error");
            errorStatusHandle.text("The state appears to be invalid, "+
            "please use the two letter state abbreviation");
            elementHandle[14].focus();            
            return false;
		}
        
		
		if(isEmpty(elementHandle[15].val())) {
            elementHandle[15].addClass("error");
            errorStatusHandle.text("Please enter zip code");
            elementHandle[15].focus();            
            return false;
        }
        if(!$.isNumeric(elementHandle[15].val())) {
            elementHandle[15].addClass("error");
            errorStatusHandle.text("The zip code appears to be invalid, "+
            "Use numbers only. ");
            elementHandle[15].focus();            
            return false;
        }
        if(elementHandle[15].val().length != 5) {
            elementHandle[15].addClass("error");
            errorStatusHandle.text("The zip code must have exactly five digits")
            elementHandle[15].focus();            
            return false;
        }
        
		
		     
        if(isEmpty(elementHandle[16].val())) {
            elementHandle[16].addClass("error");
            errorStatusHandle.text("Please enter your area code");
            elementHandle[16].focus();            
            return false;
        }            
        if(!$.isNumeric(elementHandle[16].val())) {
            elementHandle[16].addClass("error");
            errorStatusHandle.text("The area code appears to be invalid, "+
            "Use numbers only. ");
            elementHandle[16].focus();            
            return false;
        }
        if(elementHandle[16].val().length != 3) {
            elementHandle[16].addClass("error");
            errorStatusHandle.text("The area code must have exactly three digits")
            elementHandle[16].focus();            
            return false;
        }   
        
		
		if(isEmpty(elementHandle[17].val())) {
            elementHandle[17].addClass("error");
            errorStatusHandle.text("Please enter phone number prefix");
            elementHandle[17].focus();            
            return false;
        }           
        if(!$.isNumeric(elementHandle[17].val())) {
            elementHandle[17].addClass("error");
            errorStatusHandle.text("The phone number prefix appears to be invalid, "+
            "numbers only please. ");
            elementHandle[17].focus();            
            return false;
        }
        if(elementHandle[17].val().length != 3) {
            elementHandle[17].addClass("error");
            errorStatusHandle.text("The phone number prefix must have exactly three digits")
            elementHandle[17].focus();            
            return false;
        }
		
		
        if(isEmpty(elementHandle[18].val())) {
            elementHandle[18].addClass("error");
            errorStatusHandle.text("Please enter your phone number");
            elementHandle[18].focus();            
            return false;
        }            
        if(!$.isNumeric(elementHandle[18].val())) {
            elementHandle[18].addClass("error");
            errorStatusHandle.text("The phone number appears to be invalid, "+
            "Use numbers only. ");
            elementHandle[18].focus();            
            return false;
        }
        if(elementHandle[18].val().length != 4) {
            elementHandle[18].addClass("error");
            errorStatusHandle.text("The phone number must have exactly four digits")
            elementHandle[18].focus();            
            return false;
        }
		
		if(isEmpty(elementHandle[19].val())) {
            elementHandle[19].addClass("error");
            errorStatusHandle.text("Please enter your card details");
            elementHandle[19].focus();            
            return false;
        }
        if(!$.isNumeric(elementHandle[19].val())) {
            elementHandle[19].addClass("error");
            errorStatusHandle.text("The card number appears to be invalid, "+
            "use numbers only. ");
            elementHandle[19].focus();            
            return false;
        }
		if(elementHandle[19].val().length != 16) {
            elementHandle[19].addClass("error");
            errorStatusHandle.text("The card number must have exactly 16 digits")
            elementHandle[19].focus();            
            return false;
        }
		
		
		
		if(isEmpty(elementHandle[20].val())) {
            elementHandle[20].addClass("error");
            errorStatusHandle.text("Please enter the expiration month");
            elementHandle[20].focus();            
            return false;
        }            
        if(!$.isNumeric(elementHandle[20].val())) {
            elementHandle[20].addClass("error");
            errorStatusHandle.text("The expiration month appears to be invalid, "+
            "numbers only please. ");
            elementHandle[20].focus();            
            return false;
        }
		
		if(elementHandle[20].val() >= 13) {
            elementHandle[20].addClass("error");
            errorStatusHandle.text("The expiration month should be less than 13")
            elementHandle[20].focus();            
            return false;
        }
		
		
		
		if(isEmpty(elementHandle[21].val())) {
            elementHandle[21].addClass("error");
            errorStatusHandle.text("Please enter the expiration year of card");
            elementHandle[21].focus();            
            return false;
        }            
        if(!$.isNumeric(elementHandle[21].val())) {
            elementHandle[21].addClass("error");
            errorStatusHandle.text("The expiration year appears to be invalid, "+
            "Use numbers only. ");
            elementHandle[21].focus();            
            return false;
        }
		if(elementHandle[21].val() <= 2017) {
            elementHandle[21].addClass("error");
            errorStatusHandle.text("The expiration year should be greater than 2017")
            elementHandle[21].focus();            
            return false;
        }
		
        return true;
    }       

	elementHandle[0].focus();
   
   
// HANDLERS
// on blur, if the user has entered valid data, the error message
// should no longer show.
    elementHandle[0].on('blur', function() {
        if(isEmpty(elementHandle[0].val()))
            return;
        $(this).removeClass("error");
        errorStatusHandle.text("");
        });
        
		elementHandle[9].on('blur', function() {
        if(isEmpty(elementHandle[9].val()))
            return;
        if(isValidEmail(elementHandle[9].val())) {
            $(this).removeClass("error");
            errorStatusHandle.text("");
            }
        });            

    elementHandle[4].on('keyup', function() {
        elementHandle[4].val(elementHandle[4].val().toUpperCase());
    });

    elementHandle[6].on('keyup', function() {
        if(elementHandle[6].val().length == 3)
            elementHandle[6].focus();
    });
            
    elementHandle[8].on('keyup', function() {
        if(elementHandle[8].val().length == 3)
            elementHandle[9].focus();
    });  

	elementHandle[14].on('keyup', function() {
		elementHandle[14].val(elementHandle[14].val().toUpperCase());
    });

    elementHandle[16].on('keyup', function() {
        if(elementHandle[16].val().length == 3)
            elementHandle[17].focus();
    });
            
    elementHandle[17].on('keyup', function() {
        if(elementHandle[17].val().length == 3)
            elementHandle[18].focus();
    });
			
	
    $('#temp').on('click', function() {
        for(var i=0; i < 22; i++)
             elementHandle[i].removeClass("error");
		errorStatusHandle.text("");
		var ret_Data = isValidData();
        if(ret_Data )
        {
			$('#order_now').submit();
		}
		else
			return false;
        });
	
    $(':reset').on('click', function() {
        for(var i=0; i < 22 ; i++)
            elementHandle[i].removeClass("error");
        errorStatusHandle.text("");
        });                                       
});