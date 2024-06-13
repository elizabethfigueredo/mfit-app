import Header from '../components/Header';
import Hero from '../components/Hero';
import ImageGrid from '../components/ImageGrid';
import Additional from '../components/Additional';
import Navigation from '../components/Navigation';




function Dashboard(){
    return(
        <div className="p-6">
            <Header/>
            <Hero/>
            <ImageGrid/>
            <Additional/>
            <Navigation/>
        </div>
    );
}

export default Dashboard;

