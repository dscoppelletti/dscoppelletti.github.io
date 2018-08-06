(function(global) {
    var init = function() {    
        var $ = jQuery;

        // setCookie:
        // Imposta il valore di un cookie.
        //
        // Parametri:
        // strName - Nome del cookie;
        // strValue - Valore del cookie;
        // dateExpire - Data di scadenza del cookie;
        // strDomain - Dominio che consente di condividere il cookie tra
        // le pagine di un dominio costituito da piu' server;
        // strPath - Percorso che consente di condividere il cookie con
        // altre pagine dello stesso dominio;
        // blnSecure - Specifica che il cookie puo' essere acceduto solo da
        // un ambiente sicuro.
        var setCookie = function(strName, strValue, dateExpire, strDomain,
            strPath, blnSecure) {
	        if (blnSecure == null) {
	        	blnSecure = false;
	        }

	        document.cookie = strName + "=" + escape(strValue) +
	        	((dateExpire == null) ? "" : ("; expires=" +
                    dateExpire.toUTCString())) +
	        	((strDomain == null) ? "" : ("; domain=" + strDomain)) +
	        	((strPath == null) ? "" : ("; path=" + strPath)) +
	        	((blnSecure == true) ? "; secure" : "");
        };

        // getCookieValue:
        // Utilizzata internamente da getCookie.
        var getCookieValue = function(nOffset) {
        	var nEnd = document.cookie.indexOf(";", nOffset);
    	    if (nEnd == -1) {
    	    	nEnd = document.cookie.length;
    	    }

    	    var strRet = unescape(document.cookie.substring(nOffset, nEnd));
    	    return strRet;
        };

        // getCookie:
        // Acquisisce il valore di un cookie.
        //
        // Parametri:
        // strName - Nome del cookie.
        //
        // Valore di ritorno:
        // Valore del cookie.
        var getCookie = function(strName) {
    	    var strArg = strName + "=";
        	var nArgLen = strArg.length;
    	    var nCookieLen = document.cookie.length;
        	var i = 0;
    	    var j = 0;

        	while (i < nCookieLen) {
        		j = i + nArgLen;
        		if (document.cookie.substring(i, j) == strArg) {
        			return getCookieValue(j);
        		}
        		i = document.cookie.indexOf(" ", i) + 1;
        		if (i == 0) {
        			break;
        		}
        	}
    
        	return null;
        };
    
        // deleteCookie:
        // Cancella un cookie.
        //
        // Parametri:
        // strName - Nome del cookie;
        // strDomain - Dominio che consente di condividere il cookie tra
        // le pagine di un dominio costituito da piu' server;
        // strPath - Percorso che consente di condividere il cookie con
        // altre pagine dello stesso dominio.
        var deleteCookie = function(strName, strDomain, strPath) {
        	if (getCookie(strName) == null) {
    	    	return;
    	    }

    	    var dateExpire = new Date(1970, 0, 1, 0, 0, 1);
    	    document.cookie = strName + "=" +
    	    	"; expires=" + dateExpire.toUTCString() +
    	    	((strDomain == null) ? "" : ("; domain=" + strDomain)) +
    	    	((strPath == null) ? "" : ("; path=" + strPath));
        };

        // testCookie:
        // Verifica il corretto funzionamento dei cookie.
        //
        // Valore di ritorno:
        // true = I cookie funzionano correttamente;
        // false = I cookie non funzionano correttamente.
        var testCookie = function() {
    	    // Forse la proprieta' navigator.cookieEnabled farebbe al caso mio,
    	    // ma preferisco limitare l'utilizzo di funzioni che potrebbero
            // essere supportate solo da Internet Explorer:
        	// Per verificare se i cookie funzionano correttamente, in fondo,
            // basta provare ad impostarne uno e poi a rileggerlo.
        	setCookie("testCookie", "testValue", null, null, null, false);
    	    var strValue = getCookie("testCookie");
        	if (strValue == "testValue") {
                return true;
	        }   

    	    return false;
        };

        var state = 0;
        if (testCookie()) {
            state = 1;
            var text = getCookie("qotd");
            if (text) {
                state = 2;
                $("#idQOTD").html(text);
            }
        }

        return { 
            state : state,
            setCookie : setCookie
        };
    };
    
    var ext = null;
    if (global.it) {
        ext = global.it;
        if (typeof ext !== "object") {
            throw new Error("Cannot add it.scoppelletti.qotd JavaScript " +
                    "to already existing global object 'it' of type '" +
                    typeof ext + "'.");
        }				
    } else {
        ext = { };
    }		

    ext.scoppelletti = {
            qotd : init()
    };

    global.it = ext;
})(window);

