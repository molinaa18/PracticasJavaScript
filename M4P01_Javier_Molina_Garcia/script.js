// 1. Listar todas las cookies almacenadas.
console.log("--- LISTA INICIAL DE COOKIES ---");
console.log(document.cookie);

// 2. Añadir nueva cookie "M4_UD01_P01" (Valor: ms actuales, Expiración: 31/12 del año actual)
const anioActual = new Date().getFullYear();
const exp = new Date(anioActual, 11, 31).toUTCString();
document.cookie = `M4_UD01_P01=${Date.now()}; expires=${exp}; path=/`;

// 3. Mostrar como un objeto usando el snippet proporcionado
console.log("--- COOKIES COMO OBJETO (CON LA NUEVA COOKIE) ---");
console.log(
    document.cookie.split(';').reduce((cookies, cookie) => {
        const [name, value] = cookie.split('=').map(c => c.trim());
        return { ...cookies, [name]: value };
    }, {})
);

// 4. Eliminar la cookie creada
document.cookie = "M4_UD01_P01=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

// 5. Mostrar el objeto con las cookies actualizado (sin la cookie)
console.log("--- COOKIES COMO OBJETO (TRAS ELIMINAR) ---");
console.log(
    document.cookie.split(';').reduce((cookies, cookie) => {
        const [name, value] = cookie.split('=').map(c => c.trim());
        return { ...cookies, [name]: value };
    }, {})
);