import { Routes,Route } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import StudentProfile from "./Pages/StudentProfile";
import HomePage from "./Pages/HomePage";
import AdminLogin from "./Pages/AdminLogin";
import AdminProfile from "./Pages/AdminProfile";
import AdminApprovals from "./Pages/AdminApprovals";
import SignUpRequest from "./Approval NavPage/SignUpRequest";
import OffHiring from "./Pages/OffHiring";
import AddHiring from "./Pages/AddHiring";
import CampusDrive from "./Pages/CapusDrive";
import HiringDetails from "./Pages/HiringDetails";
import OnlineHiring from "./Pages/OnlineHiring";
import AddOnlineHiring from "./Pages/AddOnlineHiring";
import HiringResponseSheet from "./Pages/HiringResponseSheeet";
import StuOnlineHiring from "./Pages/StuOnlineHiring";
import EventAdmin from "./Session/EventAdmin";
import EventDetailsAdd from "./Session/EventDetailsAdd";
import EventStudent from "./Session/EventStudent";
import Contactus from "./Pages/Contactus";
import Recuriter from "./Pages/Recuriter";
import Coordinator from "./Pages/Coordinators";
import StuApplied from "./Pages/StuApplied";
import StuPending from "./Pages/StuPending";

function App(){
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/StudentLogin" element = {<Login/>} />
            <Route path="/AdminLogin" element={<AdminLogin/>}/>
            <Route path="/SignUp" element = {<SignUp/>}/>
            <Route path="/StudentProfile/:Id" element={<StudentProfile/>}/>
            <Route path="/AdminProfile/:Id" element={<AdminProfile/>}/>
            <Route path="/AdminApprovals/:Id" element={<AdminApprovals/>}/>
            <Route path="/SignUpRequest/:Id" element={<SignUpRequest/>}/>
            <Route path="/OffHiring/:Id" element={<OffHiring/>}/>
            <Route path="/AddHiring/:Id" element={<AddHiring/>}/>
            <Route path="/CampusDrive/:Id" element={<CampusDrive/>}/>
            <Route path="/HiringDetails/:Id/:JobId" element={<HiringDetails/>}/>
            <Route path="/OnlineHiring/:Id" element={<OnlineHiring/>}/>
            <Route path="/AddOnlineHiring/:Id" element={<AddOnlineHiring/>}/>
            <Route path="/responseSheet/:Id/:jobId" element={<HiringResponseSheet/>}/>
            <Route path="/OnlineHiring2/:Id" element={<StuOnlineHiring/>}/>
            <Route path="/Events/:Id" element={<EventAdmin/>}/>
            <Route path="/addEvents/:Id" element={<EventDetailsAdd/>}/>
            <Route path="/EventStudent/:Id" element={<EventStudent/>}/>
            <Route path="/Contactus" element = {<Contactus/>}/>
            <Route path="/Recuriter" element={<Recuriter/>}/>
            <Route path="/Coordinators" element={<Coordinator/>}/>
            <Route path="/StuApplied/:Id" element={<StuApplied/>}/>
            <Route path="/StuPending/:Id" element={<StuPending/>}/>
        </Routes>
    );
}
export default App;