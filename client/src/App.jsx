import './App.scss'
import React, { useState } from 'react'
import Loader from './components/Loader/Loader'
import { postRequest } from './base/api-request'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  const [params, setParams] = useState({ email: '', number: '' })
  const [statusloader, selStatusloader] = useState(false)
  const [data, setData] = useState([])

  const submitHandler = async (e) => {
    e.preventDefault()
    selStatusloader(true)

    try {
      await postRequest('/api/json', params).then((res) => {
        if (res.length > 0) {
          setData(res)

          toast.success('Что-то нашли!')
        } else {
          toast.info('Увы, ничего не нашли!')
          setData(res)
          setParams({ email: '', number: '' })
        }

        selStatusloader(false)
      })
    } catch (error) {
      selStatusloader(false)
      setData([])
      toast.error('Что-то пошло не так!')
    }
  }
  const handleChangeEmail = (val) => setParams({ ...params, ...val })

  const handleChangeNumer = (val) => {
    const valInput = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let res = ''
    const newVal = val
      .replaceAll('-', '')
      .split('')
      .map((el, i) => {
        if ((i + 1) % 2 === 0 && val.replaceAll('-', '').length !== i + 1)
          return el + '-'
        else return el
      })
      .join('')

    if (valInput.includes(+val.at(-1))) {
      res = { ...params, ...{ number: newVal } }
    } else {
      res = {
        ...params,
        ...{ number: newVal.slice(0, newVal.length) },
      }
    }
    return setParams(res)
  }

  return (
    <div className="App">
      <Loader statusloader={statusloader} />
      <ToastContainer />

      <div className="content">
        <form onSubmit={submitHandler}>
          <input
            type="email"
            value={params.email}
            onChange={(e) => handleChangeEmail({ email: e.target.value })}
            placeholder="email*"
            required
          />

          <input
            type="text"
            value={params.number}
            onChange={(e) => handleChangeNumer(e.target.value)}
            placeholder="number"
          />
          <input type="submit" />
        </form>
        {data.length > 0 ? (
          data.map(({ email, number }) => (
            <ul>
              <li>
                <span> Email:</span>
                <span>{email}</span>
              </li>
              <li>
                <span> Number:</span>
                <span>{number}</span>
              </li>
            </ul>
          ))
        ) : (
          <span className="notData">Нет данных!</span>
        )}
      </div>
    </div>
  )
}

export default App
