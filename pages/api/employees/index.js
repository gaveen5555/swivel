// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import employees from "../../../public/employees.json";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(employees);
  } else if (req.method === "POST") {
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const number = req.body.number;
    const gender = req.body.gender;
    const id = req.body.id;
    const photo = req.body.photo;
    const newEmployee = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      number: number,
      gender: gender,
      id: id,
      photo: photo,
    };
    employees.push(newEmployee);
    res.status(201).json(employees);
  } else if (req.method === "PUT") {
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const number = req.body.number;
    const gender = req.body.gender;
    const id = req.body.id;
    const photo = req.body.photo;
    const updatedEmployee = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      number: number,
      gender: gender,
      id: id,
      photo: photo,
    };
    const employeeCopy = [...employees];
    const targetIndex = employees.findIndex((item) => item.id === id);
    employeeCopy[targetIndex] = updatedEmployee;
    res.status(201).json(employeeCopy);
  } else if (req.method === "DELETE") {
    const id = req.body.id;
    const employeeData = req.body.employeeData;
    const updatedEmployeeData = employeeData.filter((item) => {
      return item.id != id;
    });
    res.status(201).json(updatedEmployeeData);
  }
}
