import ContactList from "./ContactList";

function UserDashboard() {
    return (
        <div>
        <h1>Tableau de bord de l&lsquo;utilisateur</h1>
        {/* Afficher la liste des contacts clients */}
        <ContactList />
      </div>
    );
}

export default UserDashboard