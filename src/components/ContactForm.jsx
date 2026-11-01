"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
      onChange={() => setSubmitted(false)}
      className="space-y-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
    >
      <div>
        <label htmlFor="nama" className="block font-semibold">
          Nama lengkap
        </label>
        <input
          type="text"
          id="nama"
          name="nama"
          placeholder="Contoh: Budi Santoso"
          required
          className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"
        />
      </div>

      <div>
        <label htmlFor="email" className="block font-semibold">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="nama@email.com"
          required
          className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"
        />
      </div>

      <div>
        <label htmlFor="no-hp" className="block font-semibold">
          Nomor HP
        </label>
        <input
          type="tel"
          id="no-hp"
          name="no-hp"
          placeholder="Contoh: 081234567890"
          required
          className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"
        />
      </div>

      <div>
        <label htmlFor="keperluan" className="block font-semibold">
          Keperluan
        </label>
        <select
          id="keperluan"
          name="keperluan"
          required
          defaultValue=""
          className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"
        >
          <option value="" disabled>
            Pilih keperluan
          </option>
          <option value="pertanyaan">Pertanyaan</option>
          <option value="kerja-sama">Kerja sama</option>
        </select>
      </div>

      <div>
        <label htmlFor="pesan" className="block font-semibold">
          Pesan
        </label>
        <textarea
          id="pesan"
          name="pesan"
          rows={5}
          required
          className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"
        />
      </div>

      <button
        type="submit"
        className="rounded-lg bg-utama px-5 py-2 font-semibold text-white transition-colors hover:bg-aksen"
      >
        Kirim
      </button>
      {submitted ? (
        <p role="status" className="text-sm font-medium text-green-700">
          oke pesan anda terkrim tunggu balasan saya
        </p>
      ) : (
        <p className="text-sm text-gray-600">
          Formulir ini untuk simulasi tugas sekolah dan tidak mengirim pesan
          sungguhan.
        </p>
      )}
    </form>
  );
}
