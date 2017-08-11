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
$(pageHeader).append('<input id="searchInputBox"placeholder="Search for students..."><button id="searchButton">Search</button>');

function searchList() {
    //create an array to assinge the founded values (email,name )
    let foundedResults = [];
    // Obtain the value of the search input
    let searchInput = $('#input').val().toLowerCase();
    // remove the previous page link section
    let searechInput = "";
    // Loop over the student list, and for each student…
    for(let i=0; i<studentList.length; i++){
      // ...obtain the student’s name…
      // ...and the student’s email…
      if(name[i].textContent.search(searechInput)!= -1 || emails[i].textContent.search(serachInput)!= -1){
        // push the founded fields to the array
        foundedResults.push(studentList[i]);
      }
    }

// ...if the search value is found inside either email or name…
if (foundedResults=== 0){
  //remove the previous search
  searechInput.remove();
  //append message "no serchresult"

  // ...add this student to list of “matched” student
}else{
  //remove the previoua search
  //hide setudentsList
  //show(page,foundedResults)
  //pagination


}
//create a EventListner for the button
//create a EventListner for the Enter key

    // If there’s no “matched” students…
           // ...display a “no student’s found” message
    // If over ten students were found…
           //
