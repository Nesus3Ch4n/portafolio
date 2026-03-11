## Portafolio de Jesús Córdoba – Ingeniero en Sistemas

Aplicación de portafolio profesional construida con **Next.js 16 (App Router)**, **React 19**, **TypeScript** y **Tailwind CSS 4**, diseñada para mostrar experiencia en backend, frontend, DevOps y automatización con IA.

---

## Tecnologías principales

- **Framework**: Next.js 16 (App Router, `app/`)
- **Lenguaje**: TypeScript, React 19
- **Estilos**: Tailwind CSS 4, CSS variables de fuentes (`Work Sans`, `JetBrains Mono`)
- **UI kit**: Componentes de `shadcn/ui` + Radix UI
- **Iconos**: `lucide-react`
- **Analytics**: `@vercel/analytics`

---

## Estructura del proyecto

- **`app/`**
  - `layout.tsx`: layout raíz de la aplicación, configura las fuentes, SEO y envuelve toda la UI con `MouseProvider` para el efecto global del mouse y `Analytics` de Vercel.
  - `page.tsx`: página principal, donde se ensamblan las secciones del portafolio (`Header`, `Hero`, `About`, `Skills`, `Projects`, `Education`, `Blog`, `Contact`, `Footer`).
- **`components/`**
  - `header.tsx`: barra de navegación principal con enlaces a secciones internas.
  - `hero.tsx`: sección de presentación con nombre, rol, palabras clave y avatar central con efecto de glow reactivo al mouse.
  - `about.tsx`, `skills.tsx`, `projects.tsx`, `education.tsx`, `blog.tsx`, `contact.tsx`, `footer.tsx`: secciones de contenido del portafolio.
  - `MouseContext.tsx`: contexto global que gestiona la posición del mouse y anima los elementos glow registrados.
- **`components/ui/`**
  - `MouseGlow.tsx`:
    - `MouseGlow`: componente visual (círculo blur) que se registra en `MouseContext` y se mueve/opacita según la posición del mouse.
    - `MouseGlowHero`: combinación preconfigurada de dos `MouseGlow` para el avatar del `Hero`.
  - Otros componentes de UI (`button`, etc.) provenientes de `shadcn/ui`.

---

## Efecto de seguimiento de mouse (MouseGlow)

El proyecto implementa un efecto global donde ciertos elementos reaccionan a la posición del mouse con un **glow animado**.

- **Contexto global**: `MouseProvider` (`components/MouseContext.tsx`)
  - Escucha los eventos de `mousemove` en `document`.
  - Mantiene en estado:
    - `x`, `y`: posición actual del cursor en la ventana.
    - `normalizedX`, `normalizedY`: posición normalizada \([-1, 1]\) para posibles efectos avanzados.
    - `isHovering`: indica si el cursor está dentro de la ventana.
  - Expone:
    - `mousePosition`: datos actuales del cursor.
    - `registerGlowElement(element)`: registra elementos DOM que deben moverse/opacitarse según el mouse.
  - En cada frame (`requestAnimationFrame`), calcula la distancia del cursor al centro de cada elemento registrado y:
    - Aplica un `translate(x, y)` proporcional a la distancia (efecto de parallax).
    - Ajusta la opacidad en función de la distancia.

- **Proveedor global** (configurado en `app/layout.tsx`):
  - Toda la aplicación está envuelta en:
    - `<MouseProvider>{children}<Analytics /></MouseProvider>`
  - Esto permite que **cualquier componente** dentro del árbol use el hook `useMouse` o los componentes `MouseGlow`.

- **Componente `MouseGlow` (`components/ui/MouseGlow.tsx`)**:
  - Props:
    - `size`: `'sm' | 'md' | 'lg'` (controla el tamaño del círculo).
    - `color`: `'primary' | 'secondary' | 'accent'` (color del glow).
    - `intensity`: número para escalar la opacidad del efecto.
    - `className`: clases adicionales para posicionamiento (`top`, `left`, etc.).
  - En `useEffect`, registra su `div` con `registerGlowElement`.
  - El contexto actualiza `transform` y `opacity` del `div` automáticamente.

- **Uso en el Hero (`components/hero.tsx`)**:
  - El avatar central se envuelve en un `div` `relative`.
  - `MouseGlowHero` inserta dos `MouseGlow`:
    - Uno en la esquina superior derecha.
    - Otro en la esquina inferior izquierda.
  - Ambos se mueven y varían su opacidad según la posición global del cursor, creando un efecto dinámico que se siente conectado a toda la página.

### Cómo usar el efecto en otras secciones

En cualquier componente dentro de la app:

1. Asegúrate de que el contenedor donde quieras el efecto tenga `className="relative"` (o una variante equivalente).
2. Importa y renderiza `MouseGlow` o una variante.

Ejemplo:

```tsx
import { MouseGlow } from "@/components/ui/MouseGlow"

export function OtraSeccion() {
  return (
    <section className="relative py-16">
      {/* contenido de la sección */}
      <MouseGlow
        size="lg"
        color="accent"
        intensity={1}
        className="top-10 left-10"
      />
    </section>
  )
}
```

El efecto seguirá el cursor en toda la página y los elementos glow se moverán de forma suave alrededor de su posición base.

---

## Scripts disponibles

En el directorio del proyecto puedes ejecutar:

- **`npm run dev`**: inicia el servidor de desarrollo en `http://localhost:3000`.
- **`npm run build`**: genera el build de producción de Next.js.
- **`npm start`**: levanta el servidor en modo producción (requiere `npm run build` antes).
- **`npm run lint`**: ejecuta ESLint sobre el código del proyecto.

---

## Flujo de desarrollo

1. Clonar el repositorio.
2. Instalar dependencias:
   - `npm install`
3. Levantar entorno de desarrollo:
   - `npm run dev`
4. Editar secciones en `components/` o comportamiento global en `app/layout.tsx` / `components/MouseContext.tsx`.

---

## Despliegue

El proyecto está preparado para ser desplegado en **Vercel** u otros proveedores compatibles con Next.js:

- Generar build: `npm run build`
- Configurar la raíz del proyecto como app de Next.js.

