'use client';
import DuaCard from "@/components/DuaContent/DuaCard";
import DuaSection from "@/components/DuaContent/DuaSection";
import CategoryList from "@/components/Sidebar/CategoryList";
import useFetch from "@/hooks/useFetch";
import { useEffect, useState } from "react";

export default function Home() {
  const { duas } = useFetch();
  const [requireDuas, setRequiredDuas] = useState([]);
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    if (duas && duas.length > 0) {
      setRequiredDuas(duas);
      // Set initial section title from first dua
      updateSectionTitle(duas[0]);
    }
  }, [duas]);

  const updateSectionTitle = (dua) => {
    if (dua?.dua_name_en) {
      const sectionTitle = dua.dua_name_en.split('#')[0].trim();
      setCurrentSection(sectionTitle);
    }
  };

  const handleSubcategoryClick = (filteredDuas) => {
    setRequiredDuas(filteredDuas);
    if (filteredDuas.length > 0) {
      updateSectionTitle(filteredDuas[0]);
    }
  };

  return (
    <div className="flex gap-6">
      <div>
        <CategoryList setRequiredDuas={handleSubcategoryClick} />
      </div>
      <div className="flex-1 h-screen overflow-y-auto px-4 no-scrollbar">
        <DuaSection sectionTitle={currentSection} />
        <div>
          {requireDuas.map((dua, index) => (
            <DuaCard key={dua._id} dua={dua} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}