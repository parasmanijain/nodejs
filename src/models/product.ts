import fs from "fs";
import path from "path";

const getProductsFilePath = (): string => {
  const dataDir = path.join(process.cwd(), "data");

  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  return path.join(dataDir, "products.json");
};

export class Product {
  title: string;

  constructor(title: string) {
    this.title = title;
  }

  save(): void {
    const filePath = getProductsFilePath();
    fs.readFile(filePath, (err, fileContent) => {
      let products: Product[] = [];
      if (!err && fileContent.length > 0) {
        try {
          products = JSON.parse(fileContent.toString());
        } catch (e) {
          console.error("Failed to parse JSON:", e);
        }
      }
      products.push(this);
      fs.writeFile(filePath, JSON.stringify(products, null, 2), (err) => {
        if (err) {
          console.error("Failed to write file:", err);
        }
      });
    });
  }

  static fetchAll(cb: (products: Product[]) => void): void {
    const filePath = getProductsFilePath();
    fs.readFile(filePath, (err, fileContent) => {
      if (err || fileContent.length === 0) {
        cb([]);
        return;
      }
      try {
        const products = JSON.parse(fileContent.toString());
        cb(products);
      } catch (e) {
        console.error("Failed to parse JSON:", e);
        cb([]);
      }
    });
  }
}
