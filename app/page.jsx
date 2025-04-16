'use client'
import DuaCard from "@/components/DuaContent/DuaCard";
import DuaSection from "@/components/DuaContent/DuaSection";
import useFetch from "@/hooks/useFetch";
import { useEffect, useState } from "react";


export default function Home() {
  const { duas } = useFetch();
  const [requireDuas, setRequiredDuas] = useState([]);

  useEffect(() => {
    if (duas && duas.length > 0) {
      setRequiredDuas(duas);
    }
  }, [duas]);


  return (
    <div>
      <DuaSection />
      <div className="">
        {requireDuas.map((dua, index) => <DuaCard key={dua._id} dua={dua} index={index} />)}
      </div>
    </div>
  );
}
