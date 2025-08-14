# Instrucciones de Despliegue - Martin LLM Website

## 🚀 Cambios Realizados

### ✅ Modificaciones Completadas

1. **Eliminación de la sección Demo**: La sección demo original ha sido completamente removida.

2. **Nueva sección "Capacidades Avanzadas"**: Reemplaza la demo con explicaciones detalladas de 5 capacidades principales:
   - **Configuración Avanzada de IA** (imagen: `ai-configuration-panel.png`)
   - **Gestión Inteligente de Modelos** (imagen: `model-management-interface.png`)
   - **Fine-Tuning y Personalización** (imagen: `llm-fine-tuning-dashboard.png`)
   - **Monitoreo y Analytics Avanzados** (imagen: `real-time-monitoring-charts.png`)
   - **Sistema de Rendimiento Optimizado** (imagen: `system-performance-dashboard.png`)

3. **Botón de descarga actualizado**: Ahora enlaza a Google Drive mediante la variable `GOOGLE_DRIVE_DOWNLOAD_URL`.

4. **Configuración para GitHub Pages**: Proyecto completamente configurado para despliegue automático.

## 📁 Recursos Gráficos con Nombres Identificables

Los siguientes archivos de imagen están en `src/assets/images/` con nombres fáciles de identificar:

- `ai-configuration-panel.png` - Panel de configuración de IA
- `model-management-interface.png` - Interfaz de gestión de modelos
- `llm-fine-tuning-dashboard.png` - Dashboard de fine-tuning
- `real-time-monitoring-charts.png` - Gráficos de monitoreo en tiempo real
- `system-performance-dashboard.png` - Dashboard de rendimiento del sistema
- `app-screenshot.png` - Screenshot original de tu aplicación

## 🔗 Configuración del Enlace de Google Drive

Para actualizar el enlace de descarga:

1. Abre `src/App.jsx`
2. Busca la línea: `const GOOGLE_DRIVE_DOWNLOAD_URL = "https://drive.google.com/file/d/TU_ID_DE_ARCHIVO_AQUI/view?usp=sharing"`
3. Reemplaza `TU_ID_DE_ARCHIVO_AQUI` con el ID real de tu archivo en Google Drive

### Cómo obtener el ID de Google Drive:
- URL completa: `https://drive.google.com/file/d/1ABC123XYZ789/view?usp=sharing`
- ID del archivo: `1ABC123XYZ789`

## 🌐 Despliegue en GitHub Pages

### ⚠️ Prerrequisito: Instalar Dependencias

Antes de intentar cualquier método de despliegue, es fundamental instalar todas las dependencias del proyecto. Abre tu terminal en la carpeta raíz del proyecto y ejecuta este comando (solo necesitas hacerlo una vez):

```bash
npm install
```

### Opción 1: Despliegue Automático (Recomendado)

1. **Sube el proyecto a GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Martin LLM Website"
   git branch -M main
   git remote add origin https://github.com/tuusuario/martin-llm-web.git
   git push -u origin main
   ```

2. **Configura GitHub Pages**:
   - Ve a Settings > Pages en tu repositorio
   - Selecciona "GitHub Actions" como fuente
   - El workflow automático se ejecutará y desplegará tu sitio

3. **Actualiza la configuración**:
   - En `package.json`, cambia `"homepage": "https://tuusuario.github.io/martin-llm-web"`
   - Reemplaza `tuusuario` con tu nombre de usuario de GitHub
   - Reemplaza `martin-llm-web` con el nombre real de tu repositorio

### Opción 2: Despliegue Manual

```bash
# Instalar dependencias
npm install

# Construir el proyecto
npm run build

# Desplegar (requiere gh-pages instalado)
npm run deploy
```

## 🛠 Solución al Problema de Pantalla en Blanco

El problema de pantalla en blanco en GitHub Pages se debe a rutas incorrectas. La configuración actual incluye:

1. **Base URL dinámica** en `vite.config.js`:
   ```javascript
   base: process.env.NODE_ENV === 'production' ? '/martin-llm-web/' : '/'
   ```

2. **Homepage en package.json**:
   ```json
   "homepage": "https://tuusuario.github.io/martin-llm-web"
   ```

3. **Workflow de GitHub Actions** configurado para despliegue automático.

## 📋 Checklist de Despliegue

- [ ] Actualizar `GOOGLE_DRIVE_DOWNLOAD_URL` con tu enlace real
- [ ] Cambiar `tuusuario` por tu nombre de usuario de GitHub en `package.json`
- [ ] Cambiar `martin-llm-web` por el nombre real de tu repositorio
- [ ] Subir el proyecto a GitHub
- [ ] Habilitar GitHub Pages con GitHub Actions
- [ ] Verificar que el sitio se despliega correctamente

## 🎯 URL Final

Una vez desplegado, tu sitio estará disponible en:
`https://tuusuario.github.io/martin-llm-web/`

## 📞 Soporte

Si encuentras algún problema durante el despliegue:

1. Verifica que todas las rutas en `vite.config.js` sean correctas
2. Asegúrate de que el nombre del repositorio coincida con la configuración
3. Revisa los logs de GitHub Actions para errores específicos
4. Confirma que GitHub Pages esté habilitado en la configuración del repositorio

¡Tu página web está lista para ser desplegada y comenzar a generar leads para Martin LLM!
