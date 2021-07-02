/* lányege csak annyi, ahol megtalálja a "webshoplink" class-ot az oldal betöltődés után, ott ha nincs ráteszi, ha van lecseréli a linket. */

$(document).ready(function(){
	'use strict';
    $.each($(".webshoplink"), function(){//class-ra kéne rakni!!
    var url = "http://essiestolmar.bigcartel.com";
    $(this).attr("href", url);
    
    });
});
//**ez kellhet hozzá, de a htmlben kell feltüntetni: <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>


/* na ez meg majd azokhoz a linkekehez kell, amik pontosan egy adott productra mutatnak.
 mondjuk: http://essiestolmar.bigcartel.com/product/priestess-of-the-northern-star
itt az az elj'r's k0vetkezik, hogy az <a> tagek közt szintén kidobom a href-et, aztán újra létrehozom de default webshop linkjéhez
hozzáfüzöm a produktum nevét.. azt pedig a linkből vesszük ki. Ez is nyilván változik/hat a költözés során, után, 
de ha itt iss egységet akarunk akkor nekünk kell újra létrehozni a linket és rárakni.*/

$(document).ready(function(){
    $.each($(".webshoplinkdirect"),function(){ 
        var oldUrl = $(this).attr("href"); // Get current url
        var oldUrlEnd = oldUrl.substr(oldUrl.lastIndexOf('/')+1); 
        var newUrl = "http://essiestolmar.bigcartel.com"; // az uj url-re meg majd akkor itt cseréld le
        if (oldUrlEnd) {
            newUrl = newUrl.concat("/product/").concat(oldUrlEnd);
        }
        $(this).attr("href", newUrl); // Set herf value
    });
});

