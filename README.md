# Documentacion Parcial Final - Electiva 2 (Desarrollo Web)

**Integrantes:**
- Nicolas Cacua
- Sergio Aguirre
- Sergio Ballen

La API Rest nos proporciona información sobre platos de comida. El link de la API es este [Link de la API Rest](https://api-dishes.vercel.app/). Aquí esta un resumen de los datos proporcionados:

## Tipos

### Plato
Representa un plato de comida.

| Campo         | Tipo      | Descripción                              |
|---------------|-----------|------------------------------------------|
| \_id          | ID        | El identificador único del plato.        |
| idDish        | String    | El identificador único del plato en formato de cadena. |
| nombre        | String    | El nombre del plato.                     |
| calorías      | Int       | La cantidad de calorías del plato.       |
| esVegetariano | Boolean   | Indica si el plato es vegetariano.       |
| valor         | Int       | El valor monetario del plato.            |
| comentarios   | String    | Comentarios adicionales sobre el plato.  |

## Consulta

### Devolver platos 
Devuelve una lista de platos.

```graphql
platos: [Plato!]!
```
Esta API proporciona la funcionalidad para obtener la lista de todos los platos disponibles.

##### Endpoint
GET /platos


##### Respuesta Exitosa
- **Código:** 200 OK
- **Contenido:** Una lista de objetos JSON, cada uno representando un plato.

```json
[
  {
    "_id": "64cc474c3b173649391f1eaa",
    "idDish": "12314564456",
    "nombre": "Mas pollo",
    "calorias": 200,
    "esVegetariano": false,
    "valor": 40000,
    "comentarios": "Pollo cocinado a las finas hierbas"
  },
  {
    "_id": "64cc48723b173649391f1ed8",
    "idDish": "123as",
    "nombre": "Ajiaco",
    "calorias": 400,
    "esVegetariano": false,
    "valor": 10000,
    "comentarios": "Rica sopa"
  },
  ...
]
```
### Devolver Platos por ID
#### Descripción
Esta API proporciona la funcionalidad para buscar un plato por su ID.

##### Endpoint
GET /platos/:id


##### Parámetros de la URL
- `id`: El identificador único del plato que se desea buscar.

##### Respuesta Exitosa
- **Código:** 200 OK
- **Contenido:** Un objeto JSON representando el plato encontrado.

```json
{
  "_id": "64cc474c3b173649391f1eaa",
  "idDish": "12314564456",
  "nombre": "Mas pollo",
  "calorias": 200,
  "esVegetariano": false,
  "valor": 40000,
  "comentarios": "Pollo cocinado a las finas hierbas"
}
```

## Configuración
1. Clonar este repositorio.
2. Instalar las dependencias ejecutando `npm install`

# Documentación del Proyecto

Esta es la documentación del proyecto que detalla los archivos principales y su propósito en la aplicación.

## Estructura de Directorios

- `node_modules/`: Contiene todas las dependencias de npm instaladas para este proyecto.
- `index.js`: Punto de entrada principal de la aplicación Node.js.
- `package-lock.json`: Registro de las versiones exactas de las dependencias instaladas.
- `package.json`: Descriptor del proyecto Node.js.
- `resolvers.js`: Contiene las funciones de resolución para las consultas GraphQL.
- `schema.graphql`: Define el esquema GraphQL para la aplicación.

## Descripción de los Archivos Principales

### `index.js`

Archivo principal de la aplicación Node.js. Contiene la inicialización del servidor y la configuración básica.

### `package-lock.json`

Archivo generado automáticamente por npm. Registra las versiones exactas de las dependencias instaladas.

### `package.json`

Descriptor del proyecto Node.js. Contiene información sobre el proyecto, incluyendo las dependencias y los scripts de npm.

### `resolvers.js`

Contiene las funciones de resolución para las consultas GraphQL en la aplicación. Son responsables de devolver los datos solicitados por las consultas GraphQL.

### `schema.graphql`

Define el esquema GraphQL para la aplicación. Describe los tipos de datos disponibles y las operaciones que se pueden realizar en ellos.

## Uso
Para ejecutar la aplicación, ingresa al LocalHost al momento de correr la App.

## Licencia
Este proyecto está bajo la licencia Creative Commons - No comercial. 
