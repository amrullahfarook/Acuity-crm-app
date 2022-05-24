import { useDispatch } from "react-redux";
import { deleteLead } from "../features/leads/leadSlice";

function LeadItem({ lead }) {
  const dispatch = useDispatch();
  return (
    <div className="lead">
      <div>{new Date(lead.createdAt).toLocaleString("en-US")}</div>
      <h2>{lead.name}</h2>
      <p>{lead.status}</p>
      <button onClick={() => dispatch(deleteLead(lead._id))} className="close">
        X
      </button>
    </div>
  );
}
export default LeadItem;
