class Review {
    constructor(rating, comment, date){
        this.rating = rating
        this.comment = comment
        this.date = date
    }
    ratingAsStars(){
        if (this.rating <= 0){
            return ''
        } 
        else if (this.rating == 1){
            return '⭐️'
        } 
        else if (this.rating == 2){
            return '⭐️⭐️'
        } 
        else if (this.rating == 3){
            return '⭐️⭐️⭐️'
        } 
        else if (this.rating == 4){
            return '⭐️⭐️⭐️⭐'
        } 
        else if (this.rating >= 5){
            return '⭐️⭐️⭐️⭐️⭐'
        } 
    }

    

}

module.exports = Review