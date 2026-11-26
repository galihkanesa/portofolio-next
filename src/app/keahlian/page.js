import Link from "next/link";
import { supabase } from "@/lib/supabase";

export const metadata = {
  title: "Keahlian",
  description: "Daftar keahlian dan kompetensi industri milik Rizki Akbar Pradana.",
};

export default async function HalamanKeahlian() {
  const { data, error } = await supabase
    .from("keahlian")
    .select("slug, nama, level")
    .order("nama");

  if (error) console.error(error);

  const keahlian = data ?? [];

  return (
    <main className="mx-auto max-w-5xl px-6 py-12 font-sans text-foreground">
      <h1 className="text-3xl font-bold text-foreground md:text-4xl mb-3">Keahlian Saya</h1>
      <p className="text-muted-foreground mb-8">
        Daftar kompetensi dan keahlian pengembangan web yang telah saya pelajari.
      </p>

      {keahlian.length === 0 && (
        <p className="text-muted-foreground">Data keahlian belum tersedia.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {keahlian.map((item) => (
          <Link
            key={item.slug}
            href={`/keahlian/${item.slug}`}
            className="block p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-md hover:border-blue-500 transition-all group"
          >
            <h3 className="text-xl font-bold text-foreground group-hover:text-blue-600 transition-colors">
              {item.nama}
            </h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Level: <span className="font-semibold text-muted-foreground">{item.level}</span>
            </p>
            <span className="mt-4 inline-block text-xs font-semibold text-blue-600 group-hover:underline">
              Lihat detail &rarr;
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}