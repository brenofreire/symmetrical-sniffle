import { useState } from "react";
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome() {
  const [activeTab, setActiveTab] = useState('step-1')

  const [form1State, setForm1State] = useState({
    email: '',
    password: ''
  })

  const [form2State, setForm2State] = useState({
    address: '',
    zipcode: ''
  })

  const [form3State, setForm3State] = useState({
    description: ''
  })



  const handleSubmit = () => {

  }

  return <div>
    <div className="wrapper bg-gray p-6">
      {activeTab === 'step-1' &&
        <div id="step-1" className="step">

          <form className="bg-[#578]">
            <div>
              <label htmlFor="email"></label>
              <input
                type="text" placeholder="email" name="email" id="form-email" value={form1State.email}
                onChange={(e) => setForm1State((s) => ({ ...s, email: e.target.value }))}
                className="bg-white mb-5 m-3"
              />
            </div>

            <div>
              <label htmlFor="password"></label>
              <input type="password" placeholder="password" name="password" id="form-password" value={form1State.password}
                onChange={(e) => setForm1State((s) => ({ ...s, password: e.target.value }))}
                className="bg-white mb-5 m-3" />

            </div>
          </form>

          <div className="step-footer">
            <button onClick={() => setActiveTab('step-1')}>Prev</button>
            <button disabled={!form1State.email || !form1State.password} onClick={() => setActiveTab('step-2')}>Next</button>
          </div>
        </div>
      }

      {activeTab === 'step-2' &&
        <div id="step-2">

          <form className="bg-[#786]">
            <div>
              <label htmlFor="address"></label>
              <input placeholder="Address" className="bg-white mb-5 m-3" value={form2State.address} type="text" name="address" id="form-address"
                onChange={(e) => setForm2State((s) => ({ ...s, address: e.target.value }))} />
            </div>

            <div>
              <label htmlFor="zipcode"></label>
              <input placeholder="zip" className="bg-white mb-5 m-3" type="text" name="zipcode" id="form-zipcode" value={form2State.zipcode} onChange={(e) => setForm2State((s) => ({ ...s, zipcode: e.target.value }))} />
            </div>
          </form>

          <div className="step-footer">
            <button onClick={() => setActiveTab('step-1')}>Prev</button>
            <button disabled={!form2State.zipcode} onClick={() => setActiveTab('step-3')}>Next</button>
          </div>
        </div>
      }

      {activeTab === 'step-3' &&
        <div id="step-3">

          <form className="bg-[#578]">
            <div>
              <label htmlFor="address"></label>
              <textarea className="bg-white mb-5 m-3" value={form3State.description} name="address" id="form-address"
                onChange={(e) => setForm2State((s) => ({ ...s, address: e.target.value }))} />
            </div>

          </form>
          <div className="step-footer">
            <button onClick={() => setActiveTab('step-2')}>Prev</button>
            <button disabled={!form3State.description} onClick={() => setActiveTab('step-3')}>Next</button>
          </div>
        </div>
      }


    </div>
  </div>
}

