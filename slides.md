---
theme: the-unnamed
transition: slide-left
---

# LOVE 2D

## Un piccolo corso d'introduzione (si spera)



<div style="position: absolute; bottom:30px; right:30px;">
	by Ganzio Bello
</div>

---
layout: about-me

helloMsg: Ciao tuttə, mi presento!
name: Ganzio Bello
imageSrc: https://img.freepik.com/free-vector/realistic-neon-lights-background_23-2148907367.jpg
job: Programmatore da 4 anni
line1: Studente Universitario
line2: 4 esami alla laurea triennale in Ingegneria Informatica
social1: instagram => @ganzio.bello
---

---

# Piccola Dichiarazione di Intenti 

<br/>

Questo non è e non vuole essere un *corso esaustivo*. 

L'obiettivo è fornire o quanto meno incuriosire qualcuno a uno strumento particolare a cui non sempre viene dato il giusto peso. Io non sono il migliore oratore immaginabile, né il più competente, ma sono qui oggi, quindi qualcosa fa.


## Detto questo spero che possa piacervi lo stesso e che ci possiamo divertire insieme.
<br/>

<div style="position: absolute; bottom:30px; right:30px; font-size:64px;">
	<b>Iniziamo!</b> 
</div>


---

# Cos'è LOVE 2D?
## Probabilmente quello che non ti aspetti !

LOVE 2D è un framework che permette di creare videogiochi 2d facilmente grazie a del codice scritto in LUA.

È un framework abbastanza apprezzato dalla community, tanto da essere perfino consigliato ai neofiti che vogliono iniziare

<br/>
<br/>
<br/>

- 📝 **Text-based** - Tutto dal testo nessuna interfaccia
- 💖 **OpenSource** - Ottima etica e una community vastissima
- 📤 **Portable** - Crea giochi per: computer, android e anche console (anche se molto difficile)

---

# Come mai scegliere LOVE 2D?
## Per divertimento

<br/>
Per sviluppare un videogioco ci sono tantissime alternative tra cui scegliere. 
<br/>
Sicuramente se vi siete interessati all'argomento conoscerete i 3 grandi nomi in questo momento:
<br/>
<br/>

- Unity
- Unreal
- Godot

<br/>
Ma oltre a loro ci sono Engine e framework molto usati come per esempio GameMaker o PyGame o RPG Maker. Nessuno di questi strumenti è definitivo o indispensabile per fare un buon gioco, ognuno di essi eccelle in qualcosa e pecca in altro.

---

<div style="position: absolute; right:30px;">
	<img src="/image/1.jpeg" style="max-width: 150px; max-height: 200px; " />
</div>

# Come mi diverto con LOVE 2D
## Reinvento la ruota


<br/>
Come accennato prima LOVE 2D è un framework, un banco di lavoro con degli strumenti.

Non c'è molto di già fatto, preferisce dare libertà al costruttore più che dargli della pappa pronta.

Questo è sia un grande vantaggio, sia un <b> estremo svantaggio. </b>

<br/>
Infatti non sono davvero tutti capaci di gestire, fin dall'inizio, tutte le complessità che un gioco può creare, ma per progetti abbastanza semplici la libertà lasciata allo sviluppatore permette di imparare molto più facilmente e agilmente. 
<br/>
<br/>
<br/>
Perciò molto spesso viene consigliato ai neofiti come primo approccio o alle persone che si vogliono divertire a reinventare la ruota.

---

<div style="position: absolute; right:30px; bottom:30px;">
	<img src="/image/2.jpeg" style="max-width: 150px; max-height: 200px; " />
</div>

# Perchè LUA e non Python ?
## Per l'installazione...

È proprio vero Python è un liguaggio unico nel suo genere che piace alla maggioranza delle persone, io non incluso, ma tolto che impararne uno non escluda l'altro, Lua ha dei validi motivi per non essere da meno.

Innanzitutto Lua è:

- Già facilmente eseguibile da qualsiasi sistema operativo
- Molto semplice da leggere e capire
- Facile da apprendere
- Non richiede l'utilizzo di altri strumenti se non voluti dall'utente

---

# Questo corso doveva essere per novizi
## Quindi in caso ci siano, leggere queste slide

Quando avevo scritto la mail di presentazione, la mia idea era di fare un piccolo corso a chiunque. Programmatori e non. 
Perciò, prima di iniziare con gli argomenti più complessi, un rapido ripasso di concetti fondamentali nella programazzione:

- Le Variabili 
- Le Funzioni 
- Le Tabelle e Gli Oggetti 
- I Controlli
- I Cicli

---

# I primi concetti 
## Variabili

Cos'è una variabile? Chi ha finito le superiori dovrebbe conoscerle, ma per tutti fissiamo il significato di variabile come quella cosa che porta dentro di sè un valore che può variare nel tempo. 
Dico che può perché non è detto che vari in senso assoluto, infatti per gli informatici le costanti sono solo un caso speciale delle variabili.
Quindi tutto ciò che deve essere conosciuto o memorizzato deve essere contenuto in una variabile.

```lua
VariabileX = 10;
PIPPO = 20;
topolino = 30;
VariabileX = VariabileX + PIPPO;

topolino == VariabileX -- True
```

<!-- Questa è un brutto codicce che fa vedere alcune cose che si possono fare con le variabili. Mi spiace non mi è venuto nulla di meglio in testa -->
Quello che si può osservare è che in Lua è molto facile dichiarare una variabile: basta scrivere il suo nome e assegnargli un valore.


---

# I primi concetti 
## Funzione


```lua
function NomeFunzione(argomentoFunzione1, argomentoFunzione2, ....)
	return risultatoFunzione
end

```

Questa è una funzione. In programazione ogni codice è composto da funzioni e da variabili. 
Le funzioni rappresentano il nostro modo di esprimere le operazioni che vogliamo.

Se non avete mai programmato è un concetto particolare da imparare ma con degli esempi sarà più facile, la funzione di somma appare così:

```lua
function Somma(a,b)
	return a+b
end

```

<!-- Fai esempi di operazioni complesse che si suddividono in operazioni più semplici fino ad arrivare ad un unità infinetisima e chiamala funzione -->
---

# I primi concetti 
## Liste e Oggetti

 
In Lua le parentesi graffe inserite dopo il nome di una variabile possono significare sia una lista numerata di variabili, sia roba molto più complessa e difficile da definire in maniera precisa come un oggetto.

Mi spiego peggio: 

- Una lista:
```lua
listaSpesa = {"banane","pesche","pane","vino"}

```

- Un Oggetto:
```lua
coloriCasa = {
	tetto = "rosso",
	cucina = "gialla",
	porta = "marrone"
}

```

---

# Avevi detto che era semplice!
## Come faccio a capire cosa è uno o l'altro? 

Ok, capisco che l'esempio di prima possa confondere.

Ma non sono proprio identici e difficilmente scambierete mai uno per l'altro.

Senza contesto possono sembrare uguali e confodersi facilmente, ma fidatevi che succederà di rado (o almeno si spera).

---

# I primi concetti 
## I Controlli

La parola riservata "**if**", ci permette di esprimere condizioni che si devono soddisfare prima di effettuare determinato codice:

```lua
	if condizione1 then

	elseif condizione2 then

	else

	end
```

---

# I primi concetti 
## I Cicli

I cicli nella programmazione sono essenziali, poichè ci permettono di esprimere più facilmente certe operazioni. Oggi vedremo in particolare due tipi di ciclo:

- **for** semplice:
```lua
	for indice = N_INIZIALE, N_TOTALE, INCREMENTO do
		
	end
```

- **for** di una lista:
```lua
	for indice, value in ipairs(Lista) do
		
	end
```

---

# Prepariamoci ad iniziare
## Mettiamo le mani nelle installazioni

Iniziamo installando tutto ciò che è necessario:

- [Love 2D](https://love2d.org/)
- [VS Code](https://code.visualstudio.com/), potete scegliere il vostro editor preferito

Tutto qui o per lo meno tutto qui quello necessario. Ora iniziamo a settare tutto quello che può essere utile

- [Git](https://git-scm.com/), perché prima o poi vi servirà o lo vorrete
- [Template](https://github.com/Keyslam/LOVE-VSCode-Game-Template), un template per VSCode

---

<div style="position: absolute; right:30px; top:30px;">
	<img src="/image/1.gif" style="max-width: 250px; max-height: 300px; " />
</div>

# Perciò tutto pronto per iniziare
## IT's morbing time

L'esempio che vi porto oggi è come si può creare un clone di Flappy Bird. 

Prima di iniziare a scrivere qualsiasi riga di codice, dobbiamo avere ben in mente il gioco che vogliamo realizzare, individuare i punti principali e le loro caratteristiche, così da poterlo schematizare più facilmente

Per capirci: 
In Flappy Bird abbiamo un personaggio, posizionato a sinistra dello schermo, spinto giù da una forza invisibile, che sale in alto ogni volta che premiamo un pulsante. 

Ora abbiamo di fronte a noi vari problemi:
- Come facciamo a farlo apparire a schermo? 
- Come facciamo a farlo interaggire con i nostri comandi?
- Come facciamo i tubi? 


---

# Disegno
## Far apparire le cose a schermo

Per disegnare qualsiasi cosa a schermo in LOVE, devo conoscere le sue coordinate e la sua apparenza.

Le coordinate servono per collocarlo all'interno dello schermo in una determinata posizione, LOVE, infatti, sfrutta un piano cartesiano con asse delle x che va da sinistra a destra e un'asse delle y che va dall'alto al basso del nostro schermo.


<div style="position: absolute; right:330px; bottom: 10px;">
	<img src="/image/c.png" style="max-width: 300px; max-height: 300px; " />
</div>

---

# Disegno
## Far apparire le cose a schermo

Una volta capito dove vogliamo far apparire una determinata cosa, possiamo sfruttare diverse funzioni per disegnare quello che vogliamo:

```lua
	-- Disegnare un cerchio con un' area colorata
	love.graphics.circle("fill", x, y, raggio )
	
	-- Disegnare un rettangolo con solo il perimetro colorato
	love.graphics.rectangle("line", x, y, larghezza, altezza)
	
	-- Disegnare un' immagine o roba più complessa
	love.graphics.draw(Immagine, x, y, angolo)

```

---
layout: section
---

# Logica
## Fare cose alle cose 

Qui ci vengono in soccorso i concetti accennati prima: Varibili e Funzioni.

---
layout: two-cols
---

# Variabili

Usate per immagazzinare informazioni.

In generale per affrontare 
problemi come:

- Stato di un elemento
- Costanti da dover decidere

::right::

# Funzioni

Usate per apportare delle modifiche.

In generale conviene scrivere una

funzione ogni volta che sappiamo che 

del codice si ripeterà tante volte.

Conviene, inoltre, che non 

siano troppe lunghe o 

troppo corte

---
layout: section
---

# Detto questo, dovremmo avere tutte le conoscenze necessarie per procedere ad aprire il file main.lua

---

# Primi passi 

Apriamo il file chiamato main.lua e all'interno troveremo:

```lua
function love.load()
end

function love.update()
	print("Hello!")
end

function love.draw()
end
```

---

# In realtà c'è questa parte omessa
```lua
local IS_DEBUG = os.getenv("LOCAL_LUA_DEBUGGER_VSCODE") == "1" and arg[2] == "debug"
if IS_DEBUG then
	require("lldebugger").start()

	function love.errorhandler(msg)
		error(msg, 2)
	end
end

```

Questo codice è qui per fornirci una migliore esperienza di debug, ma visto che in questo momento non ci interessa andare così a fondo su certi argomenti, lo ignoreremo.

---

# Le prime funzioni di LOVE 2D
## Le tre sorelle

```lua
function love.load()
end

function love.update()
	print("Hello!")
end

function love.draw()
end
```

<div style="position: absolute; right:30px; bottom: 30px;">
	<img src="/image/4.jpeg" style="max-width: 400px; max-height: 400px; " />
</div>

---

# Le prime funzioni di LOVE 2D
## Le tre sorelle


Per aiutarci a descrivere il nostro gioco al meglio, LOVE ci offre tre funzioni che saranno sicuramente indispensabili. 

- Load viene richiamata quando il nostro gioco viene avviato, qui dovremo scrivere tutte le nostre variabili che ci servono nel gioco.
- Update è dove avverranno la maggior parte degli aggiornamenti alle nostre variabili.
- Draw è la funzione che si occupa di disegnare a schermo ogni singolo frame

Queste funzioni vengono richiamate dall'avvio del gioco in questo ordine: 

load-> update-> draw-> update-> draw-> update-> draw-> update-> draw-> ...

Il fatto che draw venga richiamata ogni tot secondi creerà il nostro frame rate finale.


<div style="position: absolute; right:30px; bottom:30px;">
	<img src="/image/5.jpeg" style="max-width: 200px; max-height: 230px; " />
</div>

---


# Ma quindi questo volatile?
<br/>

````md magic-move
```lua
function love.load()
end

function love.update()
	print("Hello!")
end

function love.draw()
end
```

```lua
function love.load()
	Bird = {
		x = 100,
		y = WHeight / 2,
		width = 10,
		height = 10,
	};
end

function love.update()
end

function love.draw()
	love.graphics.setColor(255, 255, 255, 1);
	love.graphics.rectangle("fill", Bird.x, Bird.y, Bird.width, Bird.height);
end
```

```lua
function love.load()
	Bird = {
		x = 100,
		y = WHeight / 2,
		width = 10,
		height = 10,
	};
end

function love.update(dt)
	ApplyGravity(dt)
end

function love.draw()
	love.graphics.setColor(255, 255, 255, 1);
	love.graphics.rectangle("fill", Bird.x, Bird.y, Bird.width, Bird.height);
end

function ApplyGravity(dt)
end

```
````

---


<div style="position: absolute; right:30px; z-index:10;">
	<img src="/image/6.jpeg" style="max-width: 150px; max-height: 200px; " />
</div>

# Bello ma come funziona la Gravità?
## A mele! Ovvio no?

Possiamo vedere la Gravità come uno spostamento verso il basso a velocità costante.
Quindi in parole povere ad ogni frame la y del nostro volatile diventerà sempre più **grande**. 

<!-- Allega immagini -->

---

# Bello ma come funziona la Gravità?
## A mele! Ovvio no?

````md magic-move
```lua
function ApplyGravity(dt)
end
```
```lua
function ApplyGravity(dt)
	WWidth, WHeight = love.graphics.getDimensions()
end
```
```lua
function ApplyGravity(dt)
	WWidth, WHeight = love.graphics.getDimensions()
	
	if Bird.y < (WHeight - Bird.height) then
		Bird.y = Bird.y + SPEED * dt;
	end
end
```
```lua
function ApplyGravity(dt)
	WWidth, WHeight = love.graphics.getDimensions()
	
	if Bird.y < (WHeight - Bird.height) then
		Bird.y = Bird.y + SPEED * dt;
	end
	if Bird.y > (WHeight - Bird.height) then
		Bird.y = (WHeight - Bird.height);
	end
end
```
````

---


# Ok ora i tubi


````md magic-move
```lua
function love.load()
	-- codice precedente
end

function love.update()
	-- codice precedente
end

function love.draw()
	-- codice precedente
end
```
```lua
function love.load()
	-- codice precedente
	Pipes = {};
	N_PIPES = 6;
	for i = 1, N_PIPES, 1 do
		CreatePipe((WWidth * (i / N_PIPES)) - (WWidth / 2));
	end
end

function CreatePipe(params)
	WWidth, WHeight = love.graphics.getDimensions()
	table.insert(Pipes, {
		x = WWidth - params,
		y = 0,
		height = WHeight / love.math.random(2, 8),
		width = WWidth / 30,
		gap = love.math.random(GAP, math.max(GAP, WHeight - (60 * Points))),
	})
end
```

```lua
function love.update()
	-- codice precedente			
	MovePipes(dt);
	DetectCollision();
end

function MovePipes(dt)
	for index, value in ipairs(Pipes) do
		if value.x >= 0 then
			value.x = value.x - SPEED * dt;
		else
			table.remove(Pipes, index);
			CreatePipe(0);
			Points = Points + 1;
			love.audio.play(PointSFX);
			SPEED = SPEED + (Points / 10);
		end
	end
end
```
```lua
function DetectCollision()
	for _, value in ipairs(Pipes) do
		if Bird.x >= value.x and Bird.x + Bird.width <= value.x + value.width and
			Bird.y >= value.y and Bird.y + Bird.height <= value.y + value.height or
			Bird.x >= value.x and Bird.x + Bird.width <= value.x + value.width and
			Bird.y >= (value.height + value.gap) and 
			Bird.y + Bird.height <= ((value.height + value.gap) + (WHeight - (value.height + value.gap)))
		then
			print("Hai preso il tubo!");
		end
	end
end

function love.draw()
	-- codice precedente
	for _, value in ipairs(Pipes) do
		love.graphics.rectangle("fill", value.x, value.y, value.width, value.height);
		love.graphics.rectangle("fill", value.x, (value.height + value.gap), value.width,
			(WHeight - (value.height + value.gap)));
	end
end

```
````

---

# E ora, per ultimo, i comandi 


````md magic-move
```lua
function love.keypressed(key)
end
```
```lua
function love.keypressed(key)
	if (key == "space") then
		Bird.y = Bird.y - JUMP;
		love.audio.play(SwooshSFX);
	end
end
```
```lua
function love.keypressed(key)
	if (key == "space") then
		if (GameState == 1) then
			Bird.y = Bird.y - JUMP;
			love.audio.play(SwooshSFX);
		end
	end
	if key == "left" then
		if (Bird.x > 0) then
			Bird.x = Bird.x - JUMP;
		end
	end
	if key == "right" then
		if Bird.x < (love.graphics.getWidth() - Bird.width) then
			Bird.x = Bird.x + JUMP;
		end
	end
end
```
````

--- 

<img src="/image/3.jpeg" style=" margin:auto; max-width: 500px; max-height: 500px; " />

---

<img src="/image/7.jpeg" style=" margin:auto; max-width: 500px; max-height: 500px; " />

---
layout: section
---

# Perciò, passiamo alla repository preparata in precedenza

https://github.com/giuseppe-lantieri/loving-birds 

---
layout: center
---

# Link utili a chi vuole approfondire: 
 
- [Libro introduttivo](https://sheepolution.com/learn/book/0)
- [Wiki ufficiale](https://love2d.org/wiki/Main_Page)
- [Dev famoso per usare LOVE 2D](https://www.youtube.com/@Challacade)
