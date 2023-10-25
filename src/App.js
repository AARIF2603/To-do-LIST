import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState,useEffect } from 'react'   //
import Additem from './Additem';
import Searchitem from './Searchitem';
import apiRequest from './apiRequest';
function App() {

  const [items,setItems] = useState([]);
  const [search,setSearch] = useState('')
  const API_URL = 'http://localhost:3000/items';
  const [fetcherror,setFetcherror] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    const fetchData = async() => {
      try{
        const data = await fetch(API_URL);
        if (!data.ok) throw Error("Data not Found");
        const listitem = await data.json();
        console.log(listitem)
        setItems(listitem)
        setFetcherror(null)
        
      } catch (err){
        setFetcherror(err.message)
      }
      finally{
        setIsLoading(false)
      }
    }
    setTimeout(() => {
      (async () => await fetchData())()
    }, 2000)
    
  },[])
const handleCheck = async(id) => {
  const listitem = items.map((item)=>
  item.id===id ? {...item, checked:!item.checked}:item)
  setItems(listitem)
  const myItem = listitem.filter(item => item.id === id)
  const updoption = {
    method: 'PATCH',
    headers:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify({checked:myItem[0].checked})
  }
  const reqUrl = `${API_URL}/${id}`
  const result = await apiRequest(reqUrl,updoption)
  if (result) setFetcherror(result)
  
} 
const handleDelete = async(id) => {
  const deletitem = items.filter((item)=>
  item.id!==id)
  setItems(deletitem)
  const delOption = {method: 'DELETE'}
  const reqUrl = `${API_URL}/${id}`
  const result = await apiRequest(reqUrl,delOption)
  if (result) setFetcherror(result)
}    

const [newItem,setNewItem] = useState("")

const handleSubmit = (e) =>{
  e.preventDefault()
  if (!newItem) return;
  console.log(newItem)
  addItem(newItem)
  setNewItem('')
}

const addItem = async(item) =>{
  const id = items.length ? items[items.length -1].id + 1 : 1;
  const addNewItem ={id,checked:false,item}
  const listitem = [...items,addNewItem]
  setItems(listitem)
  const postoption = {
    method: 'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify(addNewItem)
  }
  
  const result = await apiRequest(API_URL,postoption)
  if (result) setFetcherror(result)
}



  return (
    <div className='App'> 
      <Header title=" To do list" />
      <Additem newItem ={newItem} 
        setNewItem={setNewItem} 
        handleSubmit={handleSubmit}
      />
      <Searchitem search={search} 
        setSearch={setSearch}
      />
      <main>
        {isLoading && <p> loading items...</p>}
        {fetcherror && <p>{`Error: ${fetcherror}`}</p>}
        {!isLoading && !fetcherror &&<Content 

          item={items.filter(items =>((items.item).toLowerCase()).includes(search.toLowerCase()))} 
          handleCheck={handleCheck} 
          handleDelete={handleDelete} 
        />
        }
      </main>
      
      <Footer length={items.length} />
    </div>
  );
}

export default App;
