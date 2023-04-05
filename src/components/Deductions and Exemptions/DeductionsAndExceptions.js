import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'
import CalcITC from '../calcITC/calc'
import './index.css'

function DeductionsAndExceptions() {
  const [open, setOpen] = useState(true)
  const [deductionDetails, setDeductionDetails] = useState({
    section80Cdeductions: '',
    section80Ddeductions: '',
    section80Edeductions: '',
    section80Gdeductions: '',
    section80TTAdeductions: '',
    section80Udeductions: '',
    section24Cdeductions: '',
    OtherDeductions: '',
  })

  const handleOnclick = () => {
    setOpen(!open)
    let deductionDetailsObj = deductionDetails
    console.log(deductionDetailsObj)
  }

  const handleSection80Cdeductions = (e) => {
    setDeductionDetails({
      ...deductionDetails,
      section80Cdeductions: e.target.value,
    })
  }

  const handleSection80Ddeductions = (e) => {
    setDeductionDetails({
      ...deductionDetails,
      section80Ddeductions: e.target.value,
    })
  }

  const handleSection80Edeductions = (e) => {
    setDeductionDetails({
      ...deductionDetails,
      section80Edeductions: e.target.value,
    })
  }

  const handleSection80Gdeductions = (e) => {
    setDeductionDetails({
      ...deductionDetails,
      section80Gdeductions: e.target.value,
    })
  }

  const handleSection80TTAdeductions = (e) => {
    setDeductionDetails({
      ...deductionDetails,
      section80TTAdeductions: e.target.value,
    })
  }

  const handleSection80Udeductions = (e) => {
    setDeductionDetails({
      ...deductionDetails,
      section80Udeductions: e.target.value,
    })
  }

  const handleSection24Cdeductions = (e) => {
    setDeductionDetails({
      ...deductionDetails,
      section24Cdeductions: e.target.value,
    })
  }

  const handleOtherdeductions = (e) => {
    setDeductionDetails({
      ...deductionDetails,
      OtherDeductions: e.target.value,
    })
  }

  return (
    <div style={{ backgroundColor: '#ede9e8', padding: '20px' }}>
      <div className="left-header">
        <h3>3.Deductions and Execptions</h3>
      </div>
      <hr />
      <Collapse in={open}>
        <div id="example-collapse-text">
          <div className="left">
            <form className="form">
              <label htmlFor="80c">
                Section 80C Deductions (Investments and Expenses) <br />
                (PPF,EPF,NSC,Children tutionfee, etc)
              </label>
              <input
                id="80c"
                type="text"
                onChange={handleSection80Cdeductions}
                value={deductionDetails.section80Cdeductions}
              />
              <label htmlFor="80d">
                Section 80D Deduction (Medical Insurance Premium)
              </label>
              <input
                id="80d"
                type="number"
                onChange={handleSection80Ddeductions}
                value={deductionDetails.section80Ddeductions}
              />
              <label htmlFor="80e">
                Section 80E Deduction (Interest on Education Loan)
              </label>
              <input
                id="80e"
                type="number"
                onChange={handleSection80Edeductions}
                value={deductionDetails.section80Edeductions}
              />
              <label htmlFor="80g">
                Section 80G Deduction (Donations to Charitable Institutions)
              </label>
              <input
                id="80g"
                type="number"
                onChange={handleSection80Gdeductions}
                value={deductionDetails.section80Gdeductions}
              />
              <label htmlFor="80t">
                Section 80TTA Deduction (Interest on Savings Account)
              </label>
              <input
                id="80t"
                type="number"
                onChange={handleSection80TTAdeductions}
                value={deductionDetails.section80TTAdeductions}
              />
              <label htmlFor="80u">Section 80U Deduction (Disability)</label>
              <input
                id="80u"
                type="number"
                onChange={handleSection80Udeductions}
                value={deductionDetails.section80Udeductions}
              />
              <label htmlFor="s24">
                Section 24 Deduction (Interest on Home Loan)
              </label>
              <input
                id="s24"
                type="number"
                onChange={handleSection24Cdeductions}
                value={deductionDetails.section24Cdeductions}
              />
              <label htmlFor="other">Other Deductions (as applicable)</label>
              <input
                id="other"
                type="number"
                onChange={handleOtherdeductions}
                value={deductionDetails.OtherDeductions}
              />
            </form>
          </div>
        </div>
      </Collapse>
      <Button
        onClick={handleOnclick}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="button"
      >
        save deductions
      </Button>
      <Button className="calculate">Calculate</Button>
      <CalcITC deductionDetails={deductionDetails} />
    </div>
  )
}

export default DeductionsAndExceptions
