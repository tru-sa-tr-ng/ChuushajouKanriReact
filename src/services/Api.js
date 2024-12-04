import { Http } from "./Http";

export const getCustomers = (config)=>Http.get("/customers", config);
export const getCustomerById = (id, config)=> Http.get(`/customers/${id}`, config);

export const getVehicles = (config)=>Http.get(`/vehicles`, config);

