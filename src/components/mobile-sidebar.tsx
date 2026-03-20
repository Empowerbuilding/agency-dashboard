"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Sidebar from "./sidebar";

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-sidebar text-white rounded-md"
      >
        <Menu size={20} />
      </button>
      {open && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 z-50 lg:hidden">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-white z-50"
            >
              <X size={20} />
            </button>
            <Sidebar />
          </div>
        </>
      )}
    </>
  );
}
