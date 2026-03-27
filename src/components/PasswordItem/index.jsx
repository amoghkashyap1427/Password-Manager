import './index.css'
const PasswordItem = props => {
  const {details, showPassword, onClickDelete} = props
  const {id, username, website, password} = details
  return (
    <>
      <li className="list-styling">
        <div className="password-card">
          <div className="avatar blue">{website[0].toUpperCase()}</div>
          <div className="details">
            <p>{website}</p>
            <p>{username}</p>
            {showPassword ? (
              <p>{password}</p>
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                alt="stars"
              />
            )}
          </div>
          <div>
            <button
              className="delete-button"
              type="submit"
              onClick={() => onClickDelete(id)}
            >
              <img
                className="delete"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                alt="delete"
              />
            </button>
          </div>
        </div>
      </li>
    </>
  )
}
export default PasswordItem
