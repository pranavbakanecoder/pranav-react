function App() {
  const student = {
    name: 'Siddharth Nambiar',
    rollNo: '42171',
    batch: 'S5',
  }

  return (
    <main className="app">
      <div className="card">
        <p className="label">Cloud Computing - Experiment 6</p>
        <h1>{student.name}</h1>
        <p className="detail">{student.rollNo}</p>
        <p className="detail">{student.batch}</p>
        <p className="footer">Deployed on AWS Amplify</p>
      </div>
    </main>
  )
}

export default App
