import './index.css'
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from '../PasswordItem'

const PasswordManager = () => {
  const [initialWebsiteName, setWebsite] = useState('')
  const [initialUserName, setUserName] = useState('')
  const [initialPassword, setPassword] = useState('')
  const [initialList, setList] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const onChangeWeb = event => {
    setWebsite(event.target.value)
  }
  const onChangeUserName = event => {
    setUserName(event.target.value)
  }
  const onChangePassword = event => {
    setPassword(event.target.value)
  }
  const onClickAdd = () => {
    if (
      initialWebsiteName === '' ||
      initialUserName === '' ||
      initialPassword === ''
    ) {
      return
    }

    const newItem = {
      id: uuidv4(),
      username: initialUserName,
      website: initialWebsiteName,
      password: initialPassword,
    }

    setList(prev => [...prev, newItem])

    setWebsite('')
    setUserName('')
    setPassword('')
  }

  const onChangeSearch = event => {
    setSearchInput(event.target.value)
  }

  const filteredList = initialList.filter(eachItem =>
    eachItem.website.toLowerCase().includes(searchInput.toLowerCase()),
  )

  const onToggleShowPassword = () => {
    setShowPassword(prev => !prev)
  }

  const onClickDelete = id => {
    const updatedList = initialList.filter(eachItem => eachItem.id !== id)
    setList(updatedList)
  }

  return (
    <>
      <div className="header">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo"
        />
      </div>

      <div className="top-card">
        <div className="form-card">
          <h2>Add New Password</h2>

          <div className="input-group">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
              alt="website"
            />
            <input
              type="text"
              placeholder="Enter Website"
              value={initialWebsiteName}
              onChange={onChangeWeb}
            />
          </div>

          <div className="input-group">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              alt="username"
            />
            <input
              type="text"
              placeholder="Enter Username"
              value={initialUserName}
              onChange={onChangeUserName}
            />
          </div>

          <div className="input-group">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
              alt="password"
            />
            <input
              type="password"
              placeholder="Enter Password"
              value={initialPassword}
              onChange={onChangePassword}
            />
          </div>

          <div className="btn-container">
            <button className="add-btn" onClick={onClickAdd}>
              Add
            </button>
          </div>
        </div>

        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
          />
        </div>
      </div>

      <div className="bottom-card">
        <div className="bottom-header">
          <h2>
            Your Passwords <span className="count">{filteredList.length}</span>
          </h2>

          <div className="search-box">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
            />
            <input
              type="search"
              placeholder="Search"
              onChange={onChangeSearch}
            />
          </div>
        </div>

        <hr />

        <div className="show-password">
          <input type="checkbox" id="show" onChange={onToggleShowPassword} />
          <label htmlFor="show">Show Passwords</label>
        </div>

        <div className="password-list">
          {filteredList.length === 0 ? (
            <div className="no-passwords-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-passwords-img"
              />
              <p>No Passwords</p>
            </div>
          ) : (
            <ul>
              {filteredList.map(eachItem => (
                <PasswordItem
                  key={eachItem.id}
                  details={eachItem}
                  showPassword={showPassword}
                  onClickDelete={onClickDelete}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  )
}

export default PasswordManager