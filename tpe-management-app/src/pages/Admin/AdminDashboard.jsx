import CategoryList from "../../components/CategoryList";
import AccountForm from "../../components/AccountForm";

function AdminDashboard() {
    return (
      <div>
      <h1>Tableau de bord de l&lsquo;administrateur</h1>
      {/* Afficher la liste des catégories */}
      <CategoryList />
      {/* Afficher le formulaire de création de compte TPE */}
      <AccountForm />
    </div>
    );
}

export default AdminDashboard
