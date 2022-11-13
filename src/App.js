import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

const [currentIssues, setCurrentIssues] = useState(null)

useEffect(() => {

  axios.get("https://api.github.com/repos/facebook/create-react-app/issues").then((response) => {
    console.log(response);
    const issues = response.data.request;
    console.log(issues);

    setCurrentIssues(issues)
  })

}, [])

  return (
    <div>
      <h1>GitHub Issues!</h1>
      <p>Put issues here: {currentIssues}</p>
    </div>
  );
}

export default App;
