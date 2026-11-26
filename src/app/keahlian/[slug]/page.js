import Link from "next/link";
import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";

async function ambilKeahlian(slug) {
  const { data, error } = await supabase
    .from("keahlian")
    .select("slug, nama, level, deskripsi")
    .eq("slug", slug)
    .maybeSingle();

  if (error) console.error(error);
  return data;
}

// Fungsi pembuat judul tab halaman secara dinamis sesuai nama keahlian
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = await ambilKeahlian(slug);

  if (!item) {
    return { title: "Keahlian tidak ditemukan" };
  }
  return { title: item.nama };
}

export default async function DetailKeahlian({ params }) {
  const { slug } = await params;
  const item = await ambilKeahlian(slug);

  // Jika slug acak / tidak terdaftar di data, lempar otomatis ke halaman 404 kustom
  if (!item) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 space-y-6 text-foreground font-sans">
      <Link href="/keahlian" className="text-sm font-semibold text-blue-600 hover:underline inline-block">
        &larr; Kembali ke daftar keahlian
      </Link>

      <div className="bg-card p-6 md:p-8 rounded-xl border border-border shadow-sm space-y-4">
        <div>
          <h1 className="text-3xl font-extrabold text-foreground md:text-4xl">{item.nama}</h1>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Tingkat Kemahiran: <span className="font-semibold text-muted-foreground">{item.level}</span>
          </p>
        </div>

        <div className="border-t border-gray-100 dark:border-gray-700 pt-4">
          <h2 className="text-lg font-bold text-foreground mb-2">Deskripsi &amp; Pengalaman</h2>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            {item.deskripsi}
          </p>
        </div>
      </div>
    </main>
  );
}