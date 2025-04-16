'use client'
import Image from 'next/image';
import CategoryItem from './CategoryItem';
import useFetch from '@/hooks/useFetch';

const CategoryList = () => {
    const {categories, subCategories, duas} = useFetch();
    
    return (
        <aside className="w-[429px] rounded-[10px] min-h-[927px] overflow-y-auto border-r border-gray-200 bg-white">
            <h2 className="text-center rounded-t-[10px] py-[18px] px-[124px] mb-4 bg-[#1FA45B] text-white">Categories</h2>
            <div className='p-[15px] relative'>
                <input className='w-full p-[13px] pl-12 rounded-[7px] border-2 border-[#E2E2E2]' placeholder='Search by Categories' type="text" />
                <Image className='absolute top-8 left-8' src="/Frame.png" width={20} height={20} alt='search' />
            </div>
            {categories.map(category => <CategoryItem key={category.cat_id} category={category} subCategories={subCategories} duas={duas}/>)}

        </aside>
    );
};

export default CategoryList;
