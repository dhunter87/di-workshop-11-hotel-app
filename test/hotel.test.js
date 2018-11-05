const chai = require('chai');
const expect = chai.expect;

var Hotel = require('../models/hotels')

describe('Hotel', function() {
    it('should instantiate properly', () => {
        var hotel = new Hotel("Hilton Metropole", "London")
        expect(hotel.name).to.equal("Hilton Metropole")  
        expect(hotel.city).to.equal("London")  
        expect(hotel.reviews).to.deep.equal([])   
    })  

    it('Should return 0 rating when there are no reviews', () =>{
        //set up
        var hotel = new Hotel("Hilton Metropole", "London")
        //exxcersize
        var count = hotel.reviewCount()
        //verify
        expect(count).to.equal(0)
        // tear down

    })
    it('Should return the hotels rating', () => {
        var hotel = new Hotel("Hilton Metropole", "London")
        expect(hotel.rating()).to.equal(0)

    })
    // TODO: impliment a second test for rating when reviews is not empty

    it('Should return no stars when there are no reviews', () => {
        var hotel = new Hotel("Hilton Metropole", "London")
        expect(hotel.ratingAsStars()).to.equal('')

    })
    it('Should return the holtel name and location with underscores indstead of spaces', () => {
        var hotel = new Hotel("Hilton Metropole", "London")
        expect(hotel.urlSlug()).to.equal('hilton_metropole_london')

    })
    it('Should return the holtel name and location with underscores indstead of spaces', () => {
        var hotel = new Hotel("one two three", "four five six")
        expect(hotel.urlSlug()).to.equal('one_two_three_four_five_six')

    })
});