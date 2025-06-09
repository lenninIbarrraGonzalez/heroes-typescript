# Hero SPA TypeScript

Esta es una Single Page Application (SPA) de héroes desarrollada con **React** y **TypeScript**. Permite autenticación, navegación protegida por rutas privadas/públicas y búsqueda de héroes de DC y Marvel.

## ![Demo de la app](/public/assets/demo/demo.gif)

## [pagina demo](https://spaheroes.netlify.app/login)

## Características

- **Autenticación** con rutas públicas y privadas.
- **Listado y búsqueda** de héroes por nombre o editorial.
- **Protección de rutas** usando context y React Router.
- **Tipado estricto** con TypeScript.
- **Componentes reutilizables** y custom hooks.
- **Pruebas unitarias** con Jest y React Testing Library.

## Estructura de carpetas

```
src/
  auth/           # Lógica de autenticación (context, hooks, pages)
  heroes/         # Lógica de héroes (componentes, helpers, rutas, tipos)
  hooks/          # Custom hooks reutilizables
  router/         # Rutas principales, privadas y públicas
  ui/             # Componentes de interfaz (Navbar, etc)
  HeroesApp.tsx   # Componente raíz de la app
  index.tsx       # Entry point
```

## Scripts disponibles

- `npm start` — Inicia la app en modo desarrollo.
- `npm run build` — Genera el build de producción.
- `npm test` — Ejecuta las pruebas unitarias.

## Instalación

1. Clona el repositorio.
2. Instala dependencias:

   ```sh
   npm install
   ```

3. Inicia la app:

   ```sh
   npm start
   ```

## Pruebas unitarias

El proyecto incluye configuración para **Jest** y **React Testing Library**.  
Para ejecutar las pruebas:

```sh
npm test
```

## Tecnologías usadas

- React 18+
- TypeScript
- React Router DOM v6
- Context API
- Jest + React Testing Library
- Bootstrap 5

## Notas

- Las imágenes de los héroes deben estar en la carpeta `public/assets/heroes/`.
- El estado de autenticación se guarda en `localStorage` para persistencia.

---

Desarrollado como ejemplo educativo para manejo de rutas, autenticación y tipado en React + TypeScript.
