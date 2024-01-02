import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const [gender, setGender] = useState("");
  const [date, setDate] = useState("");
  return (
    <div className="login">
      <main>
        <h1 className="heading">Login</h1>

        <div className="">
          <label>Gender</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Slect Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="">
          <label>Date of birth</label>
          <input
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="">
          <p>Already Signed In Once</p>
          <button>
            <FcGoogle /> <span>Sign in with Google</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
