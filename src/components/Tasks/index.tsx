import IconCheckDoneFalse from "../../icons/IconCheckDoneFalse"
import IconCheckDoneTrue from "../../icons/IconCheckDoneTrue"
import IconTrash from "../../icons/IconTrash"
import { IPropsItem, ItemTask } from "./ItemTask"

interface IProps{
  taskItem:IPropsItem[],
  handleCheckedItem:(id:string)=>void,  
  handleDeleteItem: (id:string)=>void
}
export const Tasks = ({taskItem ,handleCheckedItem, handleDeleteItem}:IProps)=>{
  const onClickCheck = (id:string)=>{
    handleCheckedItem(id)
  }

  const onCliCkDelete =(id:string)=>{
    handleDeleteItem(id)
  }
  return(
    <>
      {
        taskItem.map(task=>(
          <ItemTask
          id={task.id}
          key={task.id}
          IconCheck = {task.isChecked?
          <IconCheckDoneTrue/>: <IconCheckDoneFalse/>}
          IconTrash= {<IconTrash/>}
          text={task.text}
          onCheckTask={()=>onClickCheck(task.id)}
          onDeleteTask={()=>onCliCkDelete(task.id)}
          style={{
            color:task.isChecked?'#808080': '',
            textDecoration: task.isChecked? 'line-through':''
          }}
          />
        ))
      }
    </>
  )
}