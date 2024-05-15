import "./Footer.css"

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <p>Dúvidas? Ligue
                <a id="number" href="https://api.whatsapp.com/send?phone=5528999111274&text=Ol%C3%A1,%20vim%20tirar%20uma%20d%C3%BAvida%20da%20Netflico">(28)999111274</a></p>
                <a href="#">Perguntas Frequentes</a>
                <a href="#">Central de Ajuda</a>
                <a href="#">Termos de Uso</a>
                <a href="#">Privacidade</a>
                <a href="#">Preferências de cookies</a>
                <a href="#">Informações corporativas</a>

            </footer>
        </div>
    )
}

export default Footer;