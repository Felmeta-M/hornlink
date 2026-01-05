"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash2 } from "lucide-react";

export default function BlogManagement() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const supabase = createClient();

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await supabase
        .from("blog_posts")
        .select("*")
        .order("created_at", { ascending: false });
      setPosts(data || []);
      setLoading(false);
    };

    fetchPosts();
  }, [supabase]);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return;
    await supabase.from("blog_posts").delete().eq("id", id);
    setPosts(posts.filter((p) => p.id !== id));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-white">Blog Posts</h1>
        <Link href="/admin/blog/new">
          <Button className="bg-cyan-500 hover:bg-cyan-600">
            <Plus size={20} className="mr-2" />
            New Post
          </Button>
        </Link>
      </div>

      {loading ? (
        <div className="text-slate-400">Loading...</div>
      ) : (
        <div className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-slate-800 border-b border-slate-700">
              <tr>
                <th className="px-6 py-4 text-left text-white font-semibold">
                  Title
                </th>
                <th className="px-6 py-4 text-left text-white font-semibold">
                  Category
                </th>
                <th className="px-6 py-4 text-left text-white font-semibold">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-white font-semibold">
                  Created
                </th>
                <th className="px-6 py-4 text-left text-white font-semibold">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {posts.map((post) => (
                <tr
                  key={post.id}
                  className="hover:bg-slate-800 transition-colors"
                >
                  <td className="px-6 py-4 text-white">{post.title}</td>
                  <td className="px-6 py-4 text-slate-400">
                    {post.category || "-"}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded text-sm ${
                        post.published
                          ? "bg-green-950 text-green-400"
                          : "bg-yellow-950 text-yellow-400"
                      }`}
                    >
                      {post.published ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-400">
                    {new Date(post.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 flex gap-2">
                    <Link href={`/admin/blog/${post.id}`}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-cyan-400"
                      >
                        <Edit size={16} />
                      </Button>
                    </Link>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-400"
                      onClick={() => handleDelete(post.id)}
                    >
                      <Trash2 size={16} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
