//Se pide al usuario el radio de la esfera e inicilizan las variables
const radio = parseFloat(prompt('Introduce el radio de la esfera (en cm):'));
const formula = '(4/3) * PI * radio³';
const resultado = (4 / 3) * Math.PI * Math.pow(radio, 3);

//Se inicializa la variable parrafo
const parrafo = document.getElementById('mensaje-volumen');

//Se inyecta el texto en el párrafo con textContent
parrafo.textContent = `El volumen de la esfera se calcula con la fórmula [${formula}], por tanto una esfera de radio ${radio}cm tiene un volumen de ${resultado.toFixed(2)}cm³`;