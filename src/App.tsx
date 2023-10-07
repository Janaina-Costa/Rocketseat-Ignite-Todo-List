import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import './App.css'
import { Button } from './components/Button'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { Tasks } from './components/Tasks'
import IconPlus from './icons/IconPlus'
import { IPropsItem } from './components/Tasks/ItemTask'
import { EmptyList } from './components/EmptyList'


const LIST_TASK = JSON.parse(localStorage.getItem('items_task') || '[]')
function App() {

  const [task, setTask] = useState('')
  const [listTask, setListTask] = useState<IPropsItem[]>([...LIST_TASK])
  const [countTaskAdded, setCountTaskAdded] = useState(listTask.length)
  const [countProgress, setCountProgress] = useState(0)
  const [messageError, setMessageError] = useState('')

  const handleAddTask = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setTask(value)
  }

  const handleCountTasks = () => {
    setCountTaskAdded(prev => prev + 1)
  }

  const handleAddButton = (e: FormEvent) => {
    e.preventDefault()

    if (task.length === 0) {
      setMessageError(`O Campo está vazio! 😏 `)
      return
    }
    const taskAlreadyIncluded = listTask.find(item => item.text.toLocaleLowerCase().toLocaleUpperCase() === task.toLocaleLowerCase().toLocaleUpperCase())
    if (taskAlreadyIncluded) {
      setMessageError('Esta tarefa já foi incluída ✅')
      return
    }

    setListTask([...listTask, { id: `#${listTask.length + 1}`, text: task, isChecked: false }])

    console.log(listTask);


    handleCountTasks()
    setTask('')
  }

  console.log([...LIST_TASK]);

  useEffect(() => {
    localStorage.setItem('items_task', JSON.stringify(listTask))
  }, [listTask])

  const handleCheckedTask = (id: string) => {
    setListTask(prevState => {
      return prevState.map(item => item.id === id ? { ...item, isChecked: !item.isChecked } : item)

    })
  }

  const handleDeleteTask = (id: string) => {
    setListTask(prevState => {
      const newListTask = prevState.filter(item => item.id !== id)
      setCountTaskAdded(countTaskAdded - 1)
      return newListTask
    })
  }

  const handleFocusInput = () => {
    setMessageError('')
    setTask('')
  }

  useEffect(() => {
    const isTrue = listTask.filter(i => i.isChecked === true)
    setCountProgress(isTrue.length)
  }, [listTask])

  return (
    <>
      <Header />
      <main className='main_content'>
        <section className='wrapper_content_input' >
          <Input
            placeholder='Adicione uma nova tarefa'
            type='text'
            className='input'
            value={task}
            onChange={handleAddTask}
            onFocus={handleFocusInput}
          />
          <Button onClick={handleAddButton} className='button' >
            Criar
            <IconPlus />
          </Button>
        </section>
        <p className='message_error'>{messageError} </p>
        <section className='wrapper_content_tasks'>
          <div className='content_task_progress'>
            <p className='content_count_created_task'>Tarefas criadas <span className='count_created_task'>{countTaskAdded}</span></p>
            <p className='content_count_finished_task'>Concluídas <span className='count_finished_task'>{countProgress} de {countTaskAdded}</span></p>
          </div>
          {listTask.length === 0 ? (
            <EmptyList />
          ) : (
            <Tasks
              handleCheckedItem={handleCheckedTask}
              handleDeleteItem={handleDeleteTask}
              taskItem={listTask} />

          )}
        </section>
      </main>
    </>
  )
}

export default App
