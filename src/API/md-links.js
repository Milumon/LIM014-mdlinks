const options = require('./options.js');
const methods = require('./methods.js');

/* modulo para las funciones referentes a las rutas */

const mdLinks = (path, options = { validate: true }) => new Promise((resolve, reject) => {
  // convertir a ruta absoluta
  const validRoute = methods.validAndResolve(path);
  const result = [];

  if (methods.isFileAndExists(validRoute)) { // validar ruta y si existe
    if (methods.isMarkdown(validRoute)) { // validar si es archivo MarkDown
      result.push(validRoute);
      console.log(JSON.stringify(result)); // test array de md's
    }
  } else if (methods.isDirectory(validRoute)) {
    const arrayRoutes = methods.arrayDirectory(validRoute);
    const routesMD = arrayRoutes.filter((route) => route.endsWith('.md'));
    routesMD.forEach((mdlink) => mdLinks(mdlink, options.validate));
  }
});

// mdLinks('./Readme.md', { validate: true });
mdLinks('./', true);

module.exports = {
  mdLinks,
};
