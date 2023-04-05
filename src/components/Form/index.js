import './index.css'

function Inputs() {
  return (
    <div className="container">
      <div className="left">
        <div className="left-header">
          <h3>1.personal details</h3>
          {/* <button>Toggle</button> */}
        </div>
        <hr />
        <form className="form">
          <label htmlFor="name">name</label>
          <input id="name" type="text" />
          <label htmlFor="age">Age</label>
          <input id="age" type="text" />
          <label htmlFor="gender">Gender</label>
          <select id="gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </form>
        <button className="save">Save</button>
      </div>
      <hr />
      <div className="income-tax-details">
        <h4>income-tax-details</h4>
      </div>
    </div>
  )
}
export default Inputs
