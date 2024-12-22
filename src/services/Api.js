import { Http } from "./Http";

export const getCustomers = (config)=>Http.get("/customers", config);
export const getCustomerById = (id, config)=> Http.get(`/customers/${id}`, config);
export const getCustomerByPhone = (phone) => Http.get(`/customers/phone/${phone}`);
export const createCustomer = (data) => Http.post("/customers/create", data);
export const updateCustomer = (id, data) => Http.put(`/customers/${id}`, data);
export const deleteCustomer = (id) => Http.delete(`/customers/${id}`, id);

export const getVehicles = (config)=>Http.get(`/vehicles`, config);

export const getVehicleTypes = (config)=>Http.get("/vehicle_types", config);
export const getVehicleTypeById = (id) => Http.get(`/vehicle_types/${id}`);
export const createVehicleType = (data) => Http.post("/vehicle_types/create", data);
export const updateVehicleType = (id, data) => Http.put(`/vehicle_types/${id}`, data);
export const deleteVehicleType = (id) => Http.delete(`/vehicle_types/${id}`);

export const getParkings = (config)=>Http.get("/parkings", config);
export const createParking = (data) => Http.post("parkings/create", data);
export const updateParking = (id, data) => Http.put(`parkings/${id}`, data);
export const deleteParking = (id) =>Http.delete(`parkings/${id}`, id);

export const getTickets = (config) => Http.get("/tickets", config);
export const createTicket = (data) => Http.post("/tickets/create", data);





