import { cardData } from "../data/card-info";



export const getCardByTitle = (title = '') => {

    if (title === '') {
        return cardData
    };

    title = title.toLowerCase();
    return cardData.filter(card => card.title.toLowerCase().includes(title));

}
export const getCardsByCategory = (...categorias) => {

    let [primero, segundo, tercer] = categorias

    if (tercer) {
        return cardData;
    }

    return cardData.filter(card => (card.title.toLowerCase().includes(primero))
        || (card.title.toLowerCase().includes(segundo))

    );
}