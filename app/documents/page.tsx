"use client";

import { FileText, Filter, FolderOpen, Search, ShieldCheck, UploadCloud } from "lucide-react";
import Link from "next/link";
import { AppShell } from "../components/app-shell";

export default function DocumentsPage() {
  return <AppShell><section className="page-heading compact"><div><span className="enterprise-eyebrow">KNOWLEDGE LIBRARY</span><h1>Kho tài liệu</h1><p>Chỉ liệt kê tài liệu trong phạm vi tenant và access policy của bạn.</p></div><Link className="primary-button" href="/upload"><UploadCloud size={18} />Tải tài liệu</Link></section><section className="enterprise-panel document-library"><div className="document-toolbar"><div className="document-search"><Search size={17} /><span>Tìm theo tên, nội dung, loại tài liệu…</span></div><button><Filter size={16} />Lọc</button></div><div className="library-head"><span>TÀI LIỆU</span><span>PHÂN LOẠI</span><span>TRẠNG THÁI</span><span>NGÀY CẬP NHẬT</span></div><div className="library-empty"><div><FolderOpen size={30} /></div><h2>Chưa có tài liệu trong phạm vi của bạn</h2><p>Khi tài liệu được tải và lập chỉ mục, chúng sẽ xuất hiện ở đây nếu quyền truy cập của bạn phù hợp.</p><Link className="ghost-button" href="/upload"><UploadCloud size={16} />Tải tài liệu đầu tiên</Link></div></section><div className="access-hint"><ShieldCheck size={17} /><span>Document list và vector retrieval đều áp dụng cùng tenant/role/department policy.</span></div></AppShell>;
}
