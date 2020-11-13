import swal from 'sweetalert'

function error(message) {
    swal("", message, "error")
}
function success(message){
    swal("", message, "success")
}

export {
    error,
    success
}