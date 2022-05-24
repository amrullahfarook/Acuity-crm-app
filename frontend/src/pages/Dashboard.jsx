import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LeadForm from "../components/LeadForm";
import Spinner from "../components/Spinner";
import LeadItem from "../components/LeadItem";
import { getLeads, reset } from "../features/leads/leadSlice";
import { reset as authReset } from "../features/auth/authSlice";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { leads, isLoading, isError, message } = useSelector(
    (state) => state.leads
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/");
    }

    dispatch(getLeads());

    return () => {
      dispatch(reset());
      dispatch(authReset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Leads Dashboard</p>
      </section>

      <LeadForm />

      <section className="content">
        {leads.length > 0 ? (
          <div className="leads">
            {leads.map((lead) => (
              <LeadItem key={lead._id} lead={lead} />
            ))}
          </div>
        ) : (
          <h3>You have not set any leads</h3>
        )}
      </section>
    </>
  );
}

export default Dashboard;
