import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import AuthRoute from "./components/routes/AuthRoute";
import tokenAuth from "./config/token";
import AuthState from "./context/auth/authState";
import FolderState from "./context/folder/folderState";
import TaskState from "./context/task/TaskState";

const token = localStorage.getItem("token");

if (token) {
  tokenAuth(token);
}

function App() {
  return (
    <AuthState>
      <FolderState>
        <TaskState>
          <Toaster
            position="top-left"
            toastOptions={{
              style: {
                top: 30,
                zIndex: "99999",
              },
            }}
          />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/folders" element={<AuthRoute />} />
            </Routes>
          </BrowserRouter>
        </TaskState>
      </FolderState>
    </AuthState>
  );
}

export default App;
