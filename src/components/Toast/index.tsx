import Swal, { SweetAlertIcon } from "sweetalert2";
interface ToastProp {
  icon: SweetAlertIcon | undefined;
  title: string;
}

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

const ToastMessage = ({ icon, title }: ToastProp) => {
  return Toast.fire({
    icon,
    title,
  });
};

export default ToastMessage;
