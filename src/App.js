import './App.css';
import CommentDetail from './Components/molecules/CommentDetail'
import ApprovalCard from './Components/molecules/ApprovalCard'

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var todayAtTime = "Today at " + time

function App() {
  return (
    <div className="App left">
            <div className="ui container components" >
            <ApprovalCard>
            <CommentDetail 
                author = "Mateen"
                time = {todayAtTime}
            />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail 
                author = "Riaz"
                time = {date}
            />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail 
                author = "Aziz"
                time = {todayAtTime}
            />
            </ApprovalCard>
            </div>
    </div>
  );
}

export default App;
