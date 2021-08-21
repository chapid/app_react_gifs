import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['One Punch']);

    // const handleAdd = () => {
    //     //setCategorias([...categorias,'X-men']);
    //     setCategorias(cats =>[...cats,'Marvel']);
    // }

    return ( 
        <>
        <h2> GiffExpertApp </h2> 
        <AddCategory setCategorias={setCategorias}/>   
        <hr/>
        <ol>
            {
                categorias.map(category =>(
                     <GifGrid 
                        key={category}
                        category={category}/>
                ))
            }
        </ol>
        </>
    )
}