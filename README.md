# ¿Quién es ese Pokémon? 🔍⚡

> Adivina el nombre del Pokémon a partir de su silueta, al más puro estilo del clásico segmento del anime.

Un mini-juego hecho con **React + Vite** que consulta la [PokéAPI](https://pokeapi.co/) para traer un Pokémon aleatorio, mostrar su silueta y desafiarte a adivinar su nombre antes de quedarte sin intentos.

## 🎮 Cómo se juega

1. Al cargar, se obtiene un Pokémon aleatorio y se muestra su silueta.
2. Escribe el nombre que crees que le corresponde en el campo de texto.
3. Presiona **adivinar** para comprobar tu respuesta.
4. Si aciertas, la silueta se revela a todo color 🎉
5. Tienes **3 intentos**. Si los agotas, se revela el nombre del Pokémon.
6. Presiona **jugar de nuevo** para reiniciar con un nuevo Pokémon.

## ✨ Características

- 🎲 Pokémon aleatorio en cada partida, obtenido en vivo desde la PokéAPI.
- 🖼️ Silueta oculta que se revela animada al adivinar correctamente.
- ❤️ Sistema de intentos limitados (3 oportunidades).
- 🔊 Sonido de introducción al iniciar una nueva partida.
- ⚛️ Construido con React 19 y el React Compiler habilitado.

## 🛠️ Tecnologías

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [PokéAPI](https://pokeapi.co/)

## 🚀 Empezar a jugar en local

Requisitos: Node.js instalado.

```bash
# Instalar dependencias
npm install

# Levantar el servidor de desarrollo
npm run dev
```

Luego abre la URL que te indique Vite (por defecto `http://localhost:5173`) en tu navegador.

### Otros comandos disponibles

| Comando           | Descripción                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Inicia el servidor de desarrollo con HMR |
| `npm run build`   | Genera la build de producción            |
| `npm run preview` | Sirve la build de producción localmente  |
| `npm run lint`    | Ejecuta ESLint sobre el proyecto         |

## 📁 Estructura del proyecto

```text
src/
├── assets/            # Imágenes y recursos estáticos
├── hooks/
│   └── UsePokemon.js  # Hook para obtener y recargar el Pokémon
├── service/
│   └── pokemon.js      # Llamada a la PokéAPI
├── App.jsx             # Lógica y UI principal del juego
└── App.css             # Estilos del juego
```

## 🙌 Créditos

Datos e imágenes de Pokémon obtenidos gracias a la increíble [PokéAPI](https://pokeapi.co/).

---

Hecho con 💛 para los fans de Pokémon.
