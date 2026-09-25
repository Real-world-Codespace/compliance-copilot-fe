"use client";

import { Bot, FileText, FolderOpen, LayoutDashboard, LogOut, Menu, ShieldCheck, UploadCloud, UsersRound, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type User = { name: string; organization_id: string; department: string; roles: string[] };

const navigation = [
  ["/dashboard", "Tổng quan", LayoutDashboard],
  ["/documents", "Kho tài liệu", FolderOpen],
  ["/upload", "Tải tài liệu", UploadCloud],
  ["/assistant", "Trợ lý tri thức", Bot],
] as const;

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [user, setUser] = useState<User>();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem("procurement_user");
    if (!raw || !localStorage.getItem("procurement_token")) location.assign("/login");
    else setUser(JSON.parse(raw));
  }, []);

  function logout() { localStorage.clear(); location.assign("/login"); }
  if (!user) return <div className="enterprise-loader">Đang mở không gian tri thức…</div>;

  const sidebar = <aside className="enterprise-sidebar">
    <div className="enterprise-brand"><div className="brand-glyph"><FileText size={20} /></div><div><strong>KnowledgeOS</strong><span>Enterprise</span></div><button className="close-nav" onClick={() => setOpen(false)}><X size={19} /></button></div>
    <div className="workspace-switch"><ShieldCheck size={17} /><div><span>Không gian làm việc</span><strong>{user.organization_id}</strong></div></div>
    <nav><span className="nav-caption">WORKSPACE</span>{navigation.map(([href, label, Icon]) => <Link href={href} onClick={() => setOpen(false)} className={pathname === href ? "enterprise-nav active" : "enterprise-nav"} key={href}><Icon size={18} />{label}{href === "/assistant" && <em>AI</em>}</Link>)}{user.roles.includes("workspace_admin") && <><span className="nav-caption admin-caption">QUẢN TRỊ</span><Link href="/admin" onClick={() => setOpen(false)} className={pathname === "/admin" ? "enterprise-nav active" : "enterprise-nav"}><UsersRound size={18} />Governance</Link></>}</nav>
    <div className="security-note"><ShieldCheck size={18} /><div><strong>Secure retrieval</strong><span>Chỉ tìm trong tri thức bạn được phép xem.</span></div></div>
    <div className="sidebar-profile"><div className="profile-avatar">{user.name.charAt(0)}</div><div><strong>{user.name}</strong><span>{user.department} · {user.roles.includes("workspace_admin") ? "Admin" : "Member"}</span></div><button onClick={logout}><LogOut size={17} /></button></div>
  </aside>;

  return <div className="enterprise-frame"><div className="desktop-nav">{sidebar}</div><div className={open ? "mobile-nav visible" : "mobile-nav"}><div className="nav-overlay" onClick={() => setOpen(false)} />{sidebar}</div><main className="enterprise-main"><header className="enterprise-topbar"><button className="nav-trigger" onClick={() => setOpen(true)}><Menu size={21} /></button><div className="top-search">⌕ <span>Tìm tài liệu, quy trình hoặc nội dung…</span><kbd>⌘ K</kbd></div><Link href="/upload" className="top-upload"><UploadCloud size={17} />Tải lên</Link></header><div className="enterprise-content">{children}</div></main></div>;
}
