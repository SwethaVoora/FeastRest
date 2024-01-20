import ItemCard from "@/components/ItemCard";
import Image from "next/image";
import "../src/app/globals.css";
import Navbar from "@/components/Navbar";
import { list } from "postcss";

const MenuPage = ({ menuItems }) => {
  // console.log("Before Updating : ", menuItems);
  menuItems = [
    {
      ItemId: 1,
      Name: "Neighborhood Beef Nachos",
      Category: "Appetizer",
      Price: 12.3,
    },
    {
      ItemId: 2,
      Name: "Chicken Wonton Taco",
      Category: "Appetizer",
      Price: 9.6,
    },
    {
      ItemId: 3,
      Name: "Mozzarella Sticks",
      Category: "Appetizer",
      Price: 8.99,
    },
    {
      ItemId: 4,
      Name: "South West Bowl",
      Category: "Maincourse",
      Price: 14.5,
    },
    {
      ItemId: 5,
      Name: "Tex Mex Bowl",
      Category: "Maincourse",
      Price: 12,
    },
    {
      ItemId: 6,
      Name: "Alfredo Chicken Broccoli Pasta",
      Category: "Maincourse",
      Price: 15.99,
    },
    {
      ItemId: 7,
      Name: "Long Island Ice Tea",
      Category: "Alcoholic Drink",
      Price: 7.49,
    },
    {
      ItemId: 8,
      Name: "Pine Colada",
      Category: "Alcoholic Drink",
      Price: 3.49,
    },
    {
      ItemId: 9,
      Name: "Triple Shirley Temple",
      Category: "Non-Alcoholic Drink",
      Price: 5,
    },
    {
      ItemId: 10,
      Name: "Passionfruit Punch",
      Category: "Non-Alcoholic Drink",
      Price: 8.5,
    },
    {
      ItemId: 12,
      Name: "Chicken Tenders and Fries",
      Category: "Maincourse",
      Price: 8.99,
    },
    {
      ItemId: 13,
      Name: "Smokie Brownie",
      Category: "Dessert",
      Price: 4.99,
    },
    {
      ItemId: 14,
      Name: "Redvelvet Cake",
      Category: "Dessert",
      Price: 5.99,
    },
    {
      ItemId: 15,
      Name: "Perfect Margarita",
      Category: "Alcoholic Drink",
      Price: 12.9,
    },
    {
      ItemId: 16,
      Name: "White Peach Sangria",
      Category: "Alcoholic Drink",
      Price: 11.99,
    },
    {
      ItemId: 17,
      Name: "Shark Bowl",
      Category: "Alcoholic Drink",
      Price: 10.59,
    },
    {
      ItemId: 18,
      Name: "Captain Morgan",
      Category: "Alcoholic Drink",
      Price: 12.99,
    },
  ];

  // Create a hashmap to store categories and their items
  const itemsByCategory = {};

  // Populate the hashmap
  menuItems.forEach((item) => {
    const { Category, ...rest } = item;
    if (!itemsByCategory[Category]) {
      itemsByCategory[Category] = [];
    }
    itemsByCategory[Category].push(rest);
  });

  console.log(itemsByCategory);

  // Example function to get items by category
  const getItemsByCategory = (category) => {
    return itemsByCategory[category] || [];
  };

  const categories = [
    "Appetizer",
    "Maincourse",
    "Dessert",
    "Alcoholic Drink",
    "Non-Alcoholic Drink",
  ];
  // console.log(getItemsByCategory("Appetizer"));
  // {
  //   ItemId: 1,
  //   Name: "Neighborhood Beef Nachos",
  //   Category: "Appetizer",
  //   Price: 12.3,
  // },
  // console.log("AFTER Updating : ", menuItems);

  return (
    <div className="">
      <Navbar />
      <div className="max-w-6xl mx-auto">
        {categories.map((category) => (
          <div key={category}>
            <h2 className="text-3xl font-roboto font-bold mt-10 mb-3 flex justify-center text-brand">
              {category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {getItemsByCategory(category).map((item) => (
                <ItemCard key={item.ItemId} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  try {
    // const response = await fetch(
    //   "https://zpdxjxcoc6.execute-api.us-east-2.amazonaws.com/test/menu"
    // );
    const data = await response.json();

    // // Group items by category
    // const menuItemsByCategory = data.records.reduce((acc, item) => {
    //   if (!acc[item.Category]) {
    //     acc[item.Category] = { Category: item.Category, items: [] };
    //   }
    //   acc[item.Category].items.push(item);
    //   return acc;
    // }, {});

    return {
      props: {
        // menuItems: Object.values(menuItemsByCategory),
        menuItems: data.records,
      },
    };
  } catch (error) {
    return {
      props: {
        menuItems: [],
      },
    };
  }
};

export default MenuPage;
// import Image from "next/image";

// const MenuPage = ({ menuItems }) => {
//   console.log(menuItems);
//   return (
//     <div>
//       {menuItems.map((item) => (
//         <div key={item.ItemId}>
//           <Image
//             src="/pic1.jpg"
//             alt="Menu Item Image"
//             width={150}
//             height={150}
//           />
//           <div>{item.Name}</div>
//           <div>{item.Price}</div>
//         </div>
//       ))}
//     </div>
//   );

//   // return <div>This is menu page</div>;
// };

// export const getServerSideProps = async () => {
//   try {
//     const response = await fetch(
//       "https://zpdxjxcoc6.execute-api.us-east-2.amazonaws.com/test/menu"
//     );
//     const data = await response.json();
//     return {
//       props: {
//         menuItems: data.records,
//       },
//     };
//   } catch (error) {
//     return {
//       props: {
//         menuItems: [],
//       },
//     };
//   }
// };
// export default MenuPage;
