// Service page with header and main content

import Header from "./Header";
import MainContent from "./MainContent";


const ServicePage = () => {
    return (
        <div className="container">
            <Header title={'Wrinkle Relaxers And Fillers'}/>
            <MainContent />
        </div>
    )
};

export default ServicePage;