# Seguridad y gestión de permisos — Kubo PH

**Versión:** 0.1  
**Estado:** Propuesta inicial  
**Ámbito:** Seguridad, autenticación, autorización y protección de información.

## 1. Propósito

Definir los principios y requerimientos iniciales para controlar el acceso a Kubo PH y proteger la información administrada por la plataforma.

La solución deberá permitir que diferentes usuarios accedan únicamente a las funcionalidades y datos que les correspondan, considerando su rol y las copropiedades a las que tengan autorización.

## 2. Principios de seguridad

- **Confidencialidad:** proteger la información personal, administrativa y financiera.
- **Integridad:** evitar modificaciones no autorizadas o inconsistencias en los datos.
- **Disponibilidad:** procurar que la información y los servicios estén disponibles cuando se necesiten.
- **Mínimo privilegio:** cada usuario tendrá únicamente los permisos necesarios para sus funciones.
- **Aislamiento de información:** los datos de cada copropiedad deberán mantenerse separados.
- **Trazabilidad:** las operaciones importantes deberán permitir identificar quién las realizó y cuándo.

## 3. Tipos de usuarios

Los siguientes perfiles son una propuesta inicial y deberán validarse durante el levantamiento de requisitos.

| Perfil | Descripción | Etapa |
|---|---|---|
| Administrador de plataforma | Gestiona la configuración general de Kubo PH y la operación del servicio. | Por definir |
| Administrador de copropiedad | Gestiona la información y los procesos de una o varias copropiedades autorizadas. | MVP |
| Auxiliar administrativo | Apoya las actividades administrativas según los permisos asignados. | Por definir |
| Contador | Consulta y gestiona información financiera según sus responsabilidades. | Por definir |
| Residente | Accede a funcionalidades de consulta y servicios de su copropiedad. | Futuro |
| Propietario | Accede a información y servicios relacionados con sus inmuebles. | Futuro |

**Importante:** un perfil representa una categoría de usuario. Los permisos definitivos no deben depender únicamente del nombre del perfil, sino de las autorizaciones asignadas.

## 4. Autenticación

La plataforma deberá contemplar:

- [ ] Registro o creación controlada de cuentas.
- [ ] Inicio de sesión.
- [ ] Cierre de sesión.
- [ ] Recuperación de contraseña.
- [ ] Cambio de contraseña.
- [ ] Protección de credenciales.
- [ ] Validación de sesiones.
- [ ] Bloqueo o limitación de intentos de acceso sospechosos.
- [ ] Desactivación de cuentas.
- [ ] Gestión de sesiones activas.

Los mecanismos técnicos de autenticación se definirán durante la selección de tecnologías.

## 5. Autorización y permisos

Kubo PH deberá contar con un sistema de autorización que permita controlar el acceso a funcionalidades y operaciones.

Se contemplan las siguientes acciones:

- Consultar.
- Crear.
- Editar.
- Eliminar o desactivar.
- Exportar.
- Aprobar, cuando aplique.

Los permisos deberán poder asignarse según el rol y el contexto de la copropiedad.

### Matriz preliminar de permisos

| Funcionalidad | Administrador de copropiedad | Auxiliar | Residente |
|---|---|---|---|
| Configuración de copropiedad | Por definir | No asignado | No asignado |
| Personas e inmuebles | Gestión | Por definir | Consulta propia, futuro |
| Cartera | Gestión | Por definir | Consulta propia, futuro |
| Pagos | Gestión | Por definir | Consulta propia, futuro |
| Documentos | Gestión | Por definir | Consulta autorizada, futuro |
| Comunicaciones | Gestión | Por definir | Consulta autorizada, futuro |
| Usuarios | Gestión | Por definir | No asignado |

Esta matriz no constituye una configuración definitiva.

## 6. Aislamiento entre copropiedades

Este es uno de los requisitos fundamentales de Kubo PH.

- [ ] Cada copropiedad deberá contar con un contexto de información independiente.
- [ ] Los usuarios solo podrán acceder a las copropiedades autorizadas.
- [ ] Las consultas deberán validar la autorización correspondiente.
- [ ] Las operaciones de creación y modificación deberán respetar el contexto de la copropiedad.
- [ ] Los archivos deberán mantener las mismas restricciones de acceso que los registros relacionados.
- [ ] Las exportaciones deberán respetar los permisos del usuario.
- [ ] Se deberán realizar pruebas para verificar que no existan accesos cruzados.

Una misma cuenta administrativa podrá tener acceso a varias copropiedades si así se autoriza.

## 7. Auditoría y trazabilidad

Se deberá evaluar el registro de las siguientes operaciones:

- Inicio y cierre de sesión.
- Creación y modificación de registros.
- Cambios en información de personas e inmuebles.
- Modificaciones de obligaciones y pagos.
- Cambios en configuraciones financieras.
- Cambios en permisos y roles.
- Eliminación o desactivación de información.
- Exportación de información sensible.

La trazabilidad deberá permitir identificar, cuando corresponda:

- Usuario responsable.
- Fecha y hora.
- Tipo de operación.
- Registro afectado.
- Valores anteriores y nuevos, cuando aplique.

## 8. Protección de información

La plataforma deberá contemplar:

- Protección de información personal.
- Protección de información financiera.
- Almacenamiento seguro de credenciales.
- Validación de archivos cargados.
- Control de acceso a documentos.
- Protección de comunicaciones entre cliente y servidor.
- Copias de seguridad.
- Estrategias de recuperación de información.
- Gestión segura de errores para evitar exponer datos sensibles.

## 9. Cumplimiento y privacidad

Kubo PH deberá diseñarse considerando la normativa colombiana aplicable en materia de protección de datos personales, especialmente la Ley 1581 de 2012 y sus disposiciones reglamentarias.

Antes de operar con datos reales será necesario definir:

- Responsabilidades sobre el tratamiento de datos.
- Finalidades del tratamiento.
- Autorizaciones y avisos de privacidad aplicables.
- Procedimientos para atender consultas y reclamos.
- Políticas de conservación y eliminación de información.
- Condiciones de acceso y tratamiento por terceros.

La implementación deberá revisarse con asesoría jurídica cuando corresponda.

## 10. Decisiones técnicas pendientes

- [ ] Seleccionar el mecanismo de autenticación.
- [ ] Definir el modelo de roles y permisos.
- [ ] Definir cómo se implementará el aislamiento entre copropiedades.
- [ ] Establecer políticas de contraseñas y sesiones.
- [ ] Definir estrategia de auditoría.
- [ ] Establecer políticas de respaldo y recuperación.
- [ ] Definir almacenamiento seguro de documentos.
- [ ] Establecer procedimientos de protección y tratamiento de datos.
- [ ] Definir pruebas de seguridad.

## 11. Alcance

Este documento establece lineamientos iniciales de seguridad.

No representa todavía una implementación técnica ni una matriz definitiva de permisos. Las decisiones deberán consolidarse durante el diseño de arquitectura y el análisis funcional del MVP.

