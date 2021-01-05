import Swal from 'sweetalert2'

class SuccessHelper {
    
    Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    handleSuccess(msg, doAlert, title) {
        if (doAlert) {
            if (msg) {
                Swal.fire({
                    icon: 'success',
                    title:  title ? title :'Success',
                    text: msg,
                    confirmButtonColor: '#ff3600',
                })
            }
        }
    }
    handleToastSuccess(msg, doAlert) {
        if (doAlert) {
            if (msg) {
                this.Toast.fire({
                    icon: 'success',
                    title: msg,
                })
            }
        }
    }
}

export default new SuccessHelper();