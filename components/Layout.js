import BackgroundImage from '../components/BackgroundImage'

const Layout = ({ children }) => {
    return (
        <div className="mx-auto min-h-screen py-32">
            { children }
        </div>
    );
}
 
export default Layout;