import { useState } from "react";
import { Globe, ChevronDown } from "lucide-react";

export default function LanguageDropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("English");

  const toggleDropdown = () => setOpen(!open);

  const handleSelect = (lang: string) => {
    setSelected(lang);
    setOpen(false);
    // Optional: trigger language change logic here
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none"
      >
        <Globe className="w-4 h-4" />
        {selected}
        <ChevronDown className="w-4 h-4" />
      </button>

      {open && (
        <div className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1 text-sm text-gray-700">
            <button
              onClick={() => handleSelect("English")}
              className="w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              English
            </button>
            <button
              onClick={() => handleSelect("Filipino")}
              className="w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              Filipino
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
