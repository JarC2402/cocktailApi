
const PrintBeer = ({data}) => {

    return (
        <div className="drink_target">
            <img src={data.strDrinkThumb} alt="" />
            <h2>{data.strDrink}</h2>
        </div>
    )
}

export default PrintBeer