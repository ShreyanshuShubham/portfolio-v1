function load_data_experience(data_array) {
    console.log(data_array)
    experience_items = []
    experience_div = document.getElementById('experience')

    for (exp in data_array) {
        current_item = data_array[exp]
        console.log(current_item)
        let desc = ""
        current_item.description.forEach((element) => {
            desc += '<li>' + element + '</li>'
        });

        experience_element = '<div class="resume-item d-flex flex-column flex-md-row mb-5"><div class="resume-content mr-auto"><h3 class="mb-0">'
            + current_item.organization
            + '</h3><div class="subheading mb-3">'
            + current_item.position
            + '</div><ul>'
            + desc
            + '</ul></div><div class="resume-date text-md-right"><span class="text-primary">'
            + current_item.duration
            + '</span></div></div>';
        
        let div = document.createElement('div');
        div.innerHTML = experience_element;
        experience_div.appendChild(div)
    }
}
function load_data_education(data_array) {
    console.log(data_array)
    education_items = []
    education_div = document.getElementById('education')

    for (exp in data_array) {
        current_item = data_array[exp]
        console.log(current_item)

        education_element = '<div class="resume-item d-flex flex-column flex-md-row mb-5"><div class="resume-content mr-auto"><h3 class="mb-0">'
            + current_item.institute
            + '</h3><div class="subheading mb-3">'
            + current_item.course
            + '</div><p>'
            + current_item.score
            + '</p></div><div class="resume-date text-md-right"><span class="text-primary">'
            + current_item.duration
            + '</span></div></div>';
        
        let div = document.createElement('div');
        div.innerHTML = education_element;
        education_div.appendChild(div)
    }
}
fetch('data/user_profile.json')
    .then((res) => res.text())
    .then((text) => {
        user_data = JSON.parse(text)
        load_data_experience(user_data.experiences)
        load_data_education(user_data.education)

    })
    .catch((e) => console.error(e));