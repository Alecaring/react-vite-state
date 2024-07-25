const linksElem = [
    {
        key: 1,
        name: 'Uomo',
        direction: '',

    },
    {
        key: 2,
        name: 'Donna',
        direction: '',

    },
    {
        key: 3,
        name: 'Bambino',
        direction: '',

    },
];
const logElem = [
    {
        name: 'Log-in',
        dir: ''
    },
    {
        name: 'Register',
        dir: ''
    },
];

function Header() {
    return (
        <div className="conatinerNav">
            <nav>
                <div>
                    <ul>
                        {linksElem.map((link) => (
                            <li key={link.key}>{link.name}</li>
                        ))}
                    </ul>
                </div>
                <div className="logo">
                    <img src="https://img.freepik.com/free-vector/gradient-quill-pen-logo-with-tagline-template_23-2149813051.jpg" alt="" />
                </div>
                <div className="log">
                    <ul>
                        <li>
                            <span>
                                {logElem[0].name}
                            </span>
                            <span> \ </span>
                            <span>
                                {logElem[1].name}
                            </span>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    );
};

export default Header;