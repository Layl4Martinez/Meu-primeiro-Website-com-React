import '../styles/global.css';

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <header>
                <h1>Meu primeiro website! :3</h1>
            </header>
            <Component {...pageProps}/>
            <footer><p>🚧 Página ainda em construção 🚧</p></footer>
        </div>
    );
}

export default MyApp;