import Head from '../components/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Leftsidebar from '../components/leftsidebar'
import Rightsidebar from '../components/rightsidebar'

const Layout = ({ children }) => {
    return (
        <div id="wrapper">
            <Head />
            <Header />
            <main  id="mainArticle">
                { children }
            </main>
            <Leftsidebar />
            <Rightsidebar />
            <Footer />
            <style jsx>{`
                #wrapper{ 
                    display: grid;
                    grid-template-areas: 
                    "header header header"
                    "nav article ads"
                    "footer footer footer";
                    grid-template-rows: 80px 1fr 70px;  
                    grid-template-columns: 20% 1fr 15%;
                    grid-row-gap: 10px;
                    grid-column-gap: 10px;
                    height: 100vh;
                    margin: 0;
                    }  
                header, footer, article, nav, div {
                    padding: 1.2em;
                    background: gold;
                    }
                #pageHeader {
                    grid-area: header;
                    }
                #pageFooter {
                    grid-area: footer;
                    }
                #mainArticle { 
                    grid-area: article;      
                    }
                #mainNav { 
                    grid-area: nav; 
                    }
                #siteAds { 
                    grid-area: ads; 
                    } 
                /* Stack the layout on small devices/viewports. */
                @media all and (max-width: 575px) {
                    #wrapper { 
                    grid-template-areas: 
                        "header"
                        "article"
                        "ads"
                        "nav"
                        "footer";
                    grid-template-rows: 80px 1fr 70px 1fr 70px;  
                    grid-template-columns: 1fr;
                }
                }
            `}</style>
        </div>
    )
}

export default Layout;
