import { useState } from "react";
import Swal from "sweetalert2";
import "./App.css";

function App() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [QueryType, setQueryType] = useState("");
  const [Message, setMessage] = useState("");
  const [Checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Submitted Successfully!",
      text: "Thank you for contacting us. We will reach you soon.",
      icon: "success",
      confirmButtonText: "OK",
    });

    console.log(FirstName);
    console.log(LastName);
    console.log(Email);
    console.log(QueryType);
    console.log(Message);
    console.log(Checked);

    setFirstName("");
    setLastName("");
    setEmail("");
    setQueryType("");
    setMessage("");
    setChecked(false);
  };

  return (
    <div className="tidda">
      <form className="Container" onSubmit={handleSubmit}>
        <h1>Contact Us</h1>

        <div className="First">
          <div className="foo">
            <label>First Name *</label>
            <input
              type="text"
              value={FirstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div className="foo">
            <label>Last Name *</label>
            <input
              type="text"
              value={LastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="fooo">
          <label>Email Address *</label>
          <input
            type="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="fooli">
          <label>Query Type *</label>
          <div className="kala">
            <label className="query">
              <input
                type="radio"
                name="queryType"
                value="General Enquiry"
                onChange={(e) => setQueryType(e.target.value)}
                required
              />
              <span>General Enquiry</span>
            </label>

            <label className="query">
              <input
                type="radio"
                name="queryType"
                value="Support Request"
                onChange={(e) => setQueryType(e.target.value)}
                required
              />
              <span>Support Request</span>
            </label>
          </div>
        </div>

        <div className="fool">
          <label>Message *</label>

          <textarea
            id="message"
            value={Message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="consent">
          <label>
            <input
              type="checkbox"
              checked={Checked}
              onChange={(e) => setChecked(e.target.checked)}
              required
            />
            I agree to the terms and conditions
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;