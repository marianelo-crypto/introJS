const datos = [
    {
        id: 1,
        nombre: 'Juan',
        habilidades: ['JavaScript', 'HTML', 'CSS'],
        proyectos: [
            { id: 1, nombre: 'Proyecto 1' },
            { id: 2, nombre: 'Proyecto 2' }
        ]
    },
    {
        id: 2,
        nombre: 'María',
        habilidades: ['Python', 'SQL', 'Django'],
        proyectos: [
            { id: 3, nombre: 'Proyecto 3' },
            { id: 4, nombre: 'Proyecto 4' }
        ]
    },
    {
        id: 3,
        nombre: 'Pedro',
        habilidades: ['Java', 'Spring', 'Hibernate'],
        proyectos: [
            { id: 5, nombre: 'Proyecto 5' },
            { id: 6, nombre: 'Proyecto 6' }
        ]
    }
];

// Obtenemos el listado de los desarrolladores que tengan como habilidad "JavaScript" y el listado de proyectos.
for (let i = 0; i < datos.length; i++) {
    if (datos[i].habilidades.includes('JavaScript')) {
        console.log('Nombre:', datos[i].nombre);
        for (let j = 0; j < datos[i].proyectos.length; j++) {
            console.log('  Proyecto:', datos[i].proyectos[j].nombre);
        }
    }
}
