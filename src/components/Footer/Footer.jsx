import './Footer.css'

export default function Footer({ language }) {
  return (
    <footer className="footer">
      <p>© 2025 Nicolas.dev | {language === 'pt' ? 'Todos os direitos reservados.' : 'All rights reserved.'}</p>
    </footer>
  )
}
