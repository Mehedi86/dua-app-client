'use client'
import DuaCard from "@/components/DuaContent/DuaCard";
import DuaSection from "@/components/DuaContent/DuaSection";
import useFetch from "@/hooks/useFetch";


export default function Home() {
  const {duas} = useFetch();
  console.log(duas)
   return (
    <div>
      <DuaSection />
      <div className="">
        {duas.map((dua, index)=> <DuaCard key={dua._id} dua={dua} index={index}/>)}
      </div>
    </div>
  );
}
