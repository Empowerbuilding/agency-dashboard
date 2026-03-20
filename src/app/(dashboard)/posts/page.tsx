"use client";

import { useState } from "react";
import { Send, Clock, Image as ImageIcon, CalendarDays } from "lucide-react";
import { useClient } from "@/lib/client-context";
import { scheduledPosts, clients } from "@/lib/mock-data";
import { ScheduledPost } from "@/types";

export default function PostsPage() {
  const { selectedClient } = useClient();
  const [posts, setPosts] = useState<ScheduledPost[]>(scheduledPosts);
  const [text, setText] = useState("");
  const [scheduleDate, setScheduleDate] = useState("");
  const [postClientId, setPostClientId] = useState(
    selectedClient?.id || clients[0].id
  );

  const filteredPosts = selectedClient
    ? posts.filter((p) => p.clientId === selectedClient.id)
    : posts;

  function handlePublish() {
    if (!text.trim()) return;
    const client = clients.find((c) => c.id === postClientId);
    const newPost: ScheduledPost = {
      id: `p${Date.now()}`,
      text,
      scheduledAt: scheduleDate
        ? new Date(scheduleDate).toISOString()
        : new Date().toISOString(),
      status: scheduleDate ? "scheduled" : "published",
      clientId: postClientId,
      clientName: client?.name || "",
    };
    setPosts([newPost, ...posts]);
    setText("");
    setScheduleDate("");
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Posts</h1>
        <p className="text-gray-500 mt-1">
          Schedule and publish posts to client Facebook pages
        </p>
      </div>

      {/* Composer */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
        <h2 className="font-semibold text-gray-900 mb-4">New Post</h2>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your post content..."
          className="w-full h-32 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm resize-none focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
        />
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-4">
          <select
            value={postClientId}
            onChange={(e) => setPostClientId(e.target.value)}
            className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-accent outline-none"
          >
            {clients.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
          <div className="flex items-center gap-2">
            <CalendarDays size={16} className="text-gray-400" />
            <input
              type="datetime-local"
              value={scheduleDate}
              onChange={(e) => setScheduleDate(e.target.value)}
              className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-accent outline-none"
            />
          </div>
          <button className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">
            <ImageIcon size={16} />
            Add Image
          </button>
          <button
            onClick={handlePublish}
            disabled={!text.trim()}
            className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed ml-auto"
          >
            <Send size={16} />
            {scheduleDate ? "Schedule" : "Publish Now"}
          </button>
        </div>
      </div>

      {/* Post List */}
      <div className="space-y-4">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl border border-gray-200 p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-gray-900">
                    {post.clientName}
                  </span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      post.status === "published"
                        ? "bg-green-50 text-green-700"
                        : post.status === "scheduled"
                          ? "bg-blue-50 text-blue-700"
                          : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {post.status}
                  </span>
                </div>
                <p className="text-sm text-gray-700">{post.text}</p>
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-400 shrink-0">
                <Clock size={12} />
                {new Date(post.scheduledAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
