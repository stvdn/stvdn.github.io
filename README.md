# Portafolio Next.js con TypeScript

Bienvenido a mi portafolio web personal minimalista construido con **Next.js** y **TypeScript**. Este proyecto está desplegado usando **GitHub Pages** y **GitHub Actions** para una integración sin problemas y despliegue automatizado. ¡Siéntete libre de reproducir el código o contactarme si tienes alguna pregunta! 🤝

## 🚀 Características

- **Next.js** para un desarrollo moderno con React
- **TypeScript** para la verificación de tipos estáticos y mayor fiabilidad del código
- **Diseño responsivo** optimizado para todos los dispositivos
- **GitHub Pages** para alojar el sitio estático
- **GitHub Actions** para integración y despliegue continuo

## 📦 Pasos para el Despliegue

**IMPORTANTE:** El nombre del repositorio debe ser nombredeusuario.github.io

### 1. Habilitar GitHub Actions

Habilita GitHub Actions para el repositorio siguiendo [esta guía](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow).

### 2. Configurar la Generación de Páginas Estáticas en Next.js

Actualiza tu configuración de Next.js para habilitar la generación de sitios estáticos y establecer la ruta base con el nombre del proyecto. Modifica el archivo `next.config.mjs` de la siguiente manera:

```javascript
// FILE: next.config.mjs
const nextConfig = {
  //alguna otra configuración
  output: "export",
  basePath: "/portfolio", // Establece esto con el nombre de tu proyecto en package.json
};

export default nextConfig;
```

### 3. Configurar los Flujos de Trabajo de GitHub Actions

Crea un archivo .yml en la carpeta .github/workflows/ con el nombre nextjs.yml y copia el contenido del archivo que esta en la misma ruta en este repositorio.


### 4. Realiza Commit y Push de los Cambios

Después de configurar todo, haz commit y push de tus cambios a GitHub:

git add .

git commit -m "Set up GitHub Pages deployment"

git push origin main

Una vez hecho el push, GitHub Actions construirá y desplegará automáticamente tu portafolio en GitHub Pages en el link nombredeusuario.github.io

