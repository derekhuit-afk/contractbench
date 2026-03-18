import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "ContractBench — Employment Contract Benchmark Intelligence",
  description: "Compensation and contract benchmark data for financial services roles from NLRB filings, union contracts, and SEC execut",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ background: "#050810", color: "#E8EAF0", fontFamily: "monospace", margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
