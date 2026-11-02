# Pappe di Camilla

App web (PWA) con il menù di Camilla per novembre e dicembre 2026: pranzo, cena, merende e dosi giorno per giorno.

**Apri l'app:** https://sevengem27.github.io/Pasti-Cami/

## Installarla sul telefono

- **iPhone (Safari):** apri il link, tocca Condividi e poi "Aggiungi alla schermata Home".
- **Android (Chrome):** apri il link, menu ⋮ e poi "Installa app" o "Aggiungi a schermata Home".

Dopo la prima apertura funziona anche senza connessione.

## Sezioni

- **Oggi:** i pasti del giorno, con frecce o swipe per cambiare giorno.
- **Calendario:** novembre e dicembre settimana per settimana.
- **Spesa:** la lista della spesa della settimana con le quantità, da spuntare o copiare, e le preparazioni da fare nel weekend.
- **Alimenti:** l'elenco degli alimenti della dieta (cereali, proteine, vegetali). Puoi aggiungere, modificare o eliminare: menù, dosi e spesa si ricalcolano. Le modifiche si passano all'altro telefono con un link o un codice.
- **Dosi:** grammature per alimento, schema delle proteine e fasi delle consistenze.
- **Consigli:** ricette base, sicurezza a tavola, cosa evitare e domande per la pediatra.

## Aggiornare il menù

Il menù viene calcolato dall'app a partire dall'elenco degli alimenti (sezione Alimenti). L'elenco iniziale e i piatti di famiglia sono in `index.html` (costanti `DEFAULTS` e `DISHES`). Dopo una modifica al codice, cambia `VERSION` in `sw.js` così i telefoni scaricano la nuova versione.

Le dosi sono indicative per una bambina di 10–11 mesi e non sostituiscono il parere della pediatra.
