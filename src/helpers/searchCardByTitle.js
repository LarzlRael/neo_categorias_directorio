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

    
    function compare(a, b) {
        if (a.className < b.className) {
            return -1;
        }
        if (a.className > b.className) {
            return 1;
        }
        return 0;
    }


    if (tercer) {
        
        return cardData.sort(compare);
    }

    const filter = cardData.filter(card =>
        (card.title.toLowerCase().includes(primero))
        || (card.title.toLowerCase().includes(segundo))

    )
        .sort((a, b) => (a.title > b.title ? 1 : -1))

    return filter;
}