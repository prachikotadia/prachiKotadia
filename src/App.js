import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import resumePdf from './components/Certificate/resume.pdf'; // Importing PDF
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import MyEducation from './components/MyEducation/MyEducation';
import MySkills from './components/MySkills/MySkills';
import Certificate from './components/Certificate/Certificate';
import MyCourses from './components/MyCourses/MyCourses';
import useLocalStorage from 'use-local-storage';

function App() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
    const certificates = [
        {
            title: 'Certificate 1',
            institution: 'Institution A',
            year: '2024',
            pdf: resumePdf // Use imported PDF
        },
        {
            title: 'Certificate 2',
            institution: 'Institution B',
            year: '2023',
            pdf: resumePdf // Use imported PDF
        }
    ];
    
    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }

    return (
        <div className="app" data-theme={theme}>
            <Sidebar theme={theme} switchTheme={switchTheme} />
            <main className='main'>
                <Home />
                <About />
                <Services />
                <MyEducation />
                <MySkills />
                <MyCourses />
                <Certificate certificates={certificates} />
                <Resume />
                <Portfolio />
                <Blog />
                <Contact theme={theme} />
            </main>
        </div>
    );
}

export default App;
