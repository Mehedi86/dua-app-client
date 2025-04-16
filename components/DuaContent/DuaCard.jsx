import Image from 'next/image';
import React from 'react';

const DuaCard = ({ dua, index }) => {
  const { dua_name_en, top_en, dua_arabic, transliteration_en, translation_en, refference_en } = dua;

  return (
    <div className="bg-white p-6 rounded-lg mt-4 border border-[#E2E2E2]">
      <div className="flex items-center gap-3">
        <Image src="/arabic.png" width={35} height={35} alt="arabic" />
        <h1 className="text-[#1FA45B] font-bold">{index + 1}. {dua_name_en}</h1>
      </div>

      <div className="text-[#393939]">
        <h1 className="py-6">{top_en}</h1>
        <h1 className="py-2 text-end text-2xl leading-14">{dua_arabic}</h1>

        {transliteration_en && (
          <h1 className="py-4">
            <span className="font-semibold">Transliteration: </span>{transliteration_en}
          </h1>
        )}
        {translation_en && (
          <h1 className="py-2">
            <span className="font-semibold">Translation: </span>{translation_en}
          </h1>
        )}

        <div className="py-2">
          <h1 className="text-[#1FA45B] font-bold">Reference:</h1>
          <h1 className="font-[500] text-black">{refference_en}</h1>
        </div>

        <div className="flex justify-between items-center mt-4">
          <Image src="/audio.png" width={44} height={44} alt="audio" />
          <div className="flex gap-6 items-center">
            <Image src="/copy.png" width={24} height={24} alt="copy" />
            <Image src="/bookmark_1.png" width={24} height={24} alt="bookmark" />
            <Image src="/light.png" width={24} height={24} alt="light" />
            <Image src="/share.png" width={24} height={24} alt="share" />
            <Image src="/report.png" width={24} height={24} alt="report" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DuaCard;
