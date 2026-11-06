# Matriz de priorización funcional — Kubo PH

**Versión:** 0.2  
**Estado:** Propuesta para validación  
**Documento relacionado:** `alcance-mvp.md`

## 1. Objetivo

Establecer prioridades para las funcionalidades identificadas en el alcance de Kubo PH, definiendo qué debe desarrollarse en la primera versión y qué puede incorporarse posteriormente.

La priorización considera la importancia funcional, las dependencias entre módulos, la utilidad para la administración y la complejidad de implementación.

## 2. Clasificación

| Prioridad | Significado |
|---|---|
| MVP | Funcionalidad propuesta para la primera versión. |
| POST-MVP | Funcionalidad que se desarrollará después del lanzamiento inicial. |
| FUTURO | Funcionalidad de expansión del producto. |
| PENDIENTE | Requiere análisis antes de tomar una decisión. |

## 3. Matriz de priorización

### 3.1. Copropiedades y configuración

| Funcionalidad | Prioridad |
|---|---|
| Registrar copropiedades | MVP |
| Consultar y editar copropiedades | MVP |
| Configurar información general | MVP |
| Registrar torres, bloques y sectores | MVP |
| Configurar nomenclatura de inmuebles | MVP |
| Configurar parámetros particulares | MVP |
| Administrar varias copropiedades desde una cuenta | PENDIENTE |
| Mantener separación de información | MVP |

### 3.2. Usuarios y seguridad

| Funcionalidad | Prioridad |
|---|---|
| Inicio y cierre de sesión | MVP |
| Crear usuarios administrativos | MVP |
| Gestionar roles y permisos básicos | MVP |
| Controlar acceso por copropiedad | MVP |
| Recuperación de contraseñas | MVP |
| Registro de auditoría detallado | POST-MVP |
| Gestión avanzada de sesiones | POST-MVP |

### 3.3. Personas e inmuebles

| Funcionalidad | Prioridad |
|---|---|
| Registrar y consultar personas | MVP |
| Actualizar información personal | MVP |
| Registrar propietarios y residentes | MVP |
| Registrar y consultar inmuebles | MVP |
| Relacionar personas con inmuebles | MVP |
| Identificar tipos de vínculo | MVP |
| Evitar duplicidad de registros | MVP |
| Consultar historial de relaciones | PENDIENTE |
| Gestionar cambios históricos de propietarios y residentes | PENDIENTE |
| Exportar información | POST-MVP |

### 3.4. Cartera y obligaciones

| Funcionalidad | Prioridad |
|---|---|
| Configurar conceptos de cobro | MVP |
| Configurar cuotas de administración | MVP |
| Definir periodos de facturación | MVP |
| Configurar vencimientos | MVP |
| Configurar descuentos por pronto pago | MVP |
| Configurar reglas de mora | MVP |
| Generar obligaciones por inmueble | MVP |
| Consultar saldos pendientes | MVP |
| Consultar estados de cuenta | MVP |
| Identificar inmuebles en mora | MVP |
| Registrar acuerdos de pago | PENDIENTE |
| Consultar historial de obligaciones | MVP |
| Generar reportes de cartera | MVP |

### 3.5. Pagos y recaudos

| Funcionalidad | Prioridad |
|---|---|
| Registrar pagos manualmente | MVP |
| Asociar pagos con inmuebles | MVP |
| Aplicar pagos a obligaciones | MVP |
| Gestionar pagos parciales | MVP |
| Registrar fecha, valor y medio de pago | MVP |
| Adjuntar comprobantes | MVP |
| Consultar historial de pagos | MVP |
| Identificar pagos pendientes de aplicación | PENDIENTE |
| Importar información desde Excel | PENDIENTE |
| Importar extractos bancarios | POST-MVP |
| Conciliación bancaria | POST-MVP |
| Identificar posibles pagos duplicados | POST-MVP |

### 3.6. Gestión financiera y contable

| Funcionalidad | Prioridad |
|---|---|
| Registrar ingresos y egresos | PENDIENTE |
| Clasificar movimientos financieros | PENDIENTE |
| Organizar soportes financieros | MVP |
| Consultar movimientos por periodo | PENDIENTE |
| Gestionar presupuestos | POST-MVP |
| Comparar presupuesto y ejecución | POST-MVP |
| Generar informes financieros | POST-MVP |
| Contabilidad completa | PENDIENTE |

### 3.7. Gestión documental

| Funcionalidad | Prioridad |
|---|---|
| Cargar archivos | MVP |
| Consultar y descargar documentos | MVP |
| Clasificar documentos | MVP |
| Asociar documentos a copropiedades | MVP |
| Relacionar documentos con personas e inmuebles | MVP |
| Organizar plantillas administrativas | MVP |
| Adaptar plantillas por copropiedad | MVP |
| Generar documentos desde plantillas | MVP |
| Gestionar formatos de archivo | MVP |
| Gestionar versiones de documentos | POST-MVP |

### 3.8. Comunicaciones y convivencia

| Funcionalidad | Prioridad |
|---|---|
| Elaborar comunicados | MVP |
| Gestionar plantillas | MVP |
| Elaborar llamados de atención | MVP |
| Asociar comunicaciones con personas e inmuebles | MVP |
| Registrar fechas y motivos | MVP |
| Adjuntar evidencias | MVP |
| Consultar historial de comunicaciones | MVP |
| Distribución y notificaciones automáticas | POST-MVP |

### 3.9. Solicitudes y PQR

| Funcionalidad | Prioridad |
|---|---|
| Registrar solicitudes y PQR | POST-MVP |
| Clasificar solicitudes | POST-MVP |
| Asignar responsables | POST-MVP |
| Registrar fechas y estados | POST-MVP |
| Adjuntar documentos | POST-MVP |
| Registrar respuestas | POST-MVP |
| Consultar historial | POST-MVP |

### 3.10. Proveedores y contratos

| Funcionalidad | Prioridad |
|---|---|
| Registrar proveedores | POST-MVP |
| Gestionar información de contacto | POST-MVP |
| Registrar contratos | POST-MVP |
| Adjuntar contratos y soportes | POST-MVP |
| Registrar vigencias | POST-MVP |
| Consultar historial de proveedores | POST-MVP |
| Seguimiento a vencimientos | POST-MVP |

### 3.11. Mantenimiento y operación

| Funcionalidad | Prioridad |
|---|---|
| Registrar novedades de zonas comunes | POST-MVP |
| Registrar mantenimientos preventivos | POST-MVP |
| Registrar mantenimientos correctivos | POST-MVP |
| Asignar responsables | POST-MVP |
| Registrar fechas y estados | POST-MVP |
| Adjuntar evidencias | POST-MVP |
| Consultar historial de mantenimiento | POST-MVP |

### 3.12. Reuniones y decisiones administrativas

| Funcionalidad | Prioridad |
|---|---|
| Registrar reuniones | POST-MVP |
| Organizar convocatorias | POST-MVP |
| Elaborar y almacenar actas | POST-MVP |
| Registrar decisiones | POST-MVP |
| Registrar compromisos | POST-MVP |
| Asignar responsables | POST-MVP |
| Hacer seguimiento a compromisos | POST-MVP |

### 3.13. Informes y reportes

| Funcionalidad | Prioridad |
|---|---|
| Consultar información de personas e inmuebles | MVP |
| Consultar cartera | MVP |
| Consultar pagos y recaudos | MVP |
| Consultar movimientos financieros | PENDIENTE |
| Generar reportes administrativos básicos | MVP |
| Exportar información | MVP |
| Indicadores avanzados | POST-MVP |
| Tableros de gestión | POST-MVP |

### 3.14. Portal de residentes e integraciones

| Funcionalidad | Prioridad |
|---|---|
| Portal de residentes | FUTURO |
| Consulta de estados de cuenta por residentes | FUTURO |
| Descarga de documentos por residentes | FUTURO |
| Registro de PQR por residentes | FUTURO |
| Notificaciones automáticas | FUTURO |
| Aplicación móvil | FUTURO |
| Integraciones bancarias directas | FUTURO |
| Integraciones con proveedores | FUTURO |
| Automatización avanzada | FUTURO |

## 4. Requisitos transversales

Deben considerarse desde el diseño y desarrollo inicial:

- [ ] Seguridad y protección de información.
- [ ] Separación de datos entre copropiedades.
- [ ] Control de roles y permisos.
- [ ] Validaciones de datos.
- [ ] Manejo de errores.
- [ ] Trazabilidad de operaciones importantes.
- [ ] Arquitectura modular.
- [ ] Diseño adaptable.
- [ ] Gestión segura de archivos.
- [ ] Copias de seguridad.
- [ ] Pruebas funcionales.
- [ ] Documentación técnica.

## 5. Dependencias entre módulos

1. La configuración de copropiedades debe preceder al registro de sus inmuebles.
2. La gestión de personas e inmuebles debe estar disponible antes de asociar obligaciones y pagos.
3. Los conceptos de cobro y las reglas de facturación deben definirse antes de generar obligaciones.
4. Las obligaciones deben existir antes de aplicar pagos sobre ellas.
5. La estructura documental debe definirse antes de automatizar la generación de archivos.
6. Los permisos deben diseñarse desde el inicio y aplicarse a todos los módulos.
7. Los reportes deben construirse sobre información previamente validada.

## 6. Criterios de priorización

Las funcionalidades se priorizarán considerando:

- Valor que aportan a la administración.
- Necesidad operativa.
- Dependencia con otros módulos.
- Complejidad técnica.
- Riesgo de implementación.
- Posibilidad de validar su funcionamiento.
- Capacidad de reutilización para otras copropiedades.

## 7. Decisiones pendientes

- [ ] Definir si Kubo PH administrará varias copropiedades desde una misma cuenta en el MVP.
- [ ] Definir el alcance de la contabilidad.
- [ ] Determinar si la importación de Excel es indispensable para el lanzamiento.
- [ ] Definir el manejo de pagos no identificados.
- [ ] Validar si los acuerdos de pago entran en la primera versión.
- [ ] Definir el alcance histórico de personas e inmuebles.
- [ ] Validar la generación de documentos desde plantillas.
- [ ] Confirmar qué reportes son indispensables.
- [ ] Estimar complejidad y esfuerzo de cada módulo.

## 8. Control de cambios

Esta matriz representa una propuesta de priorización y deberá actualizarse después de validar los procesos reales de administración y completar las historias de usuario.

Ninguna funcionalidad se considera aprobada para desarrollo únicamente por aparecer clasificada como MVP.

**Estado:** Pendiente de validación.

