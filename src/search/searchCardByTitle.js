import { cardData } from "../data/card-info";



export const getCardByTitle = (title = '') => {

    if (title === '') {
        return cardData
    };

    title = title.toLowerCase();
    return cardData.filter(card => card.title.toLowerCase().includes(title));
}