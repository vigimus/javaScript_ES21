//Alla ändringar som finns i ES21
const str = "ztm is the best of the best"
//str.replaceAll i det här fallet kommer alla orden best ersättas med strängen worst
// som tar dess plats så outputen blir "ztm is the worst of the worst" istället
str.replaceAll('best', 'worst')

//Om man till deklaraerar replaceAll till ett värde så kommer texten
//Gå tillbaka till det ursprungliga

//Det här är det bättre sättet 
const b = str.replaceAll('best', 'worst')
//Nu kommer variabeln b ge oss --> "ztm is the worst of the worst"

//Det har sedan länge funnits något som heter str.replace i javaScript
//Problemet var att det bara byte ut det första värdet