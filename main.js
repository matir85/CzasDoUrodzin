const birthdayJustyna = new Date(2020, 06, 18).getTime();
const birthdayMateusz = new Date(2020, 07, 11).getTime();
const birthdayNatan = new Date(2020, 10, 14).getTime();
const birthdayIga = new Date(2020, 12, 01).getTime();

const runTime = () => {
    // Pobranie aktualnego czasu
    const time = new Date().getTime();

    // Obliczanie czasu dla Justyny

    // Obliczenie pozostałych dni (mnożąć *1000- usowamy milisekumdy *60 - usuwamy sekundy, *60 - usówamy minuty, * 24 - usówamy godziny
    let justD = Math.floor(birthdayJustyna / (1000 * 60 * 60 * 24) - time / (1000 * 60 * 60 * 24));
    // Pobieramy element, w którym wyświetlamy wartość a następnie za pomocą texContent przypisujemy wartość, za pomocą instrukcji trójdrożnej dodajemy 0 jeśli liczba jest mniejsza od 10 tak aby zawsze liczba było dwu cyfrowa
    document.querySelector('.justyna span.d').textContent = `${justD<10?'0'+justD : justD}`
    // Obliczanie pozostałych godzin reszta j/w
    let justH = Math.floor(birthdayJustyna / (1000 * 60 * 60) - time / (1000 * 60 * 60)) % 24;
    document.querySelector('.justyna span.h').textContent = `${justH<10?'0'+justH : justH}`
    // Obliczanie pozostałych minut reszta j/w
    let justM = Math.floor(birthdayJustyna / (1000 * 60) - time / (1000 * 60)) % 60;
    document.querySelector('.justyna span.m').textContent = `${justM<10?'0'+justM : justM}`;
    // Obliczanie pozostałych sekund reszta j/w
    let justS = Math.floor(birthdayJustyna / 1000 - time / 1000) % 60;
    document.querySelector('.justyna span.s').textContent = `${justS<10?'0'+justS : justS}`;

    // Oblczanie czasu dla Mateusza
    //Dni
    let matD = Math.floor(birthdayMateusz / (1000 * 60 * 60 * 24) - time / (1000 * 60 * 60 * 24));
    document.querySelector('.mateusz span.d').textContent = `${matD<10?'0'+matD : matD}`;
    // Godziny
    let matH = Math.floor(birthdayMateusz / (1000 * 60 * 60) - time / (1000 * 60 * 60)) % 24;
    document.querySelector('.mateusz span.h').textContent = `${matH<10?'0'+matH : matH}`;
    // Minuty
    let matM = Math.floor(birthdayMateusz / (1000 * 60) - time / (1000 * 60)) % 60;
    document.querySelector('.mateusz span.m').textContent = `${matM<10?'0'+matM : matM}`;
    // Sekundy
    let matS = Math.floor(birthdayMateusz / 1000 - time / 1000) % 60;
    document.querySelector('.mateusz span.s').textContent = `${matS<10?'0'+matS : matS}`;

    // Oblczanie czasu dla Natana
    //Dni
    let natD = Math.floor(birthdayNatan / (1000 * 60 * 60 * 24) - time / (1000 * 60 * 60 * 24));
    document.querySelector('.natan span.d').textContent = `${natD<10?'0'+natD : natD}`;
    // Godziny
    let natH = Math.floor(birthdayNatan / (1000 * 60 * 60) - time / (1000 * 60 * 60)) % 24;
    document.querySelector('.natan span.h').textContent = `${natH<10?'0'+natH : natH}`;
    // Minuty
    let natM = Math.floor(birthdayNatan / (1000 * 60) - time / (1000 * 60)) % 60;
    document.querySelector('.natan span.m').textContent = `${natM<10?'0'+natM : natM}`;
    // Sekundy
    let natS = Math.floor(birthdayNatan / 1000 - time / 1000) % 60;
    document.querySelector('.natan span.s').textContent = `${natS<10?'0'+natS : natS}`;

    // Oblczanie czasu dla Igi
    //Dni
    let igaD = Math.floor(birthdayIga / (1000 * 60 * 60 * 24) - time / (1000 * 60 * 60 * 24));
    document.querySelector('.iga span.d').textContent = `${igaD<10?'0'+igaD : igaD}`;
    // Godziny
    let igaH = Math.floor(birthdayIga / (1000 * 60 * 60) - time / (1000 * 60 * 60)) % 24;
    document.querySelector('.iga span.h').textContent = `${igaH<10?'0'+igaH : igaH}`;
    // Minuty
    let igaM = Math.floor(birthdayIga / (1000 * 60) - time / (1000 * 60)) % 60;
    document.querySelector('.iga span.m').textContent = `${igaM<10?'0'+igaM : igaM}`;
    // Sekundy
    let igaS = Math.floor(birthdayIga / 1000 - time / 1000) % 60;
    document.querySelector('.iga span.s').textContent = `${igaS<10?'0'+igaS : igaS}`;
}



setInterval(runTime, 1000);