import './../css/error.css'; // Import CSS for styling

export default function ErrorPage() {

  return (
    <div className="error-page">
      <h1>404</h1>
      <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
      <p className="error-redirect">Retourner sur la page d'accueil</p>
    </div>
  );
}