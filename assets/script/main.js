let dashboardContainer = document.querySelector('#dashboardContainer')

const displayModal = () => {
    let addForm = document.querySelector('.editModal')
    if (addForm.classList.contains('hidden')) {
        addForm.classList.remove('hidden')
    }else{
        addForm.classList.add('hidden')
    }

 

}

