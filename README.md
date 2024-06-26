# Documentación de la Página de Selección de Platillos de Comida

## Descripción

La página de selección de platillos de comida es una aplicación web desarrollada utilizando React con TypeScript. Permite a los usuarios seleccionar diferentes platillos de un menú, calcular el monto total en tiempo real a medida que se van seleccionando los platillos, incluir opciones para calcular propinas y mostrar el monto total con y sin propinas.

## Características Principales

- Selección de Platillos: Los usuarios pueden elegir entre una variedad de platillos del menú.
- Cálculo del Monto Total en Tiempo Real: El monto total se actualiza automáticamente a medida que los usuarios seleccionan los platillos.
- Opciones de Propinas: Se proporcionan opciones para calcular las propinas basadas en el monto total.
- Visualización del Monto Total con y sin Propinas: Se muestra el monto total final con y sin propinas en tiempo real.

## Tecnologías Utilizadas

- React: Biblioteca de JavaScript para construir interfaces de usuario.
- TypeScript: Extensión de JavaScript que añade tipado estático.
- Tailwind CSS: Framework de diseño CSS utility-first.
- useMemo: Hook de React utilizado para optimizar cálculos computacionalmente intensivos.

## Estructura principal del Proyecto

```
src/
|-- components/
|   |-- OrderTotals.tsx
|   |-- OrderContent.tsx
|   |-- TipPercentage.tsx
|-- hooks/
|   |-- useOrder.ts
|-- App.tsx
|-- App.css
|-- index.tsx
|-- tailwind.config.js
```

## Componentes Principales

### DishSelector

El componente `OrderContent` es el componente que muestra el contenido en tiempo real de lo que se esta ordenando junto con el costo y la cantidad de cada item.

### TipCalculator

El componente `TipPercentage` proporciona opciones para calcular las propinas y muestra el monto total final con y sin propinas.

## Uso

1. Clonar el Repositorio:

```bash
git clone https://github.com/ysaacnoa/calculator-tip.git
```

2. Instalar Dependencias:

```bash
npm install
```

3. Ejecutar la Aplicación:

```bash
npm start
```

## Contribución

¡Las contribuciones son bienvenidas! Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz commits (`git commit -am 'Agrega nueva característica'`).
4. Haz push a la rama (`git push origin feature/nueva-caracteristica`).
5. Crea un nuevo pull request.
