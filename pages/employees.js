// // employees.js
// // import EmployeeData from "../components/employeeData";

const EmployeesPage = () => {
  return <div>This is Employees Details Page</div>;
};

export default EmployeesPage;
// const EmployeesPage = ({ employeeData }) => {
//   // Check if employeeData is undefined or not an array
//   if (!employeeData || !Array.isArray(employeeData)) {
//     return <div>No data available</div>;
//   }

//   return (
//     <div className="text-black">
//       {employeeData.map((employee) => (
//         <div key={employee.EmpId}>{employee.Role}</div>
//       ))}
//     </div>
//   );
// };

// export const getServerSideProps = async () => {
//   try {
//     // Fetch data from the API endpoint
//     const response = await fetch(
//       "https://zpdxjxcoc6.execute-api.us-east-2.amazonaws.com/test/employees"
//     );

//     if (!response.ok) {
//       throw new Error(`Failed to fetch data. Status: ${response.status}`);
//     }

//     const data = await response.json();

//     // Return the data as props
//     return {
//       props: {
//         employeeData: data.records || [], // Ensure that employeeData is an array
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching data:", error);

//     // You can handle errors and return an appropriate response if needed
//     return {
//       props: {
//         employeeData: [],
//       },
//     };
//   }
// };

// export default EmployeesPage;
