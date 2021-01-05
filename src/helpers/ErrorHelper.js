import Swal from 'sweetalert2'

class ErrorHelper {
  handleErrors(err, doAlert) {
    if (doAlert) {
      if (err) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: err,
          confirmButtonColor: '#ff3600',
        })
      }
    }
  }
}

export default new ErrorHelper();
