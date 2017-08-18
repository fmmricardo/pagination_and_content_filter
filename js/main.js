//Variables
//Pagination
 let pagination = $('.pagination');
 let studentList = $('.student-list li');
 let currentList = studentList;

//searchbar

 let pageHeader = $('.page-header');
 let studentEmail =$('.email');
 let studentName =$('h3');

// add pagination div dinamicaly
$('.page').append('<div class="pagination"></div>');

//Show the page number
const showPage= (pageNumber, currentList) =>{
    // first hide all students on the page
    studentList.hide();
    let currentListLength = currentList.length;
    // Then loop through all students in our student list argument
    for (let i = 0; i < currentListLength; i++) {
   if (i < pageNumber * 10 && i + 1 > (pageNumber - 1) * 10) {
     $(currentList[i]).show();
   }
 }
 currentList= studentList;
};

const appendPageLinks= ()=>{
    let currentListLength = currentList.length;
  // determine how many pages for this student list
  let totalPages = Math.ceil(currentListLength / 10);
  // create a page link section
  pagination.append('<ul><ul>');
  // “for” every page
  for(let i = 1; i <= totalPages; i++) {
    // add a page link to the page link section
    pagination.children('ul').append('<li><a href="#">' + i + '</a></li>');
  }
  pagination.find('ul li:first a').addClass('active');

// append our new page link section to the site
const loadLink = (link) => {
  // remove the old page link section from the site
  $('.pagination a[class="active"]').removeClass('active');
  // add a page link to the page link section
  link.addClass('active');
  //call the function showPage and pass the link.text
  showPage(link.text(),currentList);
  };

// add loadLink function to each link
$('.pagination a').on('click', (event) => {
  loadLink($(event.target));
  });
};
//initialize pagination
showPage(1, studentList);
appendPageLinks();



// //student search HTML to add dynamically
// $(pageHeader).append('<input id="inputBoxText" placeholder="Search for students..."><button id="searchButton">Search</button>');
//
// function searchList() {
//     //create an array to assinge the founded values (email,name )
//     let foundedResults = [];
//     // Obtain the value of the search input
//     let searchInputBox = $('#inputBoxText').val()//.toLowerCase();
//     // clear the links
//
//
//     // Loop over the student list, and for each student…
//     for(let i=0; i<$studentList.length; i++){
//       // ...obtain the student’s name…
//       // ...and the student’s email…
//       if(studentName[i].textContent.search(searchInputBox)!= -1 || studentEmail[i].textContent.search(searchInputBox)!= -1){
//         // push the founded fields to the array
//         foundedResults.push(studentList[i]);
//       }
// }
//
// // ...if the search value is found inside either email or name…
// if (foundedResults.length=== 0){
//   //hide studentList
//   $studentList.hide();
//   //remove the previous faile search
//   $('.noResult').remove();
//   // add a div with the message "No result found"
//   $('.page').append('<div class="noResult">No result Found!</div>');
//   // ...add this student to list of “matched” student
// }else if (foundedResults.length < 10) {
//   //remove the previoua search
//   $('.noResult').remove();
//   //hide setudentsList
//   $studentList.hide();
//   //show(page,foundedResults)
//   showPage(1);
//   //pagination
// }else{
//     //remove the previous faile search
//     $('.noResult').remove();
//     //hide studentList
//     $studentList.hide();
//     //show results
//     showPage(1);
//     //add pagionation Link
//     appendPageLinks();
//   }
// //clear the input field
// document.getElementById('searchInputBox').value = '';
// }
// //
//
// //create a EventListner for the button
//
// $('#searchButton').on('click',()=>{
// searchList();
// });
//
//
// //create a EventListner for the Enter key
//
// $('#searchButton').on('keyup',()=>{
//   if (13 == e.keyCode) {
//      searchList();
//   }
// });
