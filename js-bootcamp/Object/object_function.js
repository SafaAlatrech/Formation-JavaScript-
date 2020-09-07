let myBook = {
    title: 'Goethe in the Roman Campagna',
  author:'Johann Heinrich  ',
   pageCount:'180',

}
let otherBook = {
    title: 'History of peaple',
  author: 'Jhon Ronaldo',
   pageCount: '729',
}
let summary = function (book) {
  return {
    summary: `${book.title} by ${book.author}`,
   pageCountSummary: `${book.title} is ${book.pageCount}`
}
} 
let (bookSummary)=summary(myBook)
let (OtherBookSummary)=summary(otherBook)
 console.log(bookSummary.pageCountSummary)

  // Challange Area : 
  // Create function _take fahrenheit_ return objects with all three 
 
  let ConvertFahrenheit = function (fahrenheit) {
    return {
    fahrenheit:fahrenheit,
     celsuis: (fahrenheit-32)* 5/9,
     kelvin:(fahrenheit+459.67)*5/9
    }
    }
 
let temps = ConvertFahrenheit(32)
console.log(temps)
 
