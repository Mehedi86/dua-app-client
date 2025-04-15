import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const CategoryItem = ({ category, subCategories, duas }) => {
    const [requiredSubCategories, setRequireSubCategories] = useState([]);
    const [requiredDua, setRequiredDua] = useState([]);
    const { cat_icon, cat_id, cat_name_bn, cat_name_en, id, no_of_dua, no_of_subcat } = category;

    useEffect(() => {
        const filteredSubCategories = subCategories.filter(subCategory => subCategory.cat_id === cat_id)

        setRequireSubCategories(filteredSubCategories);
    }, [])

    useEffect(() => {
        if (duas && duas.length > 0) {
            const selectedDua = duas.filter(dua => Number(dua.cat_id) === Number(cat_id));
            setRequiredDua(selectedDua);
        }
    }, [duas, cat_id]);

    return (
        <div className='m-[15px] p-[10px] bg-[#E8F0F5] flex gap-2 items-center rounded-[10px]'>
            <Image className='rounded-[10px]' src="/Frame 1.png" width={60} height={60} alt='introduction' />
            <div className='w-full flex justify-between'>
                <div>
                    <h1 className='text-[#1FA45B] font-semibold'>{cat_name_en}</h1>
                    <p>Subcategory: {requiredSubCategories.length}</p>
                </div>
                <div className='border-l-2 border-[#E2E2E2] pl-4'>
                    <p className='text-center'>{requiredDua.length} <br />Duas</p>
                </div>
            </div>
        </div>
    )
}

export default CategoryItem
