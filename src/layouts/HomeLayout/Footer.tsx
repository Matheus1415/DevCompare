export function Footer() {
  return (
    <footer className="content-footer footer bg-footer-theme">
      <div className="container-xxl">
        <div className="footer-container d-flex align-items-center justify-content-between py-4 flex-md-row flex-column">
          
          {/* Créditos */}
          <div className="text-center text-md-start mb-2 mb-md-0">
            © {new Date().getFullYear()} — Feito com ❤️ por{" "}
            <a
              href="https://github.com/Matheus1415"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Matheus Pereira da Silva
            </a>
          </div>

          {/* Links úteis */}
          <div className="text-center text-md-end d-none d-lg-block">
            <a
              href="https://github.com/Matheus1415/DevCompare"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link me-4"
            >
              Repositório no GitHub
            </a>
            <a
              href="https://matheus-dev-portifolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Perfil do Autor
            </a>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
