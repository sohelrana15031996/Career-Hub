const getItemsFromStorage = ()=>{
  const checkItems = localStorage.getItem('job_application_Submit');
  if(checkItems){
    return JSON.parse(checkItems);
  }
  return [];
}

const itemClicked = (id)=>{ 

  const itemSet = getItemsFromStorage();
  itemSet.push(id);
  localStorage.setItem('job_application_Submit',JSON.stringify(itemSet));
}

export {itemClicked, getItemsFromStorage};