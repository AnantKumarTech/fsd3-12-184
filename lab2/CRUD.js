import readline from "readline/promises";
import { stdin, stdout } from "process";
import { readFile, writeFile } from "fs/promises";

const FILE = "product.json";

const getCart = async () => {
  const data = await readFile(FILE, "utf-8");
  return JSON.parse(data);
};

const saveCart = async (myCart) => {
  await writeFile(FILE, JSON.stringify(myCart, null, 2));
};

const addToCart = async (product) => {
  const myCart = await getCart();

  const isFound = myCart.find((item) => item.id === product.id);

  if (isFound) {
    isFound.qty += product.qty;
  } else {
    myCart.push(product);
  }

  await saveCart(myCart);

  console.log(`Product added/updated with id ${product.id} into cart`);
};

const showCart = async () => {
  const data = await getCart();

  console.table(data);

  let total = 0;

  for (let i = 0; i < data.length; i++) {
    total += data[i].price * data[i].qty;
  }

  console.log(`Total: ${total}`);
  console.log("You have to pay:", total);
};

const removeFromCart = async (pid) => {
  const data = await getCart();

  const countData = data.length;

  const newData = data.filter((item) => item.id !== pid);

  const newCount = newData.length;

  if (countData === newCount) {
    console.log(`Product with id ${pid} not found in cart`);
  } else {
    await saveCart(newData);
    console.log(`Product with id ${pid} removed from cart`);
  }
};

const main = async () => {
  let choice;

  const cin = readline.createInterface({
    input: stdin,
    output: stdout,
  });

  do {
    console.log("\nWelcome to Flipkart 🤸");
    console.log("1.......... Show cart");
    console.log("2.......... Add Product");
    console.log("3.......... Remove Product");
    console.log("4.......... Update Quantity");
    console.log("5.......... Checkout");

    choice = await cin.question("Enter your choice: ");

    switch (Number(choice)) {
      case 1:
        await showCart();
        break;

      case 2:
        let data = await cin.question("Enter id,name,price,qty: ");

        const [id, name, price, qty] = data
          .split(",")
          .map((item) => item.trim());

        const product = {
          id: Number(id),
          name,
          price: Number(price),
          qty: Number(qty),
        };

        await addToCart(product);
        break;

      case 3:
        const pid = await cin.question("Enter product id to remove: ");

        await removeFromCart(Number(pid));
        break;

      case 4:
        console.log("Update product quantity");
        break;

      case 5:
        console.log("See you later");
        break;

      default:
        console.log("Invalid choice! Try again 🛑");
    }
  } while (choice != 5);

  cin.close();
};

main();
