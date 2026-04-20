/**
 * Money Magnet Mist 發財噴霧 Landing Page
 * Uses a full-screen iframe to embed the static money-magnet.html
 * This approach works with CDN/SPA deployment where Express routes are not available
 */
export default function MoneyMagnet() {
  return (
    <iframe
      src="/money-magnet.html"
      title="發財噴霧 Money Magnet Mist"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        border: "none",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    />
  );
}
