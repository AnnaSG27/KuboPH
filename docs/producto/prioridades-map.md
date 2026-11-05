# Priorización funcional — Kubo PH

**Versión:** 0.1  
**Estado:** Propuesta inicial  
**Producto:** Kubo PH

## 1. Objetivo

Establecer un orden de implementación para las funcionalidades identificadas en el alcance candidato del MVP.

La priorización busca construir primero una base funcional que permita administrar una copropiedad y posteriormente incorporar procesos financieros, documentales y operativos más avanzados.

## 2. Clasificación

| Clasificación | Significado |
|---|---|
| MVP | Funcionalidad necesaria para la primera versión funcional. |
| POST-MVP | Funcionalidad importante que puede desarrollarse después del lanzamiento inicial. |
| FUTURO | Funcionalidad de expansión del producto. |
| PENDIENTE | Requiere análisis antes de asignar una prioridad definitiva. |

## 3. Matriz de priorización

### 3.1. Configuración y copropiedades

| Funcionalidad | Prioridad propuesta |
|---|---|
| Registrar una copropiedad | MVP |
| Consultar y editar copropiedades | MVP |
| Configurar información general | MVP |
| Registrar torres, bloques y sectores | MVP |
| Configurar nomenclatura de inmuebles | MVP |
| Administrar varias copropiedades por cuenta | PENDIENTE |

### 3.2. Usuarios y seguridad

| Funcionalidad | Prioridad propuesta |
|---|---|
| Inicio y cierre de sesión | MVP |
| Gestión de usuarios administrativos | MVP |
| Roles y permisos básicos | MVP |
| Separación de información por copropiedad | MVP |
| Recuperación de acceso | MVP |
| Registro de auditoría detallado | POST-MVP |

### 3.3. Personas e inmuebles

| Funcionalidad | Prioridad propuesta |
|---|---|
| Registrar y consultar personas | MVP |
| Registrar y consultar inmuebles | MVP |
| Relacionar personas con inmuebles | MVP |
| Identificar propietarios y residentes | MVP |
| Evitar duplicidad de personas | MVP |
| Consultar historial de propietarios y residentes | POST-MVP |
| Gestionar cambios históricos de relaciones | POST-MVP |

### 3.4. Cartera

| Funcionalidad | Prioridad propuesta |
|---|---|
| Configurar conceptos de cobro | MVP |
| Configurar cuotas y periodos | MVP |
| Registrar obligaciones por inmueble | MVP |
| Consultar saldos y estados de cuenta | MVP |
| Registrar descuentos por pronto pago | MVP |
| Aplicar reglas de mora | MVP |
| Consultar inmuebles en mora | MVP |
| Gestionar acuerdos de pago | POST-MVP |
| Generar reportes avanzados de cartera | POST-MVP |

### 3.5. Pagos y movimientos financieros

| Funcionalidad | Prioridad propuesta |
|---|---|
| Registrar pagos manualmente | MVP |
| Asociar pagos con obligaciones | MVP |
| Consultar historial de pagos | MVP |
| Registrar pagos parciales | MVP |
| Adjuntar soportes de pago | MVP |
| Importar archivos Excel | POST-MVP |
| Importar extractos bancarios | POST-MVP |
| Conciliación bancaria | POST-MVP |
| Identificar posibles duplicados | POST-MVP |

### 3.6. Gestión documental

| Funcionalidad | Prioridad propuesta |
|---|---|
| Cargar y consultar documentos | MVP |
| Clasificar documentos | MVP |
| Asociar documentos a inmuebles y personas | MVP |
| Descargar archivos | MVP |
| Gestionar plantillas | MVP |
| Generar documentos desde plantillas | POST-MVP |
| Gestionar versiones de documentos | POST-MVP |
| Exportaciones y formatos avanzados | POST-MVP |

### 3.7. Comunicaciones y convivencia

| Funcionalidad | Prioridad propuesta |
|---|---|
| Crear comunicados | POST-MVP |
| Gestionar plantillas de comunicados | POST-MVP |
| Generar llamados de atención | POST-MVP |
| Asociar comunicaciones a inmuebles y personas | POST-MVP |
| Consultar historial de comunicaciones | POST-MVP |

### 3.8. Gestión administrativa y operativa

| Funcionalidad | Prioridad propuesta |
|---|---|
| Registrar solicitudes administrativas | POST-MVP |
| Gestionar tareas y actividades | POST-MVP |
| Asignar responsables | POST-MVP |
| Registrar mantenimientos | POST-MVP |
| Gestionar novedades de zonas comunes | POST-MVP |
| Gestionar eventos | FUTURO |

### 3.9. Informes y consultas

| Funcionalidad | Prioridad propuesta |
|---|---|
| Consultas generales de personas e inmuebles | MVP |
| Resumen básico de cartera | MVP |
| Reporte de pagos | MVP |
| Exportación de información básica | POST-MVP |
| Indicadores y tableros avanzados | POST-MVP |

### 3.10. Portal de residentes e integraciones

| Funcionalidad | Prioridad propuesta |
|---|---|
| Portal de residentes | FUTURO |
| Consulta de estados de cuenta por residentes | FUTURO |
| Solicitudes y PQR de residentes | FUTURO |
| Notificaciones automáticas | FUTURO |
| Aplicación móvil | FUTURO |
| Integraciones bancarias | FUTURO |
| Integraciones con proveedores externos | FUTURO |

## 4. Requisitos transversales

Los siguientes aspectos deben considerarse desde el inicio del diseño y desarrollo:

- [ ] Seguridad y protección de información.
- [ ] Separación de datos entre copropiedades.
- [ ] Validaciones de formularios y datos.
- [ ] Control de permisos.
- [ ] Manejo de errores.
- [ ] Arquitectura modular.
- [ ] Diseño adaptable.
- [ ] Estrategia de copias de seguridad.
- [ ] Pruebas de funcionalidades principales.
- [ ] Documentación técnica.

## 5. Dependencias entre módulos

El desarrollo deberá respetar las siguientes dependencias:

1. La configuración de copropiedades debe existir antes de registrar sus inmuebles.
2. La gestión de personas e inmuebles debe estar definida antes de asociar obligaciones y pagos.
3. Las obligaciones deben existir antes de aplicar pagos sobre ellas.
4. La estructura documental debe estar definida antes de automatizar la generación de documentos.
5. Los roles y permisos deben considerarse desde el diseño de la aplicación.

## 6. Criterios para aprobar el alcance definitivo

Antes de comenzar la implementación se deberá:

- [ ] Validar las funcionalidades propuestas como MVP.
- [ ] Revisar las necesidades reales de administración.
- [ ] Identificar los procesos que actualmente se realizan mediante Excel y otros archivos.
- [ ] Definir los datos que deben migrarse.
- [ ] Identificar las reglas financieras y administrativas.
- [ ] Establecer dependencias entre funcionalidades.
- [ ] Estimar esfuerzo y complejidad.
- [ ] Aprobar el alcance de la primera versión.

## 7. Control de cambios

La clasificación de funcionalidades podrá modificarse durante el análisis del producto.

Cualquier cambio relevante deberá reflejarse también en las historias de usuario y en los documentos relacionados.

**Nota:** Esta matriz es una propuesta de planificación. No representa todavía un compromiso de implementación ni una especificación funcional definitiva.

