import Header from './header.js';

function Layout({ children }) {
    return (
        <div> 
            <Header/>
            <main>{children}</main>
        </div>
    )
}

export default Layout;