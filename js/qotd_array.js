(function() {
    if (it.scoppelletti.qotd.state != 1) {
        return;
    }

    var $ = jQuery;

    var qotd_array = [
        "<cite>La ricchezza non &egrave; per tutti perch&eacute; si basa sulla differenza, e io voglio essere molto differente.</cite>",
        "<cite>La ridistribuzione del reddito &egrave; un furto.</cite>",
        "<cite>Preferisco l&rsquo;egoismo sociale che l&rsquo;invidia sociale.</cite>",
        "<cite>&Egrave; pi&ugrave; facile parlare di tolleranza (da parte degli altri) che di educazione (da parte propria).</cite>",
        "<cite>Alle volte la democrazia &egrave; solo l&rsquo;unica strategia di guerra che assicura la vittoria con la semplice preponderanza numerica.</cite>",
        "<cite>Chi nasce &egrave; bello, chi si sposa &egrave; buono e chi muore &egrave; santo.</cite>",
        "<cite>Chi vuol esser lieto, sia: di doman non c&rsquo;&egrave; certezza.</cite> [&ldquo;Trionfo di Bacco e Arianna&rdquo;, Lorenzo De&acute; Medici, 1490]",
        "<cite>Si sa che la gente da buoni consigli se non pu&ograve; pi&ugrave; dare cattivo esempio.</cite> [&ldquo;Bocca di Rosa&rdquo;, Fabrizio De Andre&acute;, 1967]",
        "<cite>Quello che io so &egrave; che poich&eacute; tu sei nato diverso l&rsquo;uomo ti temer&agrave;, ti scaccer&agrave; dovunque.</cite> [&ldquo;Highlander, L&rsquo;ultimo immortale&rdquo;, Russell Mulcahy, 1986]",
        "<cite>Il nostro &egrave; un mondo terribile: un mondo di tigri assopite e di draghi in agguato, un mondo pieno di corruzione.</cite> [&ldquo;La Trigre e il Dragone&rdquo;, Ang Lee, 2001]",
        "<cite>E guidare come un pazzo a fari spenti nella notte per vedere se &egrave; poi cos&igrave; difficile morire.</cite> [&ldquo;Emozioni&rdquo;, Mogol-Battisti, 1970]",
        "<cite>Ora dicono, fosse un poeta e che sapesse parlare d&rsquo;amore<br />Cosa importa se in fondo uno muore e non pu&ograve; pi&ugrave; parlare di te.</cite><br />[&ldquo;Il poeta&rdquo;, Bruno Lauzi, 1963]",
        "<cite>Egoista, certo, perch&eacute; no?<br />perch&eacute; non dovrei esserlo?<br />Quando c&rsquo;ho il mal di stomaco con chi potrei condividerlo?</cite><br />[&ldquo;Cosa succede In citt&agrave;&rdquo;, Vasco Rossi, 1985]",
        "<cite>C&rsquo;erano facce, tutte sconosciute; c&rsquo;erano voci che chiamavano, ridendo o piangendo. Il tempo si allung&ograve;, le ore si trasformarono in giorni, i giorni in anni, e Walker rimaneva immutato attraverso tutto questo, lasciato sempre da parte, eternamente solo.</cite> [&ldquo;I Talismani di Shannara&rdquo;, Terry Brooks, 1993]",
        "<cite>&laquo;ma perch&eacute; non vai dal medico?&raquo;<br />e che ci vado a fare?<br />Non voglio mica smettere di bere e di fumare.</cite><br />[&ldquo;Un sabato italiano&rdquo;, Sergio Caputo, 1983]",
        "<cite>&Egrave; terribile essere imprigionati qui mentre fuori di me si estende un&rsquo;infinita libert&agrave;.<br />&Egrave; diabolico, non posso sopportarlo.<br />Beata te, farfalla, goditi pure la tua libert&agrave;.<br />Ho sempre ammirato le cose grandi e potenti, ma adesso purtroppo devo invidiare anche le tue piccole dimensioni.</cite><br />[&ldquo;Il Grande Mazinga, ep. 46, Coraggio oltre la morte&rdquo;, Go Nagai, Toei Doga, Dynamic Planning, Asahi Tsushinsha, 1975]",
        "<cite>Piccolo fiore dove vai?<br />Perch&eacute; vai in giro per il mondo?<br />Se ti fermassi solo un momento<br />ti accorgeresti che c&rsquo;&egrave; qualcuno&hellip;</cite><br />[&ldquo;Piccolo fiore dove vai?&rdquo;, Salvo Romano, 1974]",
        "<cite>Fatti non foste a viver come bruti, ma per seguir virtute e canoscenza.</cite> [&ldquo;Commedia, Inferno, canto XXVI&rdquo;, Dante Alighieri]",
        "<cite>Tu proverai s&igrave; come sa di sale lo pane altrui, e come &egrave; duro calle lo scendere e &acute;l salir per l&rsquo;altrui scale.</cite> [&ldquo;Commedia, Paradiso, canto XVII&ldquo;, Dante Alighieri]",
        "<cite>Ho scoperto che tutta l&rsquo;infelicit&agrave; degli uomini proviene da una cosa sola: dal non saper restare tranquilli in una camera.</cite> [&ldquo;Pensieri, 139&rdquo;, Blaise Pascal, 1623-1662]",
        "<cite>La vita dovrebbe essere facile, semplice, lineare, perfetta, altrimenti non ha senso vivere: se tutti la pensassero cos&igrave;, ci sarebbe molta meno gente nel mondo, ma quei pochi che resterebbero non sarebbero &ldquo;pi&ugrave; felici&rdquo; bens&igrave; semplicemente &ldquo;felici&rdquo;.</cite>",
        "<cite>La felicit&agrave; non &egrave; fare tutto ci&ograve; che si vuole, ma volere tutto ci&ograve; che si fa.</cite> [Friedrich W. Nietzsche, 1844-1900]",
        "<cite>E allora vide uno di loro strisciare verso di lui. Prese la mira e fece fuoco. Il nemico emise quel verso strano, agghiacciante, che tutti loro facevano, poi non si mosse pi&ugrave;.<br />Il verso e la vista del cadavere lo fecero rabbrividire. Molti, col passare del tempo, s&rsquo;erano abituati, non ci facevano pi&ugrave; caso; ma lui no. Erano creature troppo schifose, con solo due braccia e due gambe, quella pelle d&rsquo;un bianco nauseante, e senza squame.</cite><br />[&ldquo;Sentinella&rdquo;, Fredric W. Brown, 1954]",
        "<cite>I suoi dei, al contrario, erano semplici e comprensibili: il loro capo era Crom e viveva su una grande montagna da cui dispensava sciagure e morte. Era inutile supplicare Crom, che era un dio feroce e odiava i deboli; ma alla nascita instillava nell&rsquo;uomo il coraggio, e con il coraggio la volont&agrave; di uccidere i nemici: il che, per la mentalit&agrave; dei cimmeri, era tutto ci&ograve; che ci si pu&ograve; aspettare da un dio.</cite><br />[&ldquo;La Torre dell&rsquo;Elefante&rdquo;, Robert E. Howard, 1933]",
        "<cite>Una volpe, che attraversava il bosco per affari suoi personali, si arrest&ograve; qualche minuto ad annusare.<br />&laquo;Hobbit!&raquo;, pens&ograve;, &laquo;Incredibile! Avevo sentito dire che avvenivano cose strane in questo paese, ma trovare addirittura degli Hobbit che dormono all&rsquo;aria aperta sotto un albero! E sono in tre! C&rsquo;egrave; sotto qualcosa di molto strano&raquo;. Aveva perfettamente ragione, ma non riusc&igrave; mai a scoprire che cosa.</cite><br />[&ldquo;Il Signore degli Anelli, La Compagnia dell&rsquo;Anello&rdquo;, J.R.R. Tolkien, 1954]",
        "<cite>Si sta come d&rsquo;autunno sugli alberi le foglie</cite> [&ldquo;Soldati&rdquo;, Giuseppe Ungaretti, 1918]",
        "<cite>Controlla il conto, sei tu che lo devi pagare.</cite> [&ldquo;Lode dell&rsquo;imparare&rdquo;, Bertolt Brecht, 1933]",
        "<cite>Polvere, gran confusione, un grigio salone,<br />in quale direzione io caccer&ograve; la polvere dai miei pensieri? E quanti misteri<br />coi pochi poteri che la mia condizione mi da.</cite><br />[&ldquo;Polvere&rdquo;, Enrico Ruggeri, 1984]",
        "<cite>Credo che il mondo sia diventato troppo giovane perch&eacute; io possa capirlo.</cite>",
        "<cite>Potrei dire di aver perso la mia occasione, se solo ne avessi mai avuta una.</cite>",
        "<cite>Chi paga decide cosa suona l&rsquo;orchestra, ma non quanto sorridono i musicisti.</cite>",
        "<cite>Forse, un giorno che non verr&agrave;, in un luogo che non c&rsquo;&egrave;, noi due ci rincontreremo e saremo entrambi diversi, saremo un po&acute; pi&ugrave; uguali, ma probabilmente non ci riconosceremo.</cite>",
        "<cite>Vince chi ha ragione oppure ha ragione chi vince?</cite>",
        "<cite>Qualche volta si fa troppa confusione tra lasciare perdere perch&eacute; conveniene a tutti cos&igrave; e invece dimenticare o addirittura perdonare.</cite>",
        "<cite>Qualche volta chi accusa di sputare nel piatto dove si mangia fornisce piatti luridi.</cite>",
        "<cite>Solo la rigidit&agrave; potrebbe salvare il mondo, ed &egrave; per questo che il mondo &egrave; condannato.</cite>",
        "<cite>Scendono gi&ugrave; dal cielo candidi fiocchi di neve,<br />o forse sono i profumati petali di mille rose bianche,<br />o forse sono le delicate piume delle ali d&rsquo;angelo che hai perso quando sei caduta dal cielo per me.</cite>",
        "<cite>Con le persone non ragionevoli non si pu&ograve; ragionare; con le persone ragionevoli non ce n&rsquo;&egrave; bisogno.</cite>",
        "<cite>Quando fai qualcosa di cattivo, non c&rsquo;&egrave; gusto se non lo dici a nessuno.</cite>",
        "<cite>Il diritto non dipende dal bisogno; il dovere non dipende dalle possibilit&agrave;.</cite>",
        "<cite>Dovere e obbligo sono due concetti ben distinti.</cite>",
        "<cite>La differenza tra una carezza ed una rasoiata pu&ograve; stare tutta tra chi la da e chi la riceve.</cite>",
        "<cite>Se squoti l&rsquo;albero, cadr&agrave; qualche frutto, ma non puoi prevedere quale.</cite>",
        "<cite>Nelle societ&agrave; moderne la dittatura si manifesta anche con l&rsquo;utilizzo delle leve fiscale e tariffaria per controllare lo stile di vita della popolazione.</cite>",
        "<cite>Esiste un solo stile di vita corretto: quello di ciascuno.</cite>",
        "<cite>La forza di volont&agrave; non esiste: &egrave; solo un&rsquo;astrazione invocata da chi vuole imporre la sua di volont&agrave; oppure i modelli stabiliti dalla comunit&agrave;.</cite>",
        "<cite>I deboli si adattano; i forti odiano.</cite>",
        "<cite>Io sono uno straniero qui: non lo so se sono nell&rsquo;epoca sbagliata, se sono nato troppo presto, se sono nato troppo tardi, oppure se sono semplicemente nato sul pianeta sbagliato.</cite>",
        "<cite>L&rsquo;uomo &egrave; debole, e l&rsquo;unico modo sensato per gestire questa debolezza &egrave; assecondarla.</cite>",
        "<cite>Avrei dovuto baciarti, ma poi avrei dovuto dirti &laquo;Mi dispiace&raquo;, e sarebbe stata un&rsquo;altra bugia.</cite>",
        "<cite>&laquo;Grazie per aver tentato, Philipe, e per aver sostenuto la verit&agrave;&raquo<br />&laquo;E invece ho fatto male: i momenti pi&ugrave; felici della vita me li ha dati la menzogna&raquo;</br /></cite>[&ldquo;Ladyhawk&rdquo;, Richard Donner, 1985]",
        "<cite>Non esistono le brutte abitudini: le abitudini sono tutte buone.</cite>",
        "<cite>Troppo cerebrale per capire<br />che si pu&ograve; star bene senza calpestare il cuore,<br />ci si passa sopra almeno due o tre volte i piedi<br />come sulle aiuole.</cite><br />[&ldquo;Giudizi universali&rdquo;, Samuele Bersani, 1997]",
        "<cite>Devi stare attento a quello che chiedi perch&eacute; potresti essere accontentato.</cite>",
        "<cite>L&rsquo;abbondanza di bassa manovalanza a basso costo disincentiva qualsiasi tipo di crescita: tecnologica, economica, scientifica, culturale, sociale.</cite>",
        "<cite>Laudato si&acute; mi&acute; Signore per sora nostra morte corporale, da la quale nullu homo vivente p&ograve; skappare</cite> [&ldquo;Laudes Creaturarum&rdquo;, Francesco d&rsquo;Assisi, 1224-1226]",
        "<cite>Pu&ograve; darsi che alla fine del giorno verremo puniti per la nostra gentilezza.</cite> [&ldquo;Ronin&rdquo;, John Frankenheimer, 1998]"
    ];
    
    var n = Math.floor(Math.random() * qotd_array.length);
    var text = qotd_array[n];
    $("#idQOTD").html(text);

	var dateNow = new Date();
	var dateExpire = new Date(dateNow.getTime() + 24 * 60 * 60 * 1000);
	dateExpire.setSeconds(0);
	dateExpire.setMinutes(0);
	dateExpire.setHours(0);
	it.scoppelletti.qotd.setCookie("qotd", text, dateExpire, null, null, false);
})();

