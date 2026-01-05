"use client";

import type React from "react";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";
import {
  Menu,
  X,
  LogOut,
  BarChart3,
  FileText,
  ImageIcon,
  Users,
  Mail,
  MessageSquare,
  Settings,
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const supabase = createClient();

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      console.log("🚀 ~ checkUser ~ session:", session);

      if (!session) {
        router.push("/admin/login");
        return;
      }
      setUser(session.user);
      setLoading(false);
    };
    checkUser();
  }, [router, supabase]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  // if (loading) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen bg-slate-950">
  //       <div className="text-white">Loading...</div>
  //     </div>
  //   );
  // }

  return (
    <div className="flex h-screen bg-slate-950 text-white">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-slate-900 border-r border-slate-800 transition-all duration-300 flex flex-col`}
      >
        <div className="p-6 border-b border-slate-800">
          <h1
            className={`font-bold text-xl text-cyan-400 ${
              !sidebarOpen && "text-center"
            }`}
          >
            {sidebarOpen ? "Hornlink Admin" : "HA"}
          </h1>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {[
            { icon: BarChart3, label: "Dashboard", href: "/admin" },
            { icon: FileText, label: "Blog Posts", href: "/admin/blog" },
            { icon: Users, label: "Testimonials", href: "/admin/testimonials" },
            { icon: ImageIcon, label: "Portfolio", href: "/admin/portfolio" },
            { icon: Mail, label: "Partners", href: "/admin/partners" },
            {
              icon: MessageSquare,
              label: "Contact Forms",
              href: "/admin/contact-forms",
            },
            { icon: Mail, label: "Newsletter", href: "/admin/newsletter" },
            { icon: Settings, label: "Settings", href: "/admin/settings" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 transition-colors"
              >
                <Icon size={20} />
                {sidebarOpen && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-slate-800 transition-colors text-red-400"
          >
            <LogOut size={20} />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="text-sm text-slate-400">
            Welcome, <span className="text-cyan-400">{user?.email}</span>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-6">{children}</div>
      </main>
    </div>
  );
}
