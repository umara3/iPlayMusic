# iPlayMusic

Opgaven går ud på at opsætte et website der primært er mobiltvenligt, og er drevet af en simpel datastruktur.

![alt text](https://github.com/rts-cmk-wuhf02/iPlayMusic/blob/master/iplaymusic.png "iPlayMusic hero")

# Del 1 - Layout
Fokus er at omsætte designet til funktionel ```html/css/javascript```, ud fra det ud har lært ind til videre. Designet skal følges så tæt som muligt, og fungere på kryds og tværs af flere mobil-skærmstørrelser. Det skal være muligt at skifte mellem lyst og mørkt tema men det er **ikke** et krav adressebaren er skjult som i en native app.

Der er elementer på hjemmesiden som går igen på flere af siderne, dem skal du trække ud i individuelle ```.ejs``` filer som ```templates``` der placeres i partials ```mappen``` og inkluderes efter behov. Udfordringen ligger i at splitte designet op i fornuftige og logiske dele, samt at gennemskue hvilke elementer der gentages på flere sider. Det vil også være ok at oprette templates for enkeltstående elementer.

### Views som skal produceres:
1. Featured (index) - Præsenter featured albums. OBS: Dette view skal senere integrerer lazyload
2. Albums - Præsentere featured albums og new releases(albums)
3. Categories - liste alle kategorier
4. Artists - liste traks for en artist
5. Playlister - listes tracks fra en valgt playliste
6. Player - "Afspil" et valgt track

Opgaven er tiltænkt som en individuel opgave, men I må selvfølgelig gerne vende ideer og koncepter med hinanden.

### Løsningen skal inkluder følgende:
1. ```ejs``` 
2. ```gulp```
3. ```sass```
      * ```variabler```

# Tidsramme
Der er afsat 1 arbejds uge til opgaven, dvs aflevering på fredag kl 13.30 (den sidste commit til github inden fredag kl 13.30, bliver afleveringen).

# Del 2 - Animation
I denne opgave skal vi arbejde med animationer. Animationer kan hjælpe en bruger til at forstå et layout, eller hvordan det er tiltænkte at brugeren skal interagerer med dette. Spørg dig selv, om en animation opfylder et formål for brugeren. Hvis det ikke gør det, er det sandsynligvis rent æstetisk.

loaders

### Forslag til mulige værktøjer:
1. ```keyframes``` 
2. ```anime.js```
3. ```animate.css```

# Tidsramme
Der er afsat 1 arbejds uge til opgaven, dvs aflevering på fredag kl 13.30 (den sidste commit til github inden fredag kl 13.30, bliver afleveringen).                                                              
