const mostViewElem = [
    {
        key: 1,
        title: 'alessio',
        path: 'https://www.micolet.it/blog/wp-content/uploads/2021/12/shop-for-clothing-clothes-shop-on-hanger-at-the-modern-shop-boutique-1-1024x683.jpg',
        description: 'description',
        price: 12.30,
        sales: '20%',
        for: 'women',
        strength: 'eco'
    },
    {
        key: 2,
        title: 'alessio',
        path: 'https://www.italiaonline.it/risorse/wp-content/uploads/sites/12/2024/04/pubblicizzare-negozio-abbigliamento.jpg',
        description: 'description',
        price: 12.30,
        sales: '20%',
        for: 'women',
        strength: 'eco'
    },
    {
        key: 3,
        title: 'alessio',
        path: 'https://www.gkmoda.com/wp-content/uploads/2018/09/ingrosso-abbigliamento-donna.jpg',
        description: 'description',
        price: 12.30,
        sales: '20%',
        for: 'women',
        strength: 'new'
    },
    {
        key: 4,
        title: 'alessio',
        path: 'https://www.gkmoda.com/wp-content/uploads/2018/09/abbigliamento-donna-made-in-italy.jpg',
        description: 'description',
        price: 12.30,
        sales: '20%',
        for: 'women',
        strength: 'new'
    },
    {
        key: 5,
        title: 'alessio',
        path: 'https://b2b.luminafashion.com/img/cms/CANARIE%203/Lumina%2041170.jpg',
        description: 'description',
        price: 12.30,
        sales: '20%',
        for: 'women',
        strength: 'sales'
    },
    {
        key: 6,
        title: 'alessio',
        path: 'https://algonatural.it/wp-content/uploads/2023/10/Progetto-senza-titolo-14-768x806.jpg',
        description: 'description',
        price: 12.30,
        sales: '20%',
        for: 'women',
        strength: 'new'
    },
    {
        key: 7,
        title: 'alessio',
        path: 'https://blog.anytimefitness.it/wp-content/uploads/2017/12/abbigliamento-in-palestra-scaled.jpg',
        description: 'description',
        price: 12.30,
        sales: '20%',
        for: 'women',
        strength: 'sales'
    },
];


function SectionCards() {
    return (
        <div className="conatinerCard">

            {mostViewElem.map((item) => (

                <div key={item.key} className="card">
                    <img
                        src={item.path}
                        alt={item.for}
                    />
                    <div className="overlay">
                        <CardHead strength={item.strength} name={item.strength} />
                        <div className="cardFooter">

                        </div>

                    </div>
                </div>

            ))}

            <div className="card">coao</div>
        </div>
    )
}

function CardHead({ strength, name }) {

    let strengthClassName = '';

    if (strength === 'eco') {
        strengthClassName = 'eco';
    } else if (strength === 'sales') {
        strengthClassName = 'sales';
    } else if (strength === 'new') {
        strengthClassName = 'new';
    }

    return (
        <div className="cardHeader">
            <span
                className={strengthClassName}>
                {name}
            </span>
        </div>
    );

}

export default SectionCards;