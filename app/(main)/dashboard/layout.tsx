import React, { Suspense } from 'react'
import {BarLoader} from 'react-spinners'
import DashboardPage from './page';

function DashboardLayout() {
  return (
    <div className='px-5'>
        <h1 className='text-5xl font-medium mb-5'>Dashboard Page</h1>

        <Suspense fallback={<BarLoader className='mt-4' width={'100%'} color='#9333ea' />}>
            <DashboardPage/>
        </Suspense>
    </div>
  )
}

export default DashboardLayout;