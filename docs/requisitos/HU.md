# Requisitos iniciales e historias de usuario — Kubo PH

**Estado:** Borrador inicial  
**Versión:** 0.1  
**Perfil principal de la primera etapa:** Administración

## 1. Propósito

Este documento reúne las primeras historias de usuario de Kubo PH. Servirá como base para definir el alcance funcional, validar las necesidades de administración y posteriormente diseñar los módulos y la arquitectura.

Las historias son iniciales: deberán revisarse y completarse antes de implementar cada funcionalidad.

## 2. Convenciones

- **HU:** Historia de usuario.
- **Prioridad alta:** Necesaria para organizar la información básica y comenzar a utilizar la plataforma.
- **Prioridad por definir:** Su importancia y alcance se decidirán durante el análisis.

## 3. Historias de usuario iniciales

### HU-01 — Gestionar copropiedades

**Como** usuario de administración,  
**quiero** registrar y consultar las copropiedades que gestiono,  
**para** mantener organizada la información de cada una.

**Criterios de aceptación**
- La administración puede registrar una copropiedad.
- Puede consultar la información de una copropiedad registrada.
- La información de distintas copropiedades debe mantenerse diferenciada.

**Prioridad:** Alta

### HU-02 — Gestionar personas

**Como** usuario de administración,  
**quiero** registrar y consultar propietarios y residentes,  
**para** mantener organizada la información de las personas relacionadas con la copropiedad.

**Criterios de aceptación**
- Se puede registrar y consultar una persona.
- Una persona puede estar relacionada con uno o varios inmuebles.
- El sistema permite distinguir la relación de una persona con cada inmueble, según las reglas que se definan.

**Prioridad:** Alta

### HU-03 — Gestionar inmuebles

**Como** usuario de administración,  
**quiero** registrar y consultar los inmuebles de una copropiedad,  
**para** mantener organizada su información y sus relaciones con las personas.

**Criterios de aceptación**
- Se puede registrar y consultar un inmueble.
- Cada inmueble pertenece a una copropiedad.
- Un inmueble puede estar relacionado con una o varias personas.

**Prioridad:** Alta

### HU-04 — Consultar cartera

**Como** usuario de administración,  
**quiero** organizar y consultar la información de cartera,  
**para** hacer seguimiento a las obligaciones de los inmuebles.

**Criterios de aceptación**
- La plataforma permite consultar la información de cartera que se haya registrado o importado.
- La información puede asociarse al inmueble correspondiente.
- Las reglas de cálculo, mora, descuentos y acuerdos de pago se definirán antes de implementar operaciones financieras.

**Prioridad:** Alta

### HU-05 — Organizar pagos

**Como** usuario de administración,  
**quiero** registrar y consultar información de pagos,  
**para** apoyar el seguimiento de los pagos realizados por los propietarios.

**Criterios de aceptación**
- La plataforma permite registrar o consultar información de pagos.
- Los pagos pueden relacionarse con el inmueble y la obligación correspondiente.
- La forma de registrar, validar y conciliar pagos se definirá en los requisitos financieros.

**Prioridad:** Alta

### HU-06 — Gestionar documentos y plantillas

**Como** usuario de administración,  
**quiero** organizar documentos y utilizar plantillas administrativas,  
**para** facilitar la elaboración y consulta de documentos de la copropiedad.

**Criterios de aceptación**
- La plataforma permite organizar documentos relacionados con la copropiedad.
- Se contempla el uso de plantillas para documentos administrativos.
- Las plantillas deben poder adaptarse cuando cambien las necesidades de la copropiedad.
- Los formatos y tipos de archivo admitidos se definirán durante el análisis.

**Prioridad:** Alta

### HU-07 — Preparar comunicados

**Como** usuario de administración,  
**quiero** elaborar comunicados a partir de plantillas,  
**para** mantener una comunicación administrativa organizada.

**Criterios de aceptación**
- La plataforma contempla la elaboración de comunicados.
- Los comunicados pueden partir de una plantilla.
- El contenido y formato de las plantillas deben poder ajustarse según las necesidades definidas.

**Prioridad:** Por definir

## 4. Decisiones pendientes

Antes de implementar estas historias, se debe definir:

- Qué datos son obligatorios para copropiedades, personas e inmuebles.
- Cómo se clasifican y mantienen las relaciones entre personas e inmuebles.
- Qué información de cartera y pagos se importará desde los archivos existentes.
- Qué reglas aplican a cuotas, descuentos, mora y acuerdos de pago.
- Qué formatos de archivo se admitirán y cómo se almacenarán.
- Qué permisos tendrá cada tipo de usuario.
- Qué funcionalidades estarán incluidas en la primera versión.

