# AppReservation

Un sistema de gestión de reservas para espacios compartidos que permite a los usuarios reservar, cancelar y visualizar sus reservas a través de una interfaz web.

## Tabla de Contenidos
- [Descripción](#descripción)
- [Instalación](#instalación)
- [Uso](#uso)
- [Pruebas](#pruebas)

## Descripción
Este proyecto es una solución integral para la gestión de reservas de espacios compartidos, diseñada para permitir a los usuarios realizar y gestionar sus reservas de forma eficiente y sin conflictos de horarios. Los usuarios pueden interactuar con el sistema a través de una interfaz web moderna y fácil de usar. El sistema garantiza que no existan reservas solapadas, lo que permite una gestión de espacios eficiente y libre de errores.

En el frontend, se ha optado por una arquitectura modular en lugar de micro frontends. Aunque los micro frontends pueden ser útiles para aplicaciones muy grandes con equipos distribuidos, en este caso, la complejidad adicional de gestionar múltiples aplicaciones frontales independientes no era necesaria. En su lugar, se optó por una estructura modular que permite crear componentes reutilizables y bien definidos.

Aunque los micro frontends pueden ser apropiados para proyectos con equipos distribuidos o sistemas extremadamente grandes, en este caso, la aplicación es relativamente sencilla y no requiere la complejidad adicional que implica gestionar múltiples aplicaciones frontales independientes. 
## Instalación

Instrucciones para instalar el proyecto en un entorno local.

### Requisitos previos

- Node.js (si es una aplicación web)

### Pasos para instalar

1. Clona el repositorio:
   git clone https://github.com/karen13hb/ReservationsFront.git

2. Navega a la carpeta del proyecto:
    cd AppReservation
3. Instala las dependencias:
    npm install

## Uso
    Ejecutar el comando:
    ng serve -o

## Pruebas
    Ejecutar pruebas con el comando:
    ng test


