import { useState, useEffect } from "react";

// 🔧 CONFIGURACIÓN: URL de tu backend (portfolio server)
const STATUS_API_URL =
  import.meta.env.VITE_BACKEND_URL_SERVICIOWEB + "/api/status";

// Lista blanca de estados válidos que puede devolver la API.
const VALID_STATUSES = new Set([
  "Activo",
  "Desarrollo",
  "Suspendido",
  "Mantenimiento",
]);

const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutos

// Cache en memoria (variable de módulo).
// Solo existe mientras el bundle JS esté cargado en la pestaña.
// Un refresh de página la limpia completamente — el usuario no puede editarla.
let memoryCache = null; // { value: string, timestamp: number } | null

/**
 * Hook que consulta el estado del sitio actual desde la API central.
 *
 * El resultado se guarda en memoria (no en sessionStorage ni localStorage),
 * por lo que es imposible manipularlo desde las DevTools del navegador.
 * Cada refresh de página siempre consulta la API de nuevo.
 *
 * @returns {"loading" | "Activo" | "Desarrollo" | "Suspendido" | "Mantenimiento"} status
 */
export const useSiteStatus = () => {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const checkStatus = async () => {
      // 1. Usar cache en memoria si está vigente
      if (memoryCache) {
        const isRecent = Date.now() - memoryCache.timestamp < CACHE_TTL_MS;
        if (isRecent) {
          setStatus(memoryCache.value);
          return;
        }
        // Expirado → limpiar y re-consultar
        memoryCache = null;
      }

      // 2. Consultar la API central con el dominio actual
      try {
        const domain = window.location.hostname;
        const response = await fetch(`${STATUS_API_URL}?domain=${domain}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          signal: AbortSignal.timeout(5000), // 5 segundos máximo
        });

        if (!response.ok) throw new Error("API no disponible");

        const data = await response.json();

        // Validar que la API devuelva un valor reconocido
        const rawStatus = data.status;
        const siteStatus = VALID_STATUSES.has(rawStatus) ? rawStatus : "Activo";

        // 3. Guardar en memoria (inaccesible desde DevTools)
        memoryCache = { value: siteStatus, timestamp: Date.now() };

        setStatus(siteStatus);
      } catch (error) {
        // Fail-open: si la API falla, el sitio funciona normal
        console.warn(
          "[useSiteStatus] No se pudo verificar el estado. Modo: Activo por defecto.",
          error.message,
        );
        setStatus("Activo");
      }
    };

    checkStatus();
  }, []);

  return status;
};
