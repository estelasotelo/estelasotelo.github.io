var app = document.getElementById('app');

var typewriter = new typewriter(app, {
    loop: true
});

typewriter.typeString('Desarrolladora fronted Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Si lo puedes imaginar lo puedes crear ')
    .pauseFor(2500)
    // Caracteres que se borraran
    .deleteChars(6)
    .typeString('<strong>Programar</strong>')
    .pauseFor(2500)
    .start();