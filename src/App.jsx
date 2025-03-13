import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { FetchSucessful, fetchData ,Fetching} from './Redux/action'


function App() {


 let state = useSelector(state => state)



  let dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchData())
  }, [])


  



   return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {state?.data.map((ele, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-5 hover:shadow-2xl transition-all duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800">{ele.title}</h2>
           
          
          </div>
        ))}
      </div>
    </>
  )
}

export default App
