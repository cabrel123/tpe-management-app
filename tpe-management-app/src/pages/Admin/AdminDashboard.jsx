import AccountForm from "../../components/AccountForm";
import AccountList from "../../components/AccountList";

function AdminDashboard() {
    return (
      <div>
      <h1>Tableau de bord de l&lsquo;administrateur</h1>
      {/* Afficher la liste des clients */}
      <AccountList />
      {/* Afficher le formulaire de création de compte TPE */}
      <AccountForm />
    </div>
    );
}

export default AdminDashboard
