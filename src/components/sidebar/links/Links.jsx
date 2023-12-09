import { Link } from 'react-scroll'

const variants = {
    open: {
        transition: {
            staggerChildren: 0.1,
        },
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
};

const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
    },
    closed: {
        y: 50,
        opacity: 0,
    },
};



    const Links = ({ setOpen }) => {
        return (
            <div className="links">
                <Link to="navbar" className="nav-item" onClick={() => setOpen(false)}>Home</Link>
                <Link to="about" className="nav-item" onClick={() => setOpen(false)}>About</Link>
                <Link to="projects" className="nav-item" onClick={() => setOpen(false)}>Work</Link>
                <Link to="footer" className="nav-item" onClick={() => setOpen(false)}>Contact</Link>
            </div>
        );
    }

export default Links;
