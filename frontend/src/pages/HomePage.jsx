import AddTask from '@/components/AddTask'
import DateTimeFillter from '@/components/DateTimeFillter'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import StatsAndFillter from '@/components/StatsAndFillter'
import TaskList from '@/components/TaskList'
import TaskListPagation from '@/components/TaskListPagation'
import React from 'react'

const HomePage = () => {
  return (
    <div className='container pt-8 mx-auto' >
    <div className='w-full max-x-2xl -6 mx-auto space-y-6'>
     {/* Đầu trang */}
      <Header/>
      {/* Tạo nhiệm vụ */}
      <AddTask />
      {/* Thống kê và bộ lọc */}
      <StatsAndFillter />
      {/* Danh sách nhiệm vụ */}
      <TaskList />
      {/* Phân trang */}
      <div className='flex flex-col items-center justify-between gap-6 sm-flex-row'>
        <TaskListPagation/>
        <DateTimeFillter/>


      </div>
      {/* Footer */}
      <Footer/>

    </div>
    </div>
  )
}

export default HomePage