import { key } from 'localforage';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import makananKhas from '../data/dummyData';

export default function Detail() {
  const { id } = useParams();

  const selectedFood = makananKhas.find(
    (makanan) => makanan.id.toString() === id
  );

  return (
    <div className='flex justify-center mt-10'>
      <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <a href='#'>
          <img className='rounded-t-lg' src={selectedFood.gambar} alt='' />
        </a>
        <div className='p-5'>
          <a href='#'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              {selectedFood.nama}
            </h5>
          </a>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            {selectedFood.deskripsi}
          </p>
          <p className='mb-3 text-gray-700 text-sm dark:text-gray-400 font-bold'>
            Bahan:
          </p>
          {selectedFood.bahanUtama.map((bahan) => (
            <span
              className='bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300'
              key={bahan}
            >
              {bahan}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
