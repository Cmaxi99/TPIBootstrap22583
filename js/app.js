const ticket = 200;

function valor() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let cant = document.getElementById("cantidad").value;
    let categoria = document.getElementById("categoria").value;
    let bruto = cant * ticket;
    let descuento = 0;
    if(nombre != "" && apellido != "" && email != "" && cant != ""){
        switch (categoria) {
            case "Estudiante":
                descuento = 0.8;
                break;
            case "Trainee":
                descuento = 0.5;
                break;
            case "Junior":
                descuento = 0.15;
                break;
        }

        let total = bruto - bruto * descuento;

        document.getElementById(
        "pagar"
        ).value = `Total a Pagar: $ ${total} pesos`;

        alert(`${nombre}: usted debera pagar un total de: $ ${total} pesos.`);
    }
    else{
        alert(`Debe completar el formulario`);
    }

    
}
