import axios from "axios";
import {
  get_saloon_plan_Api,
  get_saloon_payment_method_Api,
  get_social_links_Api,
  get_social_employee_link_api,
  update_saloon_social_links_Api,
  get_all_employees,
  create_saloon_schedule,
  get_company_by_employee,
  update_social_employee_link_api,
  delete_salon_by_employee,
  edit_saloon_schedule,
  add_custom_booking_api,
  get_saloon_schedule,
  get_employee_services_Api,
  create_social_employee_link_api,
  create_employee_profile_Api,
  hire_employee_by_company,
  get_all_employees_associate_with_company,
  delete_employee_company,
  saloon_get_categories_Api,
  saloon_create_service_Api,
  saloon_get_all_service_Api,
  saloon_edit_service_Api,
  saloon_delete_service_Api,
  get_user_Api,
  edit_user_Api,
  get_template_Api,
  company_update_template_Api,
  company_post_upload_Api,
  company_post_get_Api,
  company_post_delete_Api,
  saloon_edit_company_Api,
  get_saloon_user_id_Api,
  get_saloon_plan_id,
  edit_saloon_plan_Api,
  get_Payment_Method_By_Saloon_Api,
  user_create_profile_picture_Api,
  edit_user_payment_method_Api,
  saloon_nearby_Api,
  edit_saloon_company_logo,
  get_all_booking_by_saloon,
  get_all_saloon_Api,
  get_saloon_template_data,
  get_all_booking_by_employee_Api,
  edit_company_employe,
  get_services,
  employee_post_upload,
  edit_employee_profile,
  get_employee_details,
  get_company_employee,
  get_employees_not_associate_with_company,
  add_Companies_By_Employee,
  get_company_portfolio,
  edit_company_user_Api,
  get_employee_by_service_company,
  create_booking,
  edit_booking,
  git_waiting_appoinments,
  edit_customer_profile,
  get_all_bookings_by_user,
  get_all_bookings_by_saloon,
  get_get_saloon_categories,
  get_saloon_services,
  get_employees_by_saloon_and_service,
  get_home_page_info,
  get_wallet,
  place_Autocomplete_URL,
  forget_password_Api,
  verify_reset_code_Api,
  reset_password_Api,
  get_saloons_by_category_api,
  search_by_name,
  get_home_service_info,
  get_privacy_policy,
  get_cookie_policy,
  get_legal_info,
  get_social_links_for_home,
  get_salon_plains,
  buy_plains,
  subcribe_email,
  get_faqs,
  add_card_info,
  get_card_info,
  get_methods,
  getAllBundles,
  palns_payment,
  create_Update_template,
  get_customer_template,
  createBundle,
  getCompanyBundles,
  updateBundle,
  get_booking_report,
  get_employee_reports,
  google_Api,
  get_ratings_by_company,
  get_ratings_by_employee
} from "./WebServices";
import { google_secret_Key } from "./SecretKeys";

// import moment from "moment";
// import qs from "qs";

// const Header = {
//     headers: {
//         "Content-Type": "application/x-www-form-urlencoded"
//     }
// };

const getBookingReports = (accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${get_booking_report}`, {
        headers: {
          Authorization: accessToken,
        }
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};


const getSaloonPlan = (accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${get_saloon_plan_Api}`, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getCompanyRatings = (accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${get_ratings_by_company}`, {
        headers: {
          Authorization: accessToken,
        }
    
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  })
}
const getEmployeeRatings = (accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${get_ratings_by_employee}`, {
        headers: {
          Authorization: accessToken,
        }
    
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  })
}

const getSaloonPaymentMethod = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${get_saloon_payment_method_Api}`)
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getPlains = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${get_saloon_plan_Api}`)
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getSocialLinks = (accessToken, companyId) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${get_social_links_Api}`, {
        headers: {
          Authorization: accessToken,
        },
        params: {
          companyId: companyId,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};
const getEmployeeSocialLinks = (accessToken, companyId) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${get_social_employee_link_api}`, {
        headers: {
          Authorization: accessToken,
        },
        params: {
          companyId: companyId,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const UpdateSaloonSocialMedia = (data, accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${update_saloon_social_links_Api}`, data, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        } else {
          reject(response.data);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};
const UpdateEmployeeSocialMediaLink = (data, accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${update_social_employee_link_api}`, data, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        } else {
          reject(response.data);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getAllEmployee = (accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${get_all_employees}`, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const editCustomerProfile = (data, accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${edit_customer_profile}`, data, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};
const googleLogin = (data) => {
  console.log(data, "Data_in_google");
  return new Promise((resolve, reject) => {
    axios
      .post(`${google_Api}`, data, {

      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}
const createSaloonSchedule = (data, accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${create_saloon_schedule}`, data, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const createAllBundles = (data, accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${createBundle}`, data, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const addCustomBooking = (data, accessToken) => {
  console.log("addCustomBooking -> data, accessToken", data, accessToken);
  return new Promise((resolve, reject) => {
    axios
      .post(`${add_custom_booking_api}`, data, {
        headers: {
          Authorization: accessToken,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response, "responseresponseresponse");
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        console.log(error, "errorerrorerror");
        reject(error);
      });
  });
};

const getSaloonCategories = (data, accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${get_get_saloon_categories}`, data, {
        headers: {
          // Authorization: accessToken,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};
const createEmployeeSocialMediaLink = (data, accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${create_social_employee_link_api}`, data, {
        headers: {
          Authorization: accessToken,
          // 'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log("getSaloonCategories -> response", response);
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getSaloonServices = (data, accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${get_saloon_services}`, data, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        console.log("getSaloonCategories -> response", response);
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getEmployeesBySaloonAndService = (data, accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${get_employees_by_saloon_and_service}`, data, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        console.log("getSaloonCategories -> response", response);
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const addCardInfo = (data, accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${add_card_info}`, data, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        console.log("add_card_info -> response", response);
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const addCompanyByEmployee = (data, accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${add_Companies_By_Employee}`, data, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

// add_Companies_By_Employee

const editSaloonSchedule = (data, accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${edit_saloon_schedule}`, data, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const hireCompanyEmployee = (data, accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${hire_employee_by_company}`, data, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const deleteEmployeeFromCompany = (data, accessToken) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "delete",
      // data,
      url: `${delete_employee_company}?employeeId=${data.employeeId}`,
      headers: { Authorization: accessToken },
    })
      // axios.delete(`${delete_employee_company}`, data, {
      //     headers: {
      //         Authorization: accessToken
      //     }
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};
const deleteCompanyPost = (data, accessToken) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: `${company_post_delete_Api}?id=${data._id}`,
      headers: { Authorization: accessToken },
    })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getAllEmployeeAssociatedWithCompany = (accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${get_all_employees_associate_with_company}`, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getEmployeeNotAssociatedWithCompany = (accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${get_employees_not_associate_with_company}`, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const addPlansPayment = (data, accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${palns_payment}`, data, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getCardUserInfo = (accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${get_card_info}`, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};
const getAllBooking = (accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${get_all_booking_by_saloon}`, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getCompletedBooking = (accessToken) => {
  console.log("Sdffffffff", accessToken);

  return new Promise((resolve, reject) => {
    axios
      .get(`${get_all_bookings_by_saloon}`, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getSaloonSchedule = (accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${get_saloon_schedule}`, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getEmployeeServices = (accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${get_employee_services_Api}`, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const createEmployeeProfile = (data, accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${create_employee_profile_Api}`, data, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const forgetPassword = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${forget_password_Api}`, data, {})
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const verifyCode = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${verify_reset_code_Api}`, data, {})
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const resetPassword = (data) => {
  console.log(data, "DATAAAA");
  return new Promise((resolve, reject) => {
    axios
      .post(`${reset_password_Api}`, data, {})
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const saloonGetCategories = (accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${saloon_get_categories_Api}`, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getCompaniesBundle = (accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${getCompanyBundles}`, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const saloonCreateService = (data, accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${saloon_create_service_Api}`, data, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const saloonGetAllService = (accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${saloon_get_all_service_Api}`, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const saloonEditService = (data, serviceId, accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${saloon_edit_service_Api}?serviceId=${serviceId}`, data, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const saloonDeleteService = (serviceId, accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${saloon_delete_service_Api}?serviceId=${serviceId}`, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};
const deleteSalonByEmployee = (companyId, accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${delete_salon_by_employee}`, {
        headers: {
          Authorization: accessToken,
        },
        data: {
          companyId: companyId,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

// Get User
const getUser = (accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${get_user_Api}`, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

//Edit User
const editUser = (data, accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${edit_user_Api}`, data, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const editCompanyUser = (data, accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${edit_company_user_Api}`, data, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const companyPostUpload = (data, accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${company_post_upload_Api}`, data, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getEmployeeeReports = (data, accessToken) => {
  console.log(data, "dataaaaaaaaa");
  return new Promise((resolve, reject) => {
    axios
      .post(`${get_employee_reports}`, data, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getTemplates = (accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${get_template_Api}`, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};
const getCompanyPost = (accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${company_post_get_Api}`, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getAllBookingsByUser = (accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${get_all_bookings_by_user}`, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const companyUpdateTemplate = (data, accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${company_update_template_Api}`, data, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getCompanyEmployeeInfo = (data, accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${get_company_employee}`, data, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

// Edit Company
const editCompany = (data, accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${saloon_edit_company_Api}`, data, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

// Get Saloon By User Id
const getSaloonById = (accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${get_saloon_user_id_Api}`, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

// Get Saloon Plan By Id
const getSaloonPlanById = (companyId, accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${get_saloon_plan_id}?companyId=${companyId}`, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const editSaloonPlan = (data, accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${edit_saloon_plan_Api}`, data, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getPaymentMethodBySaloon = (accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${get_Payment_Method_By_Saloon_Api}`, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getWallet = (accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${get_wallet}`, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const userCreateProfilePicture = (data, accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${user_create_profile_picture_Api}`, data, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const editUserPaymentMethod = (data, accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${edit_user_payment_method_Api}`, data, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const saloonNearby = (data, accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${saloon_nearby_Api}`, data, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

// Edit Saloon Company Logo
const editCompanyLogo = (data, accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${edit_saloon_company_logo}`, data, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

// Edit Company Employe
const editCompanyEmploye = (data, accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${edit_company_employe}`, data, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

// Edit Booking
const editBooking = (data, accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${edit_booking}`, data, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        console.log("editCompanyEmploye -> response", response);
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

// Edit waiting Booking
const gitWaitingAppoinments = (accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${git_waiting_appoinments}`, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const gitAllSaloonAppoinments = (accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${get_all_booking_by_saloon}`, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};
const getHomePageInfo = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${get_home_page_info}`)
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getAllSaloonsForEmployee = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${get_all_saloon_Api}`, {})
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getSaloonTemplateData = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${get_saloon_template_data}`, data, {})
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};



const subcribeEmail = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${subcribe_email}`, data, {})
      .then((response) => {
        console.log("response: resolve", response);
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getAllBookingByEmployee = (accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${get_all_booking_by_employee_Api}`, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getHomeServiceInfo = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${get_home_service_info}`)
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getPrivacyPolicy = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${get_privacy_policy}`)
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getAdminSocialLinksForHome = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${get_social_links_for_home}`)
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getCookiePolicy = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${get_cookie_policy}`)
      .then((response) => {
        console.log("response: ", response);
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getFaqs = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${get_faqs}`)
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getLegalInfo = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${get_legal_info}`)
      .then((response) => {
        console.log("response: ", response);
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getServices = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${get_services}`, {})
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

// Employee Upload Media
const employeePostUpload = (data, accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${employee_post_upload}`, data, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

//Employee Edit Profile
const employeeEditProfile = (data, accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${edit_employee_profile}`, data, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const updateBundlePlan = (data, accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${updateBundle}`, data, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

// Get Employee Details

const getEmployeeDetails = (accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${get_employee_details}`, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getSalonPlains = (accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${get_salon_plains}`, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getAllBundle = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${getAllBundles}`)
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getCompanyThatEmployeeAdd = (accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${get_company_by_employee}`, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

// Get Portfolio

const getCompanyPorfolio = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${get_company_portfolio}`, data, {})
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

// Get Employee By Services and Compnay
const getEmployeeByServiceCompany = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${get_employee_by_service_company}`, data, {})
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

// Create Booking

const createBooking = (data, accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${create_booking}`, data, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const buyPlains = (data, accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${buy_plains}`, data, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};
const createUpdateTemplate = (data, accessToken) => {
  console.log(accessToken, 'accessToken');

  return new Promise((resolve, reject) => {
    axios
      .post(`${create_Update_template}`, data, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);


        }
      })

      .catch((error) => {
        reject(error);
      });
  });
};

const getTemplateData = (accessToken, state) => {
  console.log(state, "STATE_VALUE_INSIDE_TEMP_DATA");
  return new Promise((resolve, reject) => {
    axios
      .get(`${get_customer_template}`, {
        headers: {
          Authorization: accessToken,
        },
        params: {
          templateId: state
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getCardMethods = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${get_methods}`)
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        } else if (!response.data.success) {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};


const locationSuggestions = (value) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${place_Autocomplete_URL(
          value,
          "AIzaSyBN4xzZ_BqLc7v4USWM_DdIU5BsrpYJNyw"
        )}`
      )
      .then((response) => {
        console.log("locationSuggestions -> response", response);
        resolve(response);
      })
      .catch((error) => {
        console.log("locationSuggestions -> error", error);
        reject(error);
      });
  });
};

const searchByName = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${search_by_name}`, data, {}) // POST METHOD ON DEMAND
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};


const getSaloonsByCategory = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${get_saloons_by_category_api}`, data, {}) // POST METHOD ON DEMAND
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export {
  getTemplateData,
  getSaloonPlan,
  getAllBookingByEmployee,
  getAllSaloonsForEmployee,
  getSaloonPaymentMethod,
  getSocialLinks,
  deleteSalonByEmployee,
  UpdateSaloonSocialMedia,
  getAllEmployee,
  createSaloonSchedule,
  editSaloonSchedule,
  getSaloonSchedule,
  getEmployeeServices,
  createEmployeeProfile,
  hireCompanyEmployee,
  getAllEmployeeAssociatedWithCompany,
  UpdateEmployeeSocialMediaLink,
  deleteEmployeeFromCompany,
  saloonGetCategories,
  saloonCreateService,
  saloonGetAllService,
  saloonEditService,
  saloonDeleteService,
  getUser,
  editUser,
  companyUpdateTemplate,
  getTemplates,
  companyPostUpload,
  editCompany,
  getSaloonById,
  getSaloonPlanById,
  editSaloonPlan,
  getPaymentMethodBySaloon,
  userCreateProfilePicture,
  editUserPaymentMethod,
  saloonNearby,
  editCompanyLogo,
  getEmployeeSocialLinks,
  getAllBooking,
  getSaloonTemplateData,
  editCompanyEmploye,
  getServices,
  employeePostUpload,
  employeeEditProfile,
  getEmployeeDetails,
  getCompanyEmployeeInfo,
  getEmployeeNotAssociatedWithCompany,
  addCompanyByEmployee,
  getCompanyPorfolio,
  editCompanyUser,
  getEmployeeByServiceCompany,
  createBooking,
  editBooking,
  gitWaitingAppoinments,
  gitAllSaloonAppoinments,
  editCustomerProfile,
  getSaloonCategories,
  getCompletedBooking,
  getAllBookingsByUser,
  getSaloonServices,
  getEmployeesBySaloonAndService,
  getHomePageInfo,
  getWallet,
  locationSuggestions,
  forgetPassword,
  addCustomBooking,
  verifyCode,
  resetPassword,
  createEmployeeSocialMediaLink,
  getSaloonsByCategory,
  getCompanyThatEmployeeAdd,
  searchByName,
  getHomeServiceInfo,
  getPrivacyPolicy,
  getCookiePolicy,
  getLegalInfo,
  getAdminSocialLinksForHome,
  getSalonPlains,
  buyPlains,
  getPlains,
  subcribeEmail,
  addCardInfo,
  getFaqs,
  getCardUserInfo,
  getCardMethods,
  addPlansPayment,
  createUpdateTemplate,
  getAllBundle,
  createAllBundles,
  getCompaniesBundle,
  updateBundlePlan,
  getBookingReports,
  getEmployeeeReports,
  googleLogin,
  getCompanyPost,
  deleteCompanyPost,
  getCompanyRatings,
  getEmployeeRatings
};
