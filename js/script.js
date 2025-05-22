function CrearTabla(datos) {
    //Creando tabla
    //Paso 1. crear encabezados
    let tabla = `
         <table role="grid" class="overflow-auto">
            <!-- 1. Crear encabezados -->
                <thead>
                    <tr>
                        <th>ROL</th>
                        <th>NOMBRE</th>
                        <th>CARNET</th>
                        <th>SECCCION</th>
                        <th>ACCIONES</th>
                    </tr>
                </thead>
                <tbody>
    `;
    //Paso 2. Crear filas con el bucle forEach
    datos.forEach(integrante => {
        tabla += `
            <tr>
                <td>${integrante.carnet}</td>
                <td>${integrante.nombre}</td>
                <td>${integrante.rol}</td>
                <td>${integrante.seccionAcademica}</td>
                <td>
                    <button class="btn btn-primary" onclick="editar('${integrante.carnet}')">Editar</button>
                    <button class="btn btn-danger" onclick="eliminar('${integrante.carnet}')">Eliminar</button>
                </td>
            </tr>
        `;
    });
    //Paso 3. Crear botones de editar y eliminar
    tabla += `
                </tbody>
            </table>
        `;
    document.getElementById("data-table").innerHTML = tabla;
}

CrearTabla(integrantes);
// Datos representara al json