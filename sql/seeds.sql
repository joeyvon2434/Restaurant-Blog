USE restaurant_blog_db;

INSERT INTO Authors(name)
VALUES ('Joe');

INSERT INTO Reviews (restaurantName, valueRating, highCost, lowCost, shouldYouGo, rating, reviewText, mainPictureLink, topChoice, AuthorId)
VALUES ('AAA Test', '4', '25', '13', '2', '4', 'This is a review of test restaurant AAA', '/images/AAA_Test.png', '0', '1');

