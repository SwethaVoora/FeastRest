import Navbar from "@/components/Navbar";
import "/src/app/globals.css";
import { useRouter } from "next/router";
import ItemCard from "@/components/ItemCard";

// Try to cache the menu items after fetching them

const CategoryMenu = ({ menuItems }) => {
  const router = useRouter();
  const { category } = router.query;
  if (!category) {
    return null;
  } else {
    console.log(category);
    // const { currentCategory } = category;
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
    return (
      <div className="">
        <Navbar />
        <section className="max-w-6xl mx-auto">
          <h2 className="flex justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-brandsecondary m-20">
            {(category + "s").toUpperCase()}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {menuItems
              .filter(
                (element) =>
                  element.Category.toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/[^a-z]\-/g, "") == category
              )
              .map((element) => (
                <ItemCard key={element.ItemId} item={element} />
              ))}
          </div>
        </section>
      </div>
    );
  }
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

export default CategoryMenu;
