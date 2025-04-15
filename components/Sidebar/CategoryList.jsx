'use client';

import Image from 'next/image';
import CategoryItem from './CategoryItem';
import { useEffect, useState } from 'react';


const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [duas, setDuas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch('http://localhost:5000/categories');
                const data = await res.json();
                setCategories(data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            } finally {
                setLoading(false);
            }
        };
        
        const fetchSubCategories = async () => {
            try {
                const res = await fetch('http://localhost:5000/subCategories');
                const data = await res.json();
                setSubCategories(data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            } finally {
                setLoading(false);
            }
        };
        const fetchDuas = async () => {
            try {
                const res = await fetch('http://localhost:5000/duas');
                const data = await res.json();
                setDuas(data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchDuas();
        fetchCategories();
        fetchSubCategories();
    }, []);
    
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
