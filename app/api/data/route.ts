import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";

const SAMPLE_DATA = [{"role_title":"Mortgage Loan Officer","employer_type":"Regional Bank","state":"TX","metro_area":"Dallas-Fort Worth","base_salary":52000,"total_comp":128000,"commission_pct":0.42,"draw_months":3,"non_compete_months":12,"non_solicit_months":18,"data_source":"NLRB Filing 2025","sample_size":84},{"role_title":"Branch Manager","employer_type":"Independent Mortgage Bank","state":"FL","metro_area":"Tampa","base_salary":78000,"total_comp":215000,"commission_pct":0.18,"draw_months":0,"non_compete_months":24,"non_solicit_months":24,"data_source":"SEC Proxy 2025","sample_size":41},{"role_title":"Processing Manager","employer_type":"Mega-Bank","state":"NY","metro_area":"New York","base_salary":95000,"total_comp":118000,"commission_pct":0,"draw_months":0,"non_compete_months":6,"non_solicit_months":12,"data_source":"BLS OES 2025","sample_size":214}];

function getStats(data: Record<string, unknown>[]) {
  if (!data || data.length === 0) return {};
  const numericKeys = Object.keys(data[0]).filter(k => typeof data[0][k] === "number");
  const stats: Record<string, unknown> = { total_records: data.length };
  numericKeys.slice(0, 2).forEach(k => {
    const avg = data.reduce((s, r) => s + (Number(r[k]) || 0), 0) / data.length;
    stats[`avg_${k}`] = Math.round(avg * 100) / 100;
  });
  return stats;
}

export async function GET(req: Request) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  
  const url = new URL(req.url);
  const q = url.searchParams.get("q") || "";
  
  let data = SAMPLE_DATA as Record<string, unknown>[];
  if (q) {
    data = data.filter(r =>
      Object.values(r).some(v => String(v).toLowerCase().includes(q.toLowerCase()))
    );
  }
  
  return NextResponse.json({
    data,
    stats: getStats(data),
    refreshed: new Date().toISOString()
  });
}

export async function POST(req: Request) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  
  const data = SAMPLE_DATA as Record<string, unknown>[];
  const headers = data.length > 0 ? Object.keys(data[0]) : [];
  const csv = [
    headers.join(","),
    ...data.map(r => headers.map(h => String(r[h] ?? "")).join(","))
  ].join("\n");
  
  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": `attachment; filename=contractbench-export.csv`
    }
  });
}
