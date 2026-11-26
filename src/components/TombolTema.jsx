
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function TombolTema() {
  const [gelap, setGelap] = useState(false);

  // Mengambil tema yang tersimpan
  useEffect(() => {
    if (localStorage.getItem("tema") === "gelap") {
      document.documentElement.classList.add("dark");
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setGelap(true);
    }
  }, []);

  // Fungsi untuk mengganti tema
  function gantiTema() {
    const isDark = document.documentElement.classList.toggle("dark");

    setGelap(isDark);
    localStorage.setItem("tema", isDark ? "gelap" : "terang");
  }

  return (
    <Button
      variant="outline"
      onClick={gantiTema}
      className="border-white bg-transparent text-white hover:bg-aksen hover:text-white"
    >
      {gelap ? "Mode Terang" : "Mode Gelap"}
    </Button>
  );
}
