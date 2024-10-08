"use client";

import { Search } from "lucide-react";
import { FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export const SearchForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const query = searchParams.get("q");

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    const query = data.q;

    if (!query) {
      return;
    } else {
      router.push(`/search?q=${query}`);
    }
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700 text-zinc-500"
    >
      <Search className="w-5 h-5" />
      <input
        name="q"
        placeholder="Buscar produtos..."
        className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
        defaultValue={query ?? ""}
        required
      ></input>
    </form>
  );
};
