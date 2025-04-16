'use client';
import { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import CategoryItem from './CategoryItem';
import useFetch from '@/hooks/useFetch';

const CategoryList = ({ setRequiredDuas }) => {
    const { categories = [], subCategories = [], duas = [] } = useFetch();
    const [searchTerm, setSearchTerm] = useState('');
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    // Properly typed and safe filtered categories
    const filteredCategories = useMemo(() => {
        // Return empty array if no categories yet
        if (!categories || !Array.isArray(categories)) return [];

        // Return all categories if no search term or initial load
        if (!searchTerm.trim() || isInitialLoad) return categories;

        const term = searchTerm.toLowerCase().trim();

        return categories.filter(category => {
            // Safely handle category object and its properties
            if (!category || typeof category !== 'object') return false;

            const name = String(category.cat_name_en || '').toLowerCase();
            return name.includes(term);
        });
    }, [categories, searchTerm, isInitialLoad]);

    // Reset initial load flag after data is ready
    useEffect(() => {
        if (categories.length > 0) {
            setIsInitialLoad(false);
        }
    }, [categories]);

    // Handle search input changes
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <aside className="md:w-[200px] lg:w-[300px] xl:w-[429px] rounded-[10px] min-h-[927px] overflow-y-auto  bg-white border border-[#E2E2E2]">
            <h2 className="text-center rounded-t-[10px] py-[18px] px-[124px] mb-4 bg-[#1FA45B] text-white">
                Categories
            </h2>
            <div className='p-[15px] relative'>
                <input
                    className='w-full p-[13px] pl-12 rounded-[7px] border-2 border-[#E2E2E2]'
                    placeholder='Search by Categories'
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    aria-label="Search categories"
                />
                <Image
                    className='absolute top-8 left-8'
                    src="/Frame.png"
                    width={20}
                    height={20}
                    alt='Search icon'
                    aria-hidden="true"
                />
            </div>

            {filteredCategories.map(category => (
                <CategoryItem
                    key={category.cat_id}
                    category={category}
                    subCategories={subCategories}
                    duas={duas}
                    setRequiredDuas={setRequiredDuas}
                />
            ))}
        </aside>
    );
};

export default CategoryList;
