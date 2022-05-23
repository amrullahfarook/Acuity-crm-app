import { useState } from "react";
import { useDispatch } from "react-redux";
import { createLead } from "../features/leads/leadSlice";

function LeadForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [lead_source, setLeadSource] = useState("");
  const [lead_owner, setLeadOwner] = useState("");
  const [status, setStatus] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(
      createLead({
        name,
        company,
        email,
        phone,
        lead_source,
        lead_owner,
        status,
      })
    );
    setName("");
    setCompany("");
    setEmail("");
    setPhone("");
    setLeadSource("");
    setLeadOwner("");
    setStatus("");
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text"></label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            name="company"
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            name="phone"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            name="lead_source"
            id="lead_source"
            value={lead_source}
            onChange={(e) => setLeadSource(e.target.value)}
          />
          <input
            type="text"
            name="lead_owner"
            id="lead_owner"
            value={lead_owner}
            onChange={(e) => setLeadOwner(e.target.value)}
          />
          <input
            type="text"
            name="status"
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add a Lead
          </button>
        </div>
      </form>
    </section>
  );
}
export default LeadForm;
