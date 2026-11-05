

# Alcance del MVP — Kubo PH

**Versión:** 0.1  
**Estado:** En definición  
**Tipo de producto:** Plataforma web para la gestión de propiedad horizontal.

## 1. Objetivo del MVP

Construir una primera versión funcional de Kubo PH que permita a una administración gestionar y centralizar la información y los principales procesos de una copropiedad.

El MVP debe establecer una base tecnológica organizada, segura, escalable y flexible, que permita incorporar nuevas funcionalidades sin tener que reconstruir el sistema.

La primera versión estará enfocada en el usuario administrativo. La incorporación de residentes se contempla para una etapa posterior.

## 2. Alcance funcional propuesto

Los siguientes módulos representan el alcance candidato del producto. Las funcionalidades deberán analizarse y priorizarse antes de considerarse comprometidas para el lanzamiento.

### 2.1. Configuración y gestión de copropiedades

- [ ] Registrar una copropiedad.
- [ ] Consultar y actualizar la información de la copropiedad.
- [ ] Configurar datos generales de identificación y contacto.
- [ ] Registrar torres, bloques o sectores.
- [ ] Configurar nomenclatura y clasificación de inmuebles.
- [ ] Gestionar parámetros y configuraciones particulares de cada copropiedad.
- [ ] Permitir administrar más de una copropiedad desde una misma cuenta administrativa.

### 2.2. Usuarios, autenticación y permisos

- [ ] Crear e iniciar sesión con una cuenta administrativa.
- [ ] Gestionar usuarios del sistema.
- [ ] Definir roles y permisos.
- [ ] Restringir el acceso según el rol asignado.
- [ ] Separar la información de cada copropiedad.
- [ ] Registrar actividad y cambios relevantes realizados por los usuarios.
- [ ] Definir mecanismos de recuperación de acceso.

### 2.3. Gestión de personas

- [ ] Registrar personas.
- [ ] Consultar y actualizar información personal.
- [ ] Identificar propietarios.
- [ ] Identificar residentes.
- [ ] Registrar datos de contacto.
- [ ] Relacionar personas con uno o varios inmuebles.
- [ ] Permitir diferentes tipos de vínculos entre personas e inmuebles.
- [ ] Consultar el historial de relaciones.
- [ ] Registrar cambios de propietarios y residentes.
- [ ] Evitar duplicidad de registros.

### 2.4. Gestión de inmuebles

- [ ] Registrar inmuebles.
- [ ] Identificar cada inmueble mediante su nomenclatura.
- [ ] Asociar inmuebles a torres, bloques o sectores.
- [ ] Registrar información complementaria del inmueble.
- [ ] Relacionar inmuebles con propietarios y residentes.
- [ ] Consultar el historial de ocupación y propiedad.
- [ ] Consultar la información individual de cada inmueble.

### 2.5. Gestión de cartera

- [ ] Configurar conceptos de cobro.
- [ ] Configurar cuotas de administración.
- [ ] Definir periodos de facturación.
- [ ] Configurar fechas de vencimiento.
- [ ] Configurar descuentos por pronto pago.
- [ ] Definir reglas de mora e intereses.
- [ ] Registrar obligaciones por inmueble.
- [ ] Consultar saldos pendientes.
- [ ] Consultar estados de cuenta.
- [ ] Identificar inmuebles en mora.
- [ ] Gestionar acuerdos de pago.
- [ ] Registrar abonos y saldos.
- [ ] Consultar el historial de cartera.
- [ ] Generar reportes de cartera.

### 2.6. Gestión de pagos y movimientos financieros

- [ ] Registrar pagos.
- [ ] Asociar pagos con inmuebles y obligaciones.
- [ ] Registrar fechas, valores y medios de pago.
- [ ] Adjuntar soportes de pago.
- [ ] Consultar historial de pagos.
- [ ] Gestionar pagos parciales.
- [ ] Identificar pagos pendientes de aplicar.
- [ ] Importar información desde archivos Excel.
- [ ] Importar extractos bancarios.
- [ ] Facilitar la conciliación de movimientos.
- [ ] Identificar posibles pagos duplicados.
- [ ] Generar reportes de recaudo.

### 2.7. Gestión documental

- [ ] Crear y organizar documentos.
- [ ] Clasificar documentos por categorías.
- [ ] Asociar documentos a copropiedades, personas e inmuebles.
- [ ] Adjuntar archivos.
- [ ] Consultar y descargar documentos.
- [ ] Gestionar versiones de documentos.
- [ ] Definir formatos de archivo admitidos.
- [ ] Organizar plantillas administrativas.
- [ ] Permitir adaptar plantillas a cada copropiedad.
- [ ] Generar documentos a partir de plantillas.
- [ ] Exportar documentos en formatos compatibles.

### 2.8. Comunicaciones y convivencia

- [ ] Crear comunicados.
- [ ] Utilizar plantillas de comunicación.
- [ ] Adaptar diseños y contenido de las plantillas.
- [ ] Registrar llamados de atención.
- [ ] Asociar comunicaciones con inmuebles y personas.
- [ ] Consultar el historial de comunicaciones.
- [ ] Gestionar estados de los documentos.
- [ ] Generar documentos para impresión o distribución.

### 2.9. Gestión administrativa y operativa

- [ ] Registrar solicitudes administrativas.
- [ ] Gestionar tareas y actividades.
- [ ] Asignar responsables.
- [ ] Definir fechas y estados de seguimiento.
- [ ] Registrar mantenimientos.
- [ ] Gestionar novedades de zonas comunes.
- [ ] Consultar historial de actividades.
- [ ] Organizar eventos y actividades de la copropiedad.

### 2.10. Informes y consultas

- [ ] Consultar indicadores generales de administración.
- [ ] Generar reportes de personas e inmuebles.
- [ ] Generar reportes de cartera.
- [ ] Generar reportes de pagos.
- [ ] Consultar información por periodos.
- [ ] Exportar información.
- [ ] Facilitar la generación de informes administrativos.

## 3. Requisitos transversales

Estas características deberán considerarse desde el diseño inicial, aunque algunas funcionalidades se implementen progresivamente.

- [ ] Interfaz clara, intuitiva y adaptable a diferentes tamaños de pantalla.
- [ ] Arquitectura modular.
- [ ] Separación de información entre copropiedades.
- [ ] Seguridad y protección de datos personales.
- [ ] Control de acceso por roles y permisos.
- [ ] Validación de información.
- [ ] Manejo de errores.
- [ ] Registro de operaciones importantes.
- [ ] Copias de seguridad y recuperación de información.
- [ ] Capacidad de crecimiento y mantenimiento.
- [ ] Importación y exportación de información.
- [ ] Compatibilidad con los formatos de archivos definidos.

## 4. Funcionalidades contempladas para etapas posteriores

No forman parte del alcance confirmado de la primera versión.

- [ ] Portal de residentes.
- [ ] Consulta de estados de cuenta por parte de residentes.
- [ ] Consulta y descarga de documentos por parte de residentes.
- [ ] Registro de solicitudes y PQR por residentes.
- [ ] Notificaciones automáticas.
- [ ] Aplicación móvil.
- [ ] Integraciones con entidades bancarias.
- [ ] Integraciones con proveedores externos.
- [ ] Automatización avanzada de procesos administrativos.

## 5. Criterios para considerar terminado el MVP

- [ ] La administración puede ingresar de manera segura.
- [ ] Se puede crear y administrar una copropiedad.
- [ ] Se pueden gestionar personas e inmuebles.
- [ ] Se pueden consultar las relaciones entre personas e inmuebles.
- [ ] Se pueden ejecutar los procesos financieros definidos para el MVP.
- [ ] Se pueden gestionar los documentos y procesos administrativos priorizados.
- [ ] La información de diferentes copropiedades permanece aislada.
- [ ] Los procesos principales cuentan con validaciones y pruebas.
- [ ] Existe documentación técnica y funcional suficiente para mantener el sistema.
- [ ] La aplicación puede desplegarse en un entorno de producción.

## 6. Estado del alcance

Este documento es una lista de trabajo inicial. Las casillas sin marcar no representan necesariamente funcionalidades aprobadas.

Cada módulo deberá pasar por un proceso de análisis que permita:

1. Confirmar si hace parte del MVP.
2. Identificar sus procesos y reglas de negocio.
3. Definir las historias de usuario.
4. Establecer prioridades.
5. Identificar dependencias con otros módulos.
6. Definir criterios de aceptación.
7. Estimar su complejidad de implementación.

**Importante:** Kubo PH todavía no cuenta con una aplicación funcional implementada. La construcción del sistema comenzará después de completar la definición del producto, los requisitos y las decisiones técnicas iniciales.

