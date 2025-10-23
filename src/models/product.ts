import fs from "fs";
import path from "path";

// Define the interface for a product
interface ProductData {
  title: string;
}

// Construct the path to the JSON file
const dataDir = path.join(process.cwd(), "data");
const p: string = path.join(dataDir, "products.json");

// Utility function to get products from file
const getProductsFromFile = (cb: (products: ProductData[]) => void): void => {
  fs.readFile(p, (err, fileContent) => {
    if (err || !fileContent.length) {
      cb([]);
    } else {
      try {
        const data: ProductData[] = JSON.parse(fileContent.toString());
        cb(data);
      } catch (e) {
        cb([]);
      }
    }
  });
};

// Product class
export class Product {
  title: string;

  constructor(t: string) {
    this.title = t;
  }

  save(): void {
    getProductsFromFile((products: ProductData[]) => {
      products.push({ title: this.title });

      //  Ensure the "data" folder exists
      fs.mkdir(dataDir, { recursive: true }, (dirErr) => {
        if (dirErr) {
          console.error("Error creating data directory:", dirErr);
          return;
        }

        // Now safely write the file
        fs.writeFile(p, JSON.stringify(products, null, 2), (err) => {
          if (err) {
            console.error("Error saving product:", err);
          }
        });
      });
    });
  }

  static fetchAll(cb: (products: ProductData[]) => void): void {
    getProductsFromFile(cb);
  }
}
