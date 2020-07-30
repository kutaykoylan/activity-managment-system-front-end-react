export default function isFirstArgumentContainsSecondArgument(cardsForMyActivities,card){
    var booleanToReturn = false
    if(typeof cardsForMyActivities !== 'undefined') {
        cardsForMyActivities.map((element) => {
            if (element.title === card.title && element.details === card.details &&
                element.locationLat === card.locationLat && element.locationLng === card.locationLng &&
                element.startDate === card.startDate && element.endDate === card.endDate) {
                booleanToReturn = true
            }
        })
    }
    return booleanToReturn;
}