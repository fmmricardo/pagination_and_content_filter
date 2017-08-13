//Variables
//Pagination
 $pagination = $('.pagination');
 $studentList = $('.student-list li');

//searchbar

 let pageHeader = $('.page-header');
 let studentEmail =$('.email');
 let studentName =$('h3');

// $searchButton= $('.searchButton');


//Show the page number
const showPage=(page)=> {
  // first hide all students on the page
  $studentList.hide();
  //slice() method to show only 10 pages
  $studentList.slice((page * 10) - 10, page * 10).show();
};

const appendPageLinks= ()=>{
  // determine how many pages for this student list
  const totalPages = Math.ceil($studentList.length / 10);
  // create a page link section
  $pagination.append('<ul><ul>');
  // “for” every page
  for (let i = 1; i <= totalPages; i++) {
    // add a page link to the page link section
    $pagination.children('ul').append('<li><a href="#">' + i + '</a></li>');

  }
  $pagination.find('ul li:first a').addClass('active');
};
// append our new page link section to the site
const loadLink = (link) => {
  // remove the old page link section from the site
  $('.pagination a[class="active"]').removeClass('active');
  // add a page link to the page link section
  link.addClass('active');
  //call the function showPage and pass the link.text
  showPage(link.text());
};

//initialize pagination
showPage(1);
appendPageLinks();

// add loadLink function to each link
$('.pagination a').on('click', (event) => {
  loadLink($(event.target));
});

//student search HTML to add dynamically
$(pageHeader).append('<input id="inputBoxText" placeholder="Search for students..."><button id="searchButton">Search</button>');

function searchList() {
    //create an array to assinge the founded values (email,name )
    let foundedResults = [];
    // Obtain the value of the search input
    let searchInputBox = $('#inputBoxText').val()//.toLowerCase();
    // clear the links


    // Loop over the student list, and for each student…
    for(let i=0; i<$studentList.length; i++){
      // ...obtain the student’s name…
      // ...and the student’s email…
      if(name[i].textContent.search(searchInputBox)!= -1 || emails[i].textContent.search(searchInputBox)!= -1){
        // push the founded fields to the array
        foundedResults.push(studentList[i]);
      }
}

// ...if the search value is found inside either email or name…
if (foundedResults.length=== 0){
  //hide studentList
  $studentList.hide();
  //remove the previous faile search
  $('.noResult').remove();
  // add a div with the message "No result found"
  $('.page').append('<div class="noResult">No result Found!</div>');
  // ...add this student to list of “matched” student
}else if (foundedResults.length < 10) {
  //remove the previoua search
  $('.noResult').remove();
  //hide setudentsList
  $studentList.hide();
  //show(page,foundedResults)
  showPage(1);
  //pagination
}else{
    //remove the previous faile search
    $('.noResult').remove();
    //hide studentList
    $studentList.hide();
    //show results
    showPage(1);
    //add pagionation Link
    appendPageLinks();
  }
//clear the input field
document.getElementById('searchInputBox').value = '';
}
//

//create a EventListner for the button

$('#searchButton').on('click',()=>{
searchList();
});


//create a EventListner for the Enter key

$('#searchButton').on('keyup',()=>{
  if (13 == e.keyCode) {
     searchList();
  }
});



    // If there’s no “matched” students…
           // ...display a “no student’s found” message
    // If over ten students were found…
           //
