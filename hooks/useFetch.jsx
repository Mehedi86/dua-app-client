'use client'

import { useEffect, useState } from "react";

const useFetch = () => {
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [duas, setDuas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategories = async () => {
            
            try {
                const res = await fetch('https://dua-app-backend-6exn4in0e-mehedi86s-projects.vercel.app/categories');
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
                const res = await fetch('https://dua-app-backend-6exn4in0e-mehedi86s-projects.vercel.app/subCategories');
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
                const res = await fetch('https://dua-app-backend-6exn4in0e-mehedi86s-projects.vercel.app/duas');
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
    return { categories, subCategories, duas, loading }
}

export default useFetch
