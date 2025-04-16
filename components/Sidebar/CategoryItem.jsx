'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const CategoryItem = ({ category, subCategories, duas, setRequiredDuas }) => {
  const [requiredSubCategories, setRequiredSubCategories] = useState([]);
  const [requiredDua, setRequiredDua] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const { cat_icon, cat_id, cat_name_en } = category;

  // Filter subcategories for this category
  useEffect(() => {
    const filteredSubCategories = subCategories.filter(sub => sub.cat_id === cat_id);
    setRequiredSubCategories(filteredSubCategories);
  }, [subCategories, cat_id]);

  // Filter duas for this category
  useEffect(() => {
    if (duas && duas.length > 0) {
      const selectedDua = duas.filter(dua => Number(dua.cat_id) === Number(cat_id));
      setRequiredDua(selectedDua);
    }
  }, [duas, cat_id]);

  // Handle subcategory click
  const handleSubCategoryClick = (subcat_id) => {
    const filtered = duas.filter(dua => Number(dua.subcat_id) === Number(subcat_id));
    setRequiredDuas(filtered); // This will update both the duas and section title
  };

  return (
    <div className="m-[15px] bg-[#E8F0F5] rounded-[10px] overflow-hidden">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="p-[10px] flex gap-2 items-center cursor-pointer"
      >
        <Image
          className="rounded-[10px]"
          src="/Frame 1.png"
          width={60}
          height={60}
          alt="category-icon"
        />
        <div className="w-full flex justify-between">
          <div>
            <h1 className="text-[#1FA45B] font-semibold">{cat_name_en}</h1>
            <p>Subcategory: {requiredSubCategories.length}</p>
          </div>
          <div className="border-l-2 border-[#E2E2E2] pl-4">
            <p className="text-center">
              {requiredDua.length} <br /> Duas
            </p>
          </div>
        </div>
      </div>

      {isOpen && requiredSubCategories.length > 0 && (
        <div className="relative pl-[35px] pr-4 pb-4 bg-white rounded-b-[10px]">
          <div className="absolute left-[20px] top-0 bottom-0 border-l-2 border-dotted border-[#1FA45B]" />
          <div className="flex flex-col gap-2 pt-2">
            {requiredSubCategories.map((sub) => (
              <div
                key={sub.subcat_id}
                onClick={() => handleSubCategoryClick(sub.subcat_id)}
                className="relative pl-4 text-sm text-[#393939] hover:text-[#1FA45B] cursor-pointer"
              >
                <div className="absolute left-[-18px] top-1.5 w-[8px] h-[8px] rounded-full bg-[#1FA45B]" />
                {sub.subcat_name_en}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryItem;
