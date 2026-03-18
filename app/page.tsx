import Link from "next/link";
export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "#050810" }}>
      <nav style={{ borderBottom: "1px solid #1E2235", padding: "20px 48px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontWeight: 900, fontSize: "22px", color: "#3B82F6" }}>ContractBench</div>
        <div style={{ display: "flex", gap: "16px" }}>
          <Link href="/login" style={{ color: "#9CA3AF", textDecoration: "none", fontSize: "14px" }}>Sign In</Link>
          <Link href="/signup" style={{ background: "#3B82F6", color: "#050810", padding: "8px 20px", fontWeight: 700, fontSize: "13px", textDecoration: "none" }}>Get Access — $4,000/mo</Link>
        </div>
      </nav>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "100px 48px 60px" }}>
        <div style={{ fontSize: "11px", letterSpacing: "4px", color: "#3B82F6", textTransform: "uppercase", marginBottom: "20px" }}>HR & Workforce Intelligence · Phase 4</div>
        <h1 style={{ fontWeight: 900, fontSize: "clamp(36px, 5.5vw, 68px)", lineHeight: 1.05, letterSpacing: "-2px", marginBottom: "24px" }}>
          Employment Contract Benchmark Intelligence
        </h1>
        <p style={{ fontSize: "18px", color: "#9CA3AF", maxWidth: "580px", lineHeight: 1.7, marginBottom: "40px" }}>
          Compensation and contract benchmark data for financial services roles from NLRB filings, union contracts, and SEC executive compensation disclosures.
        </p>
        <div style={{ display: "flex", gap: "16px" }}>
          <Link href="/signup" style={{ background: "#3B82F6", color: "#050810", padding: "16px 36px", fontWeight: 900, fontSize: "15px", textDecoration: "none", letterSpacing: "1px" }}>
            SUBSCRIBE — $4,000/MO
          </Link>
          <Link href="/login" style={{ border: "1px solid #1E2235", color: "#9CA3AF", padding: "16px 36px", fontSize: "15px", textDecoration: "none" }}>Sign In</Link>
        </div>
      </div>
      <div style={{ borderTop: "1px solid #1E2235", borderBottom: "1px solid #1E2235" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 48px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "40px" }}>
          <div><div style={{ fontSize: "36px", fontWeight: 900, color: "#3B82F6" }}>40+</div><div style={{ fontSize: "11px", color: "#6B7280", letterSpacing: "2px", textTransform: "uppercase", marginTop: "4px" }}>Role Categories</div></div>
          <div><div style={{ fontSize: "36px", fontWeight: 900, color: "#3B82F6" }}>Annual</div><div style={{ fontSize: "11px", color: "#6B7280", letterSpacing: "2px", textTransform: "uppercase", marginTop: "4px" }}>Benchmark Refresh</div></div>
          <div><div style={{ fontSize: "36px", fontWeight: 900 }}>$4,000</div><div style={{ fontSize: "11px", color: "#6B7280", letterSpacing: "2px", textTransform: "uppercase", marginTop: "4px" }}>Per Month</div></div>
        </div>
      </div>
      <div style={{ borderTop: "1px solid #1E2235", padding: "24px 48px", display: "flex", justifyContent: "space-between" }}>
        <div style={{ fontSize: "12px", color: "#4B5563" }}>© 2026 ContractBench · A Huit Data Ventures Company</div>
        <div style={{ fontSize: "12px", color: "#4B5563" }}>data.huit.ai</div>
      </div>
    </div>
  );
}
