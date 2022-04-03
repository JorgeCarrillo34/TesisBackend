function abrirJson() {
    fetch("./prueba.json").then((Response)=>{
        return Response.json();
    }).then((json)=>{
        console.log(json);

        const nombre = document.createElement("h1");
        nombre.innerText = `Nombre: ${json.nombre}`;
        document.body.appendChild(nombre);

        const edad = document.createElement("h1");
        edad.innerText = `Edad: ${json.age}`;
        document.body.appendChild(edad);

        const carro = document.createElement("h1");
        carro.innerText = `Carro: ${json.car}`;
        document.body.appendChild(carro);

        const ciudad = document.createElement("h1");
        ciudad.innerText = `Ciudad: ${json.city}`;
        document.body.appendChild(ciudad);

    })
}