---
theme: seriph
title: 'SurveyJS en React: Análisis Técnico POC'
info: |
  ## SurveyJS React POC - Technical Analysis
  
  Evaluación completa de pros y contras de SurveyJS en aplicaciones React empresariales.
  Basado en implementación real con Survey Creator, React Router y TypeScript.
  
  **Audiencia**: Arquitectos de Software, Tech Leads, Desarrolladores React
  **Fecha**: 2025

author: 'Equipo de Desarrollo'
keywords: 'SurveyJS,React,TypeScript,POC,Formularios,Encuestas'
class: text-center
highlighter: shiki
lineNumbers: true
drawings:
  persist: false
transition: slide-left
mdc: true
---

# SurveyJS en React
## Análisis Técnico de POC

<div class="mt-8 mb-8">
  <div class="text-xl opacity-80">
    Evaluación completa basada en implementación real
  </div>
</div>

<div class="grid grid-cols-2 gap-12 mt-12">
  <div class="space-y-4">
    <div class="flex items-center space-x-3">
      <div class="w-3 h-3 bg-blue-500 rounded-full"></div>
      <span class="text-lg font-medium">POC Implementado</span>
    </div>
    <div class="flex items-center space-x-3">
      <div class="w-3 h-3 bg-blue-500 rounded-full"></div>
      <span class="text-lg font-medium">React + TypeScript</span>
    </div>
    <div class="flex items-center space-x-3">
      <div class="w-3 h-3 bg-blue-500 rounded-full"></div>
      <span class="text-lg font-medium">Survey Creator</span>
    </div>
    <div class="flex items-center space-x-3">
      <div class="w-3 h-3 bg-blue-500 rounded-full"></div>
      <span class="text-lg font-medium">Arquitectura Modular</span>
    </div>
  </div>
</div>



---
transition: fade-out
---

# 📋 Agenda

<div class="grid grid-cols-2 gap-12 mt-12">
  <div class="space-y-6">
    <div class="flex items-start space-x-4">
      <div class="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
      <div>
        <h3 class="font-bold text-lg">Introducción a SurveyJS</h3>
      </div>
    </div>
    <div class="flex items-start space-x-4">
      <div class="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
      <div>
        <h3 class="font-bold text-lg">Ventajas</h3>
      </div>
    </div>
    <div class="flex items-start space-x-4">
      <div class="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
      <div>
        <h3 class="font-bold text-lg">Desventajas</h3>
      </div>
    </div>
        <div class="flex items-start space-x-4">
      <div class="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
      <div>
        <h3 class="font-bold text-lg">Recomendaciones</h3>
      </div>
    </div>
    <div class="flex items-start space-x-4">
      <div class="flex-shrink-0 w-8 h-8 bg-gray-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
      <div>
        <h3 class="font-bold text-lg">Conclusiones</h3>
      </div>
    </div>
  </div>
</div>



---
transition: slide-up
---

# ¿Qué es SurveyJS?

Una biblioteca completa de JavaScript para crear y gestionar formularios y encuestas

- 📋 **Survey Library** - Renderiza encuestas desde JSON con múltiples tipos de preguntas
- 🎨 **Survey Creator** - Editor visual drag-and-drop para diseñar encuestas
- ⚛️ **React Integration** - Componentes nativos para React con TypeScript
- 🎯 **Framework Agnostic** - Funciona con React, Vue, Angular, jQuery, Knockout
- 📊 **Analytics Dashboard** - Visualización de resultados integrada
- 🌐 **Internacionalización** - Soporte multi-idioma incluido
- 🔧 **Highly Customizable** - Temas, CSS personalizado, y lógica condicional

<br>

En nuestro POC implementamos tanto **Survey Library** como **Survey Creator**

<!--
SurveyJS es una de las librerías más completas para formularios dinámicos en JavaScript
-->

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
transition: slide-up
level: 2
---

# 📊 Métricas del POC

## Datos Cuantitativos de la Implementación

<div class="grid grid-cols-3 gap-8 mt-12">
  <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
    <div class="text-3xl font-bold text-green-600 mb-2">3 horas</div>
    <div class="text-sm font-medium text-green-800">Tiempo de Setup Inicial</div>
    <div class="text-xs text-green-600 mt-1">Survey básico funcionando</div>
  </div>
  
  <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
    <div class="text-3xl font-bold text-blue-600 mb-2">~5.1MB</div>
    <div class="text-sm font-medium text-blue-800">Bundle Size Total</div>
    <div class="text-xs text-blue-600 mt-1">survey-react + survey-creator</div>
  </div>
  
  <div class="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
    <div class="text-3xl font-bold text-purple-600 mb-2">25+</div>
    <div class="text-sm font-medium text-purple-800">Tipos de Preguntas</div>
    <div class="text-xs text-purple-600 mt-1">Sin desarrollo adicional</div>
  </div>
</div>

<div class="grid grid-cols-2 gap-8 mt-8">
  <div class="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
    <div class="text-2xl font-bold text-orange-600 mb-2">$499-999</div>
    <div class="text-sm font-medium text-orange-800">Costo por Desarrollador</div>
    <div class="text-xs text-orange-600 mt-1">Licencia comercial anual</div>
  </div>
  
  <div class="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-500">
    <div class="text-2xl font-bold text-gray-600 mb-2">65KB</div>
    <div class="text-sm font-medium text-gray-800">Límite de Resultados</div>
    <div class="text-xs text-gray-600 mt-1">API SurveyJS.io gratuita</div>
  </div>
</div>

---
transition: slide-left
---

# 🟢 PROS de SurveyJS

## Implementación Rápida y Sencilla

<div class="grid grid-cols-2 gap-8 mt-8">
<div>

### ⚛️ Integración React Nativa
```tsx {1-4|6-7|all} {maxHeight:'300px'}
// Implementación mínima
import { Survey } from 'survey-react-ui';
import { Model } from 'survey-core';
import 'survey-core/survey-core.min.css';

const survey = new Model(surveyJson);
return <Survey model={survey} />;
```

### 🎨 Temas Incluidos
```tsx {1-2|4|all} {maxHeight:'200px'}
import { themeJson } from './theme';

// Aplicación de tema con una línea
surveyModel.applyTheme(themeJson);
```

</div>
<div v-click>

### 📦 Ecosystem Completo
- **survey-react-ui**: Componentes React
- **survey-creator-react**: Editor visual  
- **survey-core**: Lógica principal
- **survey-analytics**: Dashboard de resultados

### 🔧 Setup Mínimo
```bash {1|2|3|all}
npm install survey-react-ui
npm install survey-creator-react  
# ¡Listo para usar!
```

</div>
</div>

<!--
Setup en minutos, no en días - gran ventaja para prototipado rápido
-->



---
layout: image-right
image: https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80
---

## 🎨 Tipos de Preguntas Incluidas
- ✅ **Básicas**: Text, Number, Boolean
- 📊 **Selección**: Dropdown, Radio, Checkbox
- 📏 **Escalas**: Rating, Ranking
- 📅 **Especiales**: Date, File Upload
- 🏗️ **Complejas**: Matrix, Panel Dynamic
- 📍 **Avanzadas**: Signature, Image Picker


<div v-click class="mt-4">

## 🔧 Lógica Condicional
- Skip Logic
- Show/Hide Questions
- Dynamic Titles
- Calculated Values

</div>

---

# 🎯 Recomendaciones Basadas en el POC

## ¿Cuándo usar SurveyJS?

<div class="grid grid-cols-2 gap-8 mt-8">
<div>

### ✅ **SÍ usar SurveyJS cuando:**

<div v-click>

- 📊 **Encuestas complejas** con lógica condicional
- 👥 **Equipos no técnicos** necesitan crear encuestas
- ⏰ **Time-to-market rápido** es prioridad
- 🏢 **Uso empresarial** con soporte requerido

</div>

</div>
<div v-click>

### ❌ **NO usar SurveyJS cuando:**

- 📝 **Formularios simples** (contact, login, etc.)
- 🎨 **Diseño muy personalizado** es crítico
- 💸 **Budget limitado** para licencias
- 🔧 **Control total** del código es necesario
- 📦 **Bundle size** es una restricción importante

</div>
</div>

<div v-click class="mt-8 p-4 bg-blue-500 rounded-lg">

### 💡 **Conclusión del POC**

SurveyJS es **excelente** para encuestas empresariales complejas, pero **overkill** para formularios simples. La inversión se justifica solo con casos de uso específicos.

</div>


---

# 📊 Decisión Final: Matriz de Evaluación

## Framework de Decisión Basado en el POC

<div class="mt-8 d-flex jc-center ">
  <div class="grid grid-cols-3 gap-6 text-left">
    <div class="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
      <div class="flex items-center mb-4">
        <div class="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
        <h3 class="text-green-800 font-bold text-lg">USAR SURVEYJS</h3>
      </div>
      <ul class="text-sm space-y-3">
        <li class="flex items-start">
          <span class="text-green-600 mr-2">📊
            <span><strong>Encuestas complejas</strong> con lógica condicional</span>
          </span>
        </li>
        <li class="flex items-start">
          <span class="text-green-600 mr-2">💰
            <span><strong>Budget $500+/dev</strong> disponible</span>
          </span>
        </li>
        <li class="flex items-start">
          <span class="text-green-600 mr-2">👥
            <span><strong>Equipos no técnicos</strong> crean contenido</span>
          </span>
        </li>
        <li class="flex items-start">
          <span class="text-green-600 mr-2">⏰
            <span><strong>Time-to-market</strong> prioritario</span>
          </span>
        </li>
        <li class="flex items-start">
          <span class="text-green-600 mr-2">🏢
            <span><strong>Uso empresarial</strong> con soporte</span>
          </span>
        </li>
      </ul>
    </div>
    <div class="p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-lg border border-red-200">
      <div class="flex items-center mb-4">
        <div class="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
        <h3 class="text-red-800 font-bold text-lg">EVITAR SI</h3>
      </div>
      <ul class="text-sm space-y-3">
        <li class="flex items-start">
          <span class="text-red-600 mr-2">📝
            <span><strong>Formularios simples</strong> (contact, login)</span>
          </span>
        </li>
        <li class="flex items-start">
          <span class="text-red-600 mr-2">💸
            <span><strong>Budget limitado</strong> (<$500/dev)</span>
          </span>
        </li>
        <li class="flex items-start">
          <span class="text-red-600 mr-2">🎨
            <span><strong>UI muy personalizada</strong> requerida</span>
          </span>
        </li>
        <li class="flex items-start">
          <span class="text-red-600 mr-2">📦
            <span><strong>Bundle size</strong> crítico (<2MB)</span>
          </span>
        </li>
        <li class="flex items-start">
          <span class="text-red-600 mr-2">🔧
            <span><strong>Control total</strong> del código necesario</span>
          </span>
        </li>
      </ul>
    </div>  

  </div>
</div>

---
layout: center
class: text-center
---

# ¡Gracias!

## Q&A • Preguntas y Discusión

<div class="mt-12">
  <div class="grid grid-cols-2 gap-12 max-w-4xl mx-auto">
    <div class="text-left">
      <div class="flex items-center mb-6">
        <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
          <carbon:link class="text-black text-xl" />
        </div>
        <h3 class="text-xl font-bold text-blue-800">Referencias</h3>
      </div>
      <ul class="space-y-3 text-sm">
        <li class="flex items-center">
          <carbon:arrow-right class="text-blue-500 mr-2" />
          <a href="https://surveyjs.io" target="_blank" class="hover:text-blue-600">SurveyJS Official Documentation</a>
        </li>
        <li class="flex items-center">
          <carbon:arrow-right class="text-blue-500 mr-2" />
          <a href="https://surveyjs.io/Examples/Library" target="_blank" class="hover:text-blue-600">Live Examples & Demos</a>
        </li>
        <li class="flex items-center">
          <carbon:arrow-right class="text-blue-500 mr-2" />
          <a href="https://surveyjs.io/pricing" target="_blank" class="hover:text-blue-600">Pricing & Licensing</a>
        </li>
        <li class="flex items-center">
          <carbon:arrow-right class="text-blue-500 mr-2" />
          <a href="https://github.com/surveyjs" target="_blank" class="hover:text-blue-600">GitHub Repository</a>
        </li>
      </ul>
    </div>
    <div class="text-left">
      <div class="flex items-center mb-6">
        <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
          <carbon:code class="text-white text-xl" />
        </div>
        <h3 class="text-xl font-bold text-green-800">POC Highlights</h3>
      </div>
      <ul class="space-y-3 text-sm">
        <li class="flex items-center">
          <carbon:checkmark class="text-green-500 mr-2" />
          <span><strong>React + TypeScript</strong> implementación completa</span>
        </li>
        <li class="flex items-center">
          <carbon:checkmark class="text-green-500 mr-2" />
          <span><strong>Survey Creator</strong> funcional y testeado</span>
        </li>
        <li class="flex items-center">
          <carbon:checkmark class="text-green-500 mr-2" />
          <span><strong>Arquitectura modular</strong> escalable</span>
        </li>
        <li class="flex items-center">
          <carbon:checkmark class="text-green-500 mr-2" />
          <span><strong>Métricas reales</strong> de performance</span>
        </li>
      </ul>
    </div>
  </div>
</div>

