const http = require('http');

// req = request (informacion que estan solicitando en mi sitio web - solicitud a mi webserver)
// res = response (respuesta del servidor al cliente)

http.createServer((req, res) => {

    console.log(req)

    // res.writeHead(200 , { 'Content-type': 'application/json' })
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, { 'Content-type': 'application/csv' });

    // res.write('id, nombre\n');
    // res.write('1, Fernando\n');
    // res.write('2, Maria\n');
    // res.write('3, Juan\n');
    // res.write('4, Pedro\n');
    res.write('Hola Mundo')
    res.end();

})
.listen( 8080 );

console.log('Escuchando el puerto', 8080)