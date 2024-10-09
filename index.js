/* eslint-disable */
// Journal Entry Form

const entryForm = document.querySelector(`#entryForm`);
const entryResultsSection = document.querySelector(`#entryResultsSection`);
const entryResultItem = document.querySelector(`.entryResultItem`);
const entryResultRow = document.querySelector(`.entryResultRow`);
const getEntryTitle = document.getElementsByClassName(`entry-text-title`);
const getEntryText = document.getElementsByClassName(`entry-text-box`);

function addEntryToDom(event) {
        event.preventDefault();
        const d = new Date();
        const month = new Array();
        month[0] = 'January';
        month[1] = 'February';
        month[2] = 'March';
        month[3] = 'April';
        month[4] = 'May';
        month[5] = 'June';
        month[6] = 'July';
        month[7] = 'August';
        month[8] = 'September';
        month[9] = 'October';
        month[10] = 'November';
        month[11] = 'December';
        const n = month[d.getMonth()];
        const day = d.getDate();
        const year = d.getFullYear();


        const heading = document.createElement(`h2`);
        heading.className = `heading-results`;
        heading.textContent = `Journal Entries`;
        entryResultRow.insertAdjacentElement(`beforebegin`, heading)

        // Adding Div
        const entryDiv = document.createElement(`div`);
        entryDiv.className = `single-entry-div`;
        entryResultRow.appendChild(entryDiv);

        // Adding Div Element h3
        const entryHeading = document.createElement(`h3`);
        entryHeading.className = `single-entry-heading`;
        entryHeading.textContent = getEntryTitle[0].value;
        entryDiv.appendChild(entryHeading);

        // Adding Div Element Date

        const entryDate = document.createElement(`p`);
        entryDate.className = `single-entry-date`;
        // eslint-disable-next-line no-cond-assign
        if ((getEntryTitle[0].value = getEntryTitle[0].value)) {
                entryDate.textContent = `Date Added: ${day} ${n} ${year}`;
                entryDiv.appendChild(entryDate);
        }

        // Adding Div Element paragraph

        const entryParagraph = document.createElement(`p`);
        entryParagraph.className = `single-entry-text`;
        entryParagraph.textContent = getEntryText[0].value;
        entryDiv.appendChild(entryParagraph);
        getEntryText[0].value = ``;
}

entryForm.addEventListener(`submit`, addEntryToDom);
// Load blog posts from the server when the page loads
window.onload = function() {
        fetch('/posts')
        .then(response => response.json())
        .then(posts => {
            let savedPostsDiv = document.getElementById('savedPosts');
            savedPostsDiv.innerHTML = '';
            posts.forEach((post, index) => {
                savedPostsDiv.innerHTML += `<div><h3>Post #${index + 1}</h3><p>${post}</p></div><hr>`;
            });
        });
    }
    
    // Save the blog post to the server
    function saveBlogPost() {
        let blogPost = document.getElementById('blogPost').value;
    
        if (blogPost) {
            fetch('/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ post: blogPost })
            })
            .then(response => response.text())
            .then(message => {
                alert(message);
                document.getElementById('blogPost').value = '';
                window.onload();  // Reload the posts
            })
            .catch(error => {
                console.error('Error:', error);
            });
        } else {
            alert("Blog post cannot be empty!");
        }
    }