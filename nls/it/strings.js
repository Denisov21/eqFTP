define({
    "ERR_LOADING" : "Caricamento fallito :(",
    
    "SIDEPANEL_TITLE" : "eqFTP",
    "SIDEPANEL_OPENCONNMANGR" : "Apri Connection Manager",
    "SIDEPANEL_FILETREE_NAME" : "Nome",
    "SIDEPANEL_FILETREE_SIZE" : "Dim.",
    "SIDEPANEL_FILETREE_TYPE" : "Tipo",
    "SIDEPANEL_FILETREE_MODIFIED" : "Modificato",
    "SIDEPANEL_CONDISCONNECT" : "(Dis)connetti",
    "SIDEPANEL_REFRESH" : "Aggiorna",
    "SIDEPANEL_RELOADSETTINGS" : "Ricarica le impostazioni e reinserisci la password",

    "ERR_DIAG_SERVNOEXIST_TITLE" : "Il Server Non Esiste",
    "ERR_DIAG_SERVNOEXIST_CONTENT" : "Sembra che questo server non esista. <br>Controlla l'URL del server nelle impostazioni di connessione.",
    "ERR_DIAG_SERVCANTREACH_TITLE" : "Non Posso Connettermi Al Server",
    "ERR_DIAG_SERVCANTREACH_CONTENT" : "Non posso connettermi al server.<br>Forse il tuo firewall non mi permette di farlo.",
    "ERR_DIAG_AUTHORIZEERR_TITLE" : "Dati Di Autenticazione Errati",
    "ERR_DIAG_AUTHORIZEERR_CONTENT" : "Non riesco ad autorizzare l'accesso con la login e la password inseriti.<br>Ti prego di verificarli.",
    "ERR_DIAG_NOSERVERFOUND_TITLE" : "Nessuna connessione specificata",
    "ERR_DIAG_NOSERVERFOUND_CONTENT" : "Non hai specificato nessuna connessione in eqFTP che associ il tuo progetto corrente ad un server remoto.<br>Specifica un server remoto per la connessione oppure utilizza l'attuale cartella del progetto come percorso locale nelle impostazioni.",
	"ERR_DIAG_ECONNRESET_TITLE" : "Server denying connections",
	"ERR_DIAG_ECONNRESET_CONTENT" : "I can't connect to server, it doesn't allows me.<br>Try restart Brackets.",
	"ERR_DIAG_UNIVERSAL_TITLE" : "There's an error",
	"ERR_DIAG_UNIVERSAL_CONTENT" : "Look at this error! How could it happen?",
    
    "PASSWDWIND_TITLE" : "Inserisci La Master Password",
    "PASSWDWIND_CONTENT" : "La tua master password per eqFTP:",
    
    "SETTINGSWIND_TITLE" : "eqFTP Connection Manager",
    "SETTINGSWIND_ERR_BLANKS" : "Oh! Qualcosa è andato storto... controlla il contenuto dei campi e riprova.",
    "SETTINGSWIND_ERR_CANTWRITE" : "Qualcosa è andato davvero storto! Non posso scrivere le impostazioni sul file!",
    "SETTINGSWIND_ERR_LOCALPATHREPEAT" : "Il percorso che stai cercando di inserire è attualmente in uso da parte di un'altra connessione.",
    "SETTINGSWIND_NOTIF_DONE" : "Detto, fatto! :)",
    "SETTINGSWIND_SAVEDCONN" : "Connessioni FTP Memorizzate",
    "SETTINGSWIND_DELETECONN_HOVER" : "Rimuovi Questa Connessione",
    "SETTINGSWIND_ADDCONN_HOVER" : "Aggiungi Nuova Connessione",
    "SETTINGSWIND_ADDCONN_STRING" : "Crea Una Nuova Connessione...",
    "SETTINGSWIND_DELETECONNCONF_1" : "Conferma la rimozione della connessione ",
    "SETTINGSWIND_DELETECONNCONF_2" : ".",
    "SETTINGSWIND_OPENGLOBSET" : "Apri Le Impostazioni FTP Globali...",
    "SETTINGSWIND_NOTHINGYETMSG" : "Seleziona una connessione da modificare nella barra laterale o creane una nuova.",
    "SETTINGSWIND_GLOB_FOLDERFORPROJ" : "Cartella Progetti:",
    "SETTINGSWIND_GLOB_FOLDERFORPROJ_DIAGTITLE" : "Cartella Dei i Progetti Con i File Scaricati:",
    "SETTINGSWIND_GLOB_FOLDERFORSET" : "Cartella Impostazioni:",
    "SETTINGSWIND_GLOB_FOLDERFORSET_DIAGTITLE" : "Cartella Con il File Delle Impostazioni",
    "SETTINGSWIND_GLOB_DONTOPENPROJECTS" : "Non Aprire i Progetti Dopo Il Download",
    "SETTINGSWIND_GLOB_STORESAFELY" : "Memorizza Le Password In Modo Sicuro",
    "SETTINGSWIND_GLOB_CONNECTIONNAME_TITLE" : "Nome Connessione:",
    "SETTINGSWIND_GLOB_CONNECTIONNAME_FIELD" : "Inserisci il nome della connessione",
    "SETTINGSWIND_GLOB_SERVER_TITLE" : "Server:",
    "SETTINGSWIND_GLOB_PROTOCOL_TITLE" : "Tipo Di Protocollo:",
    "SETTINGSWIND_GLOB_USERNAME_TITLE" : "Nome utente:",
    "SETTINGSWIND_GLOB_USERNAME_FIELD" : "Utente FTP",
    "SETTINGSWIND_GLOB_PASSWORD_TITLE" : "Password:",
    "SETTINGSWIND_GLOB_PASSWORD_FIELD" : "Password FTP",
    "SETTINGSWIND_GLOB_REMOTEPATH_TITLE" : "Percorso Remoto:",
    "SETTINGSWIND_GLOB_REMOTEPATH_FIELD" : "Inserisci il percorso remoto alla cartella radice del progetto",
    "SETTINGSWIND_GLOB_LOCALPATH_TITLE" : "Percorso Locale:",
    "SETTINGSWIND_GLOB_LOCALPATH_FIELD" : "Crea una nuova cartella nella posizione di default se vuoto",
    "SETTINGSWIND_GLOB_UPLOADONSAVE" : "Esegui Upload Dei Files Durante Il Salvataggio",
    "SETTINGSWIND_GLOB_EVENDISCONN" : "Anche Quando Disconnesso",
    "SETTINGSWIND_GLOB_EVENDISCONN_EXPLAIN" : "Questa opzione permette di collegarsi automaticamente ad un server quando un file salvato viene aperto dal server oppure quando si trova dentro il progetto corrente ed il progetto è stato creato da questa estensione FTP. Beh, spero che tu mi abbia capito..",
    "SETTINGSWIND_GLOB_LOCALPATH_FILLWPROJECT_TITLE" : "Aggiungi il percorso al progetto corrente",
    "SETTINGSWIND_GLOB_USELIST" : "Alternative folder retrieving", //NEW
    "SETTINGSWIND_GLOB_KEEPALIVE" : "Keep alive interval", //NEW
    "SETTINGSWIND_GLOB_KEEPALIVE_DESC" : "Value in seconds. Recommended value is 10. Use zero to forbid keep alive commands and disconnect from server every time command is done.", //NEW
    "SETTINGSWIND_GLOB_DEBUG" : "Debug:", //NEW
    "SETTINGSWIND_GLOB_TIMEFORMAT" : "Date Format:", //NEW
    "SETTINGSWIND_GLOB_TIMEFORMAT_US" : "US", //NEW
    "SETTINGSWIND_GLOB_TIMEFORMAT_EU" : "European", //NEW
    "SETTINGSWIND_GLOB_SYNC" : "Synchronize", //NEW
    "SETTINGSWIND_GLOB_SYNC_DESC" : "Will delete or rename file on remote server after it was changed in Brackets.", //NEW
    
    "QUEUE_TITLE" : "Coda di eqFTP",
    "QUEUE_TITLE_HOVER" : "Clicca Per Aprire La Coda Di eqFTP",
    "QUEUE_HEADER_NAME" : "Nome",
    "QUEUE_HEADER_PATH" : "Percorso",
	"QUEUE_HEADER_FROM" : "Source Path", //NEW
	"QUEUE_HEADER_TO" : "Destination Path", //NEW
    "QUEUE_HEADER_STATUS" : "Stato",
	"QUEUE_REMOVE" : "Remove from Queue", //NEW
    "QUEUE_CONTEXTM_STARTQ" : "Inizia Lavoro",
    "QUEUE_CONTEXTM_PAUSEQ" : "Sospendi Lavoro",
    "QUEUE_CONTEXTM_CLEARQ" : "Ripulisci La Coda",
    "QUEUE_CONTEXTM_CLEARCOMPQ" : "Ripulisci i Lavori Completati",
    "QUEUE_CONTEXTM_CLEARFAILQ" : "Ripulisci i Lavori Falliti",
    "QUEUE_CONTEXTM_RESTARTFAILQ" : "Ricomincia i Lavori Falliti",
    "ERR_FILE_ACCESSDENIED" : "Accesso Negato. Controlla i permessi del file.",
    "ERR_FILE_AUTHORIZATION" : "Autorizzazione fallita. Controlla la tua login e la tua password.",
    "ERR_FILE_SERVNOEXIST" : "Il Server Non Esiste. Forse hai sbagliato a trascriverlo.",
    "ERR_FILE_SERVCANTREACH" : "Non Posso Collegarmi Al Server. Controlla il Firewall.",
    
    "CONTEXTM_DOWNLOAD" : "Download",
    "CONTEXTM_UPLOAD" : "Upload",
    "CONTEXTM_ADDQUEUE" : "Aggiungi Alla Coda",
    "CONTEXTM_OPEN" : "Apri",
    "CONTEXTM_DELETE" : "Delete",
    "CONTEXTM_RENAME" : "Rename",
    
    "OTHER_SELECT_SERVER_DROPDOWN" : "Seleziona un server remoto...",
    "OTHER_ERROR" : "Errore",
    "OTHER_PAUSED" : "In pausa",
    "OTHER_COMPLETED" : "Completato",
	"OTHER_CANCELLED" : "Cancelled", //NEW
    "OTHER_WAITING" : "In attesa",
    "OTHER_OK" : "Ok",
    "OTHER_CANCEL" : "Annulla",
    "OTHER_APPLY" : "Applica",
    "OTHER_CLOSE" : "Chiudi",
	"OTHER_DELETE" : "Delete", //NEW
});