var chai = require('chai')
var expect = chai.expect
chai.use(require('chai-datetime'))

var Review = require('../models/review')

describe('Review', () => {
  it('instantiates properly', () => {
    var review1 = new Review(5, 'Excellent hotel, very clean', '2018-12-17')
    expect(review1.rating).to.equal(5)
    expect(review1.text).to.equal('Excellent hotel, very clean')
    expect(review1.date).to.equalDate(new Date('2018-12-17'))
  })

  it('expeoses the rating as stars', () => {
    var review1 = new Review(4, 'Excellent hotel, very clean', '2018-12-17')
    expect(review1.ratingAsStars()).to.equal('⭐️⭐️⭐️⭐️')
  })
})
