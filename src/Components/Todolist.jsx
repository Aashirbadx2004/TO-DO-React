
import React, { useRef, useState } from 'react'

import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import Counter from './Counter';
import { IoAddOutline } from "react-icons/io5";
import { FaListCheck } from "react-icons/fa6";

function Todolist() {
  const [activity, setActivity] = useState('')
  const [listData, setListData] = useState([]);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setIsEDitItem] = useState(null)
  const focusInputField = useRef(null)
  const [checked, setChecked] = useState(false)



  function addActivity() {
    const ActivityTrim = activity.trim();


    if (!ActivityTrim) {
      alert('Please Enter Your Task')

    }
    else if (activity && !toggleSubmit) {
      setListData(
        listData.map((data) => {
          if (data.id === isEditItem) {
            return { ...data, name: activity }
          }
          return data;
        })
      )
      setToggleSubmit(true)
      setActivity('')
      setIsEDitItem(null);

    }
    else {
      const allInputListData = { id: new Date().getTime().toString(), name: activity, checked: false }
      setListData([...listData, allInputListData])
      setActivity('')
    }



  }
  function removeActivity(index) {
    const updatedLIstData = listData.filter((elem) => {
      return index != elem.id;
    });

    setListData(updatedLIstData)

  }

  function editActivity(id) {
    let newEditList = listData.find((data) => {
      return data.id === id
    });

    setToggleSubmit(false)
    setActivity(newEditList.name)
    setIsEDitItem(id);
    focusInputField.current.focus()


  }
  function clearAll() {
    setListData([])
    setToggleSubmit(true)
    setActivity('')
  }
  function handleCheck(id) {
    setListData(
      listData.map((data) => {
        if (data.id === id) {
          return { ...data, checked: !data.checked }
        }
        return data;
      })
    )
  }


  function checkedTask() {

    return listData.filter(item => item.checked).length;
  }


  function allTask() {
    return listData.length;
  }

  let totalTask = allTask()

  function hamdleEnterKey(e) {
    if (e.key === 'Enter') {
      addActivity()
    }

  }


  return (
    < >
      <div className='    relative p-2 '>
        <div className='text-white   mb-1 p-0 flex space-x-4 select-none'>
          <div className='text-4xl text-yellow-300' ><FaListCheck /> </div>
          <div className=' text-3xl font-bold text-blue-300 '>TO-DO</div>
        </div>

        <div className='p-3 flex flex-col items-center outline-none  '>
          <div className='p-3 flex flex-row items-center  justify-between w-[100%] outline outline-white/50 outline-1'>
            <div className=' text-white flex text-4xl flex-col mr-9  max-width '>
              <div className=' border-b-[0.5px]  inline-block  text-yellow-300 select-none'>
                Task

              </div>

              <div className='mt-9  select-none '>
                {totalTask ? <div className=' outline-none  flex flex-col   text-2xl text-white   '>
                  <div className=' ' > Total Task : {allTask()} </div>
                  <div> Completed Task : {checkedTask()} </div>


                </div> : null}

              </div>

            </div>
            <Counter Taskdone={checkedTask()} allTask={allTask()} />

          </div>

          <div className=' w-full flex justify-around mt-3'>
            <input
              ref={focusInputField}
              className=' border border-slate-300 w-[90%] p-2 rounded-[14px] bg-black/30 text-white text-lg '
              type="text"
              placeholder='Enter Your Task'
              value={activity}
              title='Enter Task'

              onChange={(e) => {
                setActivity(e.target.value)

              }}
              onKeyDown={hamdleEnterKey}


            />
            {
              toggleSubmit ? <IoAddOutline onClick={addActivity} className={` text-white  text-5xl  flex justify-center items-center cursor-pointer   rounded-full p-0  m-0 mx-3 hover:bg-blue-600   hover:text-black transition duration-300 hover:delay-150 hover:rotate-90 `} title='Add' /> : <FaRegEdit
                className=' text-white  text-5xl  flex justify-center items-center cursor-pointer bg-transparent  p-0  m-0 mx-3  hover:text-blue-400 transition duration-300 hover:delay-150 '
                onClick={addActivity} title='Edit'
              />
            }



          </div>
          <div  >
          </div  >
        </div>

        <div className=' text-white text-2xl m-3 '>

          {listData.map((data, i) => {
            return (
             
                <div
                  key={data.id}
                  className=' text-white bg-black w-auto my-2 p-2 rounded-lg flex justify-between items-center hover:bg-blue-500  transition duration-300 hover:delay-150  font-serif hover:font-semibold' style={{ overflowWrap: 'break-word' }}
                >
                  <div className='flex items-center  '>
                    <input
                      type="checkbox"
                      name=""
                      className=' cursor-pointer mx-2  mt-1  transform scale-150 '
                      checked={data.checked}
                      onChange={() => handleCheck(data.id)}

                    />
                    <span className={`flex items-start text-yellow-400 break-all  ${data.checked ? 'line-through blur-[0.5px]' : ''}`}  >{data.name}
                    </span>


                  </ div >

                  <div className=' flex space-x-4 hover:text-black ml-2'>
                    <FaRegTrashCan
                      className='cursor-pointer  items-center hover:text-3xl'
                      onClick={() => removeActivity(data.id)}
                      title='Delete'
                    />
                    <FaRegEdit
                      className='cursor-pointer items-center hover:text-3xl '
                      onClick={() => editActivity(data.id)}
                      title='Edit'
                    />
                  </div>

                </div>

            
            )
          })}



          <div className='flex justify-center '>
            {listData.length > 0 && (



              <div
                onClick={clearAll}
                className=' flex text-yellow-300 justify-center rounded-lg    w-[150px] h-min hover:bg-blue-400 hover:text-black  hover:font-bold cursor-pointer transition delay-150 duration-300' title='Clear All Task'
              >
                Clear All <FaRegTrashCan className='mt-1 ml-2 text-yellow hover:' />
              </div>
            )}


          </div>


        </div>

      </div>

    </>

  )
}

export default Todolist
