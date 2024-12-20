import { Http } from "./Http";

export const getCustomers = (config)=>Http.get("/customers", config);
export const getCustomerById = (id, config)=> Http.get(`/customers/${id}`, config);
export const createCustomer = (data) => Http.post("/customers/create", data);
export const deleteCustomer = (id) => Http.delete(`/customers/${id}`, id);

export const getVehicles = (config)=>Http.get(`/vehicles`, config);

