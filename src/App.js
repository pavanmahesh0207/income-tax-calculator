import './App.css'
import DeductionsAndExceptions from './components/Deductions and Exemptions/DeductionsAndExceptions'
import Header from './components/Header'
import IncomeSources from './components/Income Sources/IncomeSources'
import PersonalDetails from './components/Personal Details'

function App() {
  return (
    <div className="#ede9e8">
      <Header />
      <div style={{ marginBottom: '100px', marginTop: '30px' }}>
        <PersonalDetails />
      </div>
      <div style={{ marginBottom: '100px' }}>
        <IncomeSources />
      </div>
      <div>
        <DeductionsAndExceptions />
      </div>
    </div>
  )
}

export default App
