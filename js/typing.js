const p = document.querySelector("p.history-descr");

const text =
  "Pierwsze Grand Prix Monako odbyło się w 1929 roku, a jego zwycięzcą był William Grover-Williams w Bugatti. Tor jest jednym z najniebezpieczniejszych i najtrudniejszych na świecie. Oprócz bardzo ciasnych szykan i szybkiego łuku w tunelu pod hotelem Fairmont, znajduje się tam najciaśniejszy nawrót spośród torów Formuły 1, w którym bolidy muszą zwolnić poniżej 50 km/h. W środy i czwartki odbywają się zawsze sesje treningowe Formuły 1 oraz serii towarzyszących. Piątek jest dniem wolnym, aby mieszkańcy mogli odpocząć od hałasu. W sobotę odbywają się kwalifikacje, a w niedziele wyścigi. Następnie tor jest składany, a elementy zwożone są na należący do Automobilklubu z Monako plac we Francji, bardzo blisko granicy księstwa. Najwięcej zwycięstw na tym torze mają m.in. Ayrton Senna - 6, Michael Schumacher i Graham Hill - 5, Alain Prost - 4";

let indexLetter = 0;

const addLetter = () => {
  p.innerHTML += text[indexLetter];
  indexLetter++;
  if (indexLetter === text.length) clearInterval(indexTyping);
};

const indexTyping = setInterval(addLetter, 50);
