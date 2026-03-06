import { useSiteStatus } from "./useSiteStatus";
import { FiClock, FiAlertCircle, FiTool, FiLoader } from "react-icons/fi";

// ============================================================
// PANTALLAS INFORMATIVAS
// ============================================================

/* ── keyframes para animaciones ── */
const spinKeyframes = `
@keyframes spin {
  to { transform: rotate(360deg); }
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.btn-hover:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 14px 0 hsl(var(--primary) / 0.3) !important;
}
`;

const DecorativeBlobs = () => (
  <>
    <div style={{ ...styles.blob, top: "-10%", right: "-10%" }} />
    <div
      style={{
        ...styles.blob,
        bottom: "-10%",
        left: "-10%",
        animationDelay: "3s",
      }}
    />
  </>
);

const LoadingScreen = () => (
  <>
    <style>{spinKeyframes}</style>
    <div style={styles.wrapper}>
      <div style={styles.logoMark}>RELAX</div>
      <FiLoader style={styles.spinner} />
      <p style={styles.loadingText}>Preparando tu experiencia…</p>
    </div>
  </>
);

const DevelopmentScreen = () => (
  <>
    <style>{spinKeyframes}</style>
    <div style={styles.wrapper}>
      <DecorativeBlobs />

      <div style={styles.card}>
        <span style={styles.badge}>✦ En Construcción</span>

        <div style={styles.iconWrap}>
          <FiClock size={56} strokeWidth={1} color="hsl(var(--primary))" />
        </div>

        <h1 style={styles.title}>
          Algo increíble
          <br />
          <span style={styles.titleEm}>está por llegar.</span>
        </h1>

        <p style={styles.text}>
          Estamos diseñando un espacio de calma a tu medida.
          <br />
          <strong style={{ color: "hsl(var(--foreground))", fontWeight: 600 }}>
            ¡Volvé pronto!
          </strong>
        </p>

        <div style={styles.divider} />

        <p style={styles.subtext}>Relax · Masajes y Bienestar</p>
      </div>
    </div>
  </>
);

const SuspendedScreen = () => (
  <>
    <style>{spinKeyframes}</style>
    <div style={styles.wrapper}>
      <DecorativeBlobs />

      <div style={styles.card}>
        <span
          style={{
            ...styles.badge,
            borderColor: "hsl(var(--destructive) / 0.3)",
            color: "hsl(var(--destructive))",
            backgroundColor: "hsl(var(--destructive) / 0.05)",
          }}
        >
          ✦ Cuenta Suspendida
        </span>

        <div style={styles.iconWrap}>
          <FiAlertCircle
            size={56}
            strokeWidth={1}
            color="hsl(var(--destructive))"
          />
        </div>

        <h1 style={styles.title}>
          Sitio
          <br />
          <span style={styles.titleEm}>Suspendido.</span>
        </h1>

        <p style={styles.text}>
          Este sitio ha sido suspendido temporalmente.
          <br />
          Contactá al administrador para más información.
        </p>

        <div style={styles.divider} />

        <a
          href="https://dev-mendietasergio.com.ar/"
          className="btn-hover"
          style={styles.btn}
        >
          Contactar Administrador
        </a>
      </div>
    </div>
  </>
);

const MaintenanceScreen = () => (
  <>
    <style>{spinKeyframes}</style>
    <div style={styles.wrapper}>
      <DecorativeBlobs />

      <div style={styles.card}>
        <span style={styles.badge}>✦ En Mantenimiento</span>

        <div style={styles.iconWrap}>
          <FiTool size={56} strokeWidth={1} color="hsl(var(--primary))" />
        </div>

        <h1 style={styles.title}>
          Mejorando
          <br />
          <span style={styles.titleEm}>tu experiencia.</span>
        </h1>

        <p style={styles.text}>
          El sitio se encuentra temporalmente en mantenimiento.
          <br />
          Estaremos de vuelta en breve.
        </p>

        <div style={styles.divider} />

        <p style={styles.subtext}>¡Gracias por tu paciencia! · Relax</p>
      </div>
    </div>
  </>
);

// ============================================================
// COMPONENTE PRINCIPAL — StatusGate
// ============================================================

const STATUS_SCREENS = {
  Desarrollo: <DevelopmentScreen />,
  Suspendido: <SuspendedScreen />,
  Mantenimiento: <MaintenanceScreen />,
};

const StatusGate = ({ children }) => {
  const status = useSiteStatus();

  if (status === "loading") return <LoadingScreen />;
  if (STATUS_SCREENS[status]) return STATUS_SCREENS[status];

  return children;
};

export default StatusGate;

// ============================================================
// ESTILOS
// ============================================================
const styles = {
  wrapper: {
    minHeight: "100vh",
    backgroundColor: "hsl(var(--background))",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Outfit', system-ui, -apple-system, sans-serif",
    padding: "2rem",
    position: "relative",
    overflow: "hidden",
    color: "hsl(var(--foreground))",
  },

  /* Decorative background blob */
  blob: {
    position: "absolute",
    width: "70vw",
    height: "70vw",
    maxWidth: "800px",
    maxHeight: "800px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, hsl(var(--primary) / 0.05) 0%, transparent 60%)",
    pointerEvents: "none",
    animation: "pulse 8s ease-in-out infinite",
  },

  /* Top wordmark */
  logoMark: {
    fontSize: "1.25rem",
    fontWeight: "700",
    letterSpacing: "0.2em",
    color: "hsl(var(--primary))",
    marginBottom: "3rem",
    animation: "fadeIn 0.8s ease forwards",
  },

  card: {
    textAlign: "center",
    backgroundColor: "hsl(var(--card))",
    padding: "4rem 3rem",
    borderRadius: "1.5rem",
    border: "1px solid hsl(var(--border))",
    boxShadow: "0 20px 40px -15px rgba(0,0,0,0.05)",
    maxWidth: "500px",
    width: "100%",
    position: "relative",
    zIndex: 1,
    animation: "fadeIn 0.7s ease forwards",
    backdropFilter: "blur(10px)",
  },

  badge: {
    display: "inline-block",
    padding: "0.4rem 1.2rem",
    borderRadius: "9999px",
    border: "1px solid hsl(var(--primary) / 0.3)",
    backgroundColor: "hsl(var(--primary) / 0.05)",
    color: "hsl(var(--primary-dark, var(--primary)))",
    fontWeight: "600",
    fontSize: "0.75rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    marginBottom: "2rem",
  },

  iconWrap: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "1.5rem",
    animation: "float 6s ease-in-out infinite",
  },

  title: {
    fontSize: "3rem",
    fontWeight: "700",
    color: "hsl(var(--foreground))",
    margin: "0 0 1rem",
    lineHeight: 1.1,
    letterSpacing: "-0.02em",
  },

  titleEm: {
    color: "transparent",
    background:
      "linear-gradient(to right, hsl(var(--foreground)), hsl(var(--muted-foreground)))",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
  },

  text: {
    color: "hsl(var(--muted-foreground))",
    lineHeight: "1.6",
    fontSize: "1.1rem",
    marginBottom: "0",
    fontWeight: "300",
  },

  divider: {
    width: "3rem",
    height: "2px",
    backgroundColor: "hsl(var(--primary) / 0.3)",
    margin: "2.5rem auto",
    borderRadius: "9999px",
  },

  subtext: {
    fontSize: "0.8rem",
    fontWeight: "500",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "hsl(var(--muted-foreground))",
    margin: 0,
  },

  btn: {
    display: "inline-block",
    backgroundColor: "hsl(var(--primary))",
    color: "#fff",
    textDecoration: "none",
    padding: "1rem 2rem",
    borderRadius: "9999px",
    fontWeight: "600",
    fontSize: "0.9rem",
    letterSpacing: "0.05em",
    transition: "transform 0.2s, box-shadow 0.2s",
    boxShadow: "0 4px 14px 0 hsl(var(--primary) / 0.15)",
    cursor: "pointer",
  },

  /* Loading screen */
  spinner: {
    width: "48px",
    height: "48px",
    color: "hsl(var(--primary))",
    animation: "spin 1.5s linear infinite",
    marginBottom: "1.5rem",
  },

  loadingText: {
    fontSize: "0.85rem",
    fontWeight: "500",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "hsl(var(--muted-foreground))",
    margin: 0,
    animation: "pulse 2s ease-in-out infinite",
  },
};
