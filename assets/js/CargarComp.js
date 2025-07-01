// CargarComp.js
async function loadComponent(id, url) {
  const container = document.getElementById(id);
  if (!container) {
    console.warn(`No se encontró un contenedor con ID: ${id}`);
    return;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error al cargar ${url}: ${response.status}`);
    }

    const html = await response.text();
    container.innerHTML = html;
    // Dispara un evento personalizado cuando el componente ha sido cargado
    document.dispatchEvent(new CustomEvent(`component-loaded-${id}`));
  } catch (error) {
    console.error(`No se pudo cargar el componente ${url}:`, error);
    container.innerHTML = `<p style="color:red;">Error al cargar ${url}</p>`;
  }
}

// Ejecutar cuando la página haya cargado
window.addEventListener("DOMContentLoaded", () => {
  loadComponent("header-component", "components/encabezado/header.html");
  loadComponent("footer-component", "components/piedepagina/footer.html");
});
