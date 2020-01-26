# Uge 3 - Afspiller og animationer

Tredje del af projektet handler om at få afspilleren til at fungere og at animere UI.

![alt text](https://github.com/rts-cmk-wuhf02/iPlayMusic/blob/master/animation.gif "Animate UI")

# Afspilleren
Den første opgave i uge 3. omhandler afspilleren. Brugeren kan navigere hen til dette afspiller viewet ved at trykke på et track i en 'track-liste'. Titel, kunstner og medier på afspiller siden skal matche det track brugeren "har valgt at lytte til" i.e. trykket på. 

Desværre kræver det et Spotify premium abonnement at få adgang til musikken, så det er ikke en mulighed. I denne opgave handler det om konceptet, ikke at kunne finde og afspille de korrekte musik numre. 

> For Spotify premium abonnenter er det muligt at arbejde med Spotify egen webplayer ```SDK``` Det er en mulighed, men selvfølgelig ikke et krav.

Play funktionaliteten skal derfor ganske enkelt bare afspille et stykke 'demo-musik' når der trykke play. Det kræver nogle musik filer som kan afspilles, der kan man f.eks. hente noget musik herfra [Incompetech.com](https://incompetech.com/music/) 

Når du har fundet lidt musik skal `<audio>` tagget e.l. implementeres på afspiller siden, og der skal skrives lidt kode som får afspilleren til at fungere, samt sikre den bliver stylet som på designet. Hvis du aldrig har prøvet at arbejde med et `<audio>` tag, så er her et par resorser som kan få dig godt fra start:

[HTML5 audio](https://www.w3schools.com/html/html5_audio.asp)

[Audio Object](https://www.w3schools.com/jsref/dom_obj_audio.asp)

# UI Animation
Anden del af opgaven består i at integrere animationer som har til hensigt at formidle et vigtigt budskab til brugeren e.g. indhold er ved at blive indlæst. En "opgave" I tidligere har løst ved at animere en lille spinner, som så er blevet vist så længe indhold endnu ikke er indlæst. Det er et **krav** at der findes en ligende løsning i denne opgave.

> "Users tend to give up on loading times way faster when shown no or a static loading screen than an animated one.
Layout Skeletons (...) seem to work very well, while spinners (...) are still better than nothing (...)" [Se artikel](https://dev.to/iamschulz/animation-for-developers-c4b?fbclid=IwAR2mYJQ-UwH07WPkPvcpJ5cSN8qIh06sDYzZEzhH2SjArGBOADP8EHUe95I) 

**Læs artiklen** animation for developers, linket findes umiddelbart herover i ovenstående blockquote. I artiklen er der flere konkrete eksempler på UI animaiton som én til én kan overføres til iPlayMusic applikationen. 

Rammerne er frie, så eneste krav er spinneren. Slå jer løs, men vær opmærksom at der helst i forhold til brugeren skal være et klart formål med animationen.

God arbejdslyst!
