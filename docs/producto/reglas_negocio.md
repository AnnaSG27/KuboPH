# Reglas del negocio — Kubo PH

**Versión:** 0.1  
**Estado:** Borrador inicial  
**Dominio:** Administración de propiedad horizontal

## 1. Propósito

Definir las reglas, condiciones y restricciones que deberán orientar el funcionamiento de Kubo PH.

Estas reglas representan comportamientos esperados del negocio y servirán como referencia para diseñar los procesos, las historias de usuario, el modelo de datos y las funcionalidades del sistema.

Las reglas se clasifican según su estado de definición para evitar convertir supuestos en restricciones definitivas.

## 2. Clasificación de las reglas

| Estado | Significado |
|---|---|
| Confirmada | Condición definida para el producto. |
| Propuesta | Regla candidata que requiere validación. |
| Pendiente | Necesita análisis o información adicional. |

## 3. Reglas de copropiedades

| Código | Regla | Estado |
|---|---|---|
| RN-001 | La información de cada copropiedad debe mantenerse diferenciada. | Confirmada |
| RN-002 | Una copropiedad puede contener varios inmuebles. | Confirmada |
| RN-003 | La configuración administrativa debe permitir particularidades de cada copropiedad. | Confirmada |
| RN-004 | Las configuraciones particulares no deben afectar a otras copropiedades. | Propuesta |

## 4. Reglas de personas e inmuebles

| Código | Regla | Estado |
|---|---|---|
| RN-005 | Una persona puede estar relacionada con uno o varios inmuebles. | Confirmada |
| RN-006 | Un inmueble puede estar relacionado con una o varias personas. | Confirmada |
| RN-007 | La relación entre una persona y un inmueble debe identificar el tipo de vínculo. | Confirmada |
| RN-008 | Una persona puede tener diferentes tipos de vínculo según el inmueble. | Propuesta |
| RN-009 | Los cambios de propietario o residente deben poder registrarse sin perder la información histórica. | Propuesta |
| RN-010 | El sistema debe contemplar mecanismos para evitar registros duplicados de personas. | Propuesta |

## 5. Reglas de cartera

| Código | Regla | Estado |
|---|---|---|
| RN-011 | Las obligaciones de cartera deben poder asociarse a un inmueble. | Confirmada |
| RN-012 | Los conceptos de cobro deben poder configurarse. | Propuesta |
| RN-013 | Las cuotas y sus periodos deben ser configurables. | Propuesta |
| RN-014 | Las fechas de vencimiento deben poder establecerse según la configuración de la copropiedad. | Propuesta |
| RN-015 | Los descuentos por pronto pago deben poder modificarse cuando cambien las decisiones de la copropiedad. | Confirmada |
| RN-016 | Las reglas de mora e intereses deben ser configurables y responder a las condiciones aplicables. | Propuesta |
| RN-017 | El sistema debe permitir consultar el saldo de las obligaciones. | Confirmada |
| RN-018 | Los acuerdos de pago deben conservar las condiciones pactadas y su seguimiento. | Pendiente |

## 6. Reglas de pagos

| Código | Regla | Estado |
|---|---|---|
| RN-019 | Los pagos deben poder asociarse al inmueble correspondiente. | Confirmada |
| RN-020 | Los pagos deben poder relacionarse con las obligaciones que buscan cubrir. | Confirmada |
| RN-021 | El sistema debe contemplar pagos parciales. | Propuesta |
| RN-022 | Los pagos deben conservar información de fecha, valor y medio de pago. | Propuesta |
| RN-023 | Los soportes de pago deben poder almacenarse y consultarse. | Propuesta |
| RN-024 | La aplicación de pagos debe permitir identificar obligaciones pendientes. | Pendiente |
| RN-025 | La importación de movimientos bancarios debe contemplar mecanismos para identificar posibles duplicados. | Pendiente |

## 7. Reglas documentales

| Código | Regla | Estado |
|---|---|---|
| RN-026 | Los documentos deben poder asociarse a la copropiedad correspondiente. | Confirmada |
| RN-027 | Los documentos pueden relacionarse con personas, inmuebles o procesos administrativos. | Propuesta |
| RN-028 | Las plantillas deben poder adaptarse a las necesidades de cada copropiedad. | Confirmada |
| RN-029 | Los formatos documentales deben permitir modificaciones sin alterar innecesariamente la estructura del sistema. | Confirmada |
| RN-030 | Los documentos generados deben conservar una referencia a la plantilla utilizada. | Pendiente |

## 8. Reglas de usuarios y seguridad

| Código | Regla | Estado |
|---|---|---|
| RN-031 | El acceso a la información debe estar controlado mediante permisos. | Confirmada |
| RN-032 | Los usuarios solo deben acceder a la información de las copropiedades autorizadas. | Propuesta |
| RN-033 | Las operaciones relevantes deben poder identificarse por usuario. | Propuesta |
| RN-034 | La información personal y financiera debe manejarse con controles de seguridad adecuados. | Confirmada |

## 9. Reglas de configuración y flexibilidad

- Las condiciones administrativas no deben quedar codificadas de forma rígida cuando puedan variar por copropiedad.
- Los parámetros configurables deben permitir cambios controlados.
- Los cambios en configuraciones importantes deben considerar su efecto sobre registros anteriores.
- Las reglas históricas deben conservarse cuando sean necesarias para explicar operaciones realizadas anteriormente.
- Las configuraciones deben validarse para evitar inconsistencias en los procesos.

## 10. Decisiones pendientes

- Definir los criterios para identificar personas duplicadas.
- Definir los tipos de vínculo entre personas e inmuebles.
- Determinar cómo se conserva el historial de propietarios y residentes.
- Definir las reglas de liquidación de cuotas.
- Determinar cómo se calculan descuentos, mora e intereses.
- Definir el orden de aplicación de pagos y abonos.
- Establecer el tratamiento de pagos no identificados.
- Definir las reglas para acuerdos de pago.
- Determinar qué cambios requieren auditoría.
- Definir qué configuraciones pueden modificarse y cuáles requieren autorización.

## 11. Control de cambios

Las reglas del negocio podrán modificarse conforme se conozcan las necesidades reales de las copropiedades.

Cada modificación deberá conservar su trazabilidad y reflejarse en los documentos funcionales y técnicos relacionados.

**Nota:** Las reglas clasificadas como propuestas o pendientes no deben implementarse como restricciones definitivas hasta ser validadas.

