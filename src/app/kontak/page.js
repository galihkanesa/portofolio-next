import FormKontak from "@/components/FormKontak";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = {
  title: "Kontak",
  description: "Hubungi Rizki Akbar Pradana untuk pertanyaan atau kolaborasi proyek.",
};

export default function Kontak() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12 font-sans text-foreground w-full">

      {/* Bagian Judul Halaman */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground md:text-4xl tracking-tight">Hubungi Saya</h1>
        <p className="mt-2 text-base text-muted-foreground">Punya pertanyaan atau ingin bekerja sama? Isi form berikut:</p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-stretch w-full">

        {/* KOLOM KIRI: FORMULIR */}
        <div className="md:col-span-2 bg-card p-6 md:p-8 rounded-xl border border-border shadow-sm w-full">
          <FormKontak />
        </div>

        {/* KOLOM KANAN: TEMUKAN SAYA */}
        <div className="bg-card p-6 md:p-8 rounded-xl border border-border shadow-sm w-full h-full flex flex-col justify-start">
          <h2 className="text-lg font-bold text-foreground mb-4">Temukan Saya di</h2>
          <div className="flex flex-col space-y-3 text-sm">
            <a
              href="https://github.com/galihkanesa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-aksen hover:underline font-medium inline-block"
            >
              GitHub &rarr;
            </a>
            <a
              href="mailto:galihkanesa@gmail.com"
              className="text-aksen hover:underline font-medium inline-block break-all"
            >
              galihkanesa@gmail.com
            </a>
          </div>
        </div>

      </div>
      <Card className="md:col-span-2">
        <CardContent>
          <FormKontak />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text
primary">Temukan Saya di</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li>
              <a href="https://github.com/BagusHidayat21"
                target="_blank" className="text-aksen hover:underline">
                GitHub
              </a>
            </li>
            <li>
              <a href="mailto:andi.pratama@example.com"
                className="text-aksen hover:underline">
                andi.pratama@example.com
              </a>
            </li>
          </ul>
        </CardContent>
      </Card>
    </main>
  );
}
