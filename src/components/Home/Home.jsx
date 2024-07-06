import { useEffect, useState } from 'react';
import './Home.css';

export default function Home() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function fetchProducts() {
            const call = await fetch(`https://reactapi.pautinaweb.ru/objects.php`);
            const response = await call.json();
            setProducts(response);
        }
        fetchProducts();
    }, []);
    function sort(type) {
        if (type === 'возр') {
            let res = products.sort((a, b) => a.price - b.price);
            setProducts([...res]);
        }
        else if (type === 'уб') {
            let res = products.sort((a, b) => b.price - a.price);
            setProducts([...res]);
        }
    }
    const [search, setSearch] = useState('')
    function fillSearch(e) {

        setSearch(e.target.value);
        console.log(search);
    }

    return (
        <>
            <div className="catalog flex justify-center">
                <div className="container">
                    <h1 className='text-[24px] font-semibold flex justify-center pt-[30px]'>Каталог</h1>
                    <div className="sorting flex gap-2.5 pt-[20px]">
                        <button onClick={() => { sort('возр') }} className='bg-[#54a431] pl-[10px] w-[200px] text-white pr-[10px] text-[20px] pt-[5px] pb-[5px] rounded-lg'>По возрастанию</button>
                        <button onClick={() => { sort('уб') }} className='bg-[#54a431] pl-[10px] w-[200px] text-white pr-[10px] text-[20px] pt-[5px] pb-[5px] rounded-lg'>По убыванию</button>
                        <input type="text" name="search" id="" onChange={fillSearch} value={search} placeholder="Поиск" className='border-2 rounded-md p-2 ml-2 text-gray-600 active:border-slate-500'/>

                    </div>
                    <div className="flex justify-center pt-[20px]">
                        <div className='grid grid-cols-4 w-full gap-[20px]'>
                            {
                            
                            products && products.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
                            

                            .map((item) => {
                                return (
                                    <>
                                        <article className="flex flex-col items-start justify-center border-solid border-[1px] border-bottom-black">
                                            <img src="https://мебельбел.рф/image/placeholder.png" alt="" />
                                            <h1 className="product__title text-[20px] pl-10">{item.name}</h1>
                                            <p className="product__desc text-[16px] pl-10">{item.description}</p>
                                            <p className="product__art text-[12px] pl-10 pb-2 text-[#cfcfcf]">Артикул: {item.id}</p>
                                            <p className="item_price pl-10 text-[20px] pb-5">{item.price} ₽</p>
                                        </article>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}