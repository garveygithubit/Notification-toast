let toastBox = document.getElementById('toastBox')
let SuccessMsg = '<i class="fa-solid fa-circle-check"></i>Successfully submitted'
let ErrorMsg = ' <i class="fa-solid fa-circle-xmark"></i> please fix the errors'
let InvalidMsg = '<i class="fa-solid fa-circle-exclamation"></i>invalid input, check again'


function showToast(msg){
   let toast = document.createElement('div')
   toast.classList.add('toast')
   toast.innerText = msg
    toastBox.appendChild(toast)
}