"use client";

import { ArrowRight, Bot, CheckCircle2, FileText, Layers3, Plus, ShieldCheck, UploadCloud } from "lucide-react";
import Link from "next/link";
import { AppShell } from "../components/app-shell";

const metrics = [
  ["Tài liệu có thể truy cập", "—", "Trong phạm vi quyền của bạn", FileText, "green"],
  ["Đã lập chỉ mục", "—", "Sẵn sàng để hỏi đáp", CheckCircle2, "blue"],
  ["Đang xử lý", "—", "Theo dõi trong kho tài liệu", UploadCloud, "orange"],
  ["Đoạn tri thức", "pgvector", "ACL metadata trên mỗi chunk", Layers3, "purple"],
] as const;

export default function DashboardPage() {
  return <AppShell><section className="page-heading"><div><span className="enterprise-eyebrow">✦ KNOWLEDGE WORKSPACE</span><h1>Chào mừng trở lại.</h1><p>Khai thác tài liệu nội bộ trong phạm vi quyền được cấp.</p></div><div className="heading-actions"><Link className="ghost-button" href="/assistant"><Bot size={18} />Hỏi trợ lý</Link><Link className="primary-button" href="/upload"><Plus size={18} />Tải tài liệu</Link></div></section><section className="metric-grid">{metrics.map(([label, value, note, Icon, tone]) => <article className="metric-card" key={label}><div className={`metric-icon ${tone}`}><Icon size={20} /></div><span>{label}</span><strong>{value}</strong><small>{note}</small></article>)}</section><section className="dashboard-columns"><article className="enterprise-panel policy-overview"><div className="panel-heading"><div><span>SECURITY CONTROLS</span><h2>Không gian được bảo vệ</h2></div><ShieldCheck size={23} /></div><div className="control-row"><span>1</span><div><strong>Tenant isolation</strong><p>Tri thức được tách theo organization trước khi truy xuất.</p></div></div><div className="control-row"><span>2</span><div><strong>Chunk-level ACL</strong><p>Role và department được kiểm tra trước vector ranking.</p></div></div><div className="control-row"><span>3</span><div><strong>Private citations</strong><p>Chỉ nguồn thực sự dùng để trả lời mới hiện trong workspace.</p></div></div></article><Link href="/assistant" className="assistant-callout"><div className="assistant-orbit"><Bot size={29} /></div><span className="enterprise-eyebrow light">TRỢ LÝ TRI THỨC</span><h2>Đừng tìm từng file.<br />Hãy đặt câu hỏi.</h2><p>Trợ lý chỉ sử dụng context đã qua policy filter và pgvector retrieval.</p><span>Bắt đầu hỏi <ArrowRight size={16} /></span></Link></section><section className="enterprise-panel recent-panel"><div className="panel-heading"><div><span>KHO TRI THỨC</span><h2>Tài liệu gần đây</h2></div><Link className="text-link" href="/documents">Mở kho tài liệu <ArrowRight size={15} /></Link></div><div className="empty-documents"><FileText size={28} /><div><strong>Kho tài liệu đang chờ dữ liệu</strong><p>Admin có thể tải PDF, DOCX hoặc TXT lên S3 private để bắt đầu.</p></div><Link className="ghost-button" href="/upload">Tải tài liệu</Link></div></section></AppShell>;
}
