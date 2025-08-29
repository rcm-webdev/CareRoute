
import { ArrowRight } from "lucide-react";
import doodle from "../assets/images/Chill-Time.svg";
import Features from "../components/Features";
import Compare from "../components/Compare";
import Footer from "../components/Footer";
import { useNavigate } from "react-router";

const Home = () => {
    const navigate = useNavigate();
    
    return (
      <div className="relative min-h-screen w-screen top-0 bg-[#6C87C2]/30 bg-[radial-gradient(#ffffff33_1px,#ffff_1px)] bg-[size:20px_20px]">
        {/* Hero Section  */}
        
        <div className="hero min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-5xl bg-base-100/75">
                        <img src={doodle} alt="Relaxing Doodle" className="w-3/4 mx-auto mb-8" />
                        <h1 className=" text-4xl md:text-6xl lg:text-7xl font-chillax mb-8">
                        Not sure if it's <span className="text-secondary">urgent</span>?
                        </h1>
                        <p className="text-2xl mb-10 text-base-content/80 max-w-xl mx-auto font-synonym">
                        <span className="bg-primary/20 text-secondary rounded-2xl px-3">CareRoute</span> is a symptom-to-care navigator. In just a few clicks, you can get an <mark className="bg-primary/20 text-secondary rounded-2xl px-3">instant</mark> recommendation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button 
                                className="btn btn-primary btn-lg w-full sm:w-auto" 
                                onClick={() => navigate('/campaign')}
                            >
                                What should I do?
                                
                            </button>
                            
                            <button className="btn btn-outline btn-lg w-full sm:w-auto">
                            How it works
                                <ArrowRight className="w-4 h-4"/>
                            </button>
                        </div>
                        <p className="font-synonym mt-4 opacity-40">No signup required / Private & Secure.</p>
                    </div>
                    
                </div>
      
      
      </div>
      <Features/>
      <Compare/>
      <Footer/>
      </div>
        
    )
}

export default Home;
