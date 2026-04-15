"use client";
import React from "react";
import { Search as SearchIcon } from "lucide-react";

const Search = ({ id }: { id?: string }) => {
  return (
    <section className="w-full flex justify-center">
      <div className="relative w-full max-w-md">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="text"
          name="search"
          id={id}
          placeholder="Search articles..."
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white shadow-sm 
          text-sm outline-none focus:ring-2 focus:ring-black focus:border-transparent 
          transition"
        />

      </div>
    </section>
  );
};

export default Search;