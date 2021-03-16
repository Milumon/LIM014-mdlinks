// modulo para trabajar con ficheros y directorios
const fs = require('fs');
// modulo para trabajar con rutas
const path = require('path');

// función que recibe una ruta y verifica si es absoluta, retorna un booleano
const isAbsolute = (route) => path.isAbsolute(route);
// función que resuelve una ruta relativa a absoluta
// const resolveToAbsolute = (route) => path.resolve(route);
// función sincrona que recibe una ruta y verifica si es un directorio, retorna un boolean.
const isDirectory = (route) => fs.statSync(route).isDirectory();
// función sincrona que recibe una ruta y verifica si es un archivo, retorna un boolean.

const validAndResolve = ((route) => {
  if (!isAbsolute(route)) {
    const resolveToAbsolute = path.resolve(route);
    return resolveToAbsolute;
  }
  return route;
});

const isFileAndExists = (route) => {
  if (fs.statSync(route).isFile()) {
    return fs.existsSync(route);
  }
  return false;
};
// función que verifica si es un archivo .md
const isMarkdown = (route) => (path.extname(route) === '.md');
// función que verifica si la ruta existe, retorna un boolean.
// const isValidRoute = (route) => fs.existsSync(route);
// función que recorre un directorio y almacena en un array

// la ruta de los archivos dentro del directorio. Devuelve un array de rutas.
const arrayDirectory = (route) => fs.readdirSync(route);

// función que lee el contenido de un archivo y lo transforma a string
const stringFileContent = (route) => fs.readFileSync(route);
// función que resuelve rutas
// const normalize = (route) => path.normalize(route);

// exportar funciones para poder llamarlas desde otro archivo
module.exports = {
  // isAbsolute,
  // resolveToAbsolute,
  isMarkdown,
  isDirectory,
  // isFile,
  // isValidRoute,
  arrayDirectory,
  stringFileContent,
  // normalize,
  validAndResolve,
  isFileAndExists,
};
