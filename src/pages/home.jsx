import React from 'react';
import { Link } from 'react-router-dom';
import makananKhas from '../data/dummyData';

export default function home() {
  return (
    <>
      <div className='relative overflow-x-auto mt-10'>
        <h1 className='text-black text-xl font-bold mb-5 font-mono text-center'>
          Daftar Makanan Indonesia
        </h1>
        <div className='flex justify-center'>
          <table className='text-sm text-left dark:text-gray-400 border-solid border-2 border-gray-500 w-2/3'>
            <thead className='text-xs text-gray-900 uppercase dark:text-gray-400'>
              <tr className='bg-amber-300'>
                <th scope='col' className='px-8 py-3'>
                  Nama
                </th>
                <th scope='col' className='px-8 py-3'>
                  Asal
                </th>
                <th scope='col' className='py-3'>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {makananKhas.map((makanan) => (
                <tr
                  className='bg-white dark:bg-gray-800 border-solid border-2 border-gray-500'
                  key={makanan.id}
                >
                  <th
                    scope='row'
                    className='px-8 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                  >
                    {makanan.nama}
                  </th>
                  <th
                    scope='row'
                    className='px-8 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                  >
                    {makanan.asalDaerah}
                  </th>
                  <th
                    scope='row'
                    className='py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                  >
                    <Link
                      to={{
                        pathname: `/food-detail/${makanan.id}`,
                        state: { makananKhas },
                      }}
                    >
                      Detail
                    </Link>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
