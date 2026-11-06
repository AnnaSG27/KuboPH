# Historias de usuario — Kubo PH

**Versión:** 0.2  
**Estado:** Borrador para validación  
**Producto:** Kubo PH  
**Documento relacionado:** `alcance-mvp.md` y `prioridades-map.md`

## 1. Propósito

Documentar las historias de usuario que describen las necesidades y funcionalidades de Kubo PH desde la perspectiva de sus usuarios.

Las historias servirán como base para el diseño funcional, la implementación, las pruebas y la validación del producto.

## 2. Convenciones

Formato:

> Como [tipo de usuario], quiero [funcionalidad], para [beneficio].

### Prioridades

- **MVP:** propuesta para la primera versión.
- **POST-MVP:** funcionalidad posterior al lanzamiento.
- **FUTURO:** funcionalidad de expansión.
- **PENDIENTE:** requiere validación.

### Criterios de aceptación

Se utilizarán condiciones verificables para determinar cuándo una historia puede considerarse implementada correctamente.

---

# ÉPICA 1. Gestión de copropiedades

**Objetivo:** Permitir la creación y administración de la información general de las copropiedades.

### HU-001. Registrar una copropiedad

**Prioridad:** MVP

Como administrador, quiero registrar una copropiedad, para comenzar a gestionar su información desde Kubo PH.

**Criterios de aceptación:**

- Se debe permitir registrar el nombre de la copropiedad.
- Se deben capturar los datos generales definidos como obligatorios.
- El sistema debe validar los campos requeridos.
- No se debe permitir guardar información incompleta en campos obligatorios.
- La copropiedad debe quedar disponible para su administración.
- Se debe generar un identificador único.

### HU-002. Consultar copropiedades

**Prioridad:** MVP

Como administrador, quiero consultar las copropiedades que tengo autorizadas, para acceder a su información.

**Criterios de aceptación:**

- Se debe mostrar un listado de copropiedades autorizadas.
- Se debe poder consultar la información general.
- Se debe identificar claramente cada copropiedad.
- No se deben mostrar copropiedades a las que el usuario no tenga acceso.

### HU-003. Actualizar información de una copropiedad

**Prioridad:** MVP

Como administrador, quiero actualizar la información general de una copropiedad, para mantener sus datos vigentes.

**Criterios de aceptación:**

- Se debe permitir editar los campos autorizados.
- Se deben validar los datos antes de guardar.
- Los cambios deben reflejarse en las consultas posteriores.
- Se debe conservar trazabilidad de los cambios relevantes.

### HU-004. Configurar estructura interna

**Prioridad:** MVP

Como administrador, quiero registrar torres, bloques y sectores, para organizar los inmuebles de la copropiedad.

**Criterios de aceptación:**

- Se deben poder registrar diferentes agrupaciones.
- Cada agrupación debe pertenecer a una copropiedad.
- Se deben poder actualizar sus nombres o identificaciones.
- No se deben permitir referencias a estructuras de otra copropiedad.

### HU-005. Configurar parámetros administrativos

**Prioridad:** MVP

Como administrador, quiero configurar parámetros particulares de mi copropiedad, para adaptar Kubo PH a sus condiciones administrativas.

**Criterios de aceptación:**

- Se deben identificar los parámetros configurables.
- Los cambios deben aplicarse a la copropiedad correspondiente.
- Las configuraciones de una copropiedad no deben modificar las de otra.
- Los parámetros que afecten operaciones históricas deben manejarse sin alterar indebidamente registros anteriores.

---

# ÉPICA 2. Usuarios, autenticación y permisos

**Objetivo:** Controlar el acceso a la plataforma y proteger la información.

### HU-006. Iniciar sesión

**Prioridad:** MVP

Como usuario autorizado, quiero iniciar sesión, para acceder a las funcionalidades que tengo permitidas.

**Criterios de aceptación:**

- Se deben solicitar las credenciales correspondientes.
- Se deben validar las credenciales.
- El sistema debe impedir el acceso con credenciales incorrectas.
- Se debe iniciar una sesión segura cuando la autenticación sea exitosa.
- El usuario debe acceder únicamente a las funcionalidades autorizadas.

### HU-007. Cerrar sesión

**Prioridad:** MVP

Como usuario, quiero cerrar mi sesión, para evitar accesos no autorizados posteriores.

**Criterios de aceptación:**

- Debe existir una opción para cerrar sesión.
- La sesión debe invalidarse.
- El usuario debe ser redirigido al inicio de sesión.
- No debe poder acceder a información protegida mediante la sesión cerrada.

### HU-008. Gestionar usuarios administrativos

**Prioridad:** MVP

Como administrador autorizado, quiero crear y gestionar usuarios administrativos, para distribuir las responsabilidades dentro de la plataforma.

**Criterios de aceptación:**

- Se deben poder registrar usuarios.
- Se deben validar los datos requeridos.
- Se deben poder activar o desactivar cuentas.
- Se debe evitar la duplicidad de cuentas según las reglas de identificación definidas.
- Se debe poder consultar el estado de cada usuario.

### HU-009. Asignar roles y permisos

**Prioridad:** MVP

Como administrador autorizado, quiero asignar roles y permisos, para controlar las operaciones que puede realizar cada usuario.

**Criterios de aceptación:**

- Se deben definir roles disponibles.
- Cada rol debe contar con permisos asociados.
- Los permisos deben controlar las operaciones autorizadas.
- Los cambios deben reflejarse en los accesos posteriores.
- No se debe permitir realizar operaciones sin autorización.

### HU-010. Recuperar acceso

**Prioridad:** MVP

Como usuario, quiero recuperar el acceso a mi cuenta, para volver a ingresar cuando olvide mis credenciales.

**Criterios de aceptación:**

- Debe existir un mecanismo de recuperación.
- Se debe verificar la identidad del solicitante mediante el mecanismo definido.
- El proceso no debe revelar información sensible.
- Las credenciales deben poder actualizarse de manera segura.

### HU-011. Controlar acceso por copropiedad

**Prioridad:** MVP

Como administrador de plataforma, quiero limitar el acceso a las copropiedades autorizadas, para proteger la información de cada organización.

**Criterios de aceptación:**

- Cada usuario debe tener asignaciones de acceso.
- Las consultas deben respetar dichas asignaciones.
- Las operaciones de creación, edición y eliminación deben validar permisos.
- Los archivos también deben respetar las restricciones.
- Se deben realizar pruebas para verificar el aislamiento de información.

---

# ÉPICA 3. Gestión de personas

**Objetivo:** Centralizar la información de las personas relacionadas con las copropiedades.

### HU-012. Registrar una persona

**Prioridad:** MVP

Como administrador, quiero registrar una persona, para mantener organizada la información de quienes se relacionan con la copropiedad.

**Criterios de aceptación:**

- Se deben capturar los datos de identificación.
- Se deben permitir datos de contacto.
- Se deben validar los campos obligatorios.
- Se debe evitar la creación de duplicados según los criterios definidos.
- La persona debe quedar disponible para relacionarla con inmuebles.

### HU-013. Consultar personas

**Prioridad:** MVP

Como administrador, quiero consultar las personas registradas, para encontrar y revisar su información.

**Criterios de aceptación:**

- Se debe mostrar un listado de personas autorizadas.
- Se debe permitir buscar por identificación y nombre.
- Se debe consultar la información detallada.
- Se deben mostrar las relaciones con inmuebles cuando existan.

### HU-014. Actualizar información personal

**Prioridad:** MVP

Como administrador autorizado, quiero actualizar los datos de una persona, para mantener su información vigente.

**Criterios de aceptación:**

- Se deben permitir modificaciones en campos autorizados.
- Se deben validar los datos ingresados.
- Se debe conservar la integridad de la identificación.
- Los cambios relevantes deben quedar registrados.

### HU-015. Identificar tipos de relación

**Prioridad:** MVP

Como administrador, quiero identificar el tipo de vínculo de una persona con un inmueble, para diferenciar propietarios, residentes y otros participantes.

**Criterios de aceptación:**

- Se deben poder establecer tipos de vínculo.
- Una persona puede tener relaciones con varios inmuebles.
- Una persona puede tener diferentes tipos de vínculo según el inmueble.
- La relación debe estar asociada al inmueble correspondiente.
- Se debe poder consultar el tipo de vínculo vigente.

### HU-016. Consultar historial de relaciones

**Prioridad:** PENDIENTE

Como administrador, quiero consultar el historial de relaciones de una persona con los inmuebles, para conocer cambios de propiedad y residencia.

**Criterios de aceptación:**

- Se deben conservar relaciones anteriores cuando corresponda.
- Se deben identificar fechas de inicio y finalización.
- Se deben diferenciar relaciones vigentes y finalizadas.
- El historial no debe perderse por una actualización de datos.

---

# ÉPICA 4. Gestión de inmuebles

**Objetivo:** Registrar y organizar las unidades privadas de cada copropiedad.

### HU-017. Registrar un inmueble

**Prioridad:** MVP

Como administrador, quiero registrar un inmueble, para tener identificadas las unidades privadas de la copropiedad.

**Criterios de aceptación:**

- Se debe asociar el inmueble a una copropiedad.
- Se debe registrar su nomenclatura.
- Se debe poder asociar a una torre, bloque o sector.
- Se deben validar los datos obligatorios.
- No se deben permitir identificaciones duplicadas dentro del ámbito definido para la copropiedad.

### HU-018. Consultar inmuebles

**Prioridad:** MVP

Como administrador, quiero consultar los inmuebles registrados, para acceder a su información.

**Criterios de aceptación:**

- Se debe mostrar un listado de inmuebles.
- Se debe permitir buscar por nomenclatura.
- Se debe poder filtrar por torre o sector.
- Se debe consultar la información detallada.
- Se deben visualizar las personas relacionadas.

### HU-019. Actualizar información de un inmueble

**Prioridad:** MVP

Como administrador autorizado, quiero actualizar la información de un inmueble, para mantener sus datos correctos.

**Criterios de aceptación:**

- Se deben permitir modificaciones autorizadas.
- Se deben validar los datos.
- No se deben perder las relaciones existentes por una modificación de información.
- Se debe conservar trazabilidad de los cambios relevantes.

### HU-020. Registrar coeficientes

**Prioridad:** MVP

Como administrador, quiero registrar el coeficiente de copropiedad de cada inmueble, para utilizarlo en los procesos administrativos y financieros que lo requieran.

**Criterios de aceptación:**

- Se debe permitir registrar un coeficiente.
- Se debe validar que el valor cumpla las reglas definidas.
- El coeficiente debe estar asociado al inmueble.
- Se debe permitir su actualización controlada.
- Se debe conservar el valor histórico cuando afecte liquidaciones anteriores.

---

# ÉPICA 5. Cartera y obligaciones

**Objetivo:** Gestionar las obligaciones económicas asociadas a los inmuebles.

### HU-021. Configurar conceptos de cobro

**Prioridad:** MVP

Como administrador, quiero configurar conceptos de cobro, para establecer los diferentes valores que pueden generar obligaciones.

**Criterios de aceptación:**

- Se deben poder crear conceptos.
- Se debe registrar su nombre y clasificación.
- Se deben poder activar o desactivar.
- Los conceptos deben pertenecer a la copropiedad correspondiente.

### HU-022. Configurar cuotas de administración

**Prioridad:** MVP

Como administrador, quiero configurar los valores de las cuotas de administración, para establecer las obligaciones periódicas de los inmuebles.

**Criterios de aceptación:**

- Se debe poder definir un valor.
- Se debe establecer su periodo de aplicación.
- Se deben poder configurar fechas de vigencia.
- Los cambios no deben modificar automáticamente obligaciones históricas ya generadas.
- Se debe poder consultar la configuración vigente.

### HU-023. Configurar descuentos por pronto pago

**Prioridad:** MVP

Como administrador, quiero configurar descuentos por pronto pago, para aplicar las condiciones económicas aprobadas por la copropiedad.

**Criterios de aceptación:**

- Se debe permitir configurar el descuento.
- Se debe definir su modalidad de cálculo.
- Se debe establecer una fecha límite.
- Se debe definir su vigencia.
- Los cambios deben poder aplicarse a periodos futuros sin alterar indebidamente periodos anteriores.

### HU-024. Configurar vencimientos y mora

**Prioridad:** MVP

Como administrador, quiero configurar vencimientos y condiciones de mora, para determinar cuándo una obligación se encuentra vencida.

**Criterios de aceptación:**

- Se deben configurar fechas de vencimiento.
- Se deben definir las condiciones de mora aplicables.
- Se deben considerar las reglas de cada copropiedad.
- Los cálculos deben poder verificarse.
- Las condiciones utilizadas deben conservarse para explicar resultados históricos.

### HU-025. Generar obligaciones

**Prioridad:** MVP

Como administrador, quiero generar obligaciones para los inmuebles, para registrar los valores que deben pagar durante cada periodo.

**Criterios de aceptación:**

- Se deben generar obligaciones para los inmuebles correspondientes.
- Cada obligación debe tener concepto y periodo.
- Se debe registrar el valor original.
- Se debe registrar la fecha de vencimiento.
- No se deben generar obligaciones duplicadas para el mismo concepto e inmueble en el mismo periodo, salvo que las reglas permitan varios cargos.
- Se deben conservar las condiciones utilizadas en la liquidación.

### HU-026. Consultar cartera por inmueble

**Prioridad:** MVP

Como administrador, quiero consultar la cartera de un inmueble, para conocer sus obligaciones y saldos.

**Criterios de aceptación:**

- Se deben listar las obligaciones del inmueble.
- Se deben mostrar valores originales y saldos pendientes.
- Se deben identificar obligaciones vencidas.
- Se deben consultar pagos aplicados.
- La información debe corresponder a la copropiedad autorizada.

### HU-027. Consultar cartera general

**Prioridad:** MVP

Como administrador, quiero consultar la cartera consolidada, para conocer el estado financiero de las obligaciones de la copropiedad.

**Criterios de aceptación:**

- Se debe mostrar el total de obligaciones.
- Se deben identificar saldos pendientes.
- Se deben poder filtrar periodos y estados.
- Se deben identificar inmuebles en mora.
- Los totales deben corresponder a los registros individuales.

### HU-028. Registrar acuerdos de pago

**Prioridad:** PENDIENTE

Como administrador, quiero registrar acuerdos de pago, para realizar seguimiento a compromisos establecidos con los propietarios.

**Criterios de aceptación:**

- Se debe identificar el inmueble y las obligaciones relacionadas.
- Se deben registrar las condiciones pactadas.
- Se deben establecer fechas y valores.
- Se debe consultar el estado del acuerdo.
- Se debe poder consultar su cumplimiento.

---

# ÉPICA 6. Pagos y recaudos

**Objetivo:** Registrar los pagos recibidos y controlar su aplicación a las obligaciones.

### HU-029. Registrar un pago

**Prioridad:** MVP

Como administrador, quiero registrar un pago, para mantener actualizado el recaudo de la copropiedad.

**Criterios de aceptación:**

- Se debe registrar el valor recibido.
- Se debe registrar la fecha.
- Se debe identificar el medio de pago.
- Se debe asociar el pago con un inmueble.
- Se debe validar que el valor sea válido.
- Se debe generar un identificador único del movimiento.

### HU-030. Aplicar un pago a obligaciones

**Prioridad:** MVP

Como administrador, quiero aplicar un pago a una o varias obligaciones, para actualizar los saldos pendientes.

**Criterios de aceptación:**

- Se debe seleccionar el pago.
- Se deben identificar las obligaciones aplicables.
- Se debe registrar el valor aplicado a cada obligación.
- La suma de las aplicaciones no debe superar el valor disponible del pago.
- Los saldos deben actualizarse correctamente.
- Debe poder consultarse la distribución del pago.

### HU-031. Registrar pagos parciales

**Prioridad:** MVP

Como administrador, quiero registrar pagos parciales, para reflejar abonos realizados sobre obligaciones pendientes.

**Criterios de aceptación:**

- Se debe permitir aplicar un valor inferior al saldo de la obligación.
- El saldo pendiente debe actualizarse.
- La obligación debe conservar su estado correspondiente.
- Se debe consultar el historial de abonos.

### HU-032. Adjuntar comprobantes

**Prioridad:** MVP

Como administrador, quiero adjuntar soportes a los pagos, para conservar evidencia de las transacciones recibidas.

**Criterios de aceptación:**

- Se deben poder cargar archivos admitidos.
- El soporte debe quedar asociado al pago.
- Se debe poder consultar y descargar.
- El acceso debe respetar los permisos del usuario.

### HU-033. Consultar historial de pagos

**Prioridad:** MVP

Como administrador, quiero consultar los pagos registrados, para revisar el historial de recaudo.

**Criterios de aceptación:**

- Se deben listar los pagos.
- Se debe poder filtrar por fecha, inmueble y medio de pago.
- Se deben visualizar los valores.
- Se debe consultar su aplicación a obligaciones.
- Se debe identificar el estado de cada pago.

### HU-034. Importar información financiera

**Prioridad:** PENDIENTE

Como administrador, quiero importar información desde archivos Excel, para facilitar la incorporación de registros existentes.

**Criterios de aceptación:**

- Se deben definir los formatos admitidos.
- Se debe validar la estructura del archivo.
- Se debe mostrar una vista previa.
- Se deben identificar registros inválidos o duplicados.
- Se debe permitir confirmar o cancelar la importación.
- Se debe conservar un resumen de los resultados.

### HU-035. Importar extractos bancarios

**Prioridad:** POST-MVP

Como administrador, quiero importar extractos bancarios, para facilitar la identificación de movimientos recibidos.

**Criterios de aceptación:**

- Se deben admitir formatos definidos.
- Se deben identificar movimientos.
- Se deben detectar posibles duplicados.
- Se deben mostrar movimientos pendientes de conciliación.
- No se deben aplicar movimientos automáticamente sin las validaciones correspondientes.

---

# ÉPICA 7. Gestión documental

**Objetivo:** Centralizar archivos y documentos administrativos.

### HU-036. Cargar documentos

**Prioridad:** MVP

Como administrador, quiero cargar documentos, para conservar la información de la copropiedad en un repositorio centralizado.

**Criterios de aceptación:**

- Se deben permitir formatos definidos.
- Se debe validar el tamaño y tipo de archivo.
- Se debe registrar información descriptiva.
- Se debe asociar el documento a una copropiedad.
- Se debe almacenar de manera segura.

### HU-037. Clasificar documentos

**Prioridad:** MVP

Como administrador, quiero clasificar documentos, para encontrarlos fácilmente.

**Criterios de aceptación:**

- Se deben definir categorías.
- Se debe poder asignar una categoría.
- Se deben consultar documentos por categoría.
- Se deben permitir filtros de búsqueda.

### HU-038. Asociar documentos a registros

**Prioridad:** MVP

Como administrador, quiero asociar documentos con personas e inmuebles, para mantener organizados sus soportes.

**Criterios de aceptación:**

- Se debe poder asociar un documento con los registros correspondientes.
- Se debe validar que pertenezcan al contexto autorizado.
- Se deben consultar documentos desde el registro relacionado.
- Se debe permitir consultar la relación documental.

### HU-039. Gestionar plantillas

**Prioridad:** MVP

Como administrador, quiero gestionar plantillas administrativas, para reutilizar formatos en los procesos de la copropiedad.

**Criterios de aceptación:**

- Se deben poder registrar plantillas.
- Se deben clasificar por tipo de documento.
- Se deben poder actualizar.
- Se debe identificar si una plantilla es general o particular de una copropiedad.
- Los cambios deben manejarse de forma controlada.

### HU-040. Generar documentos desde plantillas

**Prioridad:** MVP

Como administrador, quiero generar documentos a partir de plantillas, para reducir el trabajo manual y estandarizar los documentos administrativos.

**Criterios de aceptación:**

- Se debe seleccionar una plantilla.
- Se deben completar los campos requeridos.
- Se debe generar el documento con la información correspondiente.
- Se debe permitir revisar el resultado antes de utilizarlo.
- Se debe poder exportar en los formatos definidos.
- Se debe conservar la referencia de la plantilla utilizada.

---

# ÉPICA 8. Comunicaciones y convivencia

**Objetivo:** Facilitar la elaboración y organización de comunicaciones administrativas.

### HU-041. Elaborar comunicados

**Prioridad:** MVP

Como administrador, quiero elaborar comunicados, para informar situaciones y decisiones a los miembros de la copropiedad.

**Criterios de aceptación:**

- Se debe registrar asunto y contenido.
- Se debe poder utilizar una plantilla.
- Se debe registrar fecha de elaboración.
- Se debe poder generar un archivo.
- Se debe conservar el documento elaborado.

### HU-042. Elaborar llamados de atención

**Prioridad:** MVP

Como administrador, quiero generar llamados de atención, para documentar situaciones relacionadas con el incumplimiento de normas de convivencia.

**Criterios de aceptación:**

- Se debe identificar el inmueble relacionado.
- Se debe identificar el destinatario cuando corresponda.
- Se debe registrar el motivo.
- Se deben poder adjuntar soportes.
- Se debe poder utilizar una plantilla.
- Se debe generar el documento para revisión.
- Se debe conservar el historial.

### HU-043. Consultar historial de comunicaciones

**Prioridad:** MVP

Como administrador, quiero consultar las comunicaciones elaboradas, para conocer los antecedentes administrativos de una copropiedad.

**Criterios de aceptación:**

- Se deben listar las comunicaciones.
- Se deben aplicar filtros por fecha, tipo e inmueble.
- Se debe poder consultar el documento generado.
- Se deben respetar los permisos de acceso.

---

# ÉPICA 9. Informes y reportes

**Objetivo:** Facilitar la consulta de información consolidada.

### HU-044. Consultar información general

**Prioridad:** MVP

Como administrador, quiero consultar un resumen general de la copropiedad, para tener una visión rápida de su información.

**Criterios de aceptación:**

- Se debe mostrar información general.
- Se debe poder consultar el total de inmuebles.
- Se debe consultar la información básica de personas.
- Los datos deben corresponder a la copropiedad seleccionada.

### HU-045. Generar reportes de cartera

**Prioridad:** MVP

Como administrador, quiero generar reportes de cartera, para analizar las obligaciones pendientes.

**Criterios de aceptación:**

- Se deben consultar saldos pendientes.
- Se deben filtrar periodos.
- Se deben identificar obligaciones vencidas.
- Los resultados deben corresponder a la información registrada.
- Se debe permitir exportar en los formatos definidos para el MVP.

### HU-046. Generar reportes de pagos

**Prioridad:** MVP

Como administrador, quiero generar reportes de pagos, para analizar los recaudos recibidos.

**Criterios de aceptación:**

- Se deben consultar pagos por periodo.
- Se deben filtrar por inmueble y medio de pago.
- Se deben mostrar totales.
- Los resultados deben corresponder a los pagos registrados.
- Se debe permitir exportar la información.

### HU-047. Exportar información administrativa

**Prioridad:** MVP

Como administrador, quiero exportar información autorizada, para utilizarla en informes y procesos externos.

**Criterios de aceptación:**

- Se deben seleccionar los datos que se desean exportar.
- Se deben respetar los permisos.
- Se deben definir los formatos disponibles.
- La información exportada debe coincidir con los filtros aplicados.
- Se debe validar que no se expongan datos no autorizados.

---

# ÉPICA 10. Procesos administrativos complementarios

**Objetivo:** Incorporar progresivamente funcionalidades para apoyar la operación diaria de la copropiedad.

### HU-048. Registrar solicitudes y PQR

**Prioridad:** POST-MVP

Como administrador, quiero registrar solicitudes, peticiones, quejas y reclamos, para realizar seguimiento a las comunicaciones recibidas.

**Criterios de aceptación:**

- Se debe registrar solicitante y descripción.
- Se debe clasificar el tipo de solicitud.
- Se debe registrar fecha de recepción.
- Se debe poder asignar responsable.
- Se debe consultar el estado.
- Se deben adjuntar soportes.

### HU-049. Gestionar proveedores

**Prioridad:** POST-MVP

Como administrador, quiero registrar proveedores, para centralizar la información de las empresas y personas que prestan servicios.

**Criterios de aceptación:**

- Se deben registrar datos de identificación y contacto.
- Se debe consultar el historial.
- Se deben asociar documentos.
- Se deben actualizar los datos autorizados.

### HU-050. Gestionar contratos

**Prioridad:** POST-MVP

Como administrador, quiero registrar contratos, para controlar los servicios contratados por la copropiedad.

**Criterios de aceptación:**

- Se debe identificar al proveedor.
- Se deben registrar fechas de vigencia.
- Se deben adjuntar documentos.
- Se deben consultar contratos vigentes y finalizados.
- Se deben poder identificar vencimientos.

### HU-051. Registrar mantenimientos

**Prioridad:** POST-MVP

Como administrador, quiero registrar actividades de mantenimiento, para realizar seguimiento al estado de las zonas comunes.

**Criterios de aceptación:**

- Se debe registrar la actividad.
- Se debe identificar la zona correspondiente.
- Se debe establecer el tipo de mantenimiento.
- Se deben registrar fechas y responsables.
- Se debe consultar el estado.
- Se deben adjuntar evidencias.

### HU-052. Gestionar reuniones y compromisos

**Prioridad:** POST-MVP

Como administrador, quiero registrar reuniones y compromisos, para realizar seguimiento a las decisiones administrativas.

**Criterios de aceptación:**

- Se debe registrar fecha y tipo de reunión.
- Se deben adjuntar actas.
- Se deben registrar decisiones.
- Se deben asignar responsables a los compromisos.
- Se debe consultar su estado de cumplimiento.

---

# ÉPICA 11. Funcionalidades futuras para residentes

### HU-053. Consultar estado de cuenta

**Prioridad:** FUTURO

Como propietario o residente autorizado, quiero consultar el estado de cuenta de mi inmueble, para conocer mis obligaciones y pagos.

### HU-054. Consultar documentos

**Prioridad:** FUTURO

Como propietario o residente autorizado, quiero consultar documentos disponibles, para acceder a información de la copropiedad.

### HU-055. Registrar solicitudes desde el portal

**Prioridad:** FUTURO

Como residente, quiero registrar solicitudes desde la plataforma, para comunicarme con la administración.

### HU-056. Recibir notificaciones

**Prioridad:** FUTURO

Como usuario, quiero recibir notificaciones sobre eventos relevantes, para mantenerme informado.

---

## 3. Requisitos generales de calidad

Las siguientes condiciones aplican transversalmente a las historias:

- La información debe respetar el aislamiento entre copropiedades.
- Las operaciones deben validar permisos.
- Los datos deben validarse antes de guardarse.
- Los errores deben comunicarse de forma comprensible.
- Las operaciones financieras deben mantener consistencia.
- Las acciones relevantes deben permitir trazabilidad.
- Los documentos deben almacenarse y consultarse de forma segura.
- Las funcionalidades deben poder probarse mediante criterios verificables.

## 4. Historias pendientes de descomposición

Las siguientes áreas requieren historias adicionales o mayor detalle:

- Importación y validación de bases de datos existentes.
- Manejo de archivos Excel con diferentes estructuras.
- Conciliación bancaria.
- Contabilidad y presupuestos.
- Acuerdos de pago y seguimiento.
- Historial de propietarios y residentes.
- Gestión avanzada de configuraciones financieras.
- Auditoría y trazabilidad.
- Administración de múltiples copropiedades.
- Flujos de aprobación del consejo de administración.

## 5. Control y trazabilidad

Las historias deberán relacionarse con:

- Épica correspondiente.
- Módulo funcional.
- Prioridad.
- Reglas del negocio relacionadas.
- Dependencias.
- Criterios de aceptación.
- Pruebas asociadas.

Las historias podrán dividirse en tareas técnicas durante la planificación del desarrollo.

## 6. Estado del documento

Este documento representa una primera consolidación de historias de usuario.

Las prioridades y criterios de aceptación deben validarse antes de iniciar la implementación.

No todas las historias incluidas forman parte del MVP aprobado.

**Estado:** Pendiente de validación funcional.

