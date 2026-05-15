import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

// import { useNavigation } from "react-router-dom";

function Layout() {

    // const navigation = useNavigation()
    // const isLoading = navigation.state === 'loading'

    return (
        <>
            <Header />
            {/* {isLoading && <p>Загрузка...</p>} */}
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;