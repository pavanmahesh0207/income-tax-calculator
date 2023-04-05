function CalcITC({ deductionDetails, incomeDetails, personalDetails }) {
  let grossTotalIncome = 0
  let deductions = 0
  let taxableIncome = 0
  let incomeTax = 0

  const getGrossIncome = (incomeDetails) => {
    for (let i in incomeDetails) {
      grossTotalIncome = grossTotalIncome + parseInt(incomeDetails[i])
    }
  }

  getGrossIncome(incomeDetails)

  const getDeductions = () => {
    for (let i in deductionDetails) {
      deductions = deductions + parseInt(deductionDetails[i])
    }
  }

  getDeductions(deductionDetails)

  const getTaxableIncome = (grossTotalIncome, deductions) => {
    taxableIncome = grossTotalIncome - deductions
  }

  getTaxableIncome(grossTotalIncome, deductions)

  const getIncomeTax = () => {
    if (taxableIncome <= 250000) {
      incomeTax = 0
    } else if (taxableIncome > 250000 && taxableIncome <= 500000) {
      incomeTax = incomeTax * 0.05
    } else if (taxableIncome > 500000 && taxableIncome <= 750000) {
      incomeTax = incomeTax * 0.1
    } else if (taxableIncome > 750000 && taxableIncome <= 1000000) {
      incomeTax = incomeTax * 0.15
    } else if (taxableIncome > 1000000 && taxableIncome <= 1250000) {
      incomeTax = incomeTax * 0.2
    } else if (taxableIncome > 1250000 && taxableIncome <= 1500000) {
      incomeTax = incomeTax * 0.25
    } else {
      incomeTax = incomeTax * 0.25
    }
    console.log('pavan', taxableIncome)
  }

  getIncomeTax(taxableIncome)

  // console.log('gti', grossTotalIncome)
  // console.log('dedduc', deductions)
  // console.log('taxable', taxableIncome)
  // console.log('icome tax', incomeTax)

  return <div></div>
}
export default CalcITC
