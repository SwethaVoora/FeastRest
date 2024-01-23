// const createUserInDatabase = async (userData) => {
//   // console.log(userData)
//   const { sub, name, email } = userData;
//   try {
//     const response = await fetch(
//       "https://APIid.execute-api.region.amazonaws.com/test/customers",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           // Add any additional headers if required
//         },
//         body: JSON.stringify({
//           customers: [{ custId: sub, name: name, email: email }],
//         }),
//       }
//     );

//     if (response.ok) {
//       console.log("User created in database successfully");
//     } else {
//       console.error("Error creating user in database:", response.statusText);
//     }
//   } catch (error) {
//     console.error("Error creating user in database:", error.message);
//   }
// };

// export default createUserInDatabase;
